import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Transform Your Digital Experience
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Create stunning websites and applications with our modern solutions.
            Built with the latest technologies for optimal performance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-4"
          >
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Get Started
            </button>
            <button className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Modern Design",
              description:
                "Clean and intuitive interfaces that engage users and enhance their experience with responsive layouts.",
              icon: "🎨",
            },
            {
              title: "Performance",
              description:
                "Lightning-fast load times and smooth interactions for optimal user satisfaction and SEO ranking.",
              icon: "⚡",
            },
            {
              title: "Scalability",
              description:
                "Built to grow with your needs, from startup to enterprise-level solutions with cloud-native architecture.",
              icon: "📈",
            },
            {
              title: "Security",
              description:
                "Enterprise-grade security measures to protect your data and ensure compliance with regulations.",
              icon: "🔒",
            },
            {
              title: "Analytics",
              description:
                "Comprehensive analytics and reporting tools to track performance and user behavior.",
              icon: "📊",
            },
            {
              title: "24/7 Support",
              description:
                "Round-the-clock technical support and maintenance to ensure your systems run smoothly.",
              icon: "🌟",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="container mx-auto px-4 py-16 bg-gray-50 dark:bg-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "1000+", label: "Projects Completed" },
            { number: "24/7", label: "Support" },
            { number: "99%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "CEO, TechStart",
              content:
                "Working with this team has been an absolute pleasure. They delivered beyond our expectations.",
              avatar: "👩🏻‍💼",
            },
            {
              name: "Mike Chen",
              role: "Marketing Director, GrowthCo",
              content:
                "The attention to detail and commitment to quality is unmatched. Highly recommended!",
              avatar: "👨🏻‍💼",
            },
            {
              name: "Emily Davis",
              role: "Founder, InnovateX",
              content:
                "They transformed our vision into reality. The results speak for themselves.",
              avatar: "👩🏼‍💼",
            },
            {
              name: "David Rodriguez",
              role: "CTO, CloudScale",
              content:
                "Their technical expertise and innovative solutions helped us achieve remarkable results.",
              avatar: "👨🏽‍💼",
            },
            {
              name: "Lisa Zhang",
              role: "Product Manager, FutureFlow",
              content:
                "Outstanding service and exceptional attention to user experience. A game-changer for our product.",
              avatar: "👩🏻‍💼",
            },
            {
              name: "James Wilson",
              role: "Director of Operations, SwiftServe",
              content:
                "The scalability and performance improvements exceeded our expectations. Truly enterprise-grade solutions.",
              avatar: "👨🏼‍💼",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{testimonial.avatar}</div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "{testimonial.content}"
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {testimonial.role}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 md:p-12 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join thousands of satisfied customers who have transformed their
            digital presence with our solutions.
          </motion.p>
          <Link to="/contact">
            <motion.div
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              Contact Us Today
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
