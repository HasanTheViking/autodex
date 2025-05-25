export default function Footer() {
  return (
    <footer className="bg-dark text-light p-4 mt-12">
      <div className="container mx-auto text-center">
        © {new Date().getFullYear()} AutoDex. Všetky práva vyhradené.
      </div>
    </footer>
  );
}