
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface RegistrationData {
  fullName: string;
  parentEmail: string;
  phone: string;
  class: string;
  dateOfBirth: string;
  address: string;
}

const Registration = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState<RegistrationData>({
    fullName: "",
    parentEmail: "",
    phone: "",
    class: "",
    dateOfBirth: "",
    address: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof RegistrationData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form
      if (!formData.fullName || !formData.parentEmail || !formData.phone || 
          !formData.class || !formData.dateOfBirth || !formData.address) {
        toast({
          title: "Error",
          description: "Please fill in all required fields.",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }

      // Store registration data in localStorage for receipt
      localStorage.setItem('registrationData', JSON.stringify({
        ...formData,
        registrationDate: new Date().toISOString(),
        registrationId: `REG${Date.now()}`,
        amount: 50000 // Registration fee in kobo (₦500)
      }));

      // Initialize Paystack payment
      const paystackHandler = (window as any).PaystackPop.setup({
        key: 'pk_test_xxxxxxxxxxxxxxxxxxxx', // Replace with your Paystack public key
        email: formData.parentEmail,
        amount: 50000, // Amount in kobo (₦500)
        currency: 'NGN',
        ref: `REG${Date.now()}`,
        metadata: {
          custom_fields: [
            {
              display_name: "Student Name",
              variable_name: "student_name",
              value: formData.fullName
            },
            {
              display_name: "Class",
              variable_name: "class",
              value: formData.class
            }
          ]
        },
        callback: function(response: any) {
          console.log('Payment successful:', response);
          toast({
            title: "Payment Successful!",
            description: "Registration completed successfully.",
          });
          
          // Update localStorage with payment reference
          const storedData = localStorage.getItem('registrationData');
          if (storedData) {
            const registrationData = JSON.parse(storedData);
            registrationData.paymentReference = response.reference;
            registrationData.paymentStatus = 'successful';
            localStorage.setItem('registrationData', JSON.stringify(registrationData));
          }
          
          // Redirect to receipt page
          navigate('/receipt');
        },
        onClose: function() {
          console.log('Payment window closed');
          setIsSubmitting(false);
        }
      });

      paystackHandler.openIframe();

    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Error",
        description: "An error occurred during registration. Please try again.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Student Registration</h1>
        <p className="text-lg text-gray-600">
          Complete the form below to register your child at Blessed Peace International Kiddies College
        </p>
      </section>

      {/* Registration Fee Info */}
      <Card className="border-orange-200 bg-orange-50">
        <CardContent className="p-6 text-center">
          <h2 className="text-xl font-semibold text-orange-700 mb-2">Registration Fee</h2>
          <p className="text-3xl font-bold text-orange-600 mb-2">₦500</p>
          <p className="text-gray-700">One-time registration fee (includes application processing and materials)</p>
        </CardContent>
      </Card>

      {/* Registration Form */}
      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle className="text-2xl text-orange-600">Registration Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="fullName">Student's Full Name *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="mt-1"
                placeholder="Enter student's full name"
                required
              />
            </div>

            <div>
              <Label htmlFor="parentEmail">Parent's Email Address *</Label>
              <Input
                id="parentEmail"
                type="email"
                value={formData.parentEmail}
                onChange={(e) => handleInputChange('parentEmail', e.target.value)}
                className="mt-1"
                placeholder="parent@example.com"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="mt-1"
                placeholder="+234 XXX XXX XXXX"
                required
              />
            </div>

            <div>
              <Label htmlFor="class">Class *</Label>
              <Select value={formData.class} onValueChange={(value) => handleInputChange('class', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select a class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nursery">Nursery (Ages 2-3)</SelectItem>
                  <SelectItem value="pre-kg">Pre-Kindergarten (Ages 3-4)</SelectItem>
                  <SelectItem value="kindergarten">Kindergarten (Ages 4-5)</SelectItem>
                  <SelectItem value="elementary">Elementary (Ages 5-8)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="dateOfBirth">Date of Birth *</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="address">Home Address *</Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className="mt-1"
                rows={3}
                placeholder="Enter complete home address"
                required
              />
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Pay Registration Fee (₦500)"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Add Paystack script */}
      <script src="https://js.paystack.co/v1/inline.js"></script>
    </div>
  );
};

export default Registration;
