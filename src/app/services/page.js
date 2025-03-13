import React from "react";

const Servicespage = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "We build responsive and modern websites to meet your business needs.",
    },
    {
      title: "App Development",
      description: "Custom mobile apps for iOS and Android platforms.",
    },
    {
      title: "UI/UX Design",
      description:
        "Creating beautiful and user-friendly designs for better user experiences.",
    },
    {
      title: "SEO Optimization",
      description: "Improve your website ranking and reach a wider audience.",
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
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicespage;
