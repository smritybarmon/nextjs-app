import React from "react";

export default function ServicesDetaolsPage({ params }) {
  const data = [
    {
      id: "001",
      service_name: "ProConsult",
      category: "Consulting",
      price_monthly: "$2,500",
      description:
        "Expert business consulting to improve operations and strategy.",
      image: "https://ibb.co.com/8VH4FYm",
    },
    {
      id: "002",
      service_name: "MarketBoost",
      category: "Marketing",
      price_monthly: "$1,200",
      description:
        "Full-service digital marketing including SEO, PPC, and social media campaigns.",
      image: "https://ibb.co.com/8VH4FYm",
    },
    {
      id: "003",
      service_name: "TechGuard",
      category: "IT & Cybersecurity",
      price_monthly: "$3,000",
      description:
        "Comprehensive IT management with 24/7 cybersecurity protection and support.",
      image: "https://ibb.co.com/8VH4FYm",
    },
    {
      id: "004",
      service_name: "CloudWave",
      category: "Cloud Services",
      price_monthly: "$1,500",
      description: "Scalable cloud hosting and secure data storage solutions.",
      image: "https://ibb.co.com/8VH4FYm",
    },
    {
      id: "005",
      service_name: "CreativeSpark",
      category: "Creative & Design",
      price_monthly: "$1,000",
      description:
        "Professional branding, graphic design, and visual identity creation.",
      image: "https://ibb.co.com/8VH4FYm",
    },
    {
      id: "006",
      service_name: "LogistiPro",
      category: "Logistics & Supply Chain",
      price_monthly: "$2,200",
      description:
        "End-to-end logistics, shipping, and inventory management services.",
      image: "https://ibb.co.com/8VH4FYm",
    },
    {
      id: "007",
      service_name: "FinanceFlow",
      category: "Financial Services",
      price_monthly: "$1,800",
      description:
        "Complete bookkeeping, payroll processing, and tax consulting services.",
      image: "https://ibb.co.com/8VH4FYm",
    },
    {
      id: "008",
      service_name: "AdminEase",
      category: "Admin & Virtual Assistants",
      price_monthly: "$700",
      description:
        "Affordable virtual assistant services for everyday business needs.",
      image: "https://ibb.co.com/8VH4FYm",
    },
    {
      id: "009",
      service_name: "WebMasters",
      category: "IT & Software",
      price_monthly: "$2,000",
      description:
        "Custom website development, hosting, and maintenance packages.",
      image: "https://ibb.co.com/8VH4FYm",
    },
    {
      id: "010",
      service_name: "DataSense AI",
      category: "Data & AI Services",
      price_monthly: "$3,500",
      description:
        "AI-powered data analytics, reporting, and business intelligence solutions.",
      image: "https://ibb.co.com/8VH4FYm",
    },
  ];
  const id = params.id;
  const service = data.find((item) => item.id === id);
  if (!service) {
    return <p>Service not found</p>;
  } else {
    return (
      <div>
        <h1>ServicesDetaolsPage</h1>
        <p>ID: {id}</p>
        <p> category:{service.category}</p>
      </div>
    );
  }
}
