import ContactForm from "@/components/interactive/ContactForm";

const TrainingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Professional Training
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Learn from the best! Join our professional training programs 
            and master the art of beauty with Lulu&apos;s expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Training Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Training Programs</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary-gold pl-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Lash Extension Mastery</h3>
                  <p className="text-gray-600 mb-2">Complete course covering classic, volume, and hybrid techniques.</p>
                  <span className="text-sm text-primary-gold font-medium">3-day intensive program</span>
                </div>

                <div className="border-l-4 border-primary-gold pl-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Nail Art & Design</h3>
                  <p className="text-gray-600 mb-2">Learn advanced nail art techniques and design principles.</p>
                  <span className="text-sm text-primary-gold font-medium">2-day workshop</span>
                </div>

                <div className="border-l-4 border-primary-gold pl-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Brow Shaping & Tinting</h3>
                  <p className="text-gray-600 mb-2">Master the art of perfect brow shaping and coloring.</p>
                  <span className="text-sm text-primary-gold font-medium">1-day intensive</span>
                </div>

                <div className="border-l-4 border-primary-gold pl-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Business Development</h3>
                  <p className="text-gray-600 mb-2">Learn how to build and grow your beauty business.</p>
                  <span className="text-sm text-primary-gold font-medium">2-day business course</span>
                </div>
              </div>
            </div>

            <div className="bg-primary-gold rounded-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Why Choose Our Training?</h3>
              <ul className="space-y-2">
                <li>• Certified instructors with years of experience</li>
                <li>• Hands-on practice with real clients</li>
                <li>• Comprehensive course materials included</li>
                <li>• Ongoing support after training</li>
                <li>• Certification upon completion</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get Started Today</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingPage;
