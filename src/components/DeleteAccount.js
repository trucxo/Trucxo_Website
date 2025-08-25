import React from "react";

const DeleteAccount = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold">Request Account Deletion</h1>
          <p className="text-gray-500 mt-2">Last Updated: August 26, 2025</p>
        </header>

        <div className="bg-white rounded-2xl shadow p-6 md:p-10 text-gray-800">
          <p className="mb-6">
            If you wish to permanently delete your <strong>Trucxo</strong> account and associated data, 
            you can submit a deletion request by following the instructions below.
          </p>

          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-3">1. How to Request Deletion</h2>
            <p className="mb-3">
              To request account deletion, please send an email to our support team at{" "}
              <a href="mailto:operations@trucxo.com" className="text-blue-600 underline">
                operations@trucxo.com
              </a>{" "}
              with the subject line <em>“Account Deletion Request”</em>. 
              Include the following details in your request:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Registered name and phone number/email</li>
              <li>Your role (Truck Owner / Load Provider / Driver)</li>
              <li>Reason for account deletion (optional)</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-3">2. What Happens After Deletion</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your account and associated profile details (name, email, phone, trips, bookings) will be permanently deleted within <strong>7 business days</strong>.</li>
              <li>Some data such as invoices, receipts, or legally required records may be retained for compliance purposes.</li>
              <li>Once deleted, your account cannot be restored. You will need to create a new account if you wish to use Trucxo again.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-3">3. Data Retention Policy</h2>
            <p className="mb-3">
              We only retain data necessary for operational, legal, or regulatory purposes. 
              Non-essential personal data is deleted permanently after your account removal request is processed.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-3">4. Support</h2>
            <p>
              If you have any questions about account or data deletion, please contact us at{" "}
              <a href="mailto:operations@trucxo.com" className="text-blue-600 underline">
                operations@trucxo.com
              </a>.
            </p>
          </section>
        </div>

        <footer className="text-center text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} Trucxo. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default DeleteAccount;
