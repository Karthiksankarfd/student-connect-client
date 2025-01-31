const mentors = [
  {
      "id": 1,
      "name": "Alice Johnson",
      "expertise": "Full Stack Developer",
      "experience": "7+ years",
      "bio": "Passionate about building scalable web applications and mentoring aspiring developers.",
      "profileImage": "https://randomuser.me/api/portraits/women/44.jpg",
      "rating": 4.9,
      "availableSlots": [
          { day: "Monday", time: "10:00", session: "AM" },
          { day: "Monday", time: "2:00", session: "PM" },
          { day: "Wednesday", time: "2:00", session: "PM" },
          { day: "Friday", time: "6:00", session: "PM" }
      ],
      "location": "Bangalore",
      "country": "India",
      "languages": ["Tamil", "English", "Hindi"]
  },
  {
      "id": 2,
      "name": "Mark Lee",
      "expertise": "UI/UX Designer",
      "experience": "5+ years",
      "bio": "Helping designers create user-friendly interfaces with a focus on accessibility and aesthetics.",
      "profileImage": "https://randomuser.me/api/portraits/men/45.jpg",
      "rating": 4.8,
      "availableSlots": [
          { day: "Tuesday", time: "1:00", session: "PM" },
          { day: "Thursday", time: "4:00", session: "PM" },
          { day: "Saturday", time: "11:00", session: "AM" }
      ],
      "location": "Bangalore",
      "country": "India",
      "languages": ["Tamil", "English", "Hindi"]
  },
  {
      "id": 3,
      "name": "Priya Sharma",
      "expertise": "Data Scientist",
      "experience": "6+ years",
      "bio": "Specialized in machine learning and data analysis with hands-on mentoring experience.",
      "profileImage": "https://randomuser.me/api/portraits/women/46.jpg",
      "rating": 4.7,
      "availableSlots": [
          { day: "Monday", time: "9:00", session: "AM" },
          { day: "Thursday", time: "3:00", session: "PM" },
          { day: "Sunday", time: "5:00", session: "PM" }
      ],
      "location": "Bangalore",
      "country": "India",
      "languages": ["Tamil", "English", "Hindi"]
  },
  {
      "id": 4,
      "name": "James Smith",
      "expertise": "DevOps Engineer",
      "experience": "8+ years",
      "bio": "Passionate about cloud infrastructure, CI/CD pipelines, and automating workflows.",
      "profileImage": "https://randomuser.me/api/portraits/men/47.jpg",
      "rating": 4.9,
      "availableSlots": [
          { day: "Wednesday", time: "11:00", session: "AM" },
          { day: "Friday", time: "2:00", session: "PM" },
          { day: "Saturday", time: "4:00", session: "PM" }
      ],
      "location": "Bangalore",
      "country": "India",
      "languages": ["Tamil", "English", "Hindi"]
  },
  {
      "id": 5,
      "name": "Sophia Brown",
      "expertise": "Product Manager",
      "experience": "10+ years",
      "bio": "Helping teams build customer-centric products with a focus on agile methodologies.",
      "profileImage": "https://randomuser.me/api/portraits/women/48.jpg",
      "rating": 5.0,
      "availableSlots": [
          { day: "Tuesday", time: "10:00", session: "AM" },
          { day: "Thursday", time: "1:00", session: "PM" },
          { day: "Sunday", time: "9:00", session: "AM" }
      ],
      "location": "Bangalore",
      "country": "India",
      "languages": ["Tamil", "English", "Hindi"]
  },
  {
    "id": 1,
    "name": "Alice Johnson",
    "expertise": "Full Stack Developer",
    "experience": "7+ years",
    "bio": "Passionate about building scalable web applications and mentoring aspiring developers.",
    "profileImage": "https://randomuser.me/api/portraits/women/44.jpg",
    "rating": 4.9,
    "availableSlots": [
        { day: "Monday", time: "10:00", session: "AM" },
        { day: "Monday", time: "2:00", session: "PM" },
        { day: "Wednesday", time: "2:00", session: "PM" },
        { day: "Friday", time: "6:00", session: "PM" }
    ],
    "location": "Bangalore",
    "country": "India",
    "languages": ["Tamil", "English", "Hindi"]
},
{
    "id": 2,
    "name": "Mark Lee",
    "expertise": "UI/UX Designer",
    "experience": "5+ years",
    "bio": "Helping designers create user-friendly interfaces with a focus on accessibility and aesthetics.",
    "profileImage": "https://randomuser.me/api/portraits/men/45.jpg",
    "rating": 4.8,
    "availableSlots": [
        { day: "Tuesday", time: "1:00", session: "PM" },
        { day: "Thursday", time: "4:00", session: "PM" },
        { day: "Saturday", time: "11:00", session: "AM" }
    ],
    "location": "Bangalore",
    "country": "India",
    "languages": ["Tamil", "English", "Hindi"]
},
{
    "id": 3,
    "name": "Priya Sharma",
    "expertise": "Data Scientist",
    "experience": "6+ years",
    "bio": "Specialized in machine learning and data analysis with hands-on mentoring experience.",
    "profileImage": "https://randomuser.me/api/portraits/women/46.jpg",
    "rating": 4.7,
    "availableSlots": [
        { day: "Monday", time: "9:00", session: "AM" },
        { day: "Thursday", time: "3:00", session: "PM" },
        { day: "Sunday", time: "5:00", session: "PM" }
    ],
    "location": "Bangalore",
    "country": "India",
    "languages": ["Tamil", "English", "Hindi"]
},
{
    "id": 4,
    "name": "James Smith",
    "expertise": "DevOps Engineer",
    "experience": "8+ years",
    "bio": "Passionate about cloud infrastructure, CI/CD pipelines, and automating workflows.",
    "profileImage": "https://randomuser.me/api/portraits/men/47.jpg",
    "rating": 4.9,
    "availableSlots": [
        { day: "Wednesday", time: "11:00", session: "AM" },
        { day: "Friday", time: "2:00", session: "PM" },
        { day: "Saturday", time: "4:00", session: "PM" }
    ],
    "location": "Bangalore",
    "country": "India",
    "languages": ["Tamil", "English", "Hindi"]
},
{
    "id": 5,
    "name": "Sophia Brown",
    "expertise": "Product Manager",
    "experience": "10+ years",
    "bio": "Helping teams build customer-centric products with a focus on agile methodologies.",
    "profileImage": "https://randomuser.me/api/portraits/women/48.jpg",
    "rating": 5.0,
    "availableSlots": [
        { day: "Tuesday", time: "10:00", session: "AM" },
        { day: "Thursday", time: "1:00", session: "PM" },
        { day: "Sunday", time: "9:00", session: "AM" }
    ],
    "location": "Bangalore",
    "country": "India",
    "languages": ["Tamil", "English", "Hindi"]
}
];

export default mentors;
