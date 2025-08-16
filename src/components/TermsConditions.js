import React from "react";

const TermsConditions = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-6">Terms & Conditions</h1>
      <div className="max-w-3xl mx-auto text-gray-700 text-justify">
        <p>
          By using Trucxo, you agree to provide accurate booking details 
          and make payments only via our platform. We are a marketplace 
          connecting truck owners and factories; disputes must be resolved 
          directly between parties.
        </p>
        <p className="mt-4">
          Fraudulent activity may result in account suspension and legal action.  
          For queries, contact us at:{" "}
          <a href="mailto:support@trucxo.com" className="text-blue-600">
            support@trucxo.com
          </a>.
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
