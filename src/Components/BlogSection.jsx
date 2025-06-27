import React from 'react';

  const blogPosts = [
    {
      id: 1,
      image:"https://i.ibb.co/xkmRjR2/04d0c940f6d7bee85b332178862a7569.jpg",
      category: "Plant Care",
      title: "How to Keep Your Indoor Plants Thriving Year-Round",
      description:
        "Discover the essential tips and tricks to maintain healthy indoor plants throughout all seasons. Learn about watering schedules, light requirements, and more.",
      readTime: "5 min read",
      date: "June 20, 2025",
    },
    {
      id: 2,
      image:
        "https://i.ibb.co/RGYbQxXn/459c7f6a403c8f7285c249bb4d1b0181.jpg",
      category: "Tips",
      title: "Beginner-Friendly Succulents for Your Collection",
      description:
        "Starting your plant journey? These low-maintenance succulents are perfect for beginners and will add beauty to any space with minimal effort.",
      readTime: "4 min read",
      date: "June 18, 2025",
    },
    {
      id: 3,
      image:
        "https://i.ibb.co/gZ1Gd0rc/2a3e56b53ba3b96a067e0d0fb74fb91c-1.jpg",
      category: "DIY",
      title: "Creating Your Own Kitchen Herb Garden",
      description:
        "Learn how to grow fresh herbs right in your kitchen. This step-by-step guide will help you set up a thriving herb garden for cooking and aromatherapy.",
      readTime: "7 min read",
      date: "June 15, 2025",
    },
  ];

const BlogSection = () => {
    return (
        <section className="mb-10">
          <h1 className='text-4xl text-center font-bold mb-8'>Latest Blog</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-green-600 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-green-700 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 ">
                    {post.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </section>
    );
};

export default BlogSection;