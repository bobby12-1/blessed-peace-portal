
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Our School</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Blessed Peace International Kiddies College has been a beacon of educational excellence 
          for over a decade, shaping young minds and building character.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8">
        <Card className="border-orange-200">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-600">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              To provide quality education that nurtures the intellectual, emotional, and social 
              development of every child in a safe, caring, and stimulating environment. We are 
              committed to fostering creativity, critical thinking, and character development.
            </p>
          </CardContent>
        </Card>

        <Card className="border-orange-200">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-600">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              To be a leading educational institution that produces confident, compassionate, and 
              capable global citizens who will make positive contributions to society and excel 
              in their chosen fields.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* History */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our History</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Founded in 2010, Blessed Peace International Kiddies College began with a simple yet 
            profound vision: to create an educational environment where every child could thrive. 
            Our founder, Mrs. Sarah Johnson, established the school with the belief that early 
            childhood education forms the foundation for lifelong learning.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Over the years, we have grown from a small preschool with 20 students to a comprehensive 
            educational institution serving over 300 students from nursery through elementary levels. 
            Our commitment to excellence has earned us recognition as one of the premier educational 
            institutions in the region.
          </p>
          <p className="text-lg text-gray-700">
            Today, we continue to evolve and adapt our teaching methods to meet the changing needs 
            of our students while maintaining our core values of integrity, compassion, and excellence.
          </p>
        </div>
      </section>

      {/* Values */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center border-orange-200">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">I</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">
                We uphold honesty, transparency, and ethical behavior in all our interactions.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-orange-200">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">E</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">
                We strive for the highest standards in education and personal development.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-orange-200">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">C</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Compassion</h3>
              <p className="text-gray-600 text-sm">
                We care deeply for each student and foster empathy and kindness.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-orange-200">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">R</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Respect</h3>
              <p className="text-gray-600 text-sm">
                We value diversity and treat everyone with dignity and respect.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
