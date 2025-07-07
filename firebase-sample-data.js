// Firebase Database Initialization Data
// This file contains sample data for the Firestore database
// Use this data to manually add documents in Firebase Console

const sampleTemplates = [
  {
    id: "ecommerce-starter",
    name: "E-Commerce Starter",
    category: "E-commerce",
    description: "Complete e-commerce solution with shopping cart, payment integration, inventory management, and admin dashboard. Perfect for starting your online business.",
    imageUrl: "https://placehold.co/400x300/3b82f6/ffffff?text=E-Commerce+Starter",
    price: 499,
    tags: ["react", "ecommerce", "stripe", "responsive"],
    features: [
      "Responsive design for all devices",
      "Payment gateway integration", 
      "Product catalog management",
      "Order tracking system",
      "SEO optimized structure"
    ],
    demoUrl: "https://demo.example.com/ecommerce",
    createdAt: new Date("2024-12-01"),
    updatedAt: new Date("2024-12-01"),
    rating: 4.9,
    reviews: 127,
    isPopular: true,
    isFeatured: true
  },
  {
    id: "saas-landing-pro", 
    name: "SaaS Landing Pro",
    category: "Landing Page",
    description: "High-converting landing page template designed specifically for SaaS products with pricing tables, feature highlights, and customer testimonials.",
    imageUrl: "https://placehold.co/400x300/10b981/ffffff?text=SaaS+Landing",
    price: 299,
    tags: ["react", "saas", "landing", "conversion"],
    features: [
      "Conversion-optimized layout",
      "Pricing table components", 
      "Customer testimonials section",
      "Integration-ready forms",
      "Mobile-first design"
    ],
    demoUrl: "https://demo.example.com/saas",
    createdAt: new Date("2024-11-28"),
    updatedAt: new Date("2024-11-28"), 
    rating: 4.8,
    reviews: 89,
    isPopular: false,
    isFeatured: false
  },
  {
    id: "blogger-pro",
    name: "Blogger Pro", 
    category: "Blog",
    description: "Professional blogging platform with content management system, comment functionality, newsletter integration, and social media sharing.",
    imageUrl: "https://placehold.co/400x300/8b5cf6/ffffff?text=Blogger+Pro",
    price: 399,
    tags: ["react", "blog", "cms", "social"],
    features: [
      "Content management system",
      "Comment and discussion system",
      "Newsletter signup integration", 
      "Social media sharing",
      "Search functionality"
    ],
    demoUrl: "https://demo.example.com/blog",
    createdAt: new Date("2024-11-25"),
    updatedAt: new Date("2024-11-25"),
    rating: 4.7,
    reviews: 67,
    isPopular: false,
    isFeatured: false
  },
  {
    id: "restaurant-deluxe",
    name: "Restaurant Deluxe",
    category: "Business", 
    description: "Elegant restaurant website with online menu, reservation system, gallery showcase, and location information. Perfect for hospitality businesses.",
    imageUrl: "https://placehold.co/400x300/f59e0b/ffffff?text=Restaurant+Site",
    price: 349,
    tags: ["react", "restaurant", "menu", "reservations"],
    features: [
      "Online menu display",
      "Table reservation system",
      "Photo gallery showcase",
      "Location and hours info", 
      "Contact and review forms"
    ],
    demoUrl: "https://demo.example.com/restaurant",
    createdAt: new Date("2024-11-20"),
    updatedAt: new Date("2024-11-20"),
    rating: 4.9,
    reviews: 156,
    isPopular: true,
    isFeatured: false
  },
  {
    id: "portfolio-creative",
    name: "Portfolio Creative",
    category: "Portfolio",
    description: "Modern portfolio template for creatives, designers, and developers with stunning animations and project showcases.",
    imageUrl: "https://placehold.co/400x300/8b5cf6/ffffff?text=Portfolio+Creative",
    price: 249,
    tags: ["react", "portfolio", "animations", "creative"],
    features: [
      "Stunning animations",
      "Project gallery",
      "Contact forms",
      "Resume download",
      "Dark mode support"
    ],
    demoUrl: "https://demo.example.com/portfolio",
    createdAt: new Date("2024-11-15"),
    updatedAt: new Date("2024-11-15"),
    rating: 4.6,
    reviews: 94,
    isPopular: true,
    isFeatured: true
  }
];

// Export for use
export default sampleTemplates;
