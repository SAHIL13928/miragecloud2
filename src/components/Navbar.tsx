export default function Navbar() {
    return (
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="text-xl font-bold">Miragecould</div>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-blue-500">Features</a></li>
          <li><a href="#" className="hover:text-blue-500">Pricing</a></li>
          <li><a href="#" className="hover:text-blue-500">Contact</a></li>
        </ul>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Get Started</button>
      </nav>
    );
  }
  