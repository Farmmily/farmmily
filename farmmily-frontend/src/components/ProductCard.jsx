import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ProductCard = ({ product }) => {
  let route = "/";
  switch (product.type) {
    case "tree":
      route = `/own-a-farm/${product.slug}`;
      break;
    case "beehive":
      route = "/bee-hive";
      break;
    case "mini-plot":
      route = "/mini-plot";
      break;
    default:
      route = "/products";
  }

  return (
    <div className="bg-[#f7f5f0] rounded-lg shadow-md overflow-hidden w-56  transition-transform hover:scale-[1.02]">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-36 object-cover"
      />
      <div className="px-1 pt-1">
        <span
          className={`inline-block py-1 px-2 text-sm font-light text-white rounded-full`}
          style={{ backgroundColor: product.tagColor || "#6c757d" }}
        >
          {product.tag}
        </span>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <p className="text-sm text-green-700 font-medium">Lease - 1 Year</p>
        <p className="text-sm text-gray-600 line-clamp-3">
          {product.description}
        </p>
        <Link
          to={route}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-2 flex items-center gap-2 text-red-700 font-semibold hover:underline"
        >
          Explore More <FaArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
