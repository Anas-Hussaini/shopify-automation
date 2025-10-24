"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { TrendingUp, Clock, DollarSign, Users } from "lucide-react";

export function ROICalculator() {
  const [ordersPerMonth, setOrdersPerMonth] = useState([500]);
  const [minutesPerOrder, setMinutesPerOrder] = useState([15]);
  const [hourlyRate, setHourlyRate] = useState([25]);

  const orders = ordersPerMonth[0];
  const minutes = minutesPerOrder[0];
  const rate = hourlyRate[0];

  // Calculations
  const hoursPerMonth = (orders * minutes) / 60;
  const currentMonthlyCost = hoursPerMonth * rate;
  const automatedMonthlyCost = 150; // n8n + hosting costs
  const monthlySavings = currentMonthlyCost - automatedMonthlyCost;
  const yearlySavings = monthlySavings * 12;
  const roiPercentage = ((monthlySavings / automatedMonthlyCost) * 100).toFixed(0);
  const paybackMonths = (7500 / monthlySavings).toFixed(1); // $7,500 investment

  return (
    <Card className="border-2 border-blue-200 dark:border-blue-900">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          Live ROI Calculator
        </CardTitle>
        <CardDescription>
          See your potential cost savings with automation
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Input Sliders */}
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <Label>Orders per Month</Label>
              <span className="text-sm font-semibold text-blue-600">{orders}</span>
            </div>
            <Slider
              value={ordersPerMonth}
              onValueChange={setOrdersPerMonth}
              min={100}
              max={2000}
              step={50}
              className="cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <Label>Minutes per Order (Manual)</Label>
              <span className="text-sm font-semibold text-blue-600">{minutes} min</span>
            </div>
            <Slider
              value={minutesPerOrder}
              onValueChange={setMinutesPerOrder}
              min={5}
              max={60}
              step={5}
              className="cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <Label>Hourly Rate</Label>
              <span className="text-sm font-semibold text-blue-600">${rate}/hr</span>
            </div>
            <Slider
              value={hourlyRate}
              onValueChange={setHourlyRate}
              min={15}
              max={100}
              step={5}
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              Hours/Month
            </div>
            <div className="text-2xl font-bold">{hoursPerMonth.toFixed(0)}</div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <DollarSign className="w-4 h-4" />
              Current Cost
            </div>
            <div className="text-2xl font-bold">${currentMonthlyCost.toFixed(0)}</div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
              <DollarSign className="w-4 h-4" />
              Monthly Savings
            </div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              ${monthlySavings.toFixed(0)}
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
              <TrendingUp className="w-4 h-4" />
              Yearly Savings
            </div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              ${yearlySavings.toFixed(0)}
            </div>
          </div>
        </div>

        {/* ROI Summary */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 p-4 rounded-lg space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">ROI</span>
            <span className="text-2xl font-bold text-green-600 dark:text-green-400">
              {roiPercentage}%
            </span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Investment Payback</span>
            <span className="font-semibold">{paybackMonths} months</span>
          </div>
          <div className="text-xs text-muted-foreground pt-2 border-t border-green-200 dark:border-green-800">
            Based on $7,500 initial investment
          </div>
        </div>

        <div className="text-xs text-center text-muted-foreground">
          💡 Adjust the sliders to see your potential savings
        </div>
      </CardContent>
    </Card>
  );
}

