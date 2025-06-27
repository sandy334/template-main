import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

function Pricing() {
  const [selectedTier, setSelectedTier] = useState("Professional");

  const pricingTiers = [
    {
      name: "Basic",
      price: 29,
      period: "month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 5 users",
        "10GB storage",
        "Basic analytics",
        "Email support",
        "API access",
      ],
      cta: "Start Free Trial",
      highlighted: false,
    },
    {
      name: "Professional",
      price: 99,
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 20 users",
        "50GB storage",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom integrations",
        "Team collaboration",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Enterprise",
      price: 299,
      period: "month",
      description: "For large-scale operations",
      features: [
        "Unlimited users",
        "Unlimited storage",
        "Custom analytics",
        "24/7 dedicated support",
        "API access",
        "Custom integrations",
        "Team collaboration",
        "SLA guarantee",
        "Custom features",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl cursor-pointer transform transition-all duration-200 hover:scale-105 flex flex-col ${
                selectedTier === tier.name
                  ? "ring-4 ring-blue-500 bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-800 shadow-lg"
              }`}
              onClick={() => setSelectedTier(tier.name)}
            >
              {selectedTier === tier.name && (
                <div className="absolute -top-2 -right-2 bg-blue-500 text-white p-2 rounded-full">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}
              <div className="text-center">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    selectedTier === tier.name
                      ? "text-white"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`mb-6 ${
                    selectedTier === tier.name
                      ? "text-gray-100"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {tier.description}
                </p>
                <div className="mb-8">
                  <span
                    className={`text-4xl font-bold ${
                      selectedTier === tier.name
                        ? "text-white"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    ${tier.price}
                  </span>
                  <span
                    className={`text-lg ${
                      selectedTier === tier.name
                        ? "text-gray-100"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    /{tier.period}
                  </span>
                </div>
              </div>

              <ul className="mb-8 space-y-4">
                {tier.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`flex items-center ${
                      selectedTier === tier.name
                        ? "text-white"
                        : "text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    <svg
                      className={`w-5 h-5 mr-3 ${
                        selectedTier === tier.name
                          ? "text-blue-200"
                          : "text-blue-500"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <button
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-colors h-14 flex items-center justify-center ${
                    selectedTier === tier.name
                      ? "bg-white text-blue-600 hover:bg-gray-100"
                      : "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Need a custom solution?
          </p>
          <Link
            to="/contact"
            className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300"
          >
            Contact our sales team
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Pricing;
