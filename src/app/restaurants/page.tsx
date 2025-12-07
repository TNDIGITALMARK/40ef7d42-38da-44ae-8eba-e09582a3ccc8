'use client';

import React, { useState, useMemo } from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { RestaurantCard } from '@/components/restaurant/RestaurantCard';
import { SearchBar } from '@/components/restaurant/SearchBar';
import { mockRestaurants } from '@/lib/data/mockRestaurants';
import {
  filterRestaurants,
  sortRestaurants,
  searchRestaurants,
  getPopularCuisines,
} from '@/lib/utils/restaurantUtils';
import { CuisineType, SortOption } from '@/lib/data/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function RestaurantsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('relevance');
  const [selectedCuisines, setSelectedCuisines] = useState<CuisineType[]>([]);

  const popularCuisines = useMemo(() => getPopularCuisines(mockRestaurants), []);

  const handleCuisineToggle = (cuisine: CuisineType) => {
    setSelectedCuisines((prev) =>
      prev.includes(cuisine)
        ? prev.filter((c) => c !== cuisine)
        : [...prev, cuisine]
    );
  };

  const filteredAndSortedRestaurants = useMemo(() => {
    let results = mockRestaurants;

    // Apply search
    if (searchQuery.trim()) {
      results = searchRestaurants(results, searchQuery);
    }

    // Apply filters
    if (selectedCuisines.length > 0) {
      results = filterRestaurants(results, { cuisines: selectedCuisines });
    }

    // Apply sorting
    results = sortRestaurants(results, sortBy);

    return results;
  }, [searchQuery, selectedCuisines, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold">Discover Restaurants</h1>
              <p className="text-sm text-muted-foreground">
                {filteredAndSortedRestaurants.length} restaurants found
              </p>
            </div>
          </div>

          <SearchBar
            onSearch={setSearchQuery}
            onSortChange={setSortBy}
            onCuisineToggle={handleCuisineToggle}
            selectedCuisines={selectedCuisines}
            popularCuisines={popularCuisines}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Quick Filters */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold">Popular Right Now</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
              onClick={() => {
                const filtered = filterRestaurants(mockRestaurants, { rating: 4.5 });
                if (filtered.length > 0) setSortBy('rating');
              }}
            >
              ⭐ Top Rated
            </Badge>
            <Badge
              variant="outline"
              className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
              onClick={() => setSortBy('delivery-time')}
            >
              ⚡ Fast Delivery
            </Badge>
            <Badge
              variant="outline"
              className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
              onClick={() => {
                const vegRestaurants = mockRestaurants.filter(r => r.isPureVeg);
                if (vegRestaurants.length > 0) {
                  setSelectedCuisines([]);
                }
              }}
            >
              🌱 Pure Veg
            </Badge>
            <Badge
              variant="outline"
              className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
              onClick={() => handleCuisineToggle('North Indian')}
            >
              🍛 North Indian
            </Badge>
            <Badge
              variant="outline"
              className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
              onClick={() => handleCuisineToggle('South Indian')}
            >
              🥘 South Indian
            </Badge>
          </div>
        </div>

        {/* Restaurant Grid */}
        {filteredAndSortedRestaurants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🔍</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">No restaurants found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters or search query
            </p>
            <Button
              onClick={() => {
                setSearchQuery('');
                setSelectedCuisines([]);
                setSortBy('relevance');
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}
