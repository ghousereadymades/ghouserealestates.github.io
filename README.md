# Ghouse Real Estates — ghouserealestates.github.io

Bilingual (English / தமிழ்) real-estate website for properties in and around
Lalpettai and Kattumannarkoil, Cuddalore District. Plain HTML/CSS/JS — no build
step; GitHub Pages serves it directly.

## Features
- One-tap English ⇄ Tamil switch (remembered per visitor)
- Property listings with filters (type, place, budget) and sorting
- Clickable sketch map of Lalpettai, Veeranam Lake side, Kattumannarkoil,
  Omampuliyur, Kumaratchi, Sethiyathope and Chidambaram Road
- Land calculator: cents ⇄ acres ⇄ grounds ⇄ sq.ft ⇄ sq.m ⇄ hectares, with value estimate
- Enquiry form and "sell your land" button that open WhatsApp with a ready message

## Updating the site
Everything you need to edit is in **`assets/data.js`**:
1. Phone, WhatsApp number and email are in `SITE` (email is still a placeholder).
2. Add / edit / remove properties in `LISTINGS` (English + Tamil text for each).
3. Add new villages to `PLACES` if needed.

The listings shipped with the site are **samples** — replace them with real ones.

## Preview locally
```
python3 -m http.server 8000
```
then open http://localhost:8000
