import { useState } from "react";
import { motion } from "framer-motion";

function Blog() {
  const [posts] = useState([
    {
      id: 1,
      title: "The Future of Technology",
      content:
        "Explore the latest trends and innovations shaping the tech world.",
    },
    {
      id: 2,
      title: "Sustainability in Business",
      content: "Learn how companies are adopting sustainable practices.",
    },
  ]);

  return (
    <div className="pt-16 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Blog
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="p-4 border rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
            >
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {post.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
