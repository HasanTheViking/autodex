import { useCart } from './CartContext';
export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
      <div className="h-48 bg-gray-100 overflow-hidden">
        <img src={product.image} alt={product.name} className="object-cover h-full w-full" />
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
      </div>
      <div className="p-4 flex items-center justify-between border-t">
        <span className="text-xl font-bold text-primary">{product.price} €</span>
        <button onClick={() => addToCart(product)} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
          Pridať
        </button>
      </div>
    </div>