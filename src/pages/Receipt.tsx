
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Download, Printer } from "lucide-react";

interface ReceiptData {
  fullName: string;
  parentEmail: string;
  phone: string;
  class: string;
  dateOfBirth: string;
  address: string;
  registrationDate: string;
  registrationId: string;
  amount: number;
  paymentReference?: string;
  paymentStatus?: string;
}

const Receipt = () => {
  const [receiptData, setReceiptData] = useState<ReceiptData | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem('registrationData');
    if (storedData) {
      setReceiptData(JSON.parse(storedData));
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // In a real application, this would generate a PDF
    alert("PDF download functionality would be implemented here");
  };

  if (!receiptData) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">No Receipt Found</h1>
        <p className="text-gray-600">No registration data found. Please complete the registration process first.</p>
      </div>
    );
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN'
    }).format(amount / 100);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-NG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getClassDisplayName = (classValue: string) => {
    const classMap: { [key: string]: string } = {
      nursery: "Nursery (Ages 2-3)",
      "pre-kg": "Pre-Kindergarten (Ages 3-4)",
      kindergarten: "Kindergarten (Ages 4-5)",
      elementary: "Elementary (Ages 5-8)"
    };
    return classMap[classValue] || classValue;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <section className="text-center">
        <div className="flex items-center justify-center mb-4">
          <CheckCircle className="h-12 w-12 text-green-500 mr-3" />
          <h1 className="text-4xl font-bold text-gray-900">Registration Successful!</h1>
        </div>
        <p className="text-lg text-gray-600">
          Thank you for registering with Blessed Peace International Kiddies College
        </p>
      </section>

      {/* Receipt */}
      <Card className="border-orange-200 print:shadow-none">
        <CardHeader className="bg-orange-50 border-b border-orange-200">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl text-orange-600">Registration Receipt</CardTitle>
              <p className="text-gray-600 mt-1">Blessed Peace International Kiddies College</p>
            </div>
            <div className="text-right">
              <Badge className="bg-green-100 text-green-700 border-green-300">
                {receiptData.paymentStatus === 'successful' ? 'PAID' : 'PENDING'}
              </Badge>
              <p className="text-sm text-gray-600 mt-1">
                Receipt ID: {receiptData.registrationId}
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-8 space-y-6">
          {/* School Info */}
          <div className="text-center border-b pb-6">
            <h2 className="text-xl font-bold text-gray-900">Blessed Peace International Kiddies College</h2>
            <p className="text-gray-600">123 Education Street, Peaceful Valley, Lagos State, Nigeria</p>
            <p className="text-gray-600">Phone: +234 901 234 5678 | Email: info@blessedpeaceschool.edu.ng</p>
          </div>

          {/* Student Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Student Name</p>
                <p className="font-medium text-gray-900">{receiptData.fullName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Class</p>
                <p className="font-medium text-gray-900">{getClassDisplayName(receiptData.class)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Date of Birth</p>
                <p className="font-medium text-gray-900">{new Date(receiptData.dateOfBirth).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Registration Date</p>
                <p className="font-medium text-gray-900">{formatDate(receiptData.registrationDate)}</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Parent Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Parent/Guardian Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Email Address</p>
                <p className="font-medium text-gray-900">{receiptData.parentEmail}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Phone Number</p>
                <p className="font-medium text-gray-900">{receiptData.phone}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-600">Home Address</p>
                <p className="font-medium text-gray-900">{receiptData.address}</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Payment Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Information</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">Registration Fee:</span>
                <span className="font-medium text-gray-900">{formatCurrency(receiptData.amount)}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">Processing Fee:</span>
                <span className="font-medium text-gray-900">₦0.00</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between items-center text-lg font-semibold">
                <span className="text-gray-900">Total Paid:</span>
                <span className="text-orange-600">{formatCurrency(receiptData.amount)}</span>
              </div>
              {receiptData.paymentReference && (
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="text-sm text-gray-600">Payment Reference: {receiptData.paymentReference}</p>
                </div>
              )}
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-orange-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-orange-700 mb-3">Next Steps</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• You will receive a confirmation email within 24 hours</li>
              <li>• Our admissions team will contact you within 2-3 business days</li>
              <li>• Please bring this receipt and required documents for the enrollment meeting</li>
              <li>• For questions, contact us at +234 901 234 5678</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 print:hidden">
        <Button
          onClick={handlePrint}
          className="flex-1 bg-orange-600 hover:bg-orange-700"
        >
          <Printer className="h-4 w-4 mr-2" />
          Print Receipt
        </Button>
        <Button
          onClick={handleDownload}
          variant="outline"
          className="flex-1 border-orange-300 text-orange-700 hover:bg-orange-50"
        >
          <Download className="h-4 w-4 mr-2" />
          Download PDF
        </Button>
      </div>
    </div>
  );
};

export default Receipt;
