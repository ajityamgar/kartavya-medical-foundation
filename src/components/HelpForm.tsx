import { useState } from 'react';
import { Send, Heart, CheckCircle } from 'lucide-react';

const HelpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    request_type: 'general',
    isEmergency: false,
    agreeToTerms: false,
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      setSubmitStatus('idle');

      // Simulate API request
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log('Submitted Data:', formData);

      setSubmitStatus('success');

      // Reset form
      setFormData({
        name: '',
        age: '',
        email: '',
        phone: '',
        address: '',
        message: '',
        request_type: 'general',
        isEmergency: false,
        agreeToTerms: false,
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="help" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Can You <span className="text-[#1B8A5A]">Help?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you want to donate, volunteer, or bring a medical camp to your village,
            we'd love to hear from you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#1B8A5A] to-[#156B47] text-white rounded-3xl p-10">
              <h3 className="text-3xl font-bold mb-6">Make a Difference Today</h3>

              <div className="space-y-6">
                {['Donate', 'Volunteer', 'Request a Camp'].map((title, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
                      <Heart className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{title}</h4>
                      <p className="text-white/90">
                        Help us create real healthcare impact in rural communities.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Quick Stats</h4>
              <div className="space-y-4">
                <div className="flex justify-between pb-4 border-b">
                  <span>Average cost per child</span>
                  <span className="font-bold text-[#1B8A5A]">₹200</span>
                </div>
                <div className="flex justify-between pb-4 border-b">
                  <span>Medicines per camp</span>
                  <span className="font-bold text-[#1B8A5A]">₹5,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Full camp sponsorship</span>
                  <span className="font-bold text-[#1B8A5A]">₹10,000</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  We've received your request and will contact you soon.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="text-[#1B8A5A] font-semibold"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-xl"
                />

                <input
                  type="number"
                  name="age"
                  required
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-xl"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-xl"
                />

                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-xl"
                />

                <input
                  type="text"
                  name="address"
                  required
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-xl"
                />

                <select
                  name="request_type"
                  value={formData.request_type}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-xl"
                >
                  <option value="donation">Make a Donation</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="camp_request">Request Medical Camp</option>
                  <option value="general">General Inquiry</option>
                </select>

                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-xl"
                />

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    required
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span className="text-sm">
                    I agree to share my information for assistance.
                  </span>
                </div>

                {submitStatus === 'error' && (
                  <div className="bg-red-100 text-red-600 p-3 rounded">
                    Submission failed. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1B8A5A] text-white py-3 rounded-xl flex justify-center items-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpForm;
