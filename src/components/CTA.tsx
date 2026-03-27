export default function CTA() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-amber-500 via-amber-600 to-warm-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Ready to be part of
          <br />
          something great?
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
          Whether you&apos;re retired, between jobs, or just looking for a place
          to unwind &mdash; there&apos;s a workbench with your name on it.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-warm-50 text-amber-700 font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
          <a
            href="#visit"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold text-lg rounded-2xl border-2 border-white/40 hover:border-white/60 transition-all"
          >
            See Our Hours
          </a>
        </div>
      </div>
    </section>
  );
}
