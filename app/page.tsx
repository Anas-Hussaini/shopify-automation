import { 
  Workflow, 
  ShoppingCart, 
  Database, 
  Bot, 
  Zap, 
  FileText, 
  TrendingUp, 
  CheckCircle2,
  Code,
  Server,
  Globe,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { ROICalculator } from "@/components/roi-calculator";
import { WorkflowVisualizer } from "@/components/workflow-visualizer";
import { AIContentDemo } from "@/components/ai-demo";
import { ProjectEstimator } from "@/components/project-estimator";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge className="mb-4" variant="secondary">
            <Bot className="w-3 h-3 mr-2" />
            AI Automation & Integration Specialist
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Build Intelligent
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Automation Systems </span>
            for Your Shopify Store
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert in creating lean, scalable automation solutions that connect Shopify, Airtable, 
            n8n workflows, and AI-powered content generation to streamline your eCommerce operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              View Proposal <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              See Past Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Live Interactive Demos */}
      <section className="container mx-auto px-4 py-16 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">
              <Zap className="w-3 h-3 mr-2" />
              Interactive Demos
            </Badge>
            <h2 className="text-3xl font-bold mb-3">
              See Automation in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Action</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just read about automation—experience it! Try these live demos that showcase the power of AI and workflow automation.
            </p>
          </div>

          <Tabs defaultValue="workflow" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto mb-6">
              <TabsTrigger value="workflow" className="py-3">
                🔄 Workflow
              </TabsTrigger>
              <TabsTrigger value="roi" className="py-3">
                💰 ROI Calc
              </TabsTrigger>
              <TabsTrigger value="ai" className="py-3">
                🤖 AI Demo
              </TabsTrigger>
              <TabsTrigger value="estimate" className="py-3">
                📊 Estimator
              </TabsTrigger>
            </TabsList>

            <TabsContent value="workflow" className="mt-0">
              <WorkflowVisualizer />
            </TabsContent>

            <TabsContent value="roi" className="mt-0">
              <ROICalculator />
            </TabsContent>

            <TabsContent value="ai" className="mt-0">
              <AIContentDemo />
            </TabsContent>

            <TabsContent value="estimate" className="mt-0">
              <ProjectEstimator />
            </TabsContent>
          </Tabs>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Why Interactive Demos Matter</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  These aren't mockups—they're real, working demonstrations of automation principles. This hands-on approach shows exactly how your system will work before we build it.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">🎯 See Real Results</Badge>
                  <Badge variant="secondary">⚡ Test Features Live</Badge>
                  <Badge variant="secondary">💡 Understand ROI</Badge>
                  <Badge variant="secondary">🔧 Customize Your Needs</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="container mx-auto px-4 py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: ShoppingCart,
                title: "Shopify Integration",
                description: "Deep expertise in Shopify API, webhooks, and store automation",
                badge: "Mandatory"
              },
              {
                icon: Database,
                title: "Airtable Automation",
                description: "Complex base designs with automated workflows and API integration",
                badge: "Mandatory"
              },
              {
                icon: Workflow,
                title: "n8n Workflows",
                description: "Building sophisticated automation pipelines with error handling",
                badge: "Mandatory"
              },
              {
                icon: Bot,
                title: "AI Integration",
                description: "GPT-4, Claude, and custom AI models for content generation",
                badge: "Core Skill"
              },
              {
                icon: Code,
                title: "API Development",
                description: "RESTful APIs, webhooks, and third-party integrations",
                badge: "Mandatory"
              },
              {
                icon: FileText,
                title: "RFQ Automation",
                description: "Government bid processing and quote generation systems",
                badge: "Specialized"
              }
            ].map((skill, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <skill.icon className="w-8 h-8 text-blue-600" />
                    <Badge variant="secondary">{skill.badge}</Badge>
                  </div>
                  <CardTitle className="text-lg">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Projects */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <Tabs defaultValue="project1" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto">
              <TabsTrigger value="project1" className="py-3">
                Dropshipping Automation
              </TabsTrigger>
              <TabsTrigger value="project2" className="py-3">
                Multi-Channel Marketing
              </TabsTrigger>
              <TabsTrigger value="project3" className="py-3">
                Government RFQ System
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="project1" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Automated Dropshipping Platform
                  </CardTitle>
                  <CardDescription>Complete automation from supplier to customer</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Challenge</h4>
                      <p className="text-sm text-muted-foreground">
                        Client needed to automate order processing for 50+ suppliers, manage 
                        inventory sync, and handle customer communications without manual intervention.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Solution</h4>
                      <p className="text-sm text-muted-foreground">
                        Built n8n workflow connecting Shopify → Airtable → Supplier APIs with 
                        automated email notifications, inventory tracking, and order status updates.
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        "Real-time inventory synchronization",
                        "Automated order routing to suppliers",
                        "Customer notification system",
                        "Profit margin calculator",
                        "Failed order retry logic",
                        "Analytics dashboard in Airtable"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Shopify</Badge>
                    <Badge>n8n</Badge>
                    <Badge>Airtable</Badge>
                    <Badge>Python</Badge>
                    <Badge>REST APIs</Badge>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                      Results: 95% reduction in manual processing time, $15K+ monthly cost savings
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="project2" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    AI-Powered Content Marketing System
                  </CardTitle>
                  <CardDescription>Automated content generation and multi-platform posting</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Challenge</h4>
                      <p className="text-sm text-muted-foreground">
                        eCommerce brand needed consistent social media presence and blog content 
                        without hiring a full marketing team.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Solution</h4>
                      <p className="text-sm text-muted-foreground">
                        Integrated GPT-4 with n8n to automatically generate product descriptions, 
                        social posts, and blog articles based on inventory and trends.
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-3">Automation Pipeline</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-xs">1</div>
                        <p>Product data from Shopify automatically synced to Airtable</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-xs">2</div>
                        <p>AI analyzes product attributes and generates optimized descriptions</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-xs">3</div>
                        <p>Content scheduled and posted to Instagram, Facebook, Twitter via APIs</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-xs">4</div>
                        <p>Performance metrics tracked in centralized dashboard</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>GPT-4</Badge>
                    <Badge>n8n</Badge>
                    <Badge>Shopify API</Badge>
                    <Badge>Social APIs</Badge>
                    <Badge>Airtable</Badge>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                      Results: 500+ pieces of content generated monthly, 40% increase in engagement
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="project3" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Government RFQ Processing System
                  </CardTitle>
                  <CardDescription>Automated bid extraction, analysis, and quote generation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Challenge</h4>
                      <p className="text-sm text-muted-foreground">
                        Government contractor spending 20+ hours weekly manually processing RFQs, 
                        extracting requirements, and creating quotes.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Solution</h4>
                      <p className="text-sm text-muted-foreground">
                        Built AI-powered system using GPT-4 and Claude to parse PDF documents, 
                        extract key requirements, match to product catalog, and generate quotes.
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-3">System Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        "PDF upload and OCR processing",
                        "AI-powered requirement extraction",
                        "Automated product matching",
                        "Dynamic pricing calculations",
                        "Quote template generation",
                        "Compliance checking"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>GPT-4</Badge>
                    <Badge>Claude</Badge>
                    <Badge>Python</Badge>
                    <Badge>n8n</Badge>
                    <Badge>Airtable</Badge>
                    <Badge>PDF Processing</Badge>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                      Results: 85% time reduction, 3x increase in bid volume capacity
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Proposal Answers */}
      <section className="container mx-auto px-4 py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Detailed Proposal</h2>
          <p className="text-center text-muted-foreground mb-12">
            Answers to your specific questions about this project
          </p>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white dark:bg-slate-900 px-6 rounded-lg border">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                    1
                  </div>
                  <span className="font-semibold">Recommended Tools & Architecture</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-11 pt-4 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Workflow className="w-4 h-4" />
                    Core Integration Stack
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>n8n (Primary Choice)</strong> - Self-hosted, infinitely flexible, cost-effective for complex workflows. Perfect for your expanding needs with visual workflow builder and custom code nodes.</li>
                    <li><strong>Airtable</strong> - Central data hub for products, orders, suppliers, and customer data. Excellent API and integration capabilities.</li>
                    <li><strong>Shopify Plus API</strong> - Full control over store operations, webhooks for real-time triggers.</li>
                    <li><strong>Make.com (Backup Option)</strong> - If you prefer managed service over self-hosted, though more expensive at scale.</li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Bot className="w-4 h-4" />
                    AI Layer
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>OpenAI GPT-4</strong> - Content generation, customer communication</li>
                    <li><strong>Anthropic Claude</strong> - Document analysis for RFQ processing (Phase 2)</li>
                    <li><strong>LangChain</strong> - Orchestration layer for complex AI workflows</li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-2">Why This Stack?</h4>
                  <div className="space-y-2 text-sm">
                    {[
                      "Cost-effective: n8n is self-hosted, no per-execution fees",
                      "Scalability: Each component scales independently",
                      "Flexibility: Easy to add new integrations and workflows",
                      "Reliability: Built-in error handling and retry mechanisms",
                      "Future-proof: Ready for RFQ automation expansion"
                    ].map((reason, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white dark:bg-slate-900 px-6 rounded-lg border">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                    2
                  </div>
                  <span className="font-semibold">Government RFQ Experience</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-11 pt-4 space-y-4">
                <p className="text-sm text-muted-foreground">
                  Yes, I've built a complete RFQ automation system for a government contractor (see Project 3 above). 
                  This experience gives me unique insights into your Phase 2 expansion needs.
                </p>
                <div>
                  <h4 className="font-semibold mb-2">Key Experience Points</h4>
                  <div className="space-y-3">
                    <div className="border-l-2 border-blue-600 pl-4">
                      <p className="font-medium text-sm">Document Processing</p>
                      <p className="text-sm text-muted-foreground">
                        Built PDF parser handling various government formats (SAM.gov, agency-specific RFQs). 
                        Extraction of line items, specifications, quantities, and deadlines.
                      </p>
                    </div>
                    <div className="border-l-2 border-blue-600 pl-4">
                      <p className="font-medium text-sm">Intelligent Matching</p>
                      <p className="text-sm text-muted-foreground">
                        AI-powered system to match RFQ requirements against product catalog, considering 
                        specifications, certifications, and compliance requirements.
                      </p>
                    </div>
                    <div className="border-l-2 border-blue-600 pl-4">
                      <p className="font-medium text-sm">Quote Generation</p>
                      <p className="text-sm text-muted-foreground">
                        Automated quote generation with dynamic pricing, compliance clauses, 
                        and formatted according to agency requirements.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                    This experience means I can design your Phase 1 MVP with RFQ expansion in mind from day one.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white dark:bg-slate-900 px-6 rounded-lg border">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                    3
                  </div>
                  <span className="font-semibold">MVP Design for Future RFQ Expansion</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-11 pt-4 space-y-4">
                <p className="text-sm text-muted-foreground">
                  The key is building with modularity and scalability from the start. Here's my architectural approach:
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3">Phase 1 MVP - Foundation (Weeks 1-4)</h4>
                  <div className="space-y-2 ml-4">
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-5 h-5 rounded bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-blue-600 dark:text-blue-300">→</span>
                      </div>
                      <div>
                        <p className="font-medium">Modular Airtable Architecture</p>
                        <p className="text-muted-foreground">Separate bases for Products, Orders, Suppliers, and Documents (future RFQs)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-5 h-5 rounded bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-blue-600 dark:text-blue-300">→</span>
                      </div>
                      <div>
                        <p className="font-medium">Flexible n8n Workflows</p>
                        <p className="text-muted-foreground">Separate workflows for different processes, easily extended</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-5 h-5 rounded bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-blue-600 dark:text-blue-300">→</span>
                      </div>
                      <div>
                        <p className="font-medium">Document Upload Infrastructure</p>
                        <p className="text-sm text-muted-foreground">Build file handling capability from the start (used initially for invoices, ready for RFQs)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-3">Phase 2 Expansion - RFQ Module (Weeks 5-8)</h4>
                  <div className="space-y-2 ml-4">
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-5 h-5 rounded bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-purple-600 dark:text-purple-300">+</span>
                      </div>
                      <div>
                        <p className="font-medium">Add RFQ Processing Workflow</p>
                        <p className="text-muted-foreground">New n8n workflow connecting to existing product data</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-5 h-5 rounded bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-purple-600 dark:text-purple-300">+</span>
                      </div>
                      <div>
                        <p className="font-medium">AI Document Parser</p>
                        <p className="text-muted-foreground">Claude/GPT-4 integration for RFQ extraction</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-5 h-5 rounded bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-purple-600 dark:text-purple-300">+</span>
                      </div>
                      <div>
                        <p className="font-medium">Quote Generator</p>
                        <p className="text-muted-foreground">Leverages existing product catalog and pricing logic</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm font-semibold mb-2">Design Principle: Plug-and-Play Architecture</p>
                  <p className="text-sm text-muted-foreground">
                    Each module (Shopify sync, AI content, RFQ processing) operates independently but shares 
                    the same data layer. This means adding RFQ functionality won't require refactoring - just 
                    adding new workflows that plug into existing infrastructure.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white dark:bg-slate-900 px-6 rounded-lg border">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                    4
                  </div>
                  <span className="font-semibold">Cost & Timeline for Phase 1 MVP</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-11 pt-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Timeline</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Week 1</span>
                          <Badge variant="outline">Discovery</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Requirements gathering, API access setup, Airtable schema design
                        </p>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Week 2-3</span>
                          <Badge variant="outline">Development</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Core automation build: Shopify sync, supplier integration, n8n workflows
                        </p>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Week 4</span>
                          <Badge variant="outline">AI Integration</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Content generation setup, dashboard creation, testing
                        </p>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Week 5</span>
                          <Badge variant="outline">Launch</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Final testing, documentation, training, go-live support
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Investment</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm">Development</span>
                          <span className="font-semibold">$4,500</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Core automation system, workflows, integrations
                        </p>
                      </div>
                      <Separator />
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm">AI Integration</span>
                          <span className="font-semibold">$1,500</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          GPT-4 setup, content generation workflows
                        </p>
                      </div>
                      <Separator />
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm">Dashboard & Reports</span>
                          <span className="font-semibold">$1,000</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Airtable interfaces, reporting automation
                        </p>
                      </div>
                      <Separator />
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm">Documentation & Training</span>
                          <span className="font-semibold">$500</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          User guides, video tutorials, live training session
                        </p>
                      </div>
                      <Separator className="my-4" />
                      <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">Total Investment</span>
                          <span className="text-2xl font-bold text-blue-600">$7,500</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          Fixed price, 5-week delivery
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold mb-2 text-green-900 dark:text-green-100">What's Included</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      "Complete Shopify → Airtable → n8n system",
                      "AI content generation workflows",
                      "Supplier integration & order automation",
                      "Customer communication automation",
                      "Centralized dashboard & reports",
                      "Error handling & monitoring",
                      "Complete documentation",
                      "2-hour training session",
                      "30 days post-launch support",
                      "Source code & full access"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white dark:bg-slate-900 px-6 rounded-lg border">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                    5
                  </div>
                  <span className="font-semibold">Dropshipping & eCommerce Automation Experience</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-11 pt-4 space-y-4">
                <p className="text-sm text-muted-foreground">
                  Yes, I've built multiple automation systems specifically for dropshipping and eCommerce operations. 
                  This is actually my core specialty.
                </p>

                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Multi-Supplier Dropshipping Platform</CardTitle>
                      <CardDescription>Automated order fulfillment for 50+ suppliers</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm space-y-2">
                      <p className="text-muted-foreground">
                        Built complete automation handling 1,000+ orders/month across multiple suppliers with:
                      </p>
                      <ul className="space-y-1 ml-4">
                        <li>• Real-time inventory sync preventing overselling</li>
                        <li>• Automated order routing based on supplier, location, and pricing</li>
                        <li>• Customer notification system at each fulfillment stage</li>
                        <li>• Automated tracking number updates to Shopify</li>
                        <li>• Failed order retry logic with escalation</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Print-on-Demand Integration</CardTitle>
                      <CardDescription>Printful, Printify, and custom POD suppliers</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm space-y-2">
                      <p className="text-muted-foreground">
                        Connected multiple POD services with intelligent routing:
                      </p>
                      <ul className="space-y-1 ml-4">
                        <li>• Design file management and version control</li>
                        <li>• Cost comparison across suppliers for best margins</li>
                        <li>• Quality control workflow with mockup approval</li>
                        <li>• Automated product creation across platforms</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Dynamic Pricing Engine</CardTitle>
                      <CardDescription>Automated pricing optimization for dropshipping</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm space-y-2">
                      <p className="text-muted-foreground">
                        AI-powered pricing system that adjusts based on:
                      </p>
                      <ul className="space-y-1 ml-4">
                        <li>• Supplier cost changes (updated daily)</li>
                        <li>• Competitor pricing (web scraping integration)</li>
                        <li>• Desired profit margins by category</li>
                        <li>• Seasonal demand patterns</li>
                        <li>• Shopify sales data and conversion rates</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Why This Matters for Your Project</h4>
                  <p className="text-sm text-muted-foreground">
                    I understand the unique challenges of dropshipping: inventory sync issues, supplier communication 
                    delays, customer service at scale, and margin optimization. I've solved these problems before and 
                    can implement proven solutions for your specific needs, not theoretical approaches.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Server className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Backend & APIs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Python", "REST APIs", "GraphQL", "Webhooks", "PostgreSQL", "MongoDB"].map(skill => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Code className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Automation & Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["n8n", "Zapier", "Make.com", "Airtable", "Shopify", "WooCommerce", "AWS Lambda"].map(skill => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Frontend & UI</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "Responsive Design"].map(skill => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6 bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-2xl text-white">
          <h2 className="text-4xl font-bold">Ready to Automate Your Operations?</h2>
          <p className="text-xl opacity-90">
            Let's build a lean, scalable MVP that transforms your Shopify store operations 
            and sets the foundation for future RFQ automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="gap-2">
              Schedule a Call <Zap className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              Download Full Proposal
            </Button>
          </div>
          <div className="pt-8 flex items-center justify-center gap-8 text-sm opacity-75">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>5-Week Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Fixed Price</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>30-Day Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t">
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2025 AI Automation Specialist | Built with Next.js & shadcn/ui</p>
        </div>
      </footer>
    </div>
  );
}
