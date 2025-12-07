// ============================================
// UTILITY FUNCTIONS FOR RESTAURANT APP
// ============================================

import { Restaurant, MenuItem, FilterOptions, SortOption } from '../data/types';

/**
 * Filter restaurants based on user preferences
 */
export function filterRestaurants(
  restaurants: Restaurant[],
  filters: Partial<FilterOptions>
): Restaurant[] {
  let filtered = [...restaurants];

  // Filter by cuisines
  if (filters.cuisines && filters.cuisines.length > 0) {
    filtered = filtered.filter((restaurant) =>
      restaurant.cuisine.some((cuisine) => filters.cuisines!.includes(cuisine as any))
    );
  }

  // Filter by rating
  if (filters.rating) {
    filtered = filtered.filter((restaurant) => restaurant.rating >= filters.rating!);
  }

  // Filter by vegetarian only
  if (filters.isVeg) {
    filtered = filtered.filter((restaurant) => restaurant.isPureVeg);
  }

  // Filter by delivery time
  if (filters.deliveryTime) {
    filtered = filtered.filter((restaurant) => restaurant.deliveryTime <= filters.deliveryTime!);
  }

  // Filter by price range (based on minimum order)
  if (filters.priceRange) {
    filtered = filtered.filter(
      (restaurant) =>
        restaurant.minimumOrder >= filters.priceRange![0] &&
        restaurant.minimumOrder <= filters.priceRange![1]
    );
  }

  return filtered;
}

/**
 * Sort restaurants based on selected option
 */
export function sortRestaurants(
  restaurants: Restaurant[],
  sortBy: SortOption
): Restaurant[] {
  const sorted = [...restaurants];

  switch (sortBy) {
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);

    case 'delivery-time':
      return sorted.sort((a, b) => a.deliveryTime - b.deliveryTime);

    case 'cost-low-to-high':
      return sorted.sort((a, b) => a.minimumOrder - b.minimumOrder);

    case 'cost-high-to-low':
      return sorted.sort((a, b) => b.minimumOrder - a.minimumOrder);

    case 'relevance':
    default:
      // Sort by a combination of rating and delivery time
      return sorted.sort((a, b) => {
        const scoreA = a.rating * 10 - a.deliveryTime / 10;
        const scoreB = b.rating * 10 - b.deliveryTime / 10;
        return scoreB - scoreA;
      });
  }
}

/**
 * Get menu items for a specific restaurant
 */
export function getMenuItemsByRestaurant(
  menuItems: MenuItem[],
  restaurantId: string
): MenuItem[] {
  return menuItems.filter((item) => item.restaurantId === restaurantId);
}

/**
 * Group menu items by category
 */
export function groupMenuItemsByCategory(
  menuItems: MenuItem[]
): Record<string, MenuItem[]> {
  return menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);
}

/**
 * Calculate estimated delivery time based on current time
 */
export function getEstimatedDeliveryTime(deliveryMinutes: number): Date {
  const now = new Date();
  now.setMinutes(now.getMinutes() + deliveryMinutes);
  return now;
}

/**
 * Format delivery time for display
 */
export function formatDeliveryTime(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} mins`;
  }
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
}

/**
 * Format price in Indian Rupees
 */
export function formatPrice(price: number): string {
  return `₹${price.toLocaleString('en-IN')}`;
}

/**
 * Format distance for display
 */
export function formatDistance(km: number): string {
  if (km < 1) {
    return `${Math.round(km * 1000)}m`;
  }
  return `${km.toFixed(1)}km`;
}

/**
 * Calculate cart total
 */
export function calculateCartTotal(items: { price: number; quantity: number }[]): number {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

/**
 * Calculate taxes (5% GST)
 */
export function calculateTax(subtotal: number): number {
  return Math.round(subtotal * 0.05);
}

/**
 * Calculate final order total
 */
export function calculateOrderTotal(
  subtotal: number,
  deliveryFee: number,
  discount: number = 0
): {
  subtotal: number;
  deliveryFee: number;
  taxes: number;
  discount: number;
  total: number;
} {
  const taxes = calculateTax(subtotal);
  const total = subtotal + deliveryFee + taxes - discount;

  return {
    subtotal,
    deliveryFee,
    taxes,
    discount,
    total: Math.max(0, total),
  };
}

/**
 * Simulate real-time location detection
 */
export function detectUserLocation(): Promise<{
  city: string;
  area: string;
  lat: number;
  lng: number;
}> {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock location - can be replaced with actual geolocation API
      resolve({
        city: 'Mumbai',
        area: 'Andheri West',
        lat: 19.135,
        lng: 72.8358,
      });
    }, 1000);
  });
}

/**
 * Search restaurants by name or cuisine
 */
export function searchRestaurants(
  restaurants: Restaurant[],
  query: string
): Restaurant[] {
  const lowercaseQuery = query.toLowerCase().trim();

  if (!lowercaseQuery) {
    return restaurants;
  }

  return restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(lowercaseQuery) ||
      restaurant.cuisine.some((cuisine) => cuisine.toLowerCase().includes(lowercaseQuery)) ||
      restaurant.location.area.toLowerCase().includes(lowercaseQuery)
  );
}

/**
 * Get popular cuisines from restaurants list
 */
export function getPopularCuisines(restaurants: Restaurant[]): string[] {
  const cuisineCount = new Map<string, number>();

  restaurants.forEach((restaurant) => {
    restaurant.cuisine.forEach((cuisine) => {
      cuisineCount.set(cuisine, (cuisineCount.get(cuisine) || 0) + 1);
    });
  });

  return Array.from(cuisineCount.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([cuisine]) => cuisine);
}

/**
 * Check if restaurant is currently open (mock implementation)
 */
export function isRestaurantOpen(restaurant: Restaurant): boolean {
  // In a real app, this would check against opening hours
  return restaurant.isOpen;
}

/**
 * Generate random order ID
 */
export function generateOrderId(): string {
  return `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
}

/**
 * Format date and time for display
 */
export function formatDateTime(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  return new Intl.DateTimeFormat('en-IN', options).format(date);
}

/**
 * Get spice level emoji
 */
export function getSpiceLevelEmoji(level?: string): string {
  switch (level) {
    case 'mild':
      return '🌶️';
    case 'medium':
      return '🌶️🌶️';
    case 'hot':
      return '🌶️🌶️🌶️';
    case 'extra-hot':
      return '🌶️🌶️🌶️🌶️';
    default:
      return '';
  }
}

/**
 * Get veg/non-veg indicator
 */
export function getVegIndicator(isVeg: boolean): {
  color: string;
  symbol: string;
  label: string;
} {
  return isVeg
    ? { color: 'green', symbol: '●', label: 'Veg' }
    : { color: 'red', symbol: '●', label: 'Non-Veg' };
}
