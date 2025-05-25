import Link from 'next/link';
import { useCart } from './CartContext';
export default function Header() {
  const { cart } = useCart();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/"><a className="text-2xl font-bold text-primary">AutoDex</a></Link>
        <nav className="space-x-6">
          <Link href="/kategoria/autodoplnky"><a className="hover:text-primary">Autodoplnky</a></Link>
          <Link href="/kategoria/kozmetika"><a className="hover:text-primary">Kozmetika</a></Link>
          <Link href="/kategoria/pneumatiky"><a className="hover:text-primary">Pneumatiky</a></Link>
          <Link href="/kategoria/tuning"><a className="hover:text-primary">Tuning</a></Link>
          <Link href="/kosik"><a className="relative hover:text-primary">
            Košík{count > 0 && <span className="ml-1 bg-primary text-white text-xs rounded-full px-2">{count}</span>}
          </a></Link>
        </nav>
      </div>
    </header>