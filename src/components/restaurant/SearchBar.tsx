'use client';

import React, { useState } from 'react';
import { Search, MapPin, SlidersHorizontal, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { CuisineType, SortOption } from '@/lib/data/types';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onLocationChange?: (location: string) => void;
  onSortChange: (sort: SortOption) => void;
  onCuisineToggle: (cuisine: CuisineType) => void;
  selectedCuisines: CuisineType[];
  popularCuisines: string[];
  currentLocation?: string;
  className?: string;
}

export function SearchBar({
  onSearch,
  onLocationChange,
  onSortChange,
  onCuisineToggle,
  selectedCuisines,
  popularCuisines,
  currentLocation = 'Mumbai, Andheri West',
  className = '',
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    onSearch('');
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Location and Search */}
      <div className="flex flex-col md:flex-row gap-3">
        {/* Location */}
        <div className="flex items-center gap-2 px-4 py-3 bg-card border rounded-lg md:w-64">
          <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground">Delivering to</p>
            <p className="text-sm font-medium truncate">{currentLocation}</p>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search for restaurants, cuisines, or dishes..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-12 pr-12 h-[52px] text-base"
          />
          {searchQuery && (
            <button
              onClick={handleClearSearch}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Filters Toggle */}
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="h-[52px] px-6"
        >
          <SlidersHorizontal className="w-5 h-5 mr-2" />
          Filters
        </Button>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="p-4 bg-muted rounded-lg space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Filters</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowFilters(false)}
            >
              Close
            </Button>
          </div>

          {/* Sort By */}
          <div>
            <label className="text-sm font-medium mb-2 block">Sort By</label>
            <Select onValueChange={(value) => onSortChange(value as SortOption)}>
              <SelectTrigger>
                <SelectValue placeholder="Relevance" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="delivery-time">Delivery Time</SelectItem>
                <SelectItem value="cost-low-to-high">Cost: Low to High</SelectItem>
                <SelectItem value="cost-high-to-low">Cost: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Cuisines */}
          <div>
            <label className="text-sm font-medium mb-2 block">Cuisines</label>
            <div className="flex flex-wrap gap-2">
              {popularCuisines.map((cuisine) => {
                const isSelected = selectedCuisines.includes(cuisine as CuisineType);
                return (
                  <Badge
                    key={cuisine}
                    variant={isSelected ? 'default' : 'outline'}
                    className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
                    onClick={() => onCuisineToggle(cuisine as CuisineType)}
                  >
                    {cuisine}
                  </Badge>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Selected Filters Display */}
      {selectedCuisines.length > 0 && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {selectedCuisines.map((cuisine) => (
            <Badge
              key={cuisine}
              variant="secondary"
              className="cursor-pointer"
              onClick={() => onCuisineToggle(cuisine)}
            >
              {cuisine}
              <X className="w-3 h-3 ml-1" />
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
