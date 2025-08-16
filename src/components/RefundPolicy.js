import React from "react";

const RefundPolicy = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-6">Refund & Cancellation Policy</h1>
      <div className="max-w-3xl mx-auto text-gray-700 text-justify">
        <p>
          Cancellations must be raised within 24 hours of booking, 
          provided the truck is not dispatched. Refunds (if applicable) 
          are processed to the original payment method within 7–10 working days. 
        </p>
        <p className="mt-4">
          No refunds are available for completed trips.  
          For refund queries, email us at:{" "}
          <a href="mailto:support@trucxo.com" className="text-blue-600">
            support@trucxo.com
          </a>.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
