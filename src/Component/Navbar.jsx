import { Menu } from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-3xl font-black text-white">
          Gym<span className="text-yellow-500 text-5xl">X</span>
        </h1>

        <div className="hidden md:flex gap-8 text-zinc-300">
          <a href="/">Home</a>
          <a href="/membership">Membership</a>
          <a href="/shop">Shop</a>
          <a href="/contact">Contact</a>
        </div>

        <button className="bg-yellow-500 px-5 py-2 rounded-xl font-bold text-black">
          Join Now
        </button>

        <Menu className="md:hidden text-white" />
      </div>
    </nav>
  );
}

export default Navbar;