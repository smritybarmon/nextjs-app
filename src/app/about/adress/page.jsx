import React from "react";

export default function AdressPage() {
  return (
    <div className="container mx-auto px-4 py-12 ">
      <h1 className="text-4xl font-bold text-center mb-8">Contact & Address</h1>

      <div className="max-w-3xl mx-auto shadow-lg rounded-lg p-8">
        <p className="text-lg mb-4">
          <span className="font-semibold">Company Name:</span> My Company Pvt.
          Ltd.
        </p>
        <p className="text-lg mb-4">
          <span className="font-semibold">Address:</span> 123 Main Street, Suite
          456, New York, NY 10001, USA
        </p>
        <p className="text-lg mb-4">
          <span className="font-semibold">Phone:</span> +1 (123) 456-7890
        </p>
        <p className="text-lg mb-4">
          <span className="font-semibold">Email:</span>{" "}
          <a
            href="mailto:info@mycompany.com"
            className="text-blue-500 hover:underline"
          >
            info@mycompany.com
          </a>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Location</h2>

        {/* Google Map Embed */}
        <div className="w-full h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.5264713861074!2d-74.00594128459326!3d40.7127759793311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuMiJX!5e0!3m2!1sen!2sus!4v1616585657223!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
