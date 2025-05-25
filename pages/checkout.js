import { useCart } from '../components/CartContext';
import { useState } from 'react';
export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [sent, setSent] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  if (sent) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-black text-white p-8 rounded-2xl shadow-lg text-center max-w-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Objednávka odoslaná!</h2>
          <p className="text-gray-300">Ďakujeme za váš nákup v AutoDex.</p>
        </div>
      </main>
    );
  }
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white border-2 border-red-600 rounded-2xl shadow-lg w-full max-w-lg p-8">
        <h1 className="text-3xl font-bold mb-6">Doručovacie údaje</h1>
        <form onSubmit={e => { e.preventDefault(); clearCart(); setSent(true); }} className="space-y-4">
          <input required placeholder="Meno a priezvisko" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-600 focus:outline-none" />
          <input required placeholder="Adresa" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-600 focus:outline-none" />
          <input required type="email" placeholder="E-mail" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-600 focus:outline-none" />
          <input required placeholder="Telefón" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-600 focus:outline-none" />
          <div className="mt-4 text-xl font-semibold">
            Suma k úhrade: <span className="text-primary">{total} €</span>
          </div>
          <button type="submit" className="w-full bg-red-600 text-white font-semibold rounded-lg px-4 py-2 hover:bg-red-700 transition">
            Odoslať objednávku
          </button>
        </form>
      </div>
    </main>
    );
}