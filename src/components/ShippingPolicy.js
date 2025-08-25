import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-6">Shipping Policy</h1>
      <div className="max-w-3xl mx-auto text-gray-700 text-justify">
        <p>
          Trucxo ensures timely dispatch of trucks once bookings are confirmed. 
          Estimated delivery timelines will be shared at the time of booking. 
        </p>
        <p className="mt-4">
          For delays due to unforeseen circumstances (weather, traffic, strikes), 
          we will notify customers promptly.  
          For support, email:{" "}
          <a href="mailto:operations@trucxo.com" className="text-blue-600">
            operations@trucxo.com
          </a>.
        </p>
      </div>
    </div>
  );
};

export default ShippingPolicy;
