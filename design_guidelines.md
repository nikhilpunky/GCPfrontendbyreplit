# GrowithCP AI Design Guidelines

## Design Approach
**Reference-Based Approach:** Bolt AI-inspired aesthetic with futuristic, premium feel. The design prioritizes visual impact with flowing gradients, glassmorphism, and smooth animations to convey sophistication and cutting-edge AI technology.

## Core Design Principles
- **Premium Futuristic**: Convey advanced AI technology through polished, high-end visual treatment
- **Liquid Motion**: Flowing gradients and smooth transitions create dynamic, alive interface
- **Glass Depth**: Layered glassmorphism panels add depth and sophistication
- **Minimal Complexity**: Clean, uncluttered layouts that guide user attention

## Color System
- **Primary**: Reddish-maroon liquid gradient (dominant across all surfaces)
- **Secondary**: Matte black finish for contrast and grounding
- **Accents**: Soft glows in maroon tones for depth
- **Glass Effects**: Semi-transparent panels with backdrop blur

## Typography
- **Style**: Modern, clean sans-serif typeface
- **Hierarchy**: Clear distinction between headings and body text
- **Treatment**: Crisp, legible text that contrasts well against gradient backgrounds

## Layout System
**Spacing**: Use Tailwind units of 4, 6, 8, 12, and 16 for consistent rhythm (p-4, p-8, m-12, etc.)

## Background Treatment
- Flowing liquid gradients in maroon-black spectrum
- Soft radial glows creating depth
- Subtle animated movement (very gentle, not distracting)
- Consistent across all pages for brand cohesion

## Component Library

### Navigation Header
- Simple, clean header spanning all pages
- Navigation links: Home, How It Works, Pricing, Why GrowithCP, Contact
- Glass panel treatment with subtle backdrop blur
- Fixed or floating position for accessibility

### Chat Interface (Home Page Only)
**Collapsed State:**
- Single centered floating dialogue box
- Text: "Confused about website needs?"
- Single input field + action button
- Minimal, clean design with slight hover animation
- Glass panel with maroon glow accent

**Expanded State:**
- Smooth animated expansion to full chat interface
- iframe integration (https://giguai.growithcp.live/chat)
- Maintains glass aesthetic during transition
- Expands from center outward with fluid motion
- Duration: 600-800ms for premium feel

### Glass Cards
- Semi-transparent panels with backdrop blur
- Subtle maroon glow borders or shadows
- Used for content sections across all pages
- Consistent padding and border radius
- Layered depth through shadow and blur

### Content Pages Structure

**How It Works Page:**
- Step-by-step process visualization
- Glass cards for each step
- Icons or visual indicators
- Clear progression flow

**Pricing Page:**
- Tiered pricing cards with glass treatment
- Feature comparison lists
- Prominent CTA buttons
- Clear value proposition for each tier

**Why GrowithCP Page:**
- Benefits and differentiators
- Trust indicators (testimonials, stats)
- Glass card layout for key points
- Visual hierarchy emphasizing unique value

**Contact Page:**
- Contact form with glass input fields
- Contact information display
- Optional map or location indicator
- Clear call-to-action

## Animations
- **Chat Expansion**: Smooth 600-800ms transition from collapsed to expanded state
- **Micro-interactions**: Subtle hover effects on buttons and cards
- **Background**: Gentle gradient flow (very subtle, ambient)
- **Page Transitions**: Smooth fade or slide effects between pages
- **Principle**: Animations enhance, never distract

## Interactive Elements
- **Buttons**: Glass treatment with maroon accent, clear hover states
- **Input Fields**: Glass panels with subtle focus glow
- **Cards**: Slight lift on hover with shadow increase
- **Links**: Smooth color transition on hover

## Images
No hero images specified. The design relies on gradient backgrounds and glassmorphism for visual impact. The chat interface serves as the primary focal point on the home page.

## Accessibility
- High contrast text against gradient backgrounds
- Clear focus states for all interactive elements
- Smooth animations respect reduced motion preferences
- Readable font sizes and line heights
- Consistent navigation across all pages

## Key Design Differentiators
- Expandable chat interface as unique homepage interaction
- Bolt AI-inspired maroon-black liquid gradient aesthetic
- Glassmorphism creating premium, layered depth
- Cohesive multi-page experience with consistent theme
- Futuristic feel conveying AI sophistication