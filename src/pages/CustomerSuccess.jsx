import { motion } from "framer-motion";

function CustomerSuccess() {
  return (
    <div className="pt-16 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
        >
          Customer Success
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-700 dark:text-gray-300"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Our customers are at the heart of everything we do. We take pride in
            their success stories and strive to provide exceptional support and
            solutions to help them achieve their goals.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-4"
          >
            Join our community of satisfied customers and experience the
            difference we can make together.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default CustomerSuccess;
