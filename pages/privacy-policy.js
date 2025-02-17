import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white shadow">
          <CardHeader className="border-b border-gray-200 bg-gray-50">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Privacy Policy for Don't Get Leaked
            </CardTitle>
            <p className="mt-1 text-sm text-gray-500">
              Last Updated: February 17, 2025
            </p>
          </CardHeader>
          <CardContent className="px-6 py-5 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Introduction</h2>
              <p className="text-gray-700">
                Welcome to Don't Get Leaked ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Chrome extension.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Free Users</h3>
                  <p className="text-gray-700">
                    For users of our free plan, we do not collect any personal information. The extension functions entirely locally on your device.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Premium Users</h3>
                  <p className="text-gray-700">
                    For premium users, we collect:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-gray-700">
                    <li>Email address and basic profile information through Google login or email/password authentication</li>
                    <li>This information is managed securely by Clerk Authentication provider</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Cookies and Storage</h2>
              <p className="text-gray-700">
                Our extension requires Chrome permissions for:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Cookies: To maintain user sessions for logged-in users</li>
                <li>Storage: To save extension settings locally</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Payment Processing</h2>
              <ul className="list-disc pl-6 text-gray-700">
                <li>All payments are processed through Razorpay</li>
                <li>We do not store any payment information</li>
                <li>For payment-related concerns, please refer to Razorpay's privacy policy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Extension Functionality</h2>
              <p className="text-gray-700">
                Our extension offers:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Free integrations: YouTube, Google, Gmail, WhatsApp</li>
                <li>Premium integrations: Additional websites (available with one-time payment)</li>
                <li>Note: Integration functionality may temporarily be affected by website updates</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Information</h2>
              <p className="text-gray-700">
                For privacy-related questions or concerns:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Email: sksoyebakhter2003@gmail.com</li>
                <li>Visit: /contact page on our website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Your Rights</h2>
              <p className="text-gray-700">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Access your personal information</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of analytics</li>
                <li>Request information about how your data is used</li>
              </ul>
              <p className="mt-3 text-gray-700">
                Contact us using the information above to exercise these rights.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;