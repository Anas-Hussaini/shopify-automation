"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Bot, Sparkles, Copy, CheckCircle2 } from "lucide-react";

export function AIContentDemo() {
  const [productName, setProductName] = useState("");
  const [contentType, setContentType] = useState("description");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  const [copied, setCopied] = useState(false);

  const contentTemplates = {
    description: (product: string) => `Discover the ${product || 'amazing product'} - engineered for those who demand excellence. This premium solution combines cutting-edge innovation with everyday practicality, delivering unmatched performance and reliability.

Key Features:
• Premium quality construction
• Innovative design and functionality  
• Trusted by thousands of satisfied customers
• 30-day money-back guarantee

Transform your experience with ${product || 'this product'} today. Order now and join the community of delighted customers who've made the switch.`,
    
    social: (product: string) => `🎉 Introducing ${product || 'our latest product'}!

✨ Game-changing features you'll love
🚀 Ready to ship today
💯 100% satisfaction guaranteed

Limited time offer - grab yours before they're gone! 

Link in bio 👆

#${(product || 'product').replace(/\s+/g, '')} #Innovation #MustHave #NewArrival #ShopNow`,
    
    email: (product: string) => `Subject: You Won't Want to Miss This - ${product || 'New Product'} Now Available!

Hi there,

Great news! We just launched ${product || 'something amazing'} and we think you're going to love it.

Here's why our customers are raving about it:
✓ Premium quality that exceeds expectations
✓ Innovative features you won't find anywhere else
✓ Backed by our 30-day satisfaction guarantee

For a limited time, get 15% off your first order with code: WELCOME15

Ready to experience the difference?

[Shop Now Button]

Best regards,
Your Team

P.S. - This offer won't last long. Order today!`,
    
    ad: (product: string) => `🎯 ATTENTION: ${product || 'Game-Changer'} Alert!

Are you tired of settling for less? 

${product || 'This revolutionary product'} is here to change everything.

✅ Proven results
✅ Premium quality
✅ Loved by thousands

🔥 LIMITED TIME OFFER 🔥
Use code SAVE20 for 20% OFF

👉 Click to claim your discount NOW
⏰ Offer expires in 48 hours!

Don't miss out - join the movement today!`
  };

  const generateContent = () => {
    if (!productName.trim()) {
      setProductName("Premium Wireless Headphones");
    }
    
    setIsGenerating(true);
    setGeneratedContent("");
    
    // Simulate AI generation with typing effect
    const content = contentTemplates[contentType as keyof typeof contentTemplates](productName || "Premium Wireless Headphones");
    const words = content.split(' ');
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < words.length) {
        setGeneratedContent(prev => prev + (currentIndex === 0 ? '' : ' ') + words[currentIndex]);
        currentIndex++;
      } else {
        setIsGenerating(false);
        clearInterval(interval);
      }
    }, 30);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="border-2 border-blue-200 dark:border-blue-900">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-blue-600" />
          AI Content Generator Demo
        </CardTitle>
        <CardDescription>
          See AI-powered content creation in action
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Input Section */}
        <div className="space-y-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
          <div className="space-y-2">
            <Label htmlFor="product">Product Name</Label>
            <Input
              id="product"
              placeholder="e.g., Premium Wireless Headphones"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              disabled={isGenerating}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Content Type</Label>
            <Select value={contentType} onValueChange={setContentType} disabled={isGenerating}>
              <SelectTrigger id="type">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="description">Product Description</SelectItem>
                <SelectItem value="social">Social Media Post</SelectItem>
                <SelectItem value="email">Email Campaign</SelectItem>
                <SelectItem value="ad">Ad Copy</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            onClick={generateContent} 
            disabled={isGenerating}
            className="w-full gap-2"
          >
            <Sparkles className="w-4 h-4" />
            {isGenerating ? "Generating..." : "Generate Content"}
          </Button>
        </div>

        {/* Output Section */}
        {generatedContent && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Generated Content</Label>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="gap-1">
                  <Bot className="w-3 h-3" />
                  AI-Generated
                </Badge>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={copyToClipboard}
                  className="gap-2"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
            </div>
            <div className="p-4 bg-white dark:bg-slate-950 border-2 border-blue-200 dark:border-blue-800 rounded-lg">
              <p className="text-sm whitespace-pre-wrap">{generatedContent}</p>
              {isGenerating && <span className="inline-block w-2 h-4 bg-blue-600 animate-pulse ml-1" />}
            </div>
          </div>
        )}

        {!generatedContent && !isGenerating && (
          <div className="text-center py-8 text-sm text-muted-foreground">
            👆 Enter a product name and click "Generate Content" to see AI in action
          </div>
        )}

        {generatedContent && !isGenerating && (
          <div className="bg-green-50 dark:bg-green-950 p-3 rounded-lg">
            <p className="text-sm text-green-700 dark:text-green-300 font-medium">
              ✓ Content generated in ~2 seconds
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              This demo uses templates. Real implementation uses GPT-4 for unique content.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

