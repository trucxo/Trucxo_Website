import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-gray-500 mt-2">Last Updated: August 19, 2025</p>
        </header>

        <div className="bg-white rounded-2xl shadow p-6 md:p-10 text-gray-800">
          <p className="mb-6">
            This Privacy Policy explains how <strong>Trucxo</strong> (“we”, “us”, or “our”)
            collects, uses, discloses, and protects information when you use our
            mobile application and related services (the “App”). By using the App, you
            agree to this Policy.
          </p>

          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Account Details:</strong> Name, email, phone, business info (e.g., GST/PAN)
                provided during sign up or profile updates.
              </li>
              <li>
                <strong>Usage & Diagnostics:</strong> App interactions, device/OS, app version,
                crash logs, and performance metrics to improve reliability.
              </li>
              <li>
                <strong>Location (optional):</strong> Approximate/precise location when you enable it
                for features like nearby services or region settings.
              </li>
              <li>
                <strong>Payments:</strong> Processed securely via integrated gateways (e.g., Razorpay).
                We do <em>not</em> store full card or bank details on our servers.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-3">2. How We Use Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and improve the App and its features.</li>
              <li>Personalize your experience and relevant functionality.</li>
              <li>Communicate with you about updates, security alerts, and support.</li>
              <li>Prevent fraud, enforce our terms, and comply with legal obligations.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-3">3. Sharing & Disclosure</h2>
            <p className="mb-3">
              We do <strong>not</strong> sell your personal information. We may share information with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Service Providers:</strong> Cloud hosting, analytics, customer support, and
                payment processors who act on our behalf under contract.
              </li>
              <li>
                <strong>Legal/Safety:</strong> When required by law or to protect rights, safety, or
                investigate misuse.
              </li>
              <li>
                <strong>Business Transfers:</strong> In a merger, acquisition, or asset sale with
                appropriate safeguards.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-3">4. App Permissions</h2>
            <p className="mb-3">
              Depending on your use, the App may request permissions such as Location,
              Camera/Photos/Storage, Notifications, and Network access. You can revoke
              permissions anytime in device settings (some features may stop working).
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-3">5. Cookies & Similar Technologies</h2>
            <p className="mb-3">
              If our App or web pages use cookies, SDKs, or local storage, they are
              used for core functionality, analytics, and improving user experience.
              You can control cookies via your browser settings where applicable.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-3">6. Data Retention</h2>
            <p className="mb-3">
              We keep personal information only as long as necessary for the purposes
              described in this Policy, to comply with legal requirements, resolve
              disputes, and enforce agreements. When no longer needed, data is deleted
              or anonymized.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-3">7. Data Security</h2>
            <p className="mb-3">
              We implement administrative, technical, and physical safeguards designed
              to protect information. However, no method of transmission or storage is
              100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-3">8. Children’s Privacy</h2>
            <p className="mb-3">
              The App is not directed to children under 13, and we do not knowingly
              collect personal information from children. If you believe a child has
              provided personal data, please contact us so we can delete it.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-3">9. Your Rights & Choices</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access, correct, update, or delete your information (subject to law).</li>
              <li>Withdraw consent where processing relies on consent.</li>
              <li>Object to or restrict certain processing and request portability where applicable.</li>
            </ul>
            <p className="mt-3">
              To exercise rights or request account/data deletion, email{" "}
              <a href="mailto:support@trucxo.com" className="text-blue-600 underline">
                support@trucxo.com
              </a>. We may verify your identity before fulfilling requests.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-3">10. International Transfers</h2>
            <p className="mb-3">
              Your information may be processed in countries other than your own.
              Where required, we use appropriate safeguards (e.g., contractual
              commitments) to protect your data.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-3">11. Changes to This Policy</h2>
            <p className="mb-3">
              We may update this Privacy Policy from time to time. We will post the
              updated version here and revise the “Last Updated” date above. Your
              continued use of the App after changes means you accept the updated Policy.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-3">12. Contact Us</h2>
            <p>
              For questions or concerns about this Policy or our data practices, contact:
              <br />
              Email:{" "}
              <a href="mailto:support@trucxo.com" className="text-blue-600 underline">
                support@trucxo.com
              </a>
              <br />
              Address: {/* Optional: Replace with your business address */}
              <span className="text-gray-500"> Darlaghat teh Arki Distt Solan Himachal Pradesh </span>
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

export default PrivacyPolicy;
