import { FormEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Activity, ArrowLeft, BarChart3, BookOpen, Check, ChevronRight, Image as ImageIcon,
  LayoutDashboard, Loader2, LogOut, Plus, Quote, Save, ShieldCheck, Trash2, UploadCloud, X,
} from 'lucide-react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { Session } from '@supabase/supabase-js';
import { isSupabaseConfigured, supabase } from '../lib/supabase';

type QuoteRow = { id: string; quote: string; source: string; citation: string; note: string; is_published: boolean; sort_order: number };
type GalleryRow = { id: string; storage_path: string; caption: string; alt_text: string; is_published: boolean; sort_order: number };
type BlogRow = { id: string; slug: string; title: string; excerpt: string; body: string; cover_image_path: string | null; is_published: boolean; published_at: string | null };
type EventRow = { id: number; visitor_id: string; page_path: string; referrer: string; created_at: string };
type Tab = 'overview' | 'analytics' | 'gallery' | 'quotes' | 'blog' | 'content';

const navItems: { id: Tab; label: string; icon: typeof LayoutDashboard }[] = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'gallery', label: 'Gallery', icon: ImageIcon },
  { id: 'quotes', label: 'Legal quotes', icon: Quote },
  { id: 'blog', label: 'Insights', icon: BookOpen },
  { id: 'content', label: 'Site content', icon: Activity },
];

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const [showReset, setShowReset] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (!supabase) return;
    setBusy(true); setMessage('');
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    if (error) setMessage('Sign-in failed. Check your credentials or contact the site administrator.');
    setBusy(false);
  };

  const reset = async () => {
    if (!supabase || !email.trim()) { setMessage('Enter your admin email first.'); return; }
    setBusy(true); setMessage('');
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: window.location.origin + '/admin',
    });
    setMessage(error ? 'Password reset could not be requested. Contact the administrator.' : 'If the address is authorised, a password reset email has been sent.');
    setBusy(false);
  };

  return (
    <main className="min-h-screen bg-[#080808] text-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gold-400 mb-10"><ArrowLeft size={16}/> Back to website</Link>
        <div className="border border-gold-800/30 bg-[#101010] rounded-2xl p-7 sm:p-9 shadow-2xl">
          <div className="w-12 h-12 rounded-xl border border-gold-500/30 bg-gold-500/10 flex items-center justify-center mb-6"><ShieldCheck className="text-gold-400" size={24}/></div>
          <p className="text-gold-400 text-xs uppercase tracking-[0.2em] mb-2">Restricted access</p>
          <h1 className="font-playfair text-3xl font-semibold mb-2">Firm administration</h1>
          <p className="text-gray-400 text-sm leading-relaxed mb-7">Sign in with an authorised administrator account. Access is checked against the firm’s private admin register.</p>
          {!isSupabaseConfigured && <p className="text-amber-300 text-sm mb-4">Admin services are not connected yet. Site configuration is required.</p>}
          <form onSubmit={submit} className="space-y-4">
            <label className="block text-sm text-gray-300">Email address<input required type="email" autoComplete="username" value={email} onChange={e=>setEmail(e.target.value)} className="mt-2 w-full rounded-lg bg-black border border-white/10 px-4 py-3 outline-none focus:border-gold-500" /></label>
            <label className="block text-sm text-gray-300">Password<input required type="password" autoComplete="current-password" value={password} onChange={e=>setPassword(e.target.value)} className="mt-2 w-full rounded-lg bg-black border border-white/10 px-4 py-3 outline-none focus:border-gold-500" /></label>
            {message && <p role="status" className="text-sm text-amber-300">{message}</p>}
            <button disabled={busy || !isSupabaseConfigured} className="w-full rounded-lg bg-gradient-to-r from-gold-500 to-gold-600 text-black font-semibold py-3 disabled:opacity-50">{busy ? 'Please wait…' : 'Secure sign in'}</button>
          </form>
          <button onClick={()=>setShowReset(v=>!v)} className="text-xs text-gray-500 hover:text-gold-400 mt-5">{showReset ? 'Hide password recovery' : 'Forgot password?'}</button>
          {showReset && <button onClick={reset} disabled={busy} className="block text-sm text-gold-400 mt-3">Send password reset email</button>}
          <p className="text-[11px] text-gray-600 mt-7 border-t border-white/5 pt-5">No public registration is available. Knowing this URL does not grant access.</p>
        </div>
      </div>
    </main>
  );
}

function Stat({ label, value, detail }: { label: string; value: string | number; detail: string }) {
  return <div className="rounded-xl border border-white/8 bg-[#111] p-5"><p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p><p className="text-3xl font-semibold text-white mt-3 tabular-nums">{value}</p><p className="text-xs text-gray-600 mt-2">{detail}</p></div>;
}

export default function Admin() {
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);
  const [checking, setChecking] = useState(true);
  const [authorised, setAuthorised] = useState(false);
  const [tab, setTab] = useState<Tab>('overview');
  const [quotes, setQuotes] = useState<QuoteRow[]>([]);
  const [gallery, setGallery] = useState<GalleryRow[]>([]);
  const [posts, setPosts] = useState<BlogRow[]>([]);
  const [events, setEvents] = useState<EventRow[]>([]);
  const [contentKey, setContentKey] = useState('announcement');
  const [contentValue, setContentValue] = useState('{"enabled": false, "title": "", "message": ""}');
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState('');
  const [quoteDraft, setQuoteDraft] = useState<Partial<QuoteRow> | null>(null);
  const [postDraft, setPostDraft] = useState<Partial<BlogRow> | null>(null);
  const [uploading, setUploading] = useState(false);
  const [range, setRange] = useState(7);

  const verify = useCallback(async (current: Session | null) => {
    setSession(current);
    if (!current || !supabase) { setAuthorised(false); setChecking(false); return; }
    const { data, error } = await supabase.from('admin_users').select('user_id').eq('user_id', current.user.id).maybeSingle();
    if (error || !data) {
      setAuthorised(false);
      await supabase.auth.signOut();
    } else setAuthorised(true);
    setChecking(false);
  }, []);

  useEffect(() => {
    if (!supabase) { setChecking(false); return; }
    supabase.auth.getSession().then(({ data }) => verify(data.session));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, next) => { void verify(next); });
    return () => listener.subscription.unsubscribe();
  }, [verify]);

  const loadData = useCallback(async () => {
    if (!supabase || !authorised) return;
    setLoading(true); setNotice('');
    const [q, g, b, a] = await Promise.all([
      supabase.from('legal_quotes').select('*').order('sort_order').order('created_at', { ascending: false }),
      supabase.from('gallery_images').select('*').order('sort_order').order('created_at', { ascending: false }),
      supabase.from('blog_posts').select('*').order('created_at', { ascending: false }),
      supabase.from('analytics_events').select('*').gte('created_at', new Date(Date.now() - 30*86400000).toISOString()).order('created_at', { ascending: false }).limit(10000),
    ]);
    if (q.error || g.error || b.error || a.error) setNotice('Some dashboard data could not be loaded. Refresh and check the connection.');
    setQuotes((q.data || []) as QuoteRow[]); setGallery((g.data || []) as GalleryRow[]);
    setPosts((b.data || []) as BlogRow[]); setEvents((a.data || []) as EventRow[]);
    setLoading(false);
  }, [authorised]);

  useEffect(() => { void loadData(); }, [loadData]);

  const signOut = async () => { await supabase?.auth.signOut(); navigate('/admin', { replace: true }); };

  const filteredEvents = useMemo(() => events.filter(e => new Date(e.created_at).getTime() >= Date.now() - range*86400000), [events, range]);
  const uniqueVisitors = new Set(filteredEvents.map(e=>e.visitor_id)).size;
  const pageViews = filteredEvents.length;
  const publishedPosts = posts.filter(p=>p.is_published).length;
  const chartData = useMemo(() => {
    const days = Array.from({length: range}, (_, i) => {
      const date = new Date(); date.setHours(0,0,0,0); date.setDate(date.getDate() - (range - 1 - i));
      const key = date.toISOString().slice(0,10);
      return { date: date.toLocaleDateString('en', {month:'short', day:'numeric'}), key, views: 0 };
    });
    filteredEvents.forEach(e => { const d = new Date(e.created_at).toISOString().slice(0,10); const row = days.find(x=>x.key===d); if(row) row.views++; });
    return days;
  }, [filteredEvents, range]);
  const topPages = useMemo(() => Object.entries(filteredEvents.reduce<Record<string,number>>((acc,e)=>{acc[e.page_path]=(acc[e.page_path]||0)+1;return acc;},{})).sort((a,b)=>b[1]-a[1]).slice(0,5), [filteredEvents]);
  const topSources = useMemo(() => Object.entries(filteredEvents.reduce<Record<string,number>>((acc,e)=>{if(e.referrer){try{const host=new URL(e.referrer).hostname;acc[host]=(acc[host]||0)+1;}catch{}}return acc;},{})).sort((a,b)=>b[1]-a[1]).slice(0,5), [filteredEvents]);

  const saveQuote = async (e: FormEvent) => {
    e.preventDefault(); if(!supabase || !quoteDraft) return;
    const payload = { quote: quoteDraft.quote, source: quoteDraft.source, citation: quoteDraft.citation || '', note: quoteDraft.note || '', is_published: quoteDraft.is_published ?? true, sort_order: quoteDraft.sort_order ?? 0 };
    const result = quoteDraft.id ? await supabase.from('legal_quotes').update(payload).eq('id', quoteDraft.id) : await supabase.from('legal_quotes').insert(payload);
    if(result.error) setNotice(result.error.message); else {setQuoteDraft(null);setNotice('Legal quote saved.');void loadData();}
  };

  const deleteQuote = async (id:string) => { if(!supabase || !window.confirm('Permanently delete this quote?')) return; const {error}=await supabase.from('legal_quotes').delete().eq('id',id);setNotice(error?.message || 'Quote deleted.');void loadData(); };

  const uploadImage = async (file?: File) => {
    if(!supabase || !file) return;
    if(!['image/jpeg','image/png','image/webp','image/avif'].includes(file.type) || file.size > 8*1024*1024){setNotice('Choose a JPG, PNG, WebP or AVIF image under 8 MB.');return;}
    setUploading(true);
    const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
    const path = `${crypto.randomUUID()}.${ext}`;
    const {error: uploadError}=await supabase.storage.from('law-firm-gallery').upload(path,file,{upsert:false,contentType:file.type});
    if(uploadError){setNotice(uploadError.message);setUploading(false);return;}
    const {error:rowError}=await supabase.from('gallery_images').insert({storage_path:path,caption:file.name.replace(/\.[^.]+$/,''),alt_text:file.name.replace(/\.[^.]+$/,''),sort_order:gallery.length});
    if(rowError){await supabase.storage.from('law-firm-gallery').remove([path]);setNotice(rowError.message);} else {setNotice('Image uploaded.');void loadData();}
    setUploading(false);
  };

  const deleteImage = async (item:GalleryRow) => {
    if(!supabase || !window.confirm('Delete this gallery image permanently?')) return;
    const {error:rowError}=await supabase.from('gallery_images').delete().eq('id',item.id);
    if(rowError){setNotice(rowError.message);return;}
    const {error:storageError}=await supabase.storage.from('law-firm-gallery').remove([item.storage_path]);
    setNotice(storageError ? 'Gallery entry removed; stored file cleanup needs attention.' : 'Image deleted.');
    void loadData();
  };

  const savePost = async (e:FormEvent) => {
    e.preventDefault();if(!supabase||!postDraft)return;
    const slug=(postDraft.slug||'').trim().toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
    const payload={slug,title:postDraft.title,excerpt:postDraft.excerpt||'',body:postDraft.body||'',is_published:postDraft.is_published??false,published_at:postDraft.is_published?(postDraft.published_at||new Date().toISOString()):null};
    const result=postDraft.id?await supabase.from('blog_posts').update(payload).eq('id',postDraft.id):await supabase.from('blog_posts').insert(payload);
    if(result.error)setNotice(result.error.message);else{setPostDraft(null);setNotice('Article saved.');void loadData();}
  };
  const deletePost=async(id:string)=>{if(!supabase||!window.confirm('Delete this article?'))return;const{error}=await supabase.from('blog_posts').delete().eq('id',id);setNotice(error?.message||'Article deleted.');void loadData();};

  const loadContent = async () => { if(!supabase)return;const{data,error}=await supabase.from('site_content').select('content_value').eq('content_key',contentKey).maybeSingle();if(error){setNotice(error.message);return;}setContentValue(JSON.stringify(data?.content_value??{},null,2)); };
  const saveContent = async () => {if(!supabase)return;try{const parsed=JSON.parse(contentValue);const{error}=await supabase.from('site_content').upsert({content_key:contentKey,content_value:parsed,updated_at:new Date().toISOString()});setNotice(error?.message||'Site content saved.');}catch{setNotice('The content must be valid JSON.');}};

  if(checking) return <div className="min-h-screen bg-[#080808] text-gold-400 flex items-center justify-center"><Loader2 className="animate-spin mr-3"/> Verifying secure access…</div>;
  if(!authorised) return <LoginScreen/>;

  const imageUrl=(path:string)=>supabase?.storage.from('law-firm-gallery').getPublicUrl(path).data.publicUrl || '';

  return (
    <div className="min-h-screen bg-[#080808] text-white flex">
      <aside className="hidden lg:flex w-64 shrink-0 border-r border-white/8 bg-[#0d0d0d] p-5 flex-col">
        <div className="mb-10 px-2"><p className="font-playfair text-xl">UGOO UZOHO <span className="text-gold-400">&</span> COMPANY</p><p className="text-[10px] tracking-[0.2em] text-gray-500 mt-1">ADMINISTRATION</p></div>
        <nav className="space-y-1">{navItems.map(item=><button key={item.id} onClick={()=>setTab(item.id)} className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm text-left transition ${tab===item.id?'bg-gold-500/10 text-gold-300 border border-gold-500/20':'text-gray-400 hover:bg-white/5 hover:text-white'}`}><item.icon size={17}/>{item.label}</button>)}</nav>
        <div className="mt-auto border-t border-white/8 pt-5"><p className="text-xs text-gray-600 truncate mb-3">{session?.user.email}</p><button onClick={signOut} className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-300"><LogOut size={16}/> Sign out</button></div>
      </aside>
      <main className="min-w-0 flex-1">
        <header className="sticky top-0 z-20 bg-[#080808]/90 backdrop-blur border-b border-white/8 px-4 sm:px-7 py-4 flex items-center justify-between">
          <div><p className="text-xs text-gray-500">Secure administration</p><h1 className="font-playfair text-xl sm:text-2xl capitalize">{tab==='blog'?'Insights':tab==='quotes'?'Legal quotes':tab}</h1></div>
          <div className="flex items-center gap-3"><Link to="/" className="hidden sm:inline-flex text-xs text-gray-400 hover:text-gold-400 items-center gap-1"><ArrowLeft size={14}/> View website</Link><button onClick={()=>void loadData()} className="text-xs border border-white/10 rounded-lg px-3 py-2 text-gray-300 hover:border-gold-500/40">Refresh</button><button onClick={signOut} className="lg:hidden p-2 text-gray-400"><LogOut size={18}/></button></div>
        </header>
        <nav className="lg:hidden flex gap-2 overflow-x-auto border-b border-white/8 px-3 py-3">{navItems.map(item=><button key={item.id} onClick={()=>setTab(item.id)} className={`shrink-0 px-3 py-2 rounded-lg text-xs ${tab===item.id?'bg-gold-500/15 text-gold-300':'text-gray-400 bg-white/5'}`}>{item.label}</button>)}</nav>
        <div className="p-4 sm:p-7 max-w-7xl mx-auto">
          {notice&&<div role="status" className="mb-5 flex items-center justify-between gap-3 rounded-lg border border-gold-500/20 bg-gold-500/5 px-4 py-3 text-sm text-gold-200">{notice}<button onClick={()=>setNotice('')}><X size={16}/></button></div>}
          {loading&&<p className="text-xs text-gray-600 mb-4">Updating dashboard…</p>}
          {tab==='overview'&&<section className="space-y-7"><div><p className="text-gray-400 text-sm">A clear view of the firm’s digital presence and website content.</p></div><div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4"><Stat label="Page views · 30 days" value={events.length} detail="Tracked public page visits"/><Stat label="Unique sessions · 30 days" value={new Set(events.map(e=>e.visitor_id)).size} detail="Session-based visitor estimate"/><Stat label="Gallery images" value={gallery.length} detail={`${gallery.filter(x=>x.is_published).length} currently published`}/><Stat label="Published articles" value={publishedPosts} detail={`${quotes.length} legal quotes stored`}/></div><div className="grid xl:grid-cols-2 gap-5"><div className="rounded-xl border border-white/8 bg-[#101010] p-5"><div className="flex justify-between items-center mb-5"><h2 className="font-medium">Traffic overview</h2><button onClick={()=>setTab('analytics')} className="text-xs text-gold-400">View analytics <ChevronRight size={13} className="inline"/></button></div><div className="h-56">{chartData.some(x=>x.views>0)?<ResponsiveContainer width="100%" height="100%"><AreaChart data={chartData}><defs><linearGradient id="trafficGold" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#d4a843" stopOpacity={.3}/><stop offset="100%" stopColor="#d4a843" stopOpacity={0}/></linearGradient></defs><CartesianGrid stroke="#242424" vertical={false}/><XAxis dataKey="date" tick={{fill:'#777',fontSize:11}} axisLine={false} tickLine={false}/><YAxis allowDecimals={false} tick={{fill:'#777',fontSize:11}} axisLine={false} tickLine={false}/><Tooltip contentStyle={{background:'#111',border:'1px solid #444',borderRadius:8}}/><Area type="monotone" dataKey="views" stroke="#d4a843" fill="url(#trafficGold)"/></AreaChart></ResponsiveContainer>:<div className="h-full flex items-center justify-center text-sm text-gray-600">Traffic data will appear as visitors browse the website.</div>}</div></div><div className="rounded-xl border border-white/8 bg-[#101010] p-5"><h2 className="font-medium mb-4">Content activity</h2><div className="space-y-4">{[{label:'Legal quotes',value:quotes.length},{label:'Gallery images',value:gallery.length},{label:'Blog articles',value:posts.length},{label:'Published articles',value:publishedPosts}].map(x=><div key={x.label} className="flex items-center justify-between border-b border-white/5 pb-3"><span className="text-sm text-gray-400">{x.label}</span><span className="text-sm text-white tabular-nums">{x.value}</span></div>)}</div></div></div></section>}
          {tab==='analytics'&&<section className="space-y-6"><div className="flex flex-wrap items-center justify-between gap-3"><p className="text-sm text-gray-400">First-party page-view tracking. Visitor counts are session-based estimates.</p><select value={range} onChange={e=>setRange(Number(e.target.value))} className="bg-[#141414] border border-white/10 rounded-lg px-3 py-2 text-sm"><option value={7}>Last 7 days</option><option value={14}>Last 14 days</option><option value={30}>Last 30 days</option></select></div><div className="grid sm:grid-cols-2 gap-4"><Stat label="Page views" value={pageViews} detail={`Last ${range} days`}/><Stat label="Unique sessions" value={uniqueVisitors} detail="One visitor ID per browser session"/></div><div className="rounded-xl border border-white/8 bg-[#101010] p-5"><h2 className="mb-5 font-medium">Visits over time</h2><div className="h-72">{chartData.some(x=>x.views>0)?<ResponsiveContainer width="100%" height="100%"><AreaChart data={chartData}><defs><linearGradient id="analyticsGold" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#d4a843" stopOpacity={.3}/><stop offset="100%" stopColor="#d4a843" stopOpacity={0}/></linearGradient></defs><CartesianGrid stroke="#242424" vertical={false}/><XAxis dataKey="date" tick={{fill:'#777',fontSize:11}} axisLine={false} tickLine={false}/><YAxis allowDecimals={false} tick={{fill:'#777',fontSize:11}} axisLine={false} tickLine={false}/><Tooltip contentStyle={{background:'#111',border:'1px solid #444',borderRadius:8}}/><Area type="monotone" dataKey="views" stroke="#d4a843" fill="url(#analyticsGold)"/></AreaChart></ResponsiveContainer>:<div className="h-full flex items-center justify-center text-gray-600 text-sm">No tracked visits in this period yet.</div>}</div></div><div className="grid lg:grid-cols-2 gap-5"><div className="rounded-xl border border-white/8 bg-[#101010] p-5"><h2 className="font-medium mb-4">Most visited pages</h2>{topPages.length?topPages.map(([name,count])=><div key={name} className="flex justify-between py-3 border-b border-white/5 text-sm"><span className="text-gray-400">{name}</span><b>{count}</b></div>):<p className="text-sm text-gray-600">No page data yet.</p>}</div><div className="rounded-xl border border-white/8 bg-[#101010] p-5"><h2 className="font-medium mb-4">Referral sources</h2>{topSources.length?topSources.map(([name,count])=><div key={name} className="flex justify-between py-3 border-b border-white/5 text-sm"><span className="text-gray-400">{name}</span><b>{count}</b></div>):<p className="text-sm text-gray-600">No external referral data yet.</p>}</div></div><p className="text-xs text-gray-600">Country, device and broader geographic reports remain available in Vercel Analytics. This custom panel does not currently import Vercel’s private analytics API.</p></section>}
          {tab==='gallery'&&<section className="space-y-5"><div className="flex flex-wrap justify-between items-center gap-3"><div><h2 className="text-lg">Gallery library</h2><p className="text-xs text-gray-500 mt-1">JPG, PNG, WebP or AVIF · maximum 8 MB per image</p></div><label className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-4 py-2.5 text-sm font-semibold text-black cursor-pointer">{uploading?<Loader2 className="animate-spin" size={16}/>:<UploadCloud size={16}/>} {uploading?'Uploading…':'Upload image'}<input type="file" accept="image/jpeg,image/png,image/webp,image/avif" className="hidden" disabled={uploading} onChange={e=>{void uploadImage(e.target.files?.[0]);e.currentTarget.value='';}}/></label></div><div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">{gallery.map(item=><div key={item.id} className="rounded-xl overflow-hidden border border-white/10 bg-[#111]"><img src={imageUrl(item.storage_path)} alt={item.alt_text||item.caption} className="w-full aspect-[4/3] object-cover"/><div className="p-3"><p className="text-sm truncate">{item.caption||'Untitled image'}</p><div className="flex justify-between items-center mt-3"><span className={`text-[10px] uppercase ${item.is_published?'text-emerald-400':'text-gray-500'}`}>{item.is_published?'Published':'Hidden'}</span><button onClick={()=>void deleteImage(item)} className="text-gray-500 hover:text-red-400 p-1" aria-label="Delete image"><Trash2 size={15}/></button></div></div></div>)}</div>{!gallery.length&&<p className="text-sm text-gray-600 py-10 text-center">No new images have been added through the admin dashboard yet.</p>}</section>}
          {tab==='quotes'&&<section className="space-y-5"><div className="flex justify-between items-center"><div><h2 className="text-lg">Legal Quote of the Day</h2><p className="text-xs text-gray-500 mt-1">Manage the quotes displayed on the homepage.</p></div><button onClick={()=>setQuoteDraft({is_published:true,sort_order:quotes.length})} className="inline-flex gap-2 items-center bg-gold-500 text-black rounded-lg px-4 py-2 text-sm font-semibold"><Plus size={16}/> Add quote</button></div>{quoteDraft&&<form onSubmit={saveQuote} className="rounded-xl border border-gold-500/20 bg-[#111] p-5 space-y-3"><textarea required minLength={10} value={quoteDraft.quote||''} onChange={e=>setQuoteDraft({...quoteDraft,quote:e.target.value})} placeholder="Enter the legal quote" className="w-full min-h-28 bg-black border border-white/10 rounded-lg p-3 text-sm"/><div className="grid sm:grid-cols-2 gap-3"><input required value={quoteDraft.source||''} onChange={e=>setQuoteDraft({...quoteDraft,source:e.target.value})} placeholder="Case / authority" className="bg-black border border-white/10 rounded-lg p-3 text-sm"/><input value={quoteDraft.citation||''} onChange={e=>setQuoteDraft({...quoteDraft,citation:e.target.value})} placeholder="Citation" className="bg-black border border-white/10 rounded-lg p-3 text-sm"/></div><input value={quoteDraft.note||''} onChange={e=>setQuoteDraft({...quoteDraft,note:e.target.value})} placeholder="Optional note" className="w-full bg-black border border-white/10 rounded-lg p-3 text-sm"/><label className="flex gap-2 items-center text-sm text-gray-400"><input type="checkbox" checked={quoteDraft.is_published??true} onChange={e=>setQuoteDraft({...quoteDraft,is_published:e.target.checked})}/> Publish quote</label><div className="flex gap-2"><button className="bg-gold-500 text-black rounded-lg px-4 py-2 text-sm font-semibold"><Save size={14} className="inline mr-1"/> Save quote</button><button type="button" onClick={()=>setQuoteDraft(null)} className="border border-white/10 rounded-lg px-4 py-2 text-sm">Cancel</button></div></form>}{quotes.map(q=><div key={q.id} className="rounded-xl border border-white/8 bg-[#111] p-5"><p className="font-playfair text-lg leading-relaxed">“{q.quote}”</p><p className="text-gold-400 text-sm mt-3">{q.source}</p><p className="text-gray-600 text-xs mt-1">{q.citation}</p><div className="flex justify-between mt-4 pt-3 border-t border-white/5"><span className="text-xs text-gray-500">{q.is_published?'Published':'Hidden'}</span><div className="flex gap-3"><button onClick={()=>setQuoteDraft(q)} className="text-xs text-gold-400">Edit</button><button onClick={()=>void deleteQuote(q.id)} className="text-xs text-red-400">Delete</button></div></div></div>)}</section>}
          {tab==='blog'&&<section className="space-y-5"><div className="flex justify-between items-center"><div><h2 className="text-lg">Legal insights</h2><p className="text-xs text-gray-500 mt-1">Draft and publish articles for the public website.</p></div><button onClick={()=>setPostDraft({is_published:false})} className="inline-flex gap-2 items-center bg-gold-500 text-black rounded-lg px-4 py-2 text-sm font-semibold"><Plus size={16}/> New article</button></div>{postDraft&&<form onSubmit={savePost} className="rounded-xl border border-gold-500/20 bg-[#111] p-5 space-y-3"><input required minLength={3} value={postDraft.title||''} onChange={e=>setPostDraft({...postDraft,title:e.target.value,slug:(postDraft.slug||'').length?postDraft.slug:e.target.value.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')})} placeholder="Article title" className="w-full bg-black border border-white/10 rounded-lg p-3 text-sm"/><input required value={postDraft.slug||''} onChange={e=>setPostDraft({...postDraft,slug:e.target.value})} placeholder="article-url-slug" className="w-full bg-black border border-white/10 rounded-lg p-3 text-sm"/><textarea value={postDraft.excerpt||''} onChange={e=>setPostDraft({...postDraft,excerpt:e.target.value})} placeholder="Short summary" className="w-full min-h-20 bg-black border border-white/10 rounded-lg p-3 text-sm"/><textarea value={postDraft.body||''} onChange={e=>setPostDraft({...postDraft,body:e.target.value})} placeholder="Article body (plain text; separate paragraphs with blank lines)" className="w-full min-h-48 bg-black border border-white/10 rounded-lg p-3 text-sm"/><label className="flex gap-2 items-center text-sm text-gray-400"><input type="checkbox" checked={postDraft.is_published??false} onChange={e=>setPostDraft({...postDraft,is_published:e.target.checked})}/> Publish article</label><div className="flex gap-2"><button className="bg-gold-500 text-black rounded-lg px-4 py-2 text-sm font-semibold"><Save size={14} className="inline mr-1"/> Save article</button><button type="button" onClick={()=>setPostDraft(null)} className="border border-white/10 rounded-lg px-4 py-2 text-sm">Cancel</button></div></form>}{posts.map(p=><div key={p.id} className="rounded-xl border border-white/8 bg-[#111] p-4 flex justify-between gap-4"><div className="min-w-0"><p className="font-medium truncate">{p.title}</p><p className="text-xs text-gray-600 mt-1">/blog/{p.slug} · {p.is_published?'Published':'Draft'}</p></div><div className="flex gap-3 shrink-0"><button onClick={()=>setPostDraft(p)} className="text-xs text-gold-400">Edit</button><button onClick={()=>void deletePost(p.id)} className="text-xs text-red-400">Delete</button></div></div>)}</section>}
          {tab==='content'&&<section className="max-w-3xl space-y-5"><div><h2 className="text-lg">Flexible site content</h2><p className="text-xs text-gray-500 mt-1">Store structured content for future homepage sections and announcements. Public display requires a matching frontend section.</p></div><label className="block text-sm text-gray-300">Content key<input value={contentKey} onChange={e=>setContentKey(e.target.value)} className="mt-2 w-full bg-black border border-white/10 rounded-lg p-3"/></label><button onClick={()=>void loadContent()} className="text-sm text-gold-400">Load saved content</button><textarea value={contentValue} onChange={e=>setContentValue(e.target.value)} spellCheck={false} className="w-full min-h-72 font-mono text-xs bg-black border border-white/10 rounded-lg p-4"/><button onClick={()=>void saveContent()} className="bg-gold-500 text-black rounded-lg px-4 py-2 text-sm font-semibold"><Save size={14} className="inline mr-1"/> Save JSON content</button></section>}
        </div>
      </main>
    </div>
  );
}
