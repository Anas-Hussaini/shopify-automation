# Customization Guide

This guide helps you customize the portfolio to match your personal brand and specific project requirements.

## 📝 Content Customization

### 1. Personal Information

**Location**: `app/page.tsx`

#### Hero Section
```typescript
// Line ~26
<h1 className="text-5xl md:text-6xl font-bold tracking-tight">
  Build Intelligent
  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
    Automation Systems 
  </span>
  for Your Shopify Store
</h1>
```

**Customize**: Replace the headline with your unique value proposition.

#### Subtitle
```typescript
// Line ~33
<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
  Expert in creating lean, scalable automation solutions...
</p>
```

**Customize**: Update with your specific expertise and experience.

### 2. Skills & Competencies

**Location**: `app/page.tsx`, lines ~52-84

```typescript
const skills = [
  {
    icon: ShoppingCart,
    title: "Your Skill",
    description: "Your description",
    badge: "Your Badge"
  },
  // Add more skills
]
```

**To Add a New Skill**:
1. Import a new icon from `lucide-react`
2. Add a new object to the skills array
3. Customize title, description, and badge

### 3. Featured Projects

**Location**: `app/page.tsx`, lines ~95-309

Each project is in a `TabsContent` component:

```typescript
<TabsContent value="project1" className="mt-6">
  <Card>
    <CardHeader>
      <CardTitle>Your Project Title</CardTitle>
      <CardDescription>Your project description</CardDescription>
    </CardHeader>
    <CardContent>
      {/* Project details */}
    </CardContent>
  </Card>
</TabsContent>
```

**To Modify**:
- Change project titles
- Update challenge/solution descriptions
- Modify key features list
- Update technology badges
- Change results metrics

**To Add a New Project Tab**:
```typescript
// Add to TabsList
<TabsTrigger value="project4" className="py-3">
  Your New Project
</TabsTrigger>

// Add TabsContent
<TabsContent value="project4" className="mt-6">
  {/* Your project content */}
</TabsContent>
```

### 4. Proposal Answers

**Location**: `app/page.tsx`, lines ~316-682

Modify each `AccordionItem` to match your proposal:

```typescript
<AccordionItem value="item-1" className="...">
  <AccordionTrigger>
    Your Question
  </AccordionTrigger>
  <AccordionContent>
    Your detailed answer
  </AccordionContent>
</AccordionItem>
```

### 5. Technical Skills

**Location**: `app/page.tsx`, lines ~688-738

Update skill badges:

```typescript
{["Node.js", "Python", "Your-Skill"].map(skill => (
  <Badge key={skill} variant="secondary">{skill}</Badge>
))}
```

### 6. Contact & CTA

**Location**: `app/page.tsx`, lines ~743-776

Update call-to-action text and buttons:

```typescript
<h2 className="text-4xl font-bold">Your CTA Headline</h2>
<p className="text-xl opacity-90">
  Your compelling description
</p>
```

## 🎨 Styling Customization

### 1. Color Scheme

**Location**: `app/globals.css`

#### Light Mode Colors
```css
:root {
  --primary: oklch(0.205 0 0);        /* Primary color */
  --secondary: oklch(0.97 0 0);       /* Secondary color */
  --accent: oklch(0.97 0 0);          /* Accent color */
  /* ... more colors */
}
```

#### Dark Mode Colors
```css
.dark {
  --primary: oklch(0.922 0 0);        /* Primary color */
  --secondary: oklch(0.269 0 0);      /* Secondary color */
  --accent: oklch(0.269 0 0);         /* Accent color */
  /* ... more colors */
}
```

### 2. Gradient Colors

**In Components** (`app/page.tsx`):

```typescript
// Current gradient: blue to purple
<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">

// Change to green to teal:
<span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">

// Or use your own colors:
<span className="bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent">
```

### 3. Border Radius

**Location**: `app/globals.css`

```css
:root {
  --radius: 0.625rem;  /* Default: 10px */
}

/* Make more rounded: */
:root {
  --radius: 1rem;  /* 16px */
}

/* Make less rounded: */
:root {
  --radius: 0.25rem;  /* 4px */
}
```

### 4. Fonts

**Location**: `app/layout.tsx`

Current fonts: Geist Sans & Geist Mono

**To Change**:

```typescript
import { Inter, Roboto_Mono } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

// Update in body:
<body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
```

Then update `app/globals.css`:
```css
@theme inline {
  --font-sans: var(--font-inter);
  --font-mono: var(--font-roboto-mono);
}
```

### 5. Spacing & Layout

**Container Width** (`app/page.tsx`):

```typescript
// Current: max-w-4xl (768px)
<div className="max-w-4xl mx-auto">

// Wider:
<div className="max-w-6xl mx-auto">

// Narrower:
<div className="max-w-2xl mx-auto">
```

**Section Padding**:

```typescript
// Current vertical padding
<section className="container mx-auto px-4 py-16">

// More padding:
<section className="container mx-auto px-4 py-24">

// Less padding:
<section className="container mx-auto px-4 py-8">
```

## 🖼️ Adding Images/Media

### 1. Add Logo/Avatar

Create `app/page.tsx` modification:

```typescript
import Image from "next/image";

// In hero section:
<div className="flex flex-col items-center gap-4">
  <Image
    src="/your-photo.jpg"
    alt="Your Name"
    width={150}
    height={150}
    className="rounded-full"
  />
  <h1>Your Name</h1>
</div>
```

Add image to `/public/your-photo.jpg`

### 2. Add Project Screenshots

```typescript
// In project card:
<CardContent>
  <Image
    src="/projects/project1-screenshot.png"
    alt="Project 1 Screenshot"
    width={800}
    height={600}
    className="rounded-lg shadow-lg mb-4"
  />
  {/* Rest of content */}
</CardContent>
```

## 🔧 Component Customization

### 1. Add New Section

```typescript
// Add after existing sections in app/page.tsx:

<section className="container mx-auto px-4 py-16">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">
      New Section Title
    </h2>
    
    {/* Your content */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          Card content
        </CardContent>
      </Card>
    </div>
  </div>
</section>
```

### 2. Add Testimonials Section

```typescript
<section className="container mx-auto px-4 py-16 bg-slate-50 dark:bg-slate-900/50">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">
      Client Testimonials
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        {
          name: "Client Name",
          role: "Position, Company",
          quote: "Testimonial text..."
        }
      ].map((testimonial, i) => (
        <Card key={i}>
          <CardContent className="pt-6">
            <p className="text-muted-foreground mb-4">
              "{testimonial.quote}"
            </p>
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">
                {testimonial.role}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>
```

### 3. Add Contact Form

Install form dependencies:
```bash
npm install react-hook-form @hookform/resolvers zod
```

Add form components:
```bash
npx shadcn@latest add form input textarea
```

Create form component (simplified):
```typescript
import { useForm } from "react-hook-form";

function ContactForm() {
  const form = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };
  
  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>
  );
}
```

## 📱 Responsive Design Customization

### Breakpoints

Tailwind breakpoints used:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

**Example**:
```typescript
// Stack on mobile, 2 columns on tablet, 3 on desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

## 🎭 Adding Animations

Install framer-motion:
```bash
npm install framer-motion
```

Add animations:
```typescript
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Your content */}
</motion.div>
```

## 📊 Adding Analytics

### Google Analytics

```typescript
// app/layout.tsx
import Script from 'next/script';

<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

## 🔍 SEO Customization

### Metadata

**Location**: `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Your Custom Title",
  description: "Your custom description",
  keywords: ["keyword1", "keyword2"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Title",
    description: "Your Description",
    url: "https://yourdomain.com",
    siteName: "Your Site Name",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};
```

## 🚀 Performance Optimizations

### Image Optimization

Always use Next.js Image component:
```typescript
import Image from "next/image";

<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority // For above-the-fold images
  placeholder="blur" // Optional
/>
```

### Lazy Loading

```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

## 📝 Content Tips

1. **Be Specific**: Use concrete numbers and results
2. **Show, Don't Tell**: Use case studies over claims
3. **Match Job Requirements**: Reference specific tools and skills from job posting
4. **Call to Action**: Make next steps clear
5. **Professional Tone**: Balance confidence with humility

## 🔄 Version Control

Best practice for customizations:

```bash
# Create feature branch
git checkout -b customize-content

# Make changes
# ...

# Commit changes
git add .
git commit -m "Customize portfolio content"

# Merge back
git checkout main
git merge customize-content
```

## ✅ Customization Checklist

- [ ] Update hero headline and subtitle
- [ ] Add your skills and expertise
- [ ] Replace project examples with your work
- [ ] Customize proposal answers
- [ ] Update technical skills badges
- [ ] Change color scheme (optional)
- [ ] Add your photo/logo (optional)
- [ ] Update metadata for SEO
- [ ] Add contact information
- [ ] Test responsive design
- [ ] Verify all links work
- [ ] Proofread all content

---

**Questions?** Refer to the main README.md or Next.js documentation.

