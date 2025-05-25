import { useState } from 'react';
export default function Kontakt() {
  const [sent, setSent] = useState(false);
  if (sent) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md">
          <h2 className="text-2xl font-bold text-primary mb-2">Ďakujeme za správu!</h2>
          <p className="text-gray-700">Ozveme sa vám čo najskôr.</p>
        </div>
      </main>
    );
  }
  return (
    <main className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg md:grid md:grid-cols-2 overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-primary mb-4">Kontaktujte nás</h1>
          <p className="text-gray-600 mb-6">Máte otázku? Napíšte nám a radi pomôžeme.</p>
          <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-4">
            <input required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Meno" />
            <input required type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none" placeholder="E-mail" />
            <textarea required rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Vaša správa" />
            <button type="submit" className="w-full bg-primary text-white font-semibold rounded-lg px-4 py-2 hover:bg-red-700 transition">
              Odoslať
            </button>
          </form>
        </div>
        <div className="p-8 bg-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Kde nás nájdete</h2>
          <ul className="text-gray-700 space-y-4">
            <li><strong>E-mail:</strong> <a href="mailto:info@autodex.sk" className="text-primary hover:underline">info@autodex.sk</a></li>
            <li><strong>Telefón:</strong> <a href="tel:+421900000000" className="text-primary hover:underline">+421 900 000 000</a></li>
            <li><strong>Adresa:</strong> <span>Mlynské Nivy 1, 821 09 Bratislava</span></li>
          </ul>
        </div>
      </div>
    </main>
    );
}