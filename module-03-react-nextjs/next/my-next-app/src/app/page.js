
import AuthStatus from "@/components/Auth/AuthStatus";
import Link from "next/link";

const dishes = [
  {
    id: "dish_1",
    name: "Doro Wat",
    category: "SIGNATURE",
    description: "Slow-cooked chicken stew, Ethiopian spices, and a boiled egg.",
    price: 350,
    image:
      "dulet.jpg",
  },
  {
    id: "dish_2",
    name: "Beyaynetu",
    category: "VEGETARIAN",
    description: "A colorful combination of traditional plant-based favorites.",
    price: 220,
    image:
      "dulet.jpg",
  },
  {
    id: "dish_3",
    name: "Kitfo",
    category: "TRADITIONAL",
    description: "A beloved Ethiopian classic, rich in flavor and tradition.",
    price: 400,
    image:
      "dulet.jpg",
  },
  {
    id: "dish_4",
    name: "Shiro Tegabeno",
    category: "VEGETARIAN",
    description: "Comforting chickpea stew, prepared with warming spices.",
    price: 180,
    image:
      "dulet.jpg",
  },
];

const benefits = [
  {
    number: "01",
    title: "Fresh ingredients",
    description: "Thoughtfully prepared, full of flavor.",
    icon: "🍃",
  },
  {
    number: "02",
    title: "Authentic recipes",
    description: "Tradition served on every plate.",
    icon: "🍽️",
  },
  {
    number: "03",
    title: "Easy ordering",
    description: "Your favorites, just a few clicks away.",
    icon: "↗",
  },
];

function ArrowIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Brand() {
  return (
    <Link href="/" className="group flex w-fit items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#39ff88]/30 bg-[#39ff88]/10 text-2xl text-[#39ff88] transition duration-300 group-hover:rotate-6 group-hover:bg-[#39ff88]/20">
       🍜 
      </span>
      <span>
        <span className="block text-xl font-extrabold tracking-tight text-white">
          Adis <span className="text-[#39ff88]">Eatery</span>
        </span>
        <span className="block text-[10px] tracking-[0.2em] text-slate-400 uppercase">
          A taste of Ethiopia
        </span>
      </span>
    </Link>
  );
}

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] text-[#39ff88] uppercase">
      <span className="h-1.5 w-1.5 rounded-full bg-[#39ff88] shadow-[0_0_12px_#39ff88]" />
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b132b] text-white selection:bg-[#39ff88] selection:text-[#0b132b]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#0b132b]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <Brand />

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/menu"
              className="text-sm text-slate-300 transition hover:text-[#39ff88]"
            >
              Menu
            </Link>
            <Link
              href="/about"
              className="text-sm text-slate-300 transition hover:text-[#39ff88]"
            >
              Our story
            </Link>
            <Link
              href="/contact"
              className="text-sm text-slate-300 transition hover:text-[#39ff88]"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <AuthStatus/>
            {/* <Link
              href="/signin"
              className="rounded-full px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:text-[#39ff88]"
            >
              Sign in
            </Link> */}
            {/* <Link
              href="/menu"
              className="group flex items-center gap-2 rounded-full bg-[#39ff88] px-5 py-3 text-sm font-bold text-[#0b132b] transition duration-300 hover:-translate-y-0.5 hover:bg-[#65ffa3] hover:shadow-[0_8px_30px_rgba(57,255,136,0.2)]"
            >
              Order food
              <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link> */}
          </div>

          {/* Mobile navigation: no JavaScript state needed */}
          <details className="relative md:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl border border-white/10 text-2xl text-white transition hover:border-[#39ff88]/50 hover:text-[#39ff88]">
              <span aria-hidden="true">☰</span>
              <span className="sr-only">Open navigation</span>
            </summary>
            <nav className="absolute right-0 top-14 flex w-64 flex-col gap-1 rounded-2xl border border-white/10 bg-[#111d3a] p-3 shadow-2xl">
              <Link href="/" className="rounded-xl bg-[#39ff88]/10 px-4 py-3 text-sm font-semibold text-[#39ff88]">
                Home
              </Link>
              {/* <Link href="/menu" className="rounded-xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/5">
                Menu
              </Link> */}
              <Link href="/about" className="rounded-xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/5">
                Our story
              </Link>
              <Link href="/contact" className="rounded-xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/5">
                Contact
              </Link>
              <div className="my-1 border-t border-white/10" />
              <Link href="/signin" className="rounded-xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/5">
                Sign in
              </Link>
              <Link href="/menu" className="rounded-xl bg-[#39ff88] px-4 py-3 text-center text-sm font-bold text-[#0b132b]">
                Order food →
              </Link>
            </nav>
          </details>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate">
        <div className="pointer-events-none absolute -left-40 top-0 -z-10 h-96 w-96 rounded-full bg-[#39ff88]/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-20 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:px-10 lg:py-24">
          <div className="animate-fade-up relative z-10">
            <SectionLabel>ETHIOPIAN CUISINE · MADE WITH HEART</SectionLabel>

            <h1 className="mt-7 max-w-2xl text-5xl leading-[1.06] font-black tracking-tight sm:text-6xl lg:text-7xl">
              Real food.
              <br />
              <span className="bg-gradient-to-r from-[#39ff88] via-[#72ffad] to-[#c3ffda] bg-clip-text text-transparent">
                Rich culture.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-300 sm:text-lg">
              Discover the warmth of Ethiopian cooking. From timeless
              favorites to comforting plant-based dishes, every plate brings
              people closer.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/menu"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#39ff88] px-7 py-4 font-bold text-[#0b132b] transition duration-300 hover:-translate-y-1 hover:bg-[#6affa4] hover:shadow-[0_12px_35px_rgba(57,255,136,0.2)]"
              >
                Explore our menu
                <ArrowIcon className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition duration-300 hover:border-[#39ff88]/50 hover:bg-white/[0.04]"
              >
                Discover our story
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <span className="text-[#39ff88]">✓</span> Flavorful favorites
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#39ff88]">✓</span> Vegetarian options
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#39ff88]">✓</span> Simple ordering
              </span>
            </div>
          </div>

          {/* Hero food image */}
          <div className="animate-fade-up animation-delay-200 relative mx-auto w-full max-w-2xl lg:pl-3">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#39ff88]/20 via-transparent to-blue-500/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111d3a] p-2 shadow-2xl shadow-black/40">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                <img
                  src="doro-wat.jpg"
                  alt="A colorful, freshly prepared meal"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b132b]/90 via-transparent to-[#0b132b]/10" />

                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#0b132b]/60 px-4 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-md">
                  ✳ ROOTED IN TRADITION
                </div>

                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 sm:inset-x-7 sm:bottom-7">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.2em] text-[#39ff88] uppercase">
                      A meal to remember
                    </p>
                    <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                      Made for sharing.
                    </h2>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#39ff88] text-[#0b132b]">
                    <ArrowIcon />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-2 rounded-2xl border border-white/10 bg-[#111d3a]/95 p-4 shadow-xl backdrop-blur-xl sm:-left-6 sm:p-5">
              <p className="text-xs text-slate-400">Our promise</p>
              <p className="mt-1 text-sm font-bold text-white">
                Flavor in every bite <span className="text-[#39ff88]">✳</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-white/[0.08] bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-0 px-5 sm:px-8 md:grid-cols-3 lg:px-10">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.number}
              className={`group flex gap-5 py-7 transition duration-300 hover:bg-white/[0.025] md:px-6 lg:py-9 ${
                index !== 0 ? "border-t border-white/[0.08] md:border-t-0 md:border-l" : ""
              }`}
            >
              <span className="text-sm font-bold text-[#39ff88]/70">
                {benefit.number}
              </span>
              <div className="flex-1">
                <span className="text-2xl text-[#39ff88] transition group-hover:scale-110">
                  {benefit.icon}
                </span>
                <h3 className="mt-3 font-bold text-white">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {benefit.description}
                </p>
              </div>
              <ArrowIcon className="mt-1 h-5 w-5 text-slate-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#39ff88]" />
            </article>
          ))}
        </div>
      </section>

      {/* Popular dishes */}
      <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <SectionLabel>THE CROWD FAVORITES</SectionLabel>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Good food.
              <span className="text-[#39ff88]"> Great memories.</span>
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-slate-400">
              Get to know the dishes that make every meal feel special.
            </p>
          </div>

          <Link
            href="/menu"
            className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-[#39ff88] transition hover:text-white"
          >
            Explore full menu
            <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish, index) => (
            <article
              key={dish.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#101b36] transition duration-300 hover:-translate-y-2 hover:border-[#39ff88]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link href="/menu" className="block">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#15213d]">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b132b]/60 to-transparent opacity-70" />
                  <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-[#0b132b]/80 px-3 py-1.5 text-[10px] font-bold tracking-wider text-[#39ff88] backdrop-blur">
                    {dish.category}
                  </span>
                  <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#39ff88] text-[#0b132b] transition duration-300 group-hover:rotate-[-35deg]">
                    <ArrowIcon className="h-4 w-4" />
                  </span>
                </div>
              </Link>

              <div className="p-5">
                <h3 className="text-lg font-bold text-white transition group-hover:text-[#39ff88]">
                  {dish.name}
                </h3>
                <p className="mt-2 min-h-[3rem] text-sm leading-6 text-slate-400">
                  {dish.description}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-4">
                  <p className="text-lg font-extrabold text-[#39ff88]">
                    {dish.price} <span className="text-xs">ETB</span>
                  </p>
                  <Link
                    href="/menu"
                    aria-label={`View ${dish.name} on the menu`}
                    className="rounded-full border border-white/15 p-2 text-slate-300 transition hover:border-[#39ff88] hover:bg-[#39ff88] hover:text-[#0b132b]"
                  >
                    <ArrowIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Story / CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#39ff88]/20 bg-[#101e3b] px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[#39ff88]/10 blur-[90px]" />
          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <SectionLabel>YOUR NEXT FAVORITE MEAL</SectionLabel>
              <h2 className="mt-4 text-3xl leading-tight font-extrabold sm:text-4xl">
                Bring a little more
                <span className="text-[#39ff88]"> flavor </span>
                to your day.
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                Browse our menu and discover something worth coming back for.
              </p>
            </div>
            <Link
              href="/menu"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#39ff88] px-7 py-4 font-bold text-[#0b132b] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(57,255,136,0.2)]"
            >
              Find your favorite
              <ArrowIcon className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] bg-[#080f22]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <Brand />
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Bringing the flavors and traditions of Ethiopian food to your
              table.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
            <Link href="/menu" className="transition hover:text-[#39ff88]">Menu</Link>
            <Link href="/about" className="transition hover:text-[#39ff88]">Our story</Link>
            <Link href="/contact" className="transition hover:text-[#39ff88]">Contact</Link>
            <Link href="/signin" className="transition hover:text-[#39ff88]">Sign in</Link>
            <Link href="/signup" className="transition hover:text-[#39ff88]">Create account</Link>
          </nav>
        </div>
        <div className="border-t border-white/[0.06] px-5 py-5 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Adis Eatery. Made with care.
        </div>
      </footer>
    </main>
  );
}
