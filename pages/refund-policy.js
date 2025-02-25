import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const RefundPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white shadow">
          <CardHeader className="border-b border-gray-200 bg-gray-50">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Refund Policy for Don't Get Leaked
            </CardTitle>
            <p className="mt-1 text-sm text-gray-500">
              Last Updated: February 25, 2025
            </p>
          </CardHeader>
          <CardContent className="px-6 py-5 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Refund Eligibility</h2>
              <p className="text-gray-700">
                We want you to be completely satisfied with your purchase of the Don't Get Leaked Chrome extension premium features. If you are not satisfied for any reason, you may request a refund within 30 days of your purchase date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Refund Process</h2>
              <p className="text-gray-700">
                To request a refund, please contact our support team via email at sksoyebakhter2003@gmail.com with your purchase details. Please include your order number and the email address used for the purchase.
              </p>
              <p className="text-gray-700 mt-3">
                Our team will review your request and process your refund within 5-7 business days. Refunds will be issued using the original payment method used for the purchase.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Refund Conditions</h2>
              <p className="text-gray-700">
                Please note the following conditions regarding our refund policy:
              </p>
              <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
                <li>Refund requests must be submitted within 30 days of the original purchase date</li>
                <li>After the 30-day refund period has expired, we are unable to offer refunds</li>
                <li>We reserve the right to refuse refund requests if we detect abuse of the refund policy</li>
                <li>If you received a refund, your premium access will be revoked</li>
                <li>Processing fees charged by payment processors may not be refundable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Exceptions</h2>
              <p className="text-gray-700">
                In cases where the extension is not functioning as described due to technical issues that we cannot resolve within a reasonable timeframe, we may extend the refund period beyond 30 days. This will be evaluated on a case-by-case basis.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Information</h2>
              <p className="text-gray-700">
                If you have any questions about our refund policy, please contact us:
              </p>
              <div className="mt-3 text-gray-700">
                <p>Email: sksoyebakhter2003@gmail.com</p>
                <p className="mt-2">Address:</p>
                <address className="not-italic mt-1">
                  Don't Get Leaked<br />
                  Madhakhali, Bhupatinagar<br />
                  Purbar Medinipur, West Bengal<br />
                  India, 721425
                </address>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RefundPolicyPage;