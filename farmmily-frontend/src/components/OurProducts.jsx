// src/components/ownfarm/OurProductsSection.jsx
import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products.json";

const OurProductsSection = () => {
  const grouped = [];
  for (let i = 0; i < products.length; i += 4) {
    grouped.push(products.slice(i, i + 4));
  }

  return (
    <div
      className="bg-cover bg-center py-20 px-6"
      style={{
        backgroundImage: `url('/images/ownAFarmBg.jpg')`,
        backgroundBlendMode: "lighten",
        backgroundColor: "rgba(255,255,255,0.8)",
      }}
    >
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Our Products</h2>
        <p className="text-gray-700">
          Explore our wide range of farm offerings—from fruit-bearing trees to
          mini plots—curated for nature lovers and urban farmers alike.
        </p>
      </div>

      <div className="space-y-12">
        {grouped.map((row, index) => (
          <div key={index} className={`flex justify-center gap-6 flex-wrap`}>
            {row.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProductsSection;
