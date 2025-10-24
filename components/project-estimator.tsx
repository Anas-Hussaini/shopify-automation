"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calculator, CheckCircle2 } from "lucide-react";

type Feature = {
  id: string;
  name: string;
  description: string;
  cost: number;
  weeks: number;
  category: string;
};

export function ProjectEstimator() {
  const features: Feature[] = [
    {
      id: 'shopify',
      name: 'Shopify Integration',
      description: 'Order sync, inventory management, webhooks',
      cost: 1500,
      weeks: 1.5,
      category: 'core'
    },
    {
      id: 'airtable',
      name: 'Airtable Setup',
      description: 'Database design, relationships, views',
      cost: 1000,
      weeks: 1,
      category: 'core'
    },
    {
      id: 'n8n',
      name: 'n8n Workflows',
      description: 'Automation workflows, error handling',
      cost: 2000,
      weeks: 2,
      category: 'core'
    },
    {
      id: 'ai-content',
      name: 'AI Content Generation',
      description: 'GPT-4 integration for descriptions & posts',
      cost: 1500,
      weeks: 1.5,
      category: 'ai'
    },
    {
      id: 'supplier',
      name: 'Supplier Integration',
      description: 'API connections, order routing',
      cost: 2000,
      weeks: 2,
      category: 'integration'
    },
    {
      id: 'email',
      name: 'Email Automation',
      description: 'Customer & supplier notifications',
      cost: 800,
      weeks: 0.5,
      category: 'communication'
    },
    {
      id: 'dashboard',
      name: 'Analytics Dashboard',
      description: 'Reporting, metrics, insights',
      cost: 1200,
      weeks: 1,
      category: 'reporting'
    },
    {
      id: 'rfq',
      name: 'RFQ Processing',
      description: 'PDF parsing, quote generation',
      cost: 3000,
      weeks: 3,
      category: 'advanced'
    },
    {
      id: 'ai-matching',
      name: 'AI Product Matching',
      description: 'Intelligent supplier selection',
      cost: 2500,
      weeks: 2,
      category: 'ai'
    },
    {
      id: 'inventory',
      name: 'Inventory Sync',
      description: 'Real-time stock management',
      cost: 1800,
      weeks: 1.5,
      category: 'integration'
    }
  ];

  const [selectedFeatures, setSelectedFeatures] = useState<Record<string, boolean>>({
    shopify: true,
    airtable: true,
    n8n: true,
    'ai-content': true,
    dashboard: true,
  });

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev => ({
      ...prev,
      [featureId]: !prev[featureId]
    }));
  };

  const selected = features.filter(f => selectedFeatures[f.id]);
  const totalCost = selected.reduce((sum, f) => sum + f.cost, 0);
  const totalWeeks = Math.max(...selected.map(f => f.weeks), 0);
  const documentationCost = 500;
  const trainingCost = 500;
  const grandTotal = totalCost + documentationCost + trainingCost;

  const categoryColors: Record<string, string> = {
    core: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    ai: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
    integration: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
    communication: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    reporting: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
    advanced: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
  };

  return (
    <Card className="border-2 border-green-200 dark:border-green-900">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-green-600" />
          Interactive Project Estimator
        </CardTitle>
        <CardDescription>
          Select features to build your custom quote
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Feature Selection */}
        <div className="space-y-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`
                flex items-center justify-between p-3 rounded-lg border-2 transition-all
                ${selectedFeatures[feature.id] 
                  ? 'border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950' 
                  : 'border-slate-200 dark:border-slate-800'}
              `}
            >
              <div className="flex items-center gap-3 flex-1">
                <Switch
                  checked={selectedFeatures[feature.id] || false}
                  onCheckedChange={() => toggleFeature(feature.id)}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">{feature.name}</span>
                    <Badge className={categoryColors[feature.category]} variant="secondary">
                      {feature.category}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              </div>
              <div className="text-right ml-4">
                <div className="font-semibold text-sm">${feature.cost}</div>
                <div className="text-xs text-muted-foreground">{feature.weeks}w</div>
              </div>
            </div>
          ))}
        </div>

        <Separator />

        {/* Summary */}
        <div className="space-y-3 bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Selected Features</span>
            <span className="font-semibold">{selected.length} items</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Development Cost</span>
            <span className="font-semibold">${totalCost.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Documentation & Guides</span>
            <span className="font-semibold">${documentationCost}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Training Session</span>
            <span className="font-semibold">${trainingCost}</span>
          </div>
          
          <Separator />
          
          <div className="flex justify-between items-center">
            <span className="font-semibold">Total Investment</span>
            <span className="text-2xl font-bold text-green-600 dark:text-green-400">
              ${grandTotal.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Estimated Timeline</span>
            <span className="font-semibold">{Math.ceil(totalWeeks)} weeks</span>
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg space-y-2">
          <h4 className="font-semibold text-sm text-green-900 dark:text-green-100 mb-2">
            ✓ What's Included
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-green-600" />
              <span>Complete source code</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-green-600" />
              <span>Full documentation</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-green-600" />
              <span>30-day support</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-green-600" />
              <span>Live training session</span>
            </div>
          </div>
        </div>

        <div className="text-xs text-center text-muted-foreground">
          💡 Toggle features to customize your project scope and pricing
        </div>
      </CardContent>
    </Card>
  );
}

