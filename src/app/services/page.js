import Link from "next/link";
import React from "react";

const Servicespage = () => {
  const services = [
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

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-2xl text-emerald-950 font-semibold mb-4">
              {service.service_name}
            </h2>
            <p className="text-gray-600">{service.description}</p>
            <Link href={`/services/${service.id}`}>
              <button className="btn bg-blue-500 p-2 rounded-2xl">Buy</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicespage;
