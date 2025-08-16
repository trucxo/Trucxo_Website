import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
      <div className="max-w-3xl mx-auto text-gray-700 text-justify">
        <p>
          At <strong>Trucxo</strong>, we are committed to protecting your privacy. 
          We only collect essential data like name, email, and GST/PAN for 
          account creation and booking purposes. Payment details are processed 
          securely via Razorpay — we never store your card or bank details. 
        </p>
        <p className="mt-4">
          For any privacy concerns, contact us at:{" "}
          <a href="mailto:support@trucxo.com" className="text-blue-600">
            support@trucxo.com
          </a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
