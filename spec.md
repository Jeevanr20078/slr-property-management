# SLR Property Management

## Current State
New project. No existing pages or backend logic.

## Requested Changes (Diff)

### Add
- Full single-page React website for SLR Property Management Company, Bangalore South
- Sticky navigation with gold "SLR" logo, smooth scroll links, hamburger menu for mobile
- Full-screen hero section with animated background gradient/geometric shapes, bold headline ("25 Years of Trust, 2000+ Happy Families"), two CTA buttons
- About Us section with icons describing 25 years of experience and expertise
- Stats Counter section with animated counters: 25+ Years, 2000+ Clients, 100% Satisfaction, Bangalore South (using Intersection Observer)
- Services section: 4 cards (Residential Buying, Residential Selling, Commercial Buying, Commercial Selling) with hover effects
- Why Choose Us section: Trust, Experience, Local Expertise, Personalized Service with icons
- Testimonials section: 3 sample client testimonials with star ratings
- Contact section: address (No.1309, 9th Cross Road, JP Nagar 1st Phase, Bangalore 560078), phone (9845815783 / 7892406691), contact person (Ravikumar), map placeholder, contact form
- Footer with company info, quick links, social icons
- Floating WhatsApp button linking to 9845815783
- Gold shimmer CSS animation on logo and key headings
- Backend: minimal contact form submission storage (name, email, phone, message)

### Modify
- Nothing (new project)

### Remove
- Nothing

## Implementation Plan
1. Write spec.md (this file)
2. Select no special components (contact form stored in backend via Motoko)
3. Generate Motoko backend with contact inquiry storage
4. Implement React frontend:
   - Import Playfair Display + Inter from Google Fonts
   - Global CSS: navy (#0A1628), gold (#D4A843), white, light gray palette
   - CSS keyframe animations: shimmer, float, fade-in, counter
   - Nav component: sticky, scroll-aware, hamburger on mobile
   - Hero: full-screen, animated geometric SVG shapes, headline, CTA
   - About: story cards with icons
   - Stats: Intersection Observer animated counters
   - Services: 4 hover cards with gradient icon placeholders
   - WhyUs: 4 feature items with icons
   - Testimonials: 3 cards with star ratings
   - Contact: form wired to backend + info sidebar + map placeholder
   - Footer: links, social icons, copyright
   - FloatingWhatsApp: fixed bottom-right button
5. Deploy
