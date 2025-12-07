'use client';

import React from 'react';
import { Check, Clock, ChefHat, Truck, Package, X } from 'lucide-react';
import { Order } from '@/lib/data/types';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface OrderTrackerProps {
  order: Order;
  className?: string;
}

const orderSteps = [
  { key: 'confirmed', label: 'Order Confirmed', icon: Check },
  { key: 'preparing', label: 'Preparing', icon: ChefHat },
  { key: 'out-for-delivery', label: 'Out for Delivery', icon: Truck },
  { key: 'delivered', label: 'Delivered', icon: Package },
] as const;

export function OrderTracker({ order, className = '' }: OrderTrackerProps) {
  const currentStepIndex = orderSteps.findIndex((step) => step.key === order.status);
  const isCancelled = order.status === 'cancelled';

  return (
    <Card className={className}>
      <CardContent className="p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-1">Track Your Order</h3>
          <p className="text-sm text-muted-foreground">Order ID: {order.id}</p>
        </div>

        {isCancelled ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <X className="w-8 h-8 text-destructive" />
            </div>
            <p className="text-lg font-semibold text-destructive">Order Cancelled</p>
            <p className="text-sm text-muted-foreground mt-2">
              This order has been cancelled
            </p>
          </div>
        ) : (
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-border" />
            <div
              className="absolute left-6 top-8 w-0.5 bg-primary transition-all duration-500"
              style={{
                height: `${(currentStepIndex / (orderSteps.length - 1)) * 100}%`,
              }}
            />

            {/* Steps */}
            <div className="space-y-8 relative">
              {orderSteps.map((step, index) => {
                const isCompleted = index <= currentStepIndex;
                const isCurrent = index === currentStepIndex;
                const StepIcon = step.icon;

                return (
                  <div key={step.key} className="flex items-start gap-4">
                    <div
                      className={cn(
                        'w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all relative z-10',
                        isCompleted
                          ? 'bg-primary text-white'
                          : 'bg-muted text-muted-foreground',
                        isCurrent && 'ring-4 ring-primary/20 scale-110'
                      )}
                    >
                      <StepIcon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 pt-2">
                      <p
                        className={cn(
                          'font-semibold mb-1',
                          isCompleted ? 'text-foreground' : 'text-muted-foreground'
                        )}
                      >
                        {step.label}
                      </p>
                      {isCurrent && (
                        <div className="flex items-center gap-2 text-sm text-primary">
                          <Clock className="w-4 h-4 animate-pulse" />
                          <span className="font-medium">In Progress...</span>
                        </div>
                      )}
                      {isCompleted && !isCurrent && (
                        <p className="text-sm text-muted-foreground">Completed</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Estimated Delivery Time */}
        {!isCancelled && order.estimatedDeliveryTime && (
          <div className="mt-6 p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Estimated Delivery</span>
              <span className="font-semibold">
                {order.estimatedDeliveryTime.toLocaleTimeString('en-IN', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
