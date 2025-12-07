'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, MapPin, Star, Tag } from 'lucide-react';
import { Restaurant } from '@/lib/data/types';
import { formatDeliveryTime, formatDistance, formatPrice } from '@/lib/utils/restaurantUtils';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface RestaurantCardProps {
  restaurant: Restaurant;
  className?: string;
}

export function RestaurantCard({ restaurant, className = '' }: RestaurantCardProps) {
  const hasOffers = restaurant.offers && restaurant.offers.length > 0;

  return (
    <Link href={`/restaurant/${restaurant.slug}`} className="block">
      <Card className={`overflow-hidden hover-lift cursor-pointer transition-all ${className}`}>
        <div className="relative h-48 w-full">
          <Image
            src={restaurant.image}
            alt={restaurant.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {!restaurant.isOpen && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">Closed</span>
            </div>
          )}
          {hasOffers && restaurant.isOpen && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-destructive text-white font-semibold px-3 py-1">
                <Tag className="w-3 h-3 mr-1" />
                {restaurant.offers[0].title}
              </Badge>
            </div>
          )}
          {restaurant.isPureVeg && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-success text-white font-semibold px-2 py-1">
                Pure Veg
              </Badge>
            </div>
          )}
        </div>

        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h3 className="font-semibold text-lg leading-tight mb-1 line-clamp-1">
                {restaurant.name}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-1">
                {restaurant.cuisine.join(', ')}
              </p>
            </div>
            <div className="flex items-center gap-1 bg-success text-white px-2 py-1 rounded-md ml-2 flex-shrink-0">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="text-sm font-semibold">{restaurant.rating}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{formatDeliveryTime(restaurant.deliveryTime)}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{formatDistance(restaurant.distance)}</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm border-t pt-3">
            <span className="text-muted-foreground">
              Min: {formatPrice(restaurant.minimumOrder)}
            </span>
            <span className="text-muted-foreground">
              Delivery: {formatPrice(restaurant.deliveryFee)}
            </span>
          </div>

          {hasOffers && (
            <div className="mt-3 p-2 bg-muted rounded-md">
              <p className="text-xs text-primary font-medium">
                💰 {restaurant.offers[0].description}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
