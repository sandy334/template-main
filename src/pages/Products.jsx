import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function Products() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a small delay to prevent flash
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "A fantastic product with amazing features.",
      price: "$99.99",
      image: "🎁",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Innovation meets functionality in this product.",
      price: "$149.99",
      image: "📱",
    },
    {
      id: 3,
      name: "Product 3",
      description: "The perfect solution for your needs.",
      price: "$199.99",
      image: "💻",
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {!isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
              >
                Our Products
              </motion.h1>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="p-6">
                      <div className="text-4xl mb-4">{product.image}</div>
                      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                        {product.name}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                          {product.price}
                        </span>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Products;
