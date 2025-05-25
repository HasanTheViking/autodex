import Link from 'next/link';
export default function Home() {
  return (
    <section className="text-center bg-white py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 text-primary">Vitajte v AutoDex</h1>
        <p className="text-gray-600 mb-8">Najlepšie autodoplnky, kozmetika, pneumatiky a tuningové diely na jednom mieste.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/kategoria/autodoplnky"><a className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">Autodoplnky</a></Link>
          <Link href="/kategoria/kozmetika"><a className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">Kozmetika</a></Link>
        </div>
      </div>
    </section>