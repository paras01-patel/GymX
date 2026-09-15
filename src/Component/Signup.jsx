import {
  User,
  Mail,
  Lock,
  Dumbbell,
  Crown,
  EyeOff,
} from "lucide-react";

import logo from "../assets/logo.png";

function Signup() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-6xl h-[750px] grid lg:grid-cols-[1.1fr_0.9fr] gap-4">

        {/* LEFT SIDE */}
        <div className="relative overflow-hidden rounded-[30px] border border-red-900/30 bg-black">

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black" />

          <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">

            <div className="mb-6">
              <div className="w-[260px] h-[260px] rounded-full border-[6px] border-red-500 flex items-center justify-center shadow-[0_0_35px_rgba(239,68,68,.35)]">
                <img
                  src={logo}
                  alt="GYMX"
                  className="w-44"
                />
              </div>
            </div>

            <h1 className="text-5xl font-black text-white text-center">
              CREATE YOUR LEGACY
            </h1>

            <p className="text-red-500 text-sm tracking-[5px] mt-3 text-center">
              THE JOURNEY STARTS TODAY
            </p>

            <div className="grid grid-cols-3 gap-6 mt-10 w-full max-w-xl">

              <div className="text-center">
                <Dumbbell
                  size={28}
                  className="mx-auto text-red-500"
                />
                <p className="text-white mt-2">
                  TRAIN
                </p>
                <p className="text-zinc-500 text-sm">
                  HARDER
                </p>
              </div>

              <div className="text-center">
                💪
                <p className="text-white mt-2">
                  STAY
                </p>
                <p className="text-zinc-500 text-sm">
                  CONSISTENT
                </p>
              </div>

              <div className="text-center">
                <Crown
                  size={28}
                  className="mx-auto text-red-500"
                />
                <p className="text-white mt-2">
                  EARN
                </p>
                <p className="text-zinc-500 text-sm">
                  RESPECT
                </p>
              </div>

            </div>

            <div className="mt-10 border border-zinc-800 rounded-full px-6 py-2">
              <span className="text-zinc-400">
                BUILD MUSCLE.
              </span>
              <span className="text-red-500 ml-2">
                BUILD CHARACTER.
              </span>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#050505] border border-red-900/40 rounded-[30px] p-7 flex flex-col justify-center">

          <h2 className="text-4xl font-black text-center">
            <span className="text-white">
              JOIN THE
            </span>{" "}
            <span className="text-red-500">
              GYMX
            </span>
          </h2>

          <p className="text-center text-zinc-400 mt-3">
            Create your account and start transforming yourself
          </p>

          <div className="w-32 h-[2px] bg-red-500 mx-auto mt-5" />

          {/* Name */}
          <div className="mt-8 relative">
            <User
              size={20}
              className="absolute left-5 top-3.5 text-red-500"
            />

            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-black border border-zinc-800 rounded-xl py-3 pl-14 pr-4 text-white outline-none focus:border-red-500"
            />
          </div>

          {/* Email */}
          <div className="mt-4 relative">
            <Mail
              size={20}
              className="absolute left-5 top-3.5 text-red-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-black border border-zinc-800 rounded-xl py-3 pl-14 pr-4 text-white outline-none focus:border-red-500"
            />
          </div>

          {/* Password */}
          <div className="mt-4 relative">
            <Lock
              size={20}
              className="absolute left-5 top-3.5 text-red-500"
            />

            <EyeOff
              size={20}
              className="absolute right-5 top-3.5 text-zinc-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full bg-black border border-zinc-800 rounded-xl py-3 pl-14 pr-14 text-white outline-none focus:border-red-500"
            />
          </div>

          {/* Confirm Password */}
          <div className="mt-4 relative">
            <Lock
              size={20}
              className="absolute left-5 top-3.5 text-red-500"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full bg-black border border-zinc-800 rounded-xl py-3 pl-14 pr-4 text-white outline-none focus:border-red-500"
            />
          </div>

          <button className="w-full mt-6 bg-red-600 hover:bg-red-700 rounded-xl py-3 text-lg font-bold text-white">
            CREATE ACCOUNT
          </button>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-zinc-800" />
            <p className="text-zinc-500 text-sm">
              OR CONTINUE WITH
            </p>
            <div className="flex-1 h-px bg-zinc-800" />
          </div>

          <div className="grid grid-cols-3 gap-3">

            <button className="border border-zinc-800 py-3 rounded-xl text-white">
              G
            </button>

            <button className="border border-zinc-800 py-3 rounded-xl text-white">
              f
            </button>

            <button className="border border-zinc-800 py-3 rounded-xl text-white">
              
            </button>

          </div>

          <div className="mt-6 text-center">
            <p className="text-zinc-400">
              Already have an account?
            </p>

            <button className="text-red-500 font-semibold mt-1">
              SIGN IN
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Signup;