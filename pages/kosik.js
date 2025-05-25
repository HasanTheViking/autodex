import { useCart } from '../components/CartContext';
import Link from 'next/link';
export default function Kosik() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  if (cart.length === 0) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Váš košík je prázdny</h2>
          <Link href="/"><a className="text-primary hover:underline mt-4 inline-block">Vráť sa na domov</a></Link>
        </div>
      </main>
    );
  }
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-6">
        <h1 className="text-3xl font-bold mb-6">Tvoj košík</h1>
        <ul className="space-y-4 mb-6">
          {cart.map(item => (
            <li key={item.id} className="flex justify-between items-center">
              <span>{item.name} x{item.qty}</span>
              <span>{item.price * item.qty} €</span>
              <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:underline">Odstrániť</button>
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-semibold">Spolu:</span>
          <span className="text-2xl font-bold text-primary">{total} €</span>
        </div>
        <div className="flex justify-between">
          <button onClick={clearCart} className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition">Vyprázdniť</button>
          <Link href="/checkout"><a className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-red-700 transition">Pokračovať</a></Link>
        </div>
      </div>
    </main>
    );
}