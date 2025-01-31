const posts = [
    {
      id: 1,
      author: {
        name: "Karthik Sankar",
        profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
        username: "@karthik_s"
      },
      content: `Excited to share my latest project! 🚀 #WebDevelopment #MERNStack ✨ A Color-Changing BMW: The Future of Personalization ✨

Imagine being able to change the color of your car to match your mood or style within a split second. BMW has unveiled groundbreaking technology that lets you switch your car’s color with just the touch of a button. This innovation isn’t just about car design—it’s a revolution in personalization and convenience.

𝗞𝗲𝘆 𝗕𝗲𝗻𝗲𝗳𝗶𝘁𝘀:
✅ 𝗨𝗻𝗹𝗶𝗺𝗶𝘁𝗲𝗱 𝗦𝘁𝘆𝗹𝗲 𝗢𝗽𝘁𝗶𝗼𝗻𝘀: Choose the perfect color for every occasion.
✅ 𝗦𝗸𝗶𝗽 𝘁𝗵𝗲 𝗣𝗮𝗶𝗻𝘁 𝗦𝗵𝗼𝗽: No need for costly or time-consuming paint jobs.
✅ 𝗘𝗻𝗵𝗮𝗻𝗰𝗲𝗱 𝗖𝗿𝗲𝗮𝘁𝗶𝘃𝗶𝘁𝘆: Express yourself through your car like never before.

This technology highlights how advanced engineering and creativity are shaping the future of driving. It’s not just about transportation anymore—it’s about self-expression and innovation.

𝗪𝗵𝗮𝘁’𝘀 𝗬𝗼𝘂𝗿 𝗗𝗿𝗲𝗮𝗺 𝗖𝗼𝗹𝗼𝗿? 
If you could change the color of your car every day, what would it be? Let’s hear your thoughts in the comments below.

The future of driving is here, and it’s more exciting than ever. 🚗✨`,
      image: "https://media.licdn.com/dms/image/v2/D5605AQHBcN4EL6WR5Q/feedshare-thumbnail_720_1280/feedshare-thumbnail_720_1280/0/1721482081414?e=2147483647&v=beta&t=zC7ddnL_WP_2Osg7syFL1vdRHIzbaolI1noWlY4dFz0",
      likes: 120,
      comments: [
        { user: "John Doe", comment: "Great job! 👏", timestamp: "2 hours ago" },
        { user: "Jane Smith", comment: "This looks amazing! 🔥", timestamp: "1 hour ago" }
      ],
      createdAt: "2025-01-03T10:30:00Z",
      updatedAt: "2025-01-03T11:00:00Z"
    },
    {
      id: 2,
      author: {
        name: "Samantha Roy",
        profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
        username: "@samantha_roy"
      },
      content: "Here's a sneak peek at my new blog post on mental health awareness. 💙",
      image: "https://www.veritext.com/images/2023/05/Mental-Health-Awareness.png",
      likes: 95,
      comments: [
        { user: "Karthik Sankar", comment: "Such an important topic! 🙌", timestamp: "3 hours ago" }
      ],
      createdAt: "2025-01-02T18:15:00Z",
      updatedAt: "2025-01-02T19:00:00Z"
    },
    {
      id: 3,
      author: {
        name: "Ajay Kumar",
        profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
        username: "@ajay_coder"
      },
      content: "Just finished a coding challenge on LeetCode! 🧑‍💻",
      image: "https://media.licdn.com/dms/image/v2/D5622AQFBIFET0z7lxg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1719938446437?e=2147483647&v=beta&t=uDoJRWjQoA6oLszlYgwB7r5nBtLIfrC5joUXh3Ff39Y",
      likes: 80,
      comments: [],
      createdAt: "2025-01-01T14:00:00Z",
      updatedAt: "2025-01-01T15:30:00Z"
    },
    {
      id: 4,
      author: {
        name: "Priya Sharma",
        profileImage: "https://randomuser.me/api/portraits/women/50.jpg",
        username: "@priya_sharma"
      },
      content: "Attended an amazing tech event today! Learned so much about AI and IoT. 🤖",
      image: "https://media.licdn.com/dms/image/D5612AQEK0MynVi6RRA/article-cover_image-shrink_720_1280/0/1721306564968?e=2147483647&v=beta&t=YSHSF0g37Ge52tcZRZoYNQpO7Wk70jAp7o5Lwj8UCuI",
      likes: 145,
      comments: [
        { user: "Ajay Kumar", comment: "Sounds like a great event!", timestamp: "4 hours ago" },
        { user: "Samantha Roy", comment: "Would love to know more about it!", timestamp: "3 hours ago" }
      ],
      createdAt: "2025-01-03T09:00:00Z",
      updatedAt: "2025-01-03T10:00:00Z"
    },
    {
      id: 5,
      author: {
        name: "Rahul Gupta",
        profileImage: "https://randomuser.me/api/portraits/men/60.jpg",
        username: "@rahul_dev"
      },
      content: "Happy to announce my new portfolio website is live! Check it out. 😊",
      image: "https://media.licdn.com/dms/image/D4D12AQHOeEiDoRag3g/article-cover_image-shrink_720_1280/0/1713299290304?e=2147483647&v=beta&t=f8kY1w6RvZvxAfmBWrQXSw8C1XEhYauGqOTIGFF0cis",
      likes: 110,
      comments: [
        { user: "Priya Sharma", comment: "Congratulations! Looks great.", timestamp: "5 hours ago" },
        { user: "Karthik Sankar", comment: "Inspiring work, Rahul!", timestamp: "2 hours ago" }
      ],
      createdAt: "2025-01-03T08:00:00Z",
      updatedAt: "2025-01-03T09:00:00Z"
    }
  ];
  
  export default posts;
  