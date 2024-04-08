
  export default function Footer() {
    return (
      <footer className="w-full bg-gray-100 text-gray-400 mt-auto border-t">
        <div className="container mx-auto py-4 px-5 flex justify-between items-center">
          <div>
            <span>&copy; {new Date().getFullYear()} Prestex.</span>
          </div>
          <div>
            <a href="/contacto" className="hover:underline">Contáctenos</a>
          </div>
        </div>
      </footer>
    );
  }
  