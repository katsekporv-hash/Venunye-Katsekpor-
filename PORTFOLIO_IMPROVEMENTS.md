# Portfolio Website Improvements - AI Task Tracker

## Overview
This document outlines critical improvements to the portfolio website to enhance recruiter experience and technical credibility presentation.

---

## 1. ✅ Revised Bio Section - Lead with Technical Credentials
**Status:** In Progress
**Priority:** HIGH
**File:** `src/component/about.jsx`

### Current State
The About section currently emphasizes full-stack development first, then transitions to cybersecurity.

### Required Changes
- **Reorder the about cards** to lead with **Cybersecurity credentials first** (CTF experience, hands-on labs)
- Then showcase **Full-Stack Development** experience
- Finally, show **Tools & Concepts**
- Remove or minimize any non-technical background references
- **Lead sentence should immediately signal:** Security expertise with hands-on CTF/lab experience

### Key Points to Highlight
- CTF Challenges: Mr. Robot (VulnHub), Spring Boot SSRF, Flask SSTI, Docker Escape
- Full-stack projects with security-first design
- Real hands-on experience with Kali Linux, nmap, gobuster, etc.

### Implementation Notes
- Restructure card order in about.jsx component array
- Ensure typography emphasizes technical skills first
- Verify brand colors are applied consistently

---

## 2. 🎨 Apply Consistent Brand Colors (Navy/Green)
**Status:** In Progress
**Priority:** HIGH
**Files:** `src/App.css`, `src/component/styles/*.css`

### Current State
Current accent colors: blue, green, orange, pink (in App.css)
Default accent: `blue` (`#1f6feb`)

### Required Changes
- **Update default accent to green** (navy alternative available)
- **Ensure all sections use consistent navy/green palette:**
  - About cards
  - Project cards
  - Service cards
  - CTA buttons
  - Border accents
  - Typography highlights

### CSS Variables to Update
```css
:root[data-accent='blue'] {
  --accent: #1f6feb;      /* Current blue */
  --accent-2: #1158d8;    /* Update to navy */
}

:root[data-accent='green'] {
  --accent: #178f5f;      /* Keep green */
  --accent-2: #0d744a;    /* Dark green */
}
```

### Sections to Audit
- About section cards
- Project cards (project.css)
- Service cards (services.css)
- Button states and hover effects
- Border and accent colors throughout

---

## 3. 📸 Add Professional Photo to About/Bio Section
**Status:** Blocked (Waiting for Photo)
**Priority:** HIGH
**File:** `src/component/about.jsx`, `src/assets/`

### Current State
- About section has a placeholder or no image
- Professional photo not yet added

### Required Changes
- **Add professional photo to About section**
- **Location:** Display prominently in the About/Bio intro area
- **Asset storage:** Place in `src/assets/` directory
- **Responsive design:** Ensure proper sizing and display on mobile/desktop

### Implementation Details
- Add image element to about.jsx component
- Style with CSS (border-radius, shadow, sizing)
- Ensure proper aspect ratio and optimization
- Update alt text for accessibility

### Action Items
- [ ] Receive professional photo file
- [ ] Optimize image for web (compress, modern format)
- [ ] Add to src/assets/
- [ ] Update about.jsx with image element
- [ ] Style with consistent brand colors

---

## 4. 📝 Standardize Typography Across All Sections
**Status:** In Progress
**Priority:** MEDIUM
**Files:** `src/App.css`, `src/component/styles/*.css`

### Current State
- Typography may vary between sections
- Inconsistent heading sizes, font weights, line heights
- Spacing inconsistencies between bio and portfolio sections

### Required Changes
- **Standardize heading hierarchy (H1, H2, H3, H4)**
- **Consistent font weights:**
  - Normal body: 400
  - Section titles: 600-700
  - Eyebrow text: 700
- **Line heights:**
  - Headings: 1.2-1.3
  - Body text: 1.6-1.8
  - Captions: 1.4
- **Margin & padding consistency:**
  - Section spacing: uniform
  - Card padding: consistent across types
  - Text bottom margins: standardized

### Audit Checklist
- [ ] About section typography
- [ ] Project section typography
- [ ] Service cards typography
- [ ] Skills section typography
- [ ] Timeline typography
- [ ] Contact section typography
- [ ] Button text sizing

### CSS Best Practice
Define shared typography classes or CSS variables:
```css
--font-size-h1: clamp(2rem, 3vw, 3.5rem);
--font-size-h2: clamp(1.5rem, 2.2vw, 2.5rem);
--font-size-h3: clamp(1.25rem, 1.8vw, 1.75rem);
--font-weight-regular: 400;
--font-weight-medium: 600;
--font-weight-bold: 700;
--line-height-tight: 1.2;
--line-height-normal: 1.6;
```

---

## 5. 🎥 Create Elevator Pitch Video Section
**Status:** New Feature
**Priority:** HIGH
**Files:** `src/component/elevator-pitch.jsx` (new), `src/component/styles/elevator-pitch.css` (new), `src/App.jsx`

### Elevator Pitch Video Details
- **Video Link:** https://drive.google.com/file/d/13jOeaBSJop6ElDy_l0cECiaTaKdwpCXC/view?usp=drivesdk
- **Display Type:** Embedded/Responsive video player
- **Position:** After Intro section, before About (or after About - TBD based on flow)

### Required Implementation
1. **Create new component:** `src/component/elevator-pitch.jsx`
   - Display video with professional styling
   - Add title/description
   - Responsive layout (mobile & desktop)
   - Accessible video controls

2. **Create styles:** `src/component/styles/elevator-pitch.css`
   - Consistent with brand colors (navy/green)
   - Video container sizing (16:9 aspect ratio)
   - Mobile responsiveness
   - Shadow and border styling

3. **Update App.jsx:**
   - Import ElevatorPitch component
   - Add to component hierarchy (position in page flow)

### Component Structure
```jsx
<section className="section elevator-pitch" id="video">
  <p className="eyebrow">Quick Overview</p>
  <h2 className="elevator-pitch-title">About Me in 60 Seconds</h2>
  
  <div className="video-container">
    {/* Google Drive video embed or player */}
  </div>
  
  <p className="video-description">
    "Quick overview of my background, skills, and what I'm looking for in my next role."
  </p>
</section>
```

### Video Embedding Options
- Option A: Google Drive embedded player
- Option B: Custom HTML5 video with proxy/stream
- Option C: Link to video with play button thumbnail

### Styling Requirements
- Maintain consistent brand colors (navy/green accents)
- Professional rounded corners with shadow
- Responsive sizing for all screen sizes
- Proper spacing and typography alignment

---

## Implementation Priority & Timeline

| Priority | Task | Status |
|----------|------|--------|
| 1 | Bio Section - Technical Credentials First | In Progress |
| 2 | Consistent Brand Colors (Navy/Green) | In Progress |
| 3 | Professional Photo in About | Blocked (Photo needed) |
| 4 | Elevator Pitch Video Section | Not Started |
| 5 | Standardize Typography | In Progress |

---

## Recruiter Impact
These changes will:
- ✅ **Immediately signal technical credibility** with cybersecurity expertise front-and-center
- ✅ **Create cohesive professional impression** through consistent branding
- ✅ **Build trust** with professional photo and personal video
- ✅ **Enhance readability** through consistent typography
- ✅ **Increase engagement** through multimedia content

---

## Notes
- All changes should maintain responsive design
- Ensure accessibility (alt text, semantic HTML, color contrast)
- Test across multiple browsers and devices
- Preserve existing functionality while enhancing design

---

**Last Updated:** 2026-05-19
**Status:** Ready for Implementation
