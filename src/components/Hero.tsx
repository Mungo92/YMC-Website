import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-warm-100 via-amber-50 to-warm-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-forest-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-100/40 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              Welcoming new members
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-warm-900 leading-tight tracking-tight">
              Where mateship
              <span className="block text-amber-600">is built by hand.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-warm-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              The Yass Valley Men&apos;s Shed is a welcoming community space
              where men come together to share skills, work on projects, and look
              after each other&apos;s wellbeing.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#visit"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                Come Visit Us
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-warm-100 text-warm-800 font-semibold text-lg rounded-2xl shadow-md hover:shadow-lg border border-warm-200 transition-all hover:-translate-y-0.5"
              >
                Learn More
              </a>
            </div>

            <p className="mt-6 text-warm-500 text-sm italic">
              &ldquo;Minimal bureaucracy, maximum fun&rdquo;
            </p>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-warm-200/60">
              {/* Warm wood-toned gradient placeholder for hero image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-200 via-warm-300 to-amber-400 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.42 15.17l-5.16-3.27a1 1 0 01-.47-.84V7.26a1 1 0 01.47-.84l5.16-3.27a1 1 0 011.06 0l5.16 3.27a1 1 0 01.47.84v3.8a1 1 0 01-.47.84l-5.16 3.27a1 1 0 01-1.06 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.29 7.26l5.16 3.27 5.16-3.27M11.45 10.53v6.4"
                      />
                    </svg>
                  </div>
                  <p className="text-white/90 font-semibold text-lg">
                    Community Workshop
                  </p>
                  <p className="text-white/70 text-sm mt-1">
                    Yass Valley, NSW
                  </p>
                </div>
              </div>
              {/* Stats bar */}
              <div className="grid grid-cols-3 divide-x divide-warm-100">
                <div className="px-4 py-4 text-center">
                  <div className="text-2xl font-bold text-amber-600">3</div>
                  <div className="text-xs text-warm-500 mt-0.5">
                    Days a Week
                  </div>
                </div>
                <div className="px-4 py-4 text-center">
                  <div className="text-2xl font-bold text-forest-600">
                    2008
                  </div>
                  <div className="text-xs text-warm-500 mt-0.5">
                    Est.
                  </div>
                </div>
                <div className="px-4 py-4 text-center">
                  <div className="text-2xl font-bold text-amber-600">All</div>
                  <div className="text-xs text-warm-500 mt-0.5">Welcome</div>
                </div>
              </div>
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-forest-400/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-300/30 rounded-2xl -z-10" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex justify-center mt-12">
          <a
            href="#about"
            className="flex flex-col items-center text-warm-400 hover:text-amber-500 transition-colors"
          >
            <span className="text-xs mb-2">Discover more</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
