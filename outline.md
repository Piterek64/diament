# DIAMENT DELIVERY - Project Outline

## File Structure
```
/mnt/okcomputer/output/
├── index.html              # Homepage with hero section and main content
├── restaurants.html        # Restaurant partnership page
├── couriers.html          # Courier recruitment page  
├── cities.html            # Cities and locations page
├── contact.html           # Contact and support page
├── main.js               # Main JavaScript file with all interactions
├── resources/            # Media and asset folder
│   ├── hero-background.jpg
│   ├── courier-1.jpg
│   ├── restaurant-1.jpg
│   ├── delivery-app.jpg
│   └── city-map-bg.jpg
├── interaction.md        # Interaction design documentation
├── design.md            # Design style guide
└── outline.md           # This project outline
```

## Page Content Structure

### 1. Homepage (index.html)
**Purpose**: Main landing page showcasing DIAMENT DELIVERY platform
**Sections**:
- Navigation bar with logo and menu
- Hero section with dynamic background and CTA buttons
- Company overview with animated statistics
- How it works - 3-step process visualization
- Benefits grid with interactive hover effects
- Partner testimonials carousel
- Footer with contact info and links

**Interactive Elements**:
- Role selection system (Restaurants/Couriers/Ambassadors)
- Live statistics counter animation
- Gradient text effects on headlines
- Smooth scroll navigation
- Floating CTA buttons

### 2. Restaurants Page (restaurants.html)
**Purpose**: Convince restaurant owners to join the platform
**Sections**:
- Hero section with restaurant-focused messaging
- Benefits comparison table (DIAMENT vs competitors)
- Cost savings calculator
- Success stories from partner restaurants
- Registration form with multi-step process
- FAQ section for restaurant owners

**Interactive Elements**:
- Interactive comparison charts
- Cost calculator with real-time updates
- Multi-step form with validation
- Testimonial slider
- Expandable FAQ accordion

### 3. Couriers Page (couriers.html)
**Purpose**: Attract delivery couriers to the platform
**Sections**:
- Hero section highlighting earning potential
- Earnings calculator with customizable inputs
- Benefits and advantages list
- Application form with personal details
- Success stories from current couriers
- Vehicle requirements and support info

**Interactive Elements**:
- Dynamic earnings calculator
- Interactive benefits showcase
- Application form with file upload
- Success story carousel
- Vehicle type selector

### 4. Cities Page (cities.html)
**Purpose**: Show current and future market coverage
**Sections**:
- Interactive map of Poland with city markers
- Active cities showcase (Kołobrzeg, Zielona Góra)
- Upcoming cities timeline (Szczecin, Gdańsk, Poznań, Kraków, Wrocław)
- City-specific statistics and data
- Expansion plans and investment opportunities
- Local partnership information

**Interactive Elements**:
- Leaflet.js interactive map
- Clickable city markers with details
- Animated timeline for future cities
- Statistics visualization with ECharts
- City selection dropdown

### 5. Contact Page (contact.html)
**Purpose**: Provide multiple contact methods and support
**Sections**:
- Contact form with role selection
- Company information and address
- Phone and email contact details
- Office hours and response times
- FAQ section for common inquiries
- Social media links and newsletter signup

**Interactive Elements**:
- Multi-purpose contact form
- Real-time form validation
- Success/error message handling
- Interactive FAQ accordion
- Social media integration

## Technical Implementation Details

### JavaScript Functionality (main.js)
- **Animation Controller**: Manages all Anime.js animations
- **Form Handler**: Processes all form submissions with validation
- **Map Integration**: Leaflet.js setup and city data management
- **Statistics Counter**: Animated number counting on scroll
- **Role Selection**: Dynamic content switching based on user type
- **Earnings Calculator**: Real-time calculation engine
- **Comparison Charts**: ECharts.js data visualization
- **Smooth Scrolling**: Navigation and scroll effects
- **Mobile Menu**: Responsive navigation handling
- **Lazy Loading**: Image and content optimization

### CSS Framework Integration
- **Tailwind CSS**: Primary styling framework
- **Custom Components**: Branded buttons, cards, and forms
- **Animation Classes**: Reusable animation utilities
- **Responsive Design**: Mobile-first approach
- **Dark Mode Support**: Theme switching capability

### External API Integration
- **Map Data**: City coordinates and information
- **Form Submissions**: Mock endpoints for testing
- **Statistics**: Dynamic data loading
- **Image Optimization**: CDN delivery for assets

## Content Requirements

### Text Content (Polish)
- Professional, energetic tone as specified
- Localized Polish market terminology
- Clear value propositions for each user type
- Trust-building content and testimonials
- Technical specifications and requirements

### Visual Content
- Hero background: Generated city delivery scene
- Restaurant images: Professional kitchen and dining scenes
- Courier images: Modern delivery personnel with bikes/scooters
- App interface mockups: Clean, professional designs
- City landmarks: Polish city identifiers
- Infographics: Process explanations and benefits

### Interactive Data
- City coordinates and statistics
- Earnings calculation formulas
- Comparison data for competitors
- Form validation rules
- Success story content

## Performance Targets
- **Load Time**: Under 3 seconds on 3G
- **Lighthouse Score**: 90+ across all metrics
- **Mobile Responsiveness**: Perfect on all devices
- **Accessibility**: WCAG 2.1 AA compliance
- **SEO**: Optimized meta tags and structure