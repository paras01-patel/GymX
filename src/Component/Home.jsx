import {
  Dumbbell,
  Flame,
  Zap,
  Crown,
  ShoppingBag,
  Star,
  ArrowRight,
  Trophy,
  Users,
} from "lucide-react";

function Home() {
  const goals = [
    {
      icon: <Dumbbell size={40} />,
      title: "Gain Muscle",
      desc: "Build size, strength and confidence with structured training.",
    },
    {
      icon: <Flame size={40} />,
      title: "Lose Fat",
      desc: "Burn calories and transform your body with smart workouts.",
    },
    {
      icon: <Zap size={40} />,
      title: "Increase Strength",
      desc: "Push your limits and unlock your strongest version.",
    },
  ];

  const products = [
    {
      name: "Whey Protein",
      price: "₹2499",
      img: "https://images.unsplash.com/photo-1579722821273-0f6c6c7d4435?w=600",
    },
    {
      name: "Creatine",
      price: "₹899",
      img: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600",
    },
    {
      name: "Gym Gloves",
      price: "₹499",
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600",
    },
    {
      name: "Shaker Bottle",
      price: "₹299",
      img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600",
    },
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="border border-yellow-500/40 bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-full">
            Premium Fitness + E-Commerce
          </span>

          <h1 className="text-5xl md:text-8xl font-black mt-8 leading-tight">
            UNLEASH YOUR
            <br />
            <span className="text-yellow-500">STRONGEST</span>
            <br />
            VERSION
          </h1>

          <p className="max-w-2xl mx-auto text-zinc-400 mt-6 text-lg">
            Join GymX and experience world-class fitness, memberships,
            supplements and transformation programs under one brand.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
              Join Membership
            </button>

            <button className="border border-zinc-700 px-8 py-4 rounded-xl hover:bg-zinc-900 transition flex items-center gap-2">
              Shop Products
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Floating Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-20">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6">
              <Users className="text-yellow-500 mb-3" />
              <h3 className="text-3xl font-bold">2500+</h3>
              <p className="text-zinc-400">Active Members</p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6">
              <Trophy className="text-yellow-500 mb-3" />
              <h3 className="text-3xl font-bold">1200+</h3>
              <p className="text-zinc-400">Transformations</p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6">
              <Star className="text-yellow-500 mb-3" />
              <h3 className="text-3xl font-bold">4.9</h3>
              <p className="text-zinc-400">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* GOALS */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <h2 className="text-5xl font-bold text-center mb-16">
          Choose Your Goal
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:-translate-y-3 hover:border-yellow-500 transition-all duration-300"
            >
              <div className="text-yellow-500">{goal.icon}</div>

              <h3 className="text-2xl font-bold mt-6">{goal.title}</h3>

              <p className="text-zinc-400 mt-4">{goal.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ELITE MEMBERSHIP */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-[40px] p-10 md:p-16 text-black">
          <div className="flex items-center gap-3">
            <Crown size={40} />
            <h2 className="text-5xl font-black">Elite Membership</h2>
          </div>

          <p className="mt-6 text-lg">
            Unlock premium training, personal coaching, diet planning,
            progress tracking and exclusive member benefits.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mt-10">
            <div>✔ Personal Trainer</div>
            <div>✔ Diet Plan</div>
            <div>✔ Progress Tracking</div>
            <div>✔ VIP Access</div>
          </div>

          <button className="mt-10 bg-black text-white px-8 py-4 rounded-xl font-bold">
            Join Elite - ₹2999/month
          </button>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl font-bold">Top Products</h2>

          <button className="text-yellow-500 flex items-center gap-2">
            View Store <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-yellow-500 transition"
            >
              <img
                src={item.img}
                alt=""
                className="h-60 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="font-bold text-xl">{item.name}</h3>

                <p className="text-yellow-500 mt-2">{item.price}</p>

                <button className="mt-4 w-full bg-yellow-500 text-black py-3 rounded-xl font-bold">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <h2 className="text-5xl font-bold text-center mb-16">
          Real Transformations
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800"
            >
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800"
                alt=""
                className="h-80 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="font-bold text-xl">
                  Member Transformation
                </h3>

                <p className="text-zinc-400 mt-2">
                  6 months transformation journey with GymX.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <div className="bg-zinc-900 border border-zinc-800 rounded-[40px] p-12 text-center">
          <h2 className="text-5xl font-black">
            Ready To Transform?
          </h2>

          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto">
            Start your fitness journey today with GymX memberships,
            expert coaching and premium supplements.
          </p>

          <button className="mt-8 bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
