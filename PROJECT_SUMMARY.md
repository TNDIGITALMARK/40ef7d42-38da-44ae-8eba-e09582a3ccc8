# FoodIndia - Restaurant Discovery & Ordering Platform

## Overview
A comprehensive restaurant discovery and food ordering platform designed specifically for India's diverse culinary landscape, connecting customers with local restaurants across all major cities.

## Features Implemented

### 🎨 Design System
- **Color Palette**: Warm, food-focused colors inspired by Indian cuisine
  - Saffron Orange (Primary): `hsl(25 95% 53%)`
  - Curry Yellow (Secondary): `hsl(45 93% 58%)`
  - Mint Green (Accent): `hsl(145 60% 55%)`
- **Typography**: Inter for body text, Poppins for headings
- **Mobile-First**: Fully responsive design optimized for smartphones

### 📄 Pages

#### 1. Homepage (`/`)
- Hero section with search functionality
- Feature highlights (Pan India coverage, Fast Delivery, Great Offers, Quality Food)
- Top-rated restaurants showcase
- Fast delivery restaurants section
- Call-to-action sections

#### 2. Restaurant Discovery (`/restaurants`)
- Advanced search with real-time filtering
- Filter by cuisines, ratings, delivery time
- Sort options (relevance, rating, delivery time, cost)
- Restaurant cards with ratings, delivery time, distance, offers
- Quick filter badges (Top Rated, Fast Delivery, Pure Veg, cuisines)

#### 3. Restaurant Profile (`/restaurant/[slug]`)
- Restaurant details with images, ratings, location
- Menu organized by categories
- Add to cart functionality
- Customer reviews section
- Special offers display
- Veg/non-veg indicators
- Spice level indicators

#### 4. Checkout (`/checkout`)
- Multiple delivery address management
- Payment method selection:
  - UPI (GPay, PhonePe, Paytm)
  - Credit/Debit Card
  - Digital Wallets
  - Cash on Delivery
- Promo code application
- Order summary with itemized breakdown
- Tax calculation (5% GST)

#### 5. Order Tracking (`/orders/[orderId]`)
- Real-time order status tracking
- Visual progress indicator (Confirmed → Preparing → Out for Delivery → Delivered)
- Estimated delivery time
- Restaurant contact information
- Delivery address confirmation
- Order details and payment summary

### 🧩 Reusable Components

#### RestaurantCard
- Restaurant image with closed overlay
- Rating display with star icon
- Delivery time and distance
- Offers badge
- Pure veg indicator
- Minimum order and delivery fee

#### MenuItem
- Food image with veg/non-veg indicator
- Spice level visualization
- Price display
- Add to cart button
- Customization indicator
- Availability status

#### SearchBar
- Location display
- Restaurant/cuisine search
- Expandable filter panel
- Sort options dropdown
- Cuisine filter badges
- Active filters display

#### OrderTracker
- Step-by-step progress visualization
- Status icons (Check, Chef, Truck, Package)
- Current step highlighting
- Estimated delivery time
- Cancellation status handling

### 📊 Mock Data

#### Restaurants (8 featured locations)
- Spice Garden (Mumbai) - North Indian, Punjabi
- South Indian Express (Bangalore) - South Indian
- Punjabi Dhaba (Delhi) - Punjabi, North Indian
- Coastal Kitchen (Goa) - Seafood, Goan
- Street Food Corner (Kolkata) - Street Food, Bengali
- Gujarati Thali House (Ahmedabad) - Gujarati, Rajasthani
- Biryani Palace (Hyderabad) - Biryani, Hyderabadi
- Pizza Express (Pune) - Italian, Fast Food

#### Menu Items (18+ dishes)
- Butter Chicken Combo, Paneer Tikka, Dal Makhani
- Masala Dosa Special, Idli Vada Combo, Filter Coffee
- Tandoori Chicken, Chole Bhature, Sweet Lassi
- Goan Fish Curry, Prawn Balchao
- Gujarati Thali Unlimited, Dhokla
- Chicken Biryani Family Pack, Veg Biryani
- Margherita Pizza, Pasta Arrabbiata

### 🛠️ Utility Functions
- `filterRestaurants`: Filter by cuisine, rating, delivery time, price range
- `sortRestaurants`: Sort by relevance, rating, delivery time, cost
- `searchRestaurants`: Search by name, cuisine, or area
- `formatPrice`: Indian Rupee formatting
- `formatDeliveryTime`: Human-readable time format
- `calculateOrderTotal`: Subtotal, delivery, taxes, discount calculation
- `getSpiceLevelEmoji`: Visual spice indicators
- `getVegIndicator`: Veg/non-veg symbols

### 🎯 Technical Stack
- **Framework**: Next.js 15.5 with React 19
- **Styling**: Tailwind CSS 4 with custom design system
- **UI Components**: Radix UI primitives
- **TypeScript**: Full type safety
- **Icons**: Lucide React

### 🚀 Key Features
- Mobile-first responsive design
- Touch-friendly UI elements (44px minimum tap targets)
- Real-time search and filtering
- Order tracking with visual progress
- Multiple payment options
- Promo code support
- Multi-address management
- Review system
- Offer/discount display

### 📱 Mobile Optimization
- Responsive font sizes (15px base on mobile)
- Touch-friendly buttons and inputs
- Swipe-optimized restaurant cards
- Thumb-friendly navigation
- Adaptive layouts for different screen sizes

### 🌐 India-Specific Features
- INR currency formatting with ₹ symbol
- UPI payment integration ready
- Pan-India city coverage
- Regional cuisine categorization
- Hindi/English language support ready
- Multiple address management (Home, Work, Other)

## File Structure
```
src/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── restaurants/page.tsx        # Restaurant discovery
│   ├── restaurant/[slug]/page.tsx  # Restaurant profile
│   ├── checkout/page.tsx           # Checkout page
│   ├── orders/[orderId]/page.tsx   # Order tracking
│   ├── globals.css                 # Global styles & design system
│   └── layout.tsx                  # Root layout
├── components/
│   └── restaurant/
│       ├── RestaurantCard.tsx      # Restaurant card component
│       ├── MenuItem.tsx            # Menu item component
│       ├── SearchBar.tsx           # Search & filter component
│       └── OrderTracker.tsx        # Order tracking component
└── lib/
    ├── data/
    │   ├── types.ts                # TypeScript interfaces
    │   ├── mockRestaurants.ts      # Restaurant mock data
    │   └── mockMenuItems.ts        # Menu items mock data
    └── utils/
        └── restaurantUtils.ts      # Utility functions
```

## Design Highlights
- Warm color palette inspired by Indian spices (saffron, curry, mint)
- Clear visual hierarchy with Poppins headings
- Generous spacing for easy touch interaction
- High-contrast text for readability
- Appetizing food imagery
- Subtle shadows for depth
- Smooth animations and transitions

## Future Enhancement Ready
- Backend API integration points identified
- Database schema considerations documented
- Real-time location detection placeholder
- Multi-language support infrastructure
- Restaurant partner dashboard framework
- Advanced AI recommendations foundation
