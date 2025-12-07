'use client';

import React from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';
import { MenuItem as MenuItemType } from '@/lib/data/types';
import { formatPrice, getSpiceLevelEmoji, getVegIndicator } from '@/lib/utils/restaurantUtils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface MenuItemProps {
  item: MenuItemType;
  onAddToCart: (item: MenuItemType) => void;
  className?: string;
}

export function MenuItem({ item, onAddToCart, className = '' }: MenuItemProps) {
  const vegIndicator = getVegIndicator(item.isVeg);
  const spiceEmoji = getSpiceLevelEmoji(item.spiceLevel);

  return (
    <div className={`flex gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow ${className}`}>
      <div className="flex-1">
        <div className="flex items-start gap-2 mb-2">
          <div
            className={`w-4 h-4 border-2 flex items-center justify-center mt-1 flex-shrink-0`}
            style={{ borderColor: vegIndicator.color }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: vegIndicator.color }}
            />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-base leading-tight mb-1">{item.name}</h4>
            {item.isVegan && (
              <Badge variant="outline" className="text-xs mr-2">
                Vegan
              </Badge>
            )}
            {spiceEmoji && (
              <span className="text-sm mr-2" title={`Spice level: ${item.spiceLevel}`}>
                {spiceEmoji}
              </span>
            )}
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-bold text-lg text-foreground">
            {formatPrice(item.price)}
          </span>

          {item.isAvailable ? (
            <Button
              onClick={() => onAddToCart(item)}
              size="sm"
              className="bg-primary hover:bg-primary/90"
            >
              <Plus className="w-4 h-4 mr-1" />
              Add
            </Button>
          ) : (
            <Badge variant="secondary">Not Available</Badge>
          )}
        </div>

        {item.customizations && item.customizations.length > 0 && (
          <p className="text-xs text-muted-foreground mt-2">
            Customizable
          </p>
        )}
      </div>

      {item.image && (
        <div className="relative w-28 h-28 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            sizes="112px"
          />
        </div>
      )}
    </div>
  );
}
