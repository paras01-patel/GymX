function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 border-b border-gray-800">
        <h1 className="text-3xl font-bold text-red-500">GymX</h1>

        <ul className="flex gap-8">
          <li className="cursor-pointer hover:text-red-500">Home</li>
          <li className="cursor-pointer hover:text-red-500">Programs</li>
          <li className="cursor-pointer hover:text-red-500">Shop</li>
          <li className="cursor-pointer hover:text-red-500">Contact</li>
        </ul>

        <button className="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-600">
          Join Now
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-[80vh] px-5">
        <h1 className="text-5xl md:text-7xl font-bold">
          BUILD YOUR
          <span className="text-red-500"> DREAM BODY</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl">
          Transform your fitness journey with expert trainers,
          personalized workout plans, and premium supplements.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-red-500 px-6 py-3 rounded-lg hover:bg-red-600">
            Get Started
          </button>

          <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black">
            Explore Plans
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 px-10 pb-20">
        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-red-500">
            Personal Training
          </h2>
          <p className="text-gray-400 mt-3">
            Get customized workout plans from certified trainers.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-red-500">
            Nutrition Plans
          </h2>
          <p className="text-gray-400 mt-3">
            Diet and nutrition guidance to achieve your goals.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-red-500">
            Supplement Store
          </h2>
          <p className="text-gray-400 mt-3">
            Shop quality supplements and fitness accessories.
          </p>
        </div>
      </section>

    </div>
  );
}

export default Home;