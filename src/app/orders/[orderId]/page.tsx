'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, MapPin, Phone, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { OrderTracker } from '@/components/restaurant/OrderTracker';
import { Order } from '@/lib/data/types';
import { formatPrice, formatDateTime } from '@/lib/utils/restaurantUtils';

export default function OrderTrackingPage() {
  const params = useParams();
  const router = useRouter();
  const orderId = params.orderId as string;

  // Mock order data (in real app, this would be fetched from backend)
  const mockOrder: Order = {
    id: orderId,
    restaurantId: 'spice-garden-mumbai',
    items: [],
    subtotal: 747,
    deliveryFee: 30,
    taxes: 37,
    discount: 149,
    total: 665,
    status: 'preparing',
    deliveryAddress: {
      id: 'home',
      label: 'Home',
      street: '23, Link Road, Andheri West',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400053',
      phoneNumber: '+91 98765 43210',
    },
    paymentMethod: 'upi',
    createdAt: new Date(),
    estimatedDeliveryTime: new Date(Date.now() + 30 * 60 * 1000), // 30 mins from now
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => router.push('/')}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-bold">Order Tracking</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Tracker */}
          <div className="lg:col-span-2">
            <OrderTracker order={mockOrder} />

            {/* Restaurant Info */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Store className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Spice Garden</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      23, Link Road, Andheri West, Mumbai - 400053
                    </p>
                    <Button variant="outline" size="sm">
                      <Phone className="w-4 h-4 mr-2" />
                      Contact Restaurant
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Address */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Delivery Address</h3>
                    <p className="text-sm text-muted-foreground">
                      {mockOrder.deliveryAddress.street}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {mockOrder.deliveryAddress.city}, {mockOrder.deliveryAddress.state} -{' '}
                      {mockOrder.deliveryAddress.pincode}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Phone: {mockOrder.deliveryAddress.phoneNumber}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Order Details</h3>

                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Order ID</p>
                    <p className="font-mono text-sm font-semibold">{mockOrder.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Placed on</p>
                    <p className="text-sm font-medium">
                      {formatDateTime(mockOrder.createdAt)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Payment Method</p>
                    <p className="text-sm font-medium capitalize">
                      {mockOrder.paymentMethod === 'upi' ? 'UPI' : mockOrder.paymentMethod}
                    </p>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Items Total</span>
                    <span>{formatPrice(mockOrder.subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span>{formatPrice(mockOrder.deliveryFee)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Taxes</span>
                    <span>{formatPrice(mockOrder.taxes)}</span>
                  </div>
                  {mockOrder.discount > 0 && (
                    <div className="flex justify-between text-success">
                      <span>Discount</span>
                      <span>- {formatPrice(mockOrder.discount)}</span>
                    </div>
                  )}
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between text-lg font-bold mb-6">
                  <span>Total Paid</span>
                  <span>{formatPrice(mockOrder.total)}</span>
                </div>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => router.push('/restaurants')}
                >
                  Order Again
                </Button>

                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm font-medium mb-2">Need Help?</p>
                  <p className="text-xs text-muted-foreground mb-3">
                    Contact our customer support for any issues with your order
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Get Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
