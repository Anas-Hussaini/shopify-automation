"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  Database, 
  Workflow, 
  Bot, 
  Mail, 
  CheckCircle2,
  ArrowRight,
  Play,
  RotateCw
} from "lucide-react";

type Step = {
  id: string;
  icon: any;
  title: string;
  description: string;
  status: 'pending' | 'active' | 'complete';
  color: string;
};

export function WorkflowVisualizer() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const initialSteps: Step[] = [
    {
      id: '1',
      icon: ShoppingCart,
      title: 'Order Placed',
      description: 'Customer order received on Shopify',
      status: 'pending',
      color: 'text-purple-600'
    },
    {
      id: '2',
      icon: Workflow,
      title: 'n8n Webhook',
      description: 'Workflow triggered automatically',
      status: 'pending',
      color: 'text-orange-600'
    },
    {
      id: '3',
      icon: Database,
      title: 'Airtable Update',
      description: 'Order logged in central database',
      status: 'pending',
      color: 'text-yellow-600'
    },
    {
      id: '4',
      icon: Bot,
      title: 'AI Processing',
      description: 'Product matching & supplier selection',
      status: 'pending',
      color: 'text-blue-600'
    },
    {
      id: '5',
      icon: Mail,
      title: 'Email Sent',
      description: 'Supplier & customer notifications',
      status: 'pending',
      color: 'text-green-600'
    },
    {
      id: '6',
      icon: CheckCircle2,
      title: 'Complete',
      description: 'Order processed in 2.3 seconds',
      status: 'pending',
      color: 'text-emerald-600'
    }
  ];

  const [steps, setSteps] = useState(initialSteps);

  useEffect(() => {
    if (isRunning && currentStep < steps.length) {
      const timer = setTimeout(() => {
        setSteps(prevSteps =>
          prevSteps.map((step, index) => {
            if (index < currentStep) return { ...step, status: 'complete' };
            if (index === currentStep) return { ...step, status: 'active' };
            return step;
          })
        );
        setCurrentStep(prev => prev + 1);
      }, 800);

      return () => clearTimeout(timer);
    } else if (isRunning && currentStep === steps.length) {
      setTimeout(() => {
        setIsRunning(false);
      }, 1000);
    }
  }, [isRunning, currentStep, steps.length]);

  const startWorkflow = () => {
    setCurrentStep(0);
    setSteps(initialSteps);
    setIsRunning(true);
  };

  const resetWorkflow = () => {
    setIsRunning(false);
    setCurrentStep(0);
    setSteps(initialSteps);
  };

  return (
    <Card className="border-2 border-purple-200 dark:border-purple-900">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Workflow className="w-5 h-5 text-purple-600" />
              Live Workflow Demo
            </CardTitle>
            <CardDescription>
              Watch an order flow through the automation system
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button 
              onClick={startWorkflow} 
              disabled={isRunning}
              size="sm"
              className="gap-2"
            >
              <Play className="w-4 h-4" />
              Run Demo
            </Button>
            <Button 
              onClick={resetWorkflow} 
              variant="outline"
              size="sm"
              disabled={isRunning}
            >
              <RotateCw className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={step.id}>
              <div className="flex items-start gap-4">
                {/* Icon and Line */}
                <div className="flex flex-col items-center">
                  <div
                    className={`
                      w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500
                      ${step.status === 'pending' ? 'bg-slate-100 dark:bg-slate-800' : ''}
                      ${step.status === 'active' ? 'bg-blue-100 dark:bg-blue-900 ring-4 ring-blue-200 dark:ring-blue-800 scale-110' : ''}
                      ${step.status === 'complete' ? 'bg-green-100 dark:bg-green-900' : ''}
                    `}
                  >
                    <step.icon
                      className={`
                        w-6 h-6 transition-all duration-500
                        ${step.status === 'pending' ? 'text-slate-400' : ''}
                        ${step.status === 'active' ? 'text-blue-600 dark:text-blue-400' : ''}
                        ${step.status === 'complete' ? 'text-green-600 dark:text-green-400' : ''}
                      `}
                    />
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`
                        w-0.5 h-12 transition-all duration-500
                        ${step.status === 'complete' ? 'bg-green-400' : 'bg-slate-200 dark:bg-slate-700'}
                      `}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold">{step.title}</h4>
                    {step.status === 'active' && (
                      <Badge variant="secondary" className="animate-pulse">
                        Processing...
                      </Badge>
                    )}
                    {step.status === 'complete' && (
                      <Badge variant="default" className="bg-green-600">
                        ✓ Done
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  
                  {/* Simulated data for active step */}
                  {step.status === 'active' && (
                    <div className="mt-2 p-2 bg-blue-50 dark:bg-blue-950 rounded text-xs font-mono">
                      {step.id === '1' && 'Order #12847 | $247.50 | Customer: Jane D.'}
                      {step.id === '2' && 'Webhook triggered | Event: order.created'}
                      {step.id === '3' && 'Record created | Table: Orders | ID: rec_abc123'}
                      {step.id === '4' && 'AI matching | Supplier: Vendor B | Score: 0.94'}
                      {step.id === '5' && 'Emails sent | Supplier + Customer | Status: 200 OK'}
                      {step.id === '6' && 'Total time: 2.3s | Status: Success ✓'}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {!isRunning && currentStep === 0 && (
          <div className="mt-4 text-center text-sm text-muted-foreground">
            👆 Click "Run Demo" to see the automation in action
          </div>
        )}

        {!isRunning && currentStep === steps.length && (
          <div className="mt-4 p-4 bg-green-50 dark:bg-green-950 rounded-lg text-center">
            <p className="font-semibold text-green-700 dark:text-green-300">
              ✓ Order processed successfully!
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Zero manual intervention required
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

