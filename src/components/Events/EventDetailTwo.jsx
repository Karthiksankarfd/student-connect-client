import React from "react";

const EventDetailTwo = ({
  name,
  bannerImage,
  description,
  venue,
  eventDate,
  time,
  conductedBy,
  entryFee,
  prizeDetails,
  thingsGivenToParticipants,
  contactInfo,
}) => {
  return (
    <div className="max-w-md mx-auto rounded-lg shadow-lg overflow-hidden dark:bg-black bg-white dark:text-white text-black border border-gray-300 dark:border-gray-700">
      {/* Event Banner */}
      <img
        src={bannerImage}
        alt={name}
        className="w-full h-48 object-cover"
      />

      {/* Event Details */}
      <div className="p-5">
        <h2 className="text-2xl font-bold mb-3">{name}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {description}
        </p>

        <div className="my-3">
          <p>
            <strong>Venue:</strong> {venue}
          </p>
          <p>
            <strong>Date:</strong> {eventDate}
          </p>
          <p>
            <strong>Time:</strong> {time}
          </p>
          <p>
            <strong>Conducted By:</strong> {conductedBy}
          </p>
          <p>
            <strong>Entry Fee:</strong> {entryFee}
          </p>
          <p>
            <strong>Prize:</strong> {prizeDetails}
          </p>
        </div>

        <div className="my-3">
          <h3 className="text-lg font-semibold">What Participants Get:</h3>
          <ul className="list-disc pl-5">
            {thingsGivenToParticipants.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="my-3">
          <h3 className="text-lg font-semibold">Contact Info:</h3>
          <p>
            <strong>Name:</strong> {contactInfo.coordinatorName}
          </p>
          <p>
            <strong>Phone:</strong> {contactInfo.phoneNumber}
          </p>
          <p>
            <strong>Email:</strong> {contactInfo.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetailTwo;
