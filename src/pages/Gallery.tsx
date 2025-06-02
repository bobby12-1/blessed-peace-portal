
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1587051391404-f85ac0e46e6a",
      alt: "Students in classroom",
      title: "Interactive Learning"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      alt: "Kids playing outdoors",
      title: "Outdoor Activities"
    },
    {
      src: "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6",
      alt: "Art and crafts session",
      title: "Creative Arts"
    },
    {
      src: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65",
      alt: "Library reading time",
      title: "Reading Corner"
    },
    {
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      alt: "Science experiment",
      title: "Science Exploration"
    },
    {
      src: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3",
      alt: "Music class",
      title: "Music & Movement"
    },
    {
      src: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91",
      alt: "Graduation ceremony",
      title: "Graduation Day"
    },
    {
      src: "https://images.unsplash.com/photo-1607988795691-3d0147b43231",
      alt: "Sports activities",
      title: "Physical Education"
    },
    {
      src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30",
      alt: "Computer class",
      title: "Technology Learning"
    }
  ];

  const events = [
    {
      title: "Annual Sports Day",
      date: "March 2024",
      description: "Students showcased their athletic abilities in various sports competitions."
    },
    {
      title: "Science Fair",
      date: "April 2024",
      description: "Young scientists presented their innovative projects and experiments."
    },
    {
      title: "Cultural Festival",
      date: "May 2024",
      description: "A celebration of diversity with performances from different cultures."
    },
    {
      title: "Art Exhibition",
      date: "June 2024",
      description: "Students' creative masterpieces displayed for parents and community."
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">School Gallery</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Take a glimpse into our vibrant school life through these memorable moments 
          and exciting activities.
        </p>
      </section>

      {/* Image Gallery */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">School Life</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden border-orange-200 hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-center text-gray-900">{image.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Events */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Recent Events</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="border-orange-200">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                  <span className="text-sm text-orange-600 font-medium">{event.date}</span>
                </div>
                <p className="text-gray-700">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="text-center">
        <Card className="max-w-2xl mx-auto border-orange-200 bg-orange-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Virtual School Tour</h2>
            <p className="text-gray-700 mb-6">
              Interested in seeing more of our facilities? Schedule a virtual tour to explore 
              our classrooms, playground, library, and other learning spaces.
            </p>
            <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
              Schedule Virtual Tour
            </button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Gallery;
