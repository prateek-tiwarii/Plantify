import React from 'react';
import { Star } from 'lucide-react';


const products = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        category: "Electronics",
        price: 299.99,
        rating: 4.5,
        image: "/Sproduct.jpg"
    },
    {
        id: 2,
        name: "Organic Cotton T-Shirt",
        category: "Clothing",
        price: 29.99,
        rating: 4.2,
        image: "/Sproduct.jpg"
    },
    {
        id: 3,
        name: "Ceramic Coffee Mug",
        category: "Home & Kitchen",
        price: 19.99,
        rating: 4.8,
        image: "/Sproduct.jpg"
    },
    {
        id: 4,
        name: "Smart Fitness Watch",
        category: "Wearables",
        price: 199.99,
        rating: 4.6,
        image: "/Sproduct.jpg"
    }
];

const ProductCard = ({ product }) => {
    return (
        <div className="w-72 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300  ">
            {/* Content with smaller image */}
            <div className="p-4 space-y-3 justify-between ">
                <div className="flex items-center space-x-3">
                    {/* Small Image */}
                    <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-md">
                        <img
                            // src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Category */}
                    <p className="text-sm text-blue-600 font-medium">
                        {product.category}
                    </p>
                </div>

                {/* Product Name */}
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                    {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">
                        {product.rating} / 5
                    </span>
                </div>

                {/* Price */}
                <div className="text-xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                </div>
            </div>
        </div>
    );
};

const ProductGrid = () => {
    return (
        <div className="container mx-auto p-6 ">
            <div className=" flex flex-col space-y-6">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;