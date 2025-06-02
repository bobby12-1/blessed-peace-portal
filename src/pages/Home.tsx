
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Blessed Peace International Kiddies College
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Nurturing Young Minds for a Bright Future
            </p>
            <Link to="/registration">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-3">
                Enroll Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <Card className="border-orange-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Quality Education</h3>
            <p className="text-gray-600">
              Comprehensive curriculum designed to develop critical thinking and creativity in young learners.
            </p>
          </CardContent>
        </Card>

        <Card className="border-orange-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Caring Environment</h3>
            <p className="text-gray-600">
              Safe and nurturing environment where every child feels valued and supported in their growth.
            </p>
          </CardContent>
        </Card>

        <Card className="border-orange-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expert Teachers</h3>
            <p className="text-gray-600">
              Dedicated and qualified teachers committed to bringing out the best in every student.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* About Preview */}
      <section className="bg-gray-50 rounded-lg p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Our School</h2>
          <p className="text-lg text-gray-700 mb-8">
            At Blessed Peace International Kiddies College, we believe in nurturing young minds through 
            innovative teaching methods, character development, and a supportive learning environment. 
            Our mission is to prepare students for success in academics and life.
          </p>
          <Link to="/about">
            <Button className="bg-orange-600 hover:bg-orange-700">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
