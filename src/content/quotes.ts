export interface LegalQuote {
  quote: string;
  source: string;     // e.g. "Hassan v. E.F.C.C."
  citation: string;   // e.g. "(2014) 1 NWLR (Pt. 1389) 607"
  note?: string;      // optional extra detail, e.g. page/paragraph reference
}

/**
 * LEGAL QUOTE OF THE DAY
 *
 * The homepage shows ONE quote per day, rotating automatically through this list.
 * The site never shows the same quote two days in a row unless there is only one quote.
 *
 * HOW TO ADD A NEW QUOTE:
 * 1. Add an object to the array below:
 *    { quote: '...', source: 'Case Name v. Party', citation: '(Year) Vol NWLR (Pt. XXX) XXX', note: 'optional' }
 * 2. Commit and push — done. The rotation picks it up automatically.
 */
export const quotes: LegalQuote[] = [
  {
    quote: 'No court has the power to stop the investigative powers of the Police or EFCC or any agency established under our laws to investigate crimes where there is reasonable suspicion of commission of a crime or ample evidence of commission of an offence by a suspect.',
    source: 'Hassan v. E.F.C.C.',
    citation: '(2014) 1 NWLR (Pt. 1389) 607',
    note: 'P. 631, para. G — On whether court can interfere with investigative powers of Police or EFCC',
  },
];
