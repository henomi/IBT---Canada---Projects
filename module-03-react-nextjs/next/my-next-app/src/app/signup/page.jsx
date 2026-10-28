import Link from "next/link";
import SignUpForm from "@/components/Auth/SignUpForm";

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-[#0b132b] text-white">
      <div className="grid min-h-screen lg:grid-cols-2">
        <section className="relative hidden overflow-hidden p-12 lg:flex lg:flex-col lg:justify-between xl:p-16">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1600&q=85')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b132b]/80 via-[#0b132b]/40 to-[#0b132b]/95" />

          <Link
            href="/"
            className="relative z-10 text-xl font-extrabold tracking-[0.2em] text-[#39ff88] transition-colors duration-200 hover:text-white"
          >
            ADIS EATERY
          </Link>

          <div className="relative z-10 max-w-xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#39ff88]">
              A taste of Ethiopia
            </p>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight xl:text-6xl">
              Your table.
              <br />
              Your traditions.
            </h1>
            <p className="mt-6 max-w-md text-base leading-7 text-white/75">
              Join Adis Eatery to discover Ethiopian favorites and make your
              next meal memorable.
            </p>
            <div className="mt-8 h-1 w-16 rounded-full bg-[#39ff88] shadow-lg shadow-[#39ff88]/30" />
          </div>

          <p className="relative z-10 text-sm text-white/60">
            Made with tradition. Served with love.
          </p>
        </section>

        <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-10 sm:py-12 lg:px-12">
          <div className="w-full max-w-md">
            <Link
              href="/"
              className="text-sm text-slate-400 transition-colors duration-200 hover:text-[#39ff88] lg:hidden"
            >
              ← Back to Adis Eatery
            </Link>

            <div className="mb-8 mt-8 lg:mt-0">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#39ff88]">
                Become a member
              </p>
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Create account<span className="text-[#39ff88]">.</span>
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                Create your account to get started with Adis Eatery.
              </p>
            </div>

            <SignUpForm />

            <p className="mt-8 text-center text-sm text-slate-400">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="font-bold text-[#39ff88] transition-colors duration-200 hover:text-white"
              >
                Sign in
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}