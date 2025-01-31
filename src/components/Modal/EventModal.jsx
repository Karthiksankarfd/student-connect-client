import React, { useContext, useState } from 'react';
import { ModalContext } from '../../context/ModalContext';

function EventModal() {
  const { closeEventModal } = useContext(ModalContext);

  const [formData, setFormData] = useState({
    name: '',
    image: '',
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
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="fixed z-[2] inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/2 h-4/5 overflow-y-scroll">
      <div className='flex justify-end'>
            <button
                onClick={closeEventModal}
                type="button"
                className=" rounded-full "
                >
                x
                </button>
        </div>
        <h2 className="text-xl font-bold mb-4">Create New Event</h2>

        <form>
          {/* Event Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Event Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Enter event name"
              required
            />
          </div>

          {/* Image URL */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Enter image URL"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Enter event description"
              required
            ></textarea>
          </div>

          {/* Venue */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Venue</label>
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Enter venue"
              required
            />
          </div>

          {/* Time */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Time</label>
            <input
              type="text"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Enter time (e.g., 8:00 AM - 4:00 PM)"
              required
            />
          </div>

          {/* Conducted By */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Conducted By</label>
            <input
              type="text"
              name="conductedBy"
              value={formData.conductedBy}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Enter organizer name"
              required
            />
          </div>

          {/* Host Image URL */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Host Image URL</label>
            <input
              type="text"
              name="hostImage"
              value={formData.hostImage}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Enter host image URL"
              required
            />
          </div>

          {/* Duration */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Duration</label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Enter duration (e.g., 2hrs 30min)"
              required
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Enter category (e.g., Tech Talks)"
              required
            />
          </div>

          {/* Entry Fee */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Entry Fee</label>
            <input
              type="text"
              name="entryFee"
              value={formData.entryFee}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Enter entry fee (e.g., Free)"
              required
            />
          </div>

          {/* Last Date to Register */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Last Date to Register</label>
            <input
              type="date"
              name="lastDateToRegister"
              value={formData.lastDateToRegister}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg"
              required
            />
          </div>

          {/* Event Date */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Event Date</label>
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg"
              required
            />
          </div>

          {/* Prize */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Prize</label>
            <input
              type="text"
              name="prize"
              value={formData.prize}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Enter prize details"
              required
            />
          </div>

          {/* Things Given to Participants */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Things Given to Participants</label>
            <input
              type="text"
              name="thingsGivenToParticipants"
              value={formData.thingsGivenToParticipants}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Enter items separated by commas"
              required
            />
          </div>

          {/* About */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">About</label>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Enter additional event details"
              required
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-end">
  
            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EventModal;
