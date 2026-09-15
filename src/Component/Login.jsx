import {
  Dumbbell,
  Flame,
  Crown,
  ShoppingBag,
  ArrowRight,
  Trophy,
  Shield,
  Zap,
} from "lucide-react";

function Home() {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600"
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/70 to-black" />

        <div className="absolute w-[700px] h-[700px] bg-red-600/20 blur-[180px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="text-red-500 tracking-[8px] text-sm font-semibold">
              NO EXCUSES. ONLY RESULTS.
            </p>

            <h1 className="text-6xl md:text-9xl font-black mt-8 leading-none">
              FACE
              <br />
              YOURSELF
            </h1>

            <p className="max-w-2xl mx-auto text-zinc-400 mt-8 text-lg">
              The mirror never lies.
              Every day you choose who you become.
            </p>

          </div>

          {/* Choice Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-20">

            <div className="bg-[#050505] border border-zinc-900 rounded-[30px] p-10 hover:border-red-500 transition-all duration-500 hover:shadow-[0_0_40px_rgba(239,68,68,.25)]">

              <p className="text-zinc-500 uppercase tracking-[4px] text-sm">
                Who You Are
              </p>

              <h2 className="text-5xl font-black mt-4">
                TODAY
              </h2>

              <p className="text-zinc-400 mt-6">
                Comfort. Excuses. Delays.
              </p>

            </div>

            <div className="bg-[#050505] border border-red-900/40 rounded-[30px] p-10 hover:border-red-500 transition-all duration-500 hover:shadow-[0_0_50px_rgba(239,68,68,.35)]">

              <p className="text-red-500 uppercase tracking-[4px] text-sm">
                Who You Could Become
              </p>

              <h2 className="text-5xl font-black mt-4">
                LEGEND
              </h2>

              <p className="text-zinc-400 mt-6">
                Discipline. Strength. Respect.
              </p>

              <button className="mt-10 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold">
                ENTER THE ARENA
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* ================= CHOOSE YOUR BATTLE ================= */}
      <section className="max-w-7xl mx-auto px-6 py-28">

        <div className="text-center mb-16">
          <p className="text-red-500 tracking-[5px] text-sm">
            CHOOSE YOUR BATTLE
          </p>

          <h2 className="text-5xl font-black mt-4">
            YOUR JOURNEY STARTS HERE
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#050505] border border-zinc-800 rounded-3xl p-8 hover:border-red-500 hover:-translate-y-2 transition-all">
            <Dumbbell className="text-red-500" size={40} />
            <h3 className="text-3xl font-bold mt-6">
              Gain Muscle
            </h3>
            <p className="text-zinc-400 mt-4">
              Build a bigger, stronger and more confident version of yourself.
            </p>
          </div>

          <div className="bg-[#050505] border border-zinc-800 rounded-3xl p-8 hover:border-red-500 hover:-translate-y-2 transition-all">
            <Flame className="text-red-500" size={40} />
            <h3 className="text-3xl font-bold mt-6">
              Lose Fat
            </h3>
            <p className="text-zinc-400 mt-4">
              Burn calories and unlock your best physique.
            </p>
          </div>

          <div className="bg-[#050505] border border-zinc-800 rounded-3xl p-8 hover:border-red-500 hover:-translate-y-2 transition-all">
            <Zap className="text-red-500" size={40} />
            <h3 className="text-3xl font-bold mt-6">
              Build Strength
            </h3>
            <p className="text-zinc-400 mt-4">
              Push your limits and dominate every challenge.
            </p>
          </div>

        </div>

      </section>

      {/* ================= THE ARENA ================= */}
      <section className="max-w-7xl mx-auto px-6 py-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <img
            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1200"
            alt=""
            className="rounded-[30px] h-[600px] object-cover"
          />

          <div>

            <p className="text-red-500 tracking-[5px] text-sm">
              THE ARENA
            </p>

            <h2 className="text-6xl font-black mt-4">
              BUILT FOR
              <br />
              WARRIORS
            </h2>

            <div className="space-y-6 mt-10">

              <div className="flex gap-4">
                <Shield className="text-red-500" />
                <p>50+ Premium Machines</p>
              </div>

              <div className="flex gap-4">
                <Shield className="text-red-500" />
                <p>Elite Personal Trainers</p>
              </div>

              <div className="flex gap-4">
                <Shield className="text-red-500" />
                <p>Recovery & Cardio Zone</p>
              </div>

              <div className="flex gap-4">
                <Shield className="text-red-500" />
                <p>Transformation Programs</p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= STORE ================= */}
      <section className="max-w-7xl mx-auto px-6 py-28">

        <div className="text-center mb-16">
          <p className="text-red-500 tracking-[5px] text-sm">
            ARM YOURSELF
          </p>

          <h2 className="text-5xl font-black mt-4">
            GYMX STORE
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">

          {["Whey Protein", "Creatine", "Gym Gloves", "Shaker"].map(
            (item, index) => (
              <div
                key={index}
                className="bg-[#050505] border border-zinc-800 rounded-3xl p-8 hover:border-red-500 transition"
              >
                <ShoppingBag
                  className="text-red-500"
                  size={40}
                />

                <h3 className="text-2xl font-bold mt-6">
                  {item}
                </h3>

                <button className="mt-8 text-red-500 flex items-center gap-2">
                  View Product
                  <ArrowRight size={18} />
                </button>
              </div>
            )
          )}

        </div>

      </section>

      {/* ================= MEMBERSHIP ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="bg-[#050505] border border-red-900/40 rounded-[40px] p-12 text-center">

          <Crown
            className="mx-auto text-red-500"
            size={60}
          />

          <p className="text-red-500 tracking-[5px] mt-6">
            ELITE MEMBERSHIP
          </p>

          <h2 className="text-6xl font-black mt-4">
            THE ARENA PASS
          </h2>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            Unlock unlimited access, personal guidance,
            nutrition support and premium benefits.
          </p>

          <h3 className="text-5xl font-black mt-10">
            ₹1999
            <span className="text-lg text-zinc-400">
              /month
            </span>
          </h3>

          <button className="mt-8 bg-red-600 hover:bg-red-700 px-10 py-4 rounded-xl font-bold">
            ENTER NOW
          </button>

        </div>

      </section>

      {/* ================= LEGENDS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-28">

        <div className="text-center mb-16">
          <p className="text-red-500 tracking-[5px] text-sm">
            HALL OF LEGENDS
          </p>

          <h2 className="text-5xl font-black mt-4">
            TRANSFORMATIONS
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-[#050505] border border-zinc-800 rounded-3xl overflow-hidden hover:border-red-500 transition"
            >
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800"
                alt=""
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="font-bold text-2xl">
                  Warrior #{item}
                </h3>

                <p className="text-zinc-400 mt-2">
                  6 Month Transformation Journey
                </p>
              </div>
            </div>
          ))}

        </div>

      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-32 px-6 text-center">

        <p className="text-4xl md:text-6xl font-black">
          LEGENDS ARE NOT BORN.
        </p>

        <p className="text-red-500 text-4xl md:text-6xl font-black mt-4">
          THEY ARE BUILT.
        </p>

        <button className="mt-12 bg-red-600 hover:bg-red-700 px-10 py-4 rounded-xl font-bold text-lg">
          JOIN GYMX TODAY
        </button>

      </section>

    </div>
  );
}

export default Home;

