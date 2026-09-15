function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-3xl font-black text-white">
              Gym<span className="text-yellow-500 text-5xl">X</span>
            </h2>

            <p className="text-zinc-400 mt-4">
              Fitness, Memberships and Supplements
              in one ecosystem.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">
              Company
            </h3>

            <div className="space-y-2 text-zinc-400">
              <p>About</p>
              <p>Trainers</p>
              <p>Careers</p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">
              Membership
            </h3>

            <div className="space-y-2 text-zinc-400">
              <p>Basic</p>
              <p>Pro</p>
              <p>Elite</p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">
              Store
            </h3>

            <div className="space-y-2 text-zinc-400">
              <p>Protein</p>
              <p>Creatine</p>
              <p>Accessories</p>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-zinc-500">
          © 2026 GymX. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;