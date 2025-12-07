'use client';

import React from 'react';
import Link from 'next/link';
import { Search, MapPin, Star, Clock, Tag, TrendingUp, ChefHat } from 'lucide-react';
import { RestaurantCard } from '@/components/restaurant/RestaurantCard';
import { mockRestaurants } from '@/lib/data/mockRestaurants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function HomePage() {
  const topRatedRestaurants = mockRestaurants
    .filter((r) => r.rating >= 4.5)
    .slice(0, 3);

  const fastDeliveryRestaurants = mockRestaurants
    .filter((r) => r.deliveryTime <= 25)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-saffron text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ChefHat className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">FoodIndia</h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Discover Authentic Restaurants Pan India
          </p>

          {/* Hero Search */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-2 shadow-lg">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1 flex items-center gap-2 px-3">
                  <Search className="w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search restaurants or cuisines..."
                    className="border-0 focus-visible:ring-0 text-foreground"
                  />
                </div>
                <Link href="/restaurants" className="w-full md:w-auto">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                    Search
                  </Button>
                </Link>
              </div>
            </div>

            {/* Popular Cuisines */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 cursor-pointer">
                🍛 North Indian
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 cursor-pointer">
                🥘 South Indian
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 cursor-pointer">
                🍕 Italian
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 cursor-pointer">
                🍜 Chinese
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 cursor-pointer">
                🐟 Seafood
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Pan India Coverage</h3>
                <p className="text-sm text-muted-foreground">
                  Restaurants across all major cities and towns
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Quick delivery from your favorite restaurants
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tag className="w-6 h-6 text-success" />
                </div>
                <h3 className="font-semibold mb-2">Great Offers</h3>
                <p className="text-sm text-muted-foreground">
                  Exclusive deals and discounts on orders
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-warning" />
                </div>
                <h3 className="font-semibold mb-2">Quality Food</h3>
                <p className="text-sm text-muted-foreground">
                  Authentic cuisines from verified restaurants
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Top Rated Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-warning fill-warning" />
              <h2 className="text-2xl font-bold">Top Rated Restaurants</h2>
            </div>
            <Link href="/restaurants">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topRatedRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </section>

      {/* Fast Delivery Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">Fast Delivery Near You</h2>
            </div>
            <Link href="/restaurants">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fastDeliveryRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 gradient-fresh text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-xl mb-8 text-white/90">
            Explore thousands of restaurants and order your favorite food
          </p>
          <Link href="/restaurants">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Browse Restaurants
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 FoodIndia. Discover authentic restaurants across India.
          </p>
          <div className="flex justify-center gap-6 mt-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary">
              About Us
            </Link>
            <Link href="#" className="hover:text-primary">
              Contact
            </Link>
            <Link href="#" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
