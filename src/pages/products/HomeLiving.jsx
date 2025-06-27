import React from "react";

const HomeLiving = () => {
  const products = [
    {
      id: 1,
      name: "Modern Sofa",
      price: 899.99,
      description: "Comfortable 3-seater sofa with premium fabric",
      emoji: "🛋️",
    },
    {
      id: 2,
      name: "Dining Table Set",
      price: 649.99,
      description: "6-seater dining table with chairs",
      emoji: "🪑",
    },
    {
      id: 3,
      name: "Smart LED Lamp",
      price: 59.99,
      description: "Voice-controlled LED lamp with multiple colors",
      emoji: "💡",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 dark:text-white">Home & Living</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="text-center mb-4">
              <span className="text-6xl" role="img" aria-label={product.name}>
                {product.emoji}
              </span>
            </div>
            <h2 className="text-xl font-semibold mb-2 dark:text-white">
              {product.name}
            </h2>
            <p className="text-gray-600 mb-2 dark:text-gray-300">
              {product.description}
            </p>
            <p className="text-lg font-bold dark:text-white">
              ${product.price}
            </p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeLiving;
