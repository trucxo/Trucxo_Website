import React from 'react';

const Policies = () => {
  return (
    <div id="policies" className="bg-gray-100 py-12">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-black-900 uppercase font-bold">
            Policies
          </h2>

          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-black"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-black-900">
            Legal & Compliance Information
          </h2>
        </div>

        <div className="px-12" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
            
            {/* Privacy Policy */}
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-6 group">
              <div className="m-2 text-justify text-sm">
                <h2 className="font-semibold my-4 text-2xl text-center">Privacy Policy</h2>
                <p className="text-md font-medium">
                  At <strong>Trucxo</strong>, we are committed to protecting your privacy. 
                  We only collect essential data like name, email, and GST/PAN for 
                  account creation and booking purposes. Payment details are processed 
                  securely via Razorpay — we never store your card or bank details. 
                  For queries, reach us at 
                  <a href="mailto:operations@trucxo.com" className="text-blue-600 ml-1">
                    operations@trucxo.com
                  </a>.
                </p>
              </div>
            </div>

            {/* Refund & Cancellation Policy */}
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-6 group">
              <div className="m-2 text-justify text-sm">
                <h2 className="font-semibold my-4 text-2xl text-center">
                  Refund & Cancellation
                </h2>
                <p className="text-md font-medium">
                  Cancellations must be raised within 24 hours of booking, 
                  provided the truck is not dispatched. Refunds (if applicable) 
                  are processed to the original payment method within 7–10 working days. 
                  No refunds are available for completed trips. Contact us at 
                  <a href="mailto: operations@trucxo.com" className="text-blue-600 ml-1">
                     operations@trucxo.com
                  </a>.
                </p>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-6 group">
              <div className="m-2 text-justify text-sm">
                <h2 className="font-semibold my-4 text-2xl text-center">
                  Terms & Conditions
                </h2>
                <p className="text-md font-medium">
                  By using Trucxo, you agree to provide accurate booking details 
                  and make payments only via our platform. We are a marketplace 
                  connecting truck owners and factories; disputes must be resolved 
                  directly between parties. Fraudulent activity may result in account 
                  suspension and legal action. Contact us at 
                  <a href="mailto: operations@trucxo.com" className="text-blue-600 ml-1">
                    operations@trucxo.com
                  </a>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Policies;
