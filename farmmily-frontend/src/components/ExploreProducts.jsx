import ProductCard from "./ProductCard";
import productsData from "../data/products.json"; // your static product list
import { Link, useParams } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ExploreProducts = () => {
  const { slug } = useParams();
  const otherProducts = productsData.filter((p) => p.slug !== slug);
  const displayedProducts = otherProducts.slice(0, 4);

  return (
    <section className="py-12 justify-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Products
        </h2>

        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {displayedProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/own-a-farm"
            className="inline-block text-black px-6 py-2 rounded hover:bg-gray-300 border border-s-black transition"
          >
            Explore More
            <FaArrowRight className="inline ml-2 text-sm font-extralight" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExploreProducts;
