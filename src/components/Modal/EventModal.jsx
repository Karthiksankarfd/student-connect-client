import React, { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../../context/ModalContext';
// import { X } from 'lucide-react';

function EventModal() {
  const { closeEventModal } = useContext(ModalContext);
  const [eventBannerPreview, setEventBannerPreview] = useState(null);  // ✅ Store preview URL
  const [eventFormData, setEventFormData] = useState({
    name: '',
    image: [],
    description: '',
    venue: '',
    time: '',
    conductedBy: '',
    hostImage: '',
    duration: '',
    category: '',
    entryFee: '',
    lastDateToRegister: '',
    eventDate: '',
    prize: '',
    thingsGivenToParticipants: '',
    about: '',
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setEventFormData((prev) => ({
      ...prev, // Spread the existing state
      [name]: name === "image" ? files[0] : value, // Correctly handle file inputs
    }));
    
  };


  useEffect(() => {
    // eventFormData.image instanceof File this will give us the file is from the form....
    if (!eventFormData.image || !(eventFormData.image instanceof File)) {
      setEventBannerPreview(null);
      return;
    }
  
    const objectUrl = URL.createObjectURL(eventFormData.image);
    setEventBannerPreview(objectUrl);
  
    return () => URL.revokeObjectURL(objectUrl); // Cleanup memory leak
  }, [eventFormData.image]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white text-black dark:bg-black dark:text-white backdrop-blur-lg bg-opacity-90 p-6 rounded-2xl shadow-xl w-[90%] md:w-2/3 lg:w-1/2 max-h-[80vh] overflow-y-auto relative border border-gray-300">
        
        {/* Close Button */}
        <button onClick={closeEventModal} className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-all">
          {/* <X size={20} /> */}
          x
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Create New Event</h2>

        <form onSubmit={(e)=>e.preventDefault()}>
          {/* File Upload */}
          <div className="mb-4">
            <label htmlFor="imageupload" className="bg-blue-500 w-fit px-5 py-2 text-white block text-sm font-medium">
              Upload Event Image
            </label>
            <input
              id="imageupload"
              type="file"
              name="image"
              onChange={handleChange}
              className="hidden"
              accept="image/*"  // ✅ Restrict to images only
            />
          </div>

          {/* 🟢 Image Preview */}
          {eventBannerPreview && (
            // <div className="mb-4">
              <img src={eventBannerPreview} alt="Event Preview" className="w-auto my-4 h-40 object-contain rounded-lg shadow-md" />
            // </div>
          )}

          {[
            { label: 'Event Name', name: 'name', type: 'text' },
            { label: 'Venue', name: 'venue', type: 'text' },
            { label: 'Time', name: 'time', type: 'text', placeholder: 'e.g., 8:00 AM - 4:00 PM' },
            { label: 'Conducted By', name: 'conductedBy', type: 'text' },
            { label: 'Host Image URL', name: 'hostImage', type: 'text' },
            { label: 'Duration', name: 'duration', type: 'text', placeholder: 'e.g., 2hrs 30min' },
            { label: 'Category', name: 'category', type: 'text', placeholder: 'e.g., Tech Talks' },
            { label: 'Entry Fee', name: 'entryFee', type: 'text', placeholder: 'e.g., Free' },
            { label: 'Prize', name: 'prize', type: 'text' },
            { label: 'Things Given to Participants', name: 'thingsGivenToParticipants', type: 'text', placeholder: 'e.g., Certificate, T-Shirt' },
          ].map(({ label, name, type, placeholder }) => (
            <div key={name} className="mb-4">
              <label   className={ `   block text-sm font-medium text-gray-700`}  >{label}</label>
              <input
               
                type ={type}
                // name is image for file input 
                name={name}
                value={eventFormData[name]}
                onChange={handleChange}
                placeholder={placeholder || `Enter ${label.toLowerCase()}`}
                className={`mt-2 ${type === "file" ? "hidden" : "block"} p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none bg-transparent`}
                required
              />
            </div>
          ))}
          

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={eventFormData.description}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none bg-transparent"
              placeholder="Enter event description"
              rows={3}
              required
            ></textarea>
          </div>

          {/* About */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">About</label>
            <textarea
              name="about"
              value={eventFormData.about}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none bg-transparent"
              placeholder="Enter additional event details"
              rows={3}
              required
            ></textarea>
          </div>
          {/* Dates */}
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">Last Date to Register</label>
              <input
                type="date"
                name="lastDateToRegister"
                value={eventFormData.lastDateToRegister}
                onChange={handleChange}
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none bg-transparent"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">Event Date</label>
              <input
                type="date"
                name="eventDate"
                value={eventFormData.eventDate}
                onChange={handleChange}
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none bg-transparent"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button type="submit" className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition-all">
              Submit Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EventModal;
