
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Academics = () => {
  const programs = [
    {
      title: "Nursery (Ages 2-3)",
      description: "Foundation program focusing on basic skills, social interaction, and play-based learning.",
      subjects: ["Basic Numbers", "Letter Recognition", "Creative Play", "Social Skills", "Motor Development"],
      duration: "Full Day / Half Day"
    },
    {
      title: "Pre-Kindergarten (Ages 3-4)",
      description: "Pre-academic program introducing structured learning through engaging activities.",
      subjects: ["Pre-Math", "Pre-Reading", "Science Exploration", "Art & Crafts", "Music & Movement"],
      duration: "Full Day"
    },
    {
      title: "Kindergarten (Ages 4-5)",
      description: "Comprehensive program preparing students for elementary education.",
      subjects: ["Mathematics", "English Language", "Science", "Social Studies", "Physical Education"],
      duration: "Full Day"
    },
    {
      title: "Elementary (Ages 5-8)",
      description: "Advanced curriculum building strong academic foundations and critical thinking skills.",
      subjects: ["Advanced Math", "Literature", "General Science", "History", "Computer Studies", "Foreign Language"],
      duration: "Full Day"
    }
  ];

  const features = [
    {
      title: "Small Class Sizes",
      description: "Maximum 15 students per class ensuring personalized attention for every child."
    },
    {
      title: "Modern Curriculum",
      description: "Updated teaching methods incorporating technology and hands-on learning experiences."
    },
    {
      title: "Assessment Methods",
      description: "Continuous assessment through projects, presentations, and interactive evaluations."
    },
    {
      title: "Extracurricular Activities",
      description: "Music, art, sports, and club activities to develop well-rounded personalities."
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Academic Programs</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our comprehensive academic programs are designed to nurture intellectual curiosity 
          and provide a strong foundation for lifelong learning.
        </p>
      </section>

      {/* Programs */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Programs</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-orange-600">{program.title}</CardTitle>
                <Badge variant="outline" className="w-fit border-orange-300 text-orange-700">
                  {program.duration}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{program.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Subjects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.subjects.map((subject, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-orange-50 text-orange-700">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Academic Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-orange-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Schedule */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Daily Schedule</h2>
        <Card className="max-w-2xl mx-auto border-orange-200">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium text-gray-900">7:30 - 8:00 AM</span>
                <span className="text-gray-700">Arrival & Free Play</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium text-gray-900">8:00 - 9:00 AM</span>
                <span className="text-gray-700">Morning Circle & Calendar</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium text-gray-900">9:00 - 10:30 AM</span>
                <span className="text-gray-700">Core Academic Session 1</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium text-gray-900">10:30 - 11:00 AM</span>
                <span className="text-gray-700">Snack & Outdoor Play</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium text-gray-900">11:00 - 12:30 PM</span>
                <span className="text-gray-700">Core Academic Session 2</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium text-gray-900">12:30 - 1:30 PM</span>
                <span className="text-gray-700">Lunch & Rest Time</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium text-gray-900">1:30 - 2:30 PM</span>
                <span className="text-gray-700">Arts & Enrichment</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">2:30 - 3:00 PM</span>
                <span className="text-gray-700">Cleanup & Dismissal</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Academics;
