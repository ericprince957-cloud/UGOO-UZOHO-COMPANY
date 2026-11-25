# Public website CMS content keys

Create these keys in the private admin app under **Site content**. Values must be valid JSON objects. Fields omitted from a value keep the public website's existing built-in wording.

## homepage.hero

```json
{
  "eyebrow": "Since 1993 — Trusted Legal Practice",
  "headline1": "Trusted Legal Excellence.",
  "headline2": "Justice Service Delivered",
  "headline3": "with Integrity.",
  "description": "Operating in Oyigbo, Port Harcourt, and across Nigeria, providing trusted legal services and representation since 1993.",
  "ctaLabel": "Set Up NDA Meeting"
}
```

## homepage.about

```json
{
  "principalName": "Ugochukwu Emeka Uzoho",
  "principalAlias": "(aka Ugoo Uzoho)",
  "credentials": "Called to Nigerian Bar in December 1993. Active and uninterrupted Law Practice since.",
  "mission": "At UGOO UZOHO & COMPANY, our mission is to provide trusted, comprehensive legal services.",
  "commitment": "We are committed to delivering justice with integrity and strategic legal counsel."
}
```

## homepage.practice_areas

```json
{
  "items": [
    "Company And Corporate Matters",
    "Civil Litigations And Criminal Actions",
    "Contract Review"
  ]
}
```

Only add these records when the firm is ready to manage the corresponding wording from the admin app. Until then, the original website copy remains the fallback. The existing static gallery and blog content are also retained as fallbacks; published CMS gallery images are appended to the legacy gallery, while published CMS blog posts replace the fallback list once at least one is published.
