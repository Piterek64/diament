# DIAMENT DELIVERY - Interaction Design

## Interactive Components Overview

### 1. Dynamic Role Selection System
**Location**: Hero section of homepage
**Functionality**: Three interactive CTA buttons that transform the page content based on user type:
- "Dla restauracji 🍽️" - Shows restaurant-focused content and benefits
- "Dla kurierów 🚴‍♂️" - Displays courier advantages and earnings calculator
- "Zostań ambasadorem miasta 💎" - Reveals franchise opportunities and investment info

**Interaction Flow**: 
- Click button → Smooth content transition with fade animation → Relevant information slides in → Sticky CTA remains active

### 2. Live Statistics Counter
**Location**: Homepage benefits section
**Functionality**: Animated counters that increment in real-time:
- "3500+ dostaw miesięcznie" - Counts up from 0 to 3500
- "30+ restauracji partnerskich" - Increments to 30+
- "2 miasta i rośniemy dalej" - Shows expansion progress

**Interaction Flow**: 
- Page load → Counters start animation → Numbers increment smoothly → Final values display with "+" symbol

### 3. Interactive City Map
**Location**: Cities page
**Functionality**: Clickable map of Poland with:
- Active cities marked with animated pins (Kołobrzeg, Zielona Góra)
- Upcoming cities with different pin style (Szczecin, Gdańsk, Poznań, Kraków, Wrocław)
- Hover effects show city names and launch dates
- Click on city reveals local statistics and restaurant count

**Interaction Flow**: 
- Hover over city pin → Tooltip appears with info → Click → Detailed city panel slides in → Close button returns to map view

### 4. Multi-Step Registration Forms
**Location**: Restaurants, Couriers, and Ambassador pages
**Functionality**: Progressive form completion with:
- Step-by-step validation
- Real-time field feedback
- Progress indicator
- Smooth transitions between steps
- Success confirmation with next steps information

**Interaction Flow**: 
- Fill form field → Real-time validation → Progress bar updates → Next step button → Continue until completion → Success message

### 5. Earnings Calculator
**Location**: Couriers page
**Functionality**: Interactive calculator where couriers can estimate their potential earnings:
- Slider for hours worked per day
- Dropdown for vehicle type (bike, scooter, car)
- Checkboxes for peak hours
- Real-time calculation display
- Comparison with competitor platforms

**Interaction Flow**: 
- Adjust sliders/inputs → Real-time calculation update → Earnings display animates → Comparison chart updates

### 6. Restaurant Benefits Comparison
**Location**: Restaurants page
**Functionality**: Interactive comparison table showing DIAMENT vs competitors:
- Toggle between different service levels
- Animated bar charts showing cost savings
- Hover effects reveal detailed breakdowns
- Testimonial carousel from partner restaurants

**Interaction Flow**: 
- Click comparison toggle → Chart animations → Hover for details → Read testimonials → CTA to join

## User Experience Flows

### Primary User Journeys:

1. **Restaurant Owner Journey**:
   Land on homepage → Click "Dla restauracji" → View benefits → Use comparison tool → Fill registration form → Receive confirmation

2. **Courier Journey**:
   Land on homepage → Click "Dla kurierów" → Check earnings calculator → View advantages → Fill application form → Get approval details

3. **Ambassador/Franchise Journey**:
   Land on homepage → Click "Zostań ambasadorem" → Review investment info → Check city availability → Contact form → Schedule meeting

4. **General Information Seeker**:
   Land on homepage → Browse how it works → Check active cities → Contact for more info → Subscribe to updates

## Technical Implementation Notes:
- All forms use progressive enhancement with JavaScript validation
- Map uses Leaflet.js for interactivity
- Animations powered by Anime.js for smooth transitions
- Counters use Intersection Observer API for scroll-triggered animation
- Forms submit to mock endpoints with success feedback
- All interactive elements have hover and focus states for accessibility