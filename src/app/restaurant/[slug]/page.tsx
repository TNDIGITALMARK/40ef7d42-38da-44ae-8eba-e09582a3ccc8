'use client';

import React, { useState, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  ArrowLeft,
  Star,
  Clock,
  MapPin,
  Tag,
  Heart,
  Share2,
  ShoppingCart,
} from 'lucide-react';
import { mockRestaurants, mockReviews } from '@/lib/data/mockRestaurants';
import { mockMenuItems } from '@/lib/data/mockMenuItems';
import { MenuItem } from '@/components/restaurant/MenuItem';
import { MenuItem as MenuItemType } from '@/lib/data/types';
import {
  formatDeliveryTime,
  formatDistance,
  formatPrice,
  groupMenuItemsByCategory,
  calculateCartTotal,
} from '@/lib/utils/restaurantUtils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

interface CartItem {
  item: MenuItemType;
  quantity: number;
}

export default function RestaurantPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [cart, setCart] = useState<CartItem[]>([]);

  const restaurant = mockRestaurants.find((r) => r.slug === slug);
  const menuItems = mockMenuItems.filter((item) => item.restaurantId === restaurant?.id);
  const reviews = mockReviews.filter((review) => review.restaurantId === restaurant?.id);

  const groupedMenuItems = useMemo(
    () => groupMenuItemsByCategory(menuItems),
    [menuItems]
  );

  const cartTotal = useMemo(
    () =>
      calculateCartTotal(
        cart.map((item) => ({ price: item.item.price, quantity: item.quantity }))
      ),
    [cart]
  );

  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Restaurant not found</h1>
          <Button onClick={() => router.push('/restaurants')}>
            Browse Restaurants
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = (item: MenuItemType) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.item.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { item, quantity: 1 }];
    });
  };

  const handleCheckout = () => {
    if (cartItemsCount > 0) {
      router.push('/checkout');
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Share2 className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Restaurant Hero */}
      <div className="relative h-64 md:h-80 w-full">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          className="object-cover"
          priority
        />
        {!restaurant.isOpen && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <Badge variant="destructive" className="text-lg px-4 py-2">
              Currently Closed
            </Badge>
          </div>
        )}
      </div>

      <div className="container mx-auto px-4">
        {/* Restaurant Info */}
        <div className="py-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
              <p className="text-muted-foreground">{restaurant.cuisine.join(', ')}</p>
              <p className="text-sm text-muted-foreground mt-1">
                {restaurant.location.area}, {restaurant.location.city}
              </p>
            </div>
            <div className="flex items-center gap-2 bg-success text-white px-4 py-2 rounded-lg">
              <Star className="w-5 h-5 fill-current" />
              <div className="text-left">
                <div className="font-bold text-lg leading-none">{restaurant.rating}</div>
                <div className="text-xs opacity-90">{restaurant.totalReviews}+ reviews</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span>{formatDeliveryTime(restaurant.deliveryTime)} delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span>{formatDistance(restaurant.distance)} away</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Min order:</span>
              <span className="font-semibold">{formatPrice(restaurant.minimumOrder)}</span>
            </div>
          </div>

          {/* Offers */}
          {restaurant.offers && restaurant.offers.length > 0 && (
            <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
              {restaurant.offers.map((offer) => (
                <Card key={offer.id} className="flex-shrink-0">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Tag className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold text-sm">{offer.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {offer.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        <Separator />

        {/* Tabs: Menu & Reviews */}
        <Tabs defaultValue="menu" className="mt-6">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger
              value="menu"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
            >
              Menu
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
            >
              Reviews ({reviews.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="menu" className="mt-6">
            {Object.entries(groupedMenuItems).map(([category, items]) => (
              <div key={category} className="mb-8">
                <h3 className="text-xl font-bold mb-4">{category}</h3>
                <div className="space-y-4">
                  {items.map((item) => (
                    <MenuItem
                      key={item.id}
                      item={item}
                      onAddToCart={handleAddToCart}
                    />
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-4">
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">
                            {review.userName.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{review.userName}</h4>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-warning text-warning" />
                              <span className="font-semibold">{review.rating}</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {review.comment}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {review.date.toLocaleDateString('en-IN', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  No reviews yet
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Cart Footer */}
      {cartItemsCount > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t shadow-lg z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  {cartItemsCount} {cartItemsCount === 1 ? 'item' : 'items'}
                </p>
                <p className="text-2xl font-bold">{formatPrice(cartTotal)}</p>
              </div>
              <Button
                size="lg"
                onClick={handleCheckout}
                className="bg-primary hover:bg-primary/90"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                View Cart
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
