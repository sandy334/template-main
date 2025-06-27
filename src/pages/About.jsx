import { useSelector } from "react-redux";
import { selectCount } from "../redux/slices/counterSlice";
import Blog from "./Blog";
import CustomerSuccess from "./CustomerSuccess";
import { motion } from "framer-motion";

function About() {
  const count = useSelector(selectCount);

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
        >
          About Us
        </motion.h1>
        <div className="text-lg text-gray-700 dark:text-gray-300">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Welcome to our company! We are dedicated to providing the best
              services and solutions to our customers. Our team is passionate
              about innovation and excellence, striving to exceed expectations
              in everything we do.
            </p>
            <p className="mt-4">
              With years of experience in the industry, we have built a
              reputation for quality and reliability. Thank you for choosing us
              as your trusted partner.
            </p>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12"
          >
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="mb-6">
              Our mission is to revolutionize the industry through innovative
              solutions and unwavering commitment to customer satisfaction. We
              believe in creating lasting impact through technology and
              human-centered design.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-12"
          >
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Innovation",
                  desc: "We revolutionize the industry through innovative solutions and cutting-edge technology.",
                },
                {
                  title: "Customer Focus",
                  desc: "We maintain an unwavering commitment to customer satisfaction in everything we do.",
                },
                {
                  title: "Impact",
                  desc: "We create lasting impact through technology and human-centered design.",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.2 },
                  }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-12 px-1 sm:px-2"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-4 break-words">
              Our Journey
            </h2>
            <p className="mb-6 text-sm sm:text-base md:text-lg">
              Since our founding, we have continuously evolved and adapted to
              meet the changing needs of our clients. Our journey has been
              marked by significant milestones and achievements, always driven
              by our commitment to excellence and innovation.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 md:p-6 rounded-lg"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Key Achievements
              </h3>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm md:text-base">
                <li>Successfully served over 1000+ satisfied clients</li>
                <li>Expanded operations to multiple regions</li>
                <li>Recognized as industry leaders in innovation</li>
                <li>
                  Built a diverse team of experts across multiple disciplines
                </li>
              </ul>
            </motion.div>
          </motion.section>

          <Blog />
          <CustomerSuccess />
        </div>
      </div>
    </div>
  );
}

export default About;
