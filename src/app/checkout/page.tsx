'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  MapPin,
  CreditCard,
  Wallet,
  Banknote,
  Smartphone,
  Tag,
  Plus,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import {
  formatPrice,
  calculateOrderTotal,
  generateOrderId,
  getEstimatedDeliveryTime,
} from '@/lib/utils/restaurantUtils';

export default function CheckoutPage() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cash' | 'wallet'>('upi');
  const [selectedAddress, setSelectedAddress] = useState('home');
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  // Mock cart data (in real app, this would come from global state)
  const cartItems = [
    {
      name: 'Butter Chicken Combo',
      quantity: 2,
      price: 299,
      restaurant: 'Spice Garden',
    },
    {
      name: 'Masala Dosa Special',
      quantity: 1,
      price: 149,
      restaurant: 'Spice Garden',
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 30;
  const orderTotal = calculateOrderTotal(subtotal, deliveryFee, appliedDiscount);

  const handleApplyPromo = () => {
    // Mock promo code validation
    if (promoCode.toUpperCase() === 'SPICE20') {
      setAppliedDiscount(Math.floor(subtotal * 0.2));
    }
  };

  const handlePlaceOrder = () => {
    const orderId = generateOrderId();
    const estimatedTime = getEstimatedDeliveryTime(30);

    // In a real app, you would save the order to backend
    // For now, we'll redirect to order tracking
    router.push(`/orders/${orderId}`);
  };

  const mockAddresses = [
    {
      id: 'home',
      label: 'Home',
      street: '23, Link Road, Andheri West',
      city: 'Mumbai - 400053',
      phone: '+91 98765 43210',
    },
    {
      id: 'work',
      label: 'Work',
      street: '45, Office Complex, BKC',
      city: 'Mumbai - 400051',
      phone: '+91 98765 43210',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => router.back()}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-bold">Checkout</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Address */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Delivery Address
                  </h3>
                  <Button variant="outline" size="sm">
                    <Plus className="w-4 h-4 mr-1" />
                    Add New
                  </Button>
                </div>

                <RadioGroup value={selectedAddress} onValueChange={setSelectedAddress}>
                  <div className="space-y-3">
                    {mockAddresses.map((address) => (
                      <div
                        key={address.id}
                        className={`flex items-start gap-3 p-4 border rounded-lg cursor-pointer transition-all ${
                          selectedAddress === address.id
                            ? 'border-primary bg-primary/5'
                            : 'hover:border-primary/50'
                        }`}
                        onClick={() => setSelectedAddress(address.id)}
                      >
                        <RadioGroupItem value={address.id} id={address.id} />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Label htmlFor={address.id} className="font-semibold cursor-pointer">
                              {address.label}
                            </Label>
                            <Badge variant="secondary" className="text-xs">
                              {address.label}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {address.street}, {address.city}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Phone: {address.phone}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <CreditCard className="w-5 h-5 text-primary" />
                  Payment Method
                </h3>

                <RadioGroup value={paymentMethod} onValueChange={(value: any) => setPaymentMethod(value)}>
                  <div className="space-y-3">
                    <div
                      className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all ${
                        paymentMethod === 'upi'
                          ? 'border-primary bg-primary/5'
                          : 'hover:border-primary/50'
                      }`}
                      onClick={() => setPaymentMethod('upi')}
                    >
                      <RadioGroupItem value="upi" id="upi" />
                      <Smartphone className="w-5 h-5" />
                      <Label htmlFor="upi" className="flex-1 cursor-pointer font-medium">
                        UPI (GPay, PhonePe, Paytm)
                      </Label>
                      <Badge variant="secondary">Recommended</Badge>
                    </div>

                    <div
                      className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all ${
                        paymentMethod === 'card'
                          ? 'border-primary bg-primary/5'
                          : 'hover:border-primary/50'
                      }`}
                      onClick={() => setPaymentMethod('card')}
                    >
                      <RadioGroupItem value="card" id="card" />
                      <CreditCard className="w-5 h-5" />
                      <Label htmlFor="card" className="flex-1 cursor-pointer font-medium">
                        Credit / Debit Card
                      </Label>
                    </div>

                    <div
                      className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all ${
                        paymentMethod === 'wallet'
                          ? 'border-primary bg-primary/5'
                          : 'hover:border-primary/50'
                      }`}
                      onClick={() => setPaymentMethod('wallet')}
                    >
                      <RadioGroupItem value="wallet" id="wallet" />
                      <Wallet className="w-5 h-5" />
                      <Label htmlFor="wallet" className="flex-1 cursor-pointer font-medium">
                        Digital Wallet (Paytm, PhonePe)
                      </Label>
                    </div>

                    <div
                      className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all ${
                        paymentMethod === 'cash'
                          ? 'border-primary bg-primary/5'
                          : 'hover:border-primary/50'
                      }`}
                      onClick={() => setPaymentMethod('cash')}
                    >
                      <RadioGroupItem value="cash" id="cash" />
                      <Banknote className="w-5 h-5" />
                      <Label htmlFor="cash" className="flex-1 cursor-pointer font-medium">
                        Cash on Delivery
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Promo Code */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Tag className="w-5 h-5 text-primary" />
                  Apply Promo Code
                </h3>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handleApplyPromo} variant="outline">
                    Apply
                  </Button>
                </div>
                {appliedDiscount > 0 && (
                  <div className="mt-3 p-3 bg-success/10 text-success rounded-md flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      Promo applied! You saved {formatPrice(appliedDiscount)}
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

                <div className="space-y-3 mb-4">
                  {cartItems.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {item.name} x {item.quantity}
                      </span>
                      <span className="font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatPrice(orderTotal.subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span>{formatPrice(orderTotal.deliveryFee)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Taxes (5% GST)</span>
                    <span>{formatPrice(orderTotal.taxes)}</span>
                  </div>
                  {appliedDiscount > 0 && (
                    <div className="flex justify-between text-success">
                      <span>Discount</span>
                      <span>- {formatPrice(orderTotal.discount)}</span>
                    </div>
                  )}
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between text-lg font-bold mb-6">
                  <span>Total</span>
                  <span>{formatPrice(orderTotal.total)}</span>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  By placing this order, you agree to our Terms & Conditions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
