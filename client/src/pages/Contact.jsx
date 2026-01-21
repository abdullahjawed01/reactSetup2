import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us 📞</h1>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Have questions, feedback, or want to make a reservation?  
          We’d love to hear from you.
        </p>
      </div>

 
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
       
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Get in Touch
          </h2>

          <div className="space-y-4 text-gray-600">
            <p>
              📍 <span className="font-medium">Address:</span>  
              123 Food Street, Hyderabad, India
            </p>
            <p>
              📞 <span className="font-medium">Phone:</span>  
              +91 98765 43210
            </p>
            <p>
              ✉️ <span className="font-medium">Email:</span>  
              contact@myrestaurant.com
            </p>
            <p>
              ⏰ <span className="font-medium">Opening Hours:</span>  
              Mon – Sun: 10:00 AM – 11:00 PM
            </p>
          </div>

        
          <div className="mt-6 rounded-xl overflow-hidden">
            <iframe
              title="Restaurant Location"
              src="https://www.google.com/maps?q=Hyderabad&output=embed"
              className="w-full h-56 border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
