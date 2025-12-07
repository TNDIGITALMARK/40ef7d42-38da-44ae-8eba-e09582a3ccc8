// ============================================
// TYPE DEFINITIONS FOR INDIAN RESTAURANT APP
// ============================================

export interface Restaurant {
  id: string;
  name: string;
  slug: string;
  image: string;
  cuisine: string[];
  rating: number;
  totalReviews: number;
  deliveryTime: number; // in minutes
  distance: number; // in km
  deliveryFee: number; // in INR
  minimumOrder: number; // in INR
  isOpen: boolean;
  isPureVeg: boolean;
  location: {
    city: string;
    area: string;
    address: string;
  };
  offers?: Offer[];
}

export interface MenuItem {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  price: number; // in INR
  image: string;
  category: string;
  isVeg: boolean;
  isVegan?: boolean;
  spiceLevel?: 'mild' | 'medium' | 'hot' | 'extra-hot';
  isAvailable: boolean;
  customizations?: Customization[];
}

export interface Customization {
  id: string;
  name: string;
  options: CustomizationOption[];
  required: boolean;
  maxSelection?: number;
}

export interface CustomizationOption {
  id: string;
  name: string;
  price: number;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  discountPercent?: number;
  discountAmount?: number;
  minOrderValue: number;
  code?: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  customizations: { [key: string]: string[] };
  totalPrice: number;
}

export interface Order {
  id: string;
  restaurantId: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  taxes: number;
  discount: number;
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'out-for-delivery' | 'delivered' | 'cancelled';
  deliveryAddress: Address;
  paymentMethod: 'upi' | 'card' | 'cash' | 'wallet';
  createdAt: Date;
  estimatedDeliveryTime?: Date;
}

export interface Address {
  id: string;
  label: string; // "Home", "Work", "Other"
  street: string;
  landmark?: string;
  city: string;
  state: string;
  pincode: string;
  phoneNumber: string;
}

export interface Review {
  id: string;
  restaurantId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: Date;
  helpful: number;
}

export type CuisineType =
  | 'North Indian'
  | 'South Indian'
  | 'Chinese'
  | 'Italian'
  | 'Fast Food'
  | 'Punjabi'
  | 'Bengali'
  | 'Gujarati'
  | 'Maharashtrian'
  | 'Rajasthani'
  | 'Seafood'
  | 'Street Food'
  | 'Desserts'
  | 'Bakery';

export type SortOption =
  | 'relevance'
  | 'rating'
  | 'delivery-time'
  | 'cost-low-to-high'
  | 'cost-high-to-low';

export interface FilterOptions {
  cuisines: CuisineType[];
  rating?: number;
  priceRange?: [number, number];
  deliveryTime?: number;
  isVeg?: boolean;
  sortBy: SortOption;
}
