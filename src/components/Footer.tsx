export default function Footer() {
  return (
    <footer className="bg-warm-900 text-warm-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">YV</span>
              </div>
              <div>
                <div className="font-bold text-white text-lg leading-tight">
                  Yass Valley
                </div>
                <div className="text-warm-400 text-sm leading-tight">
                  Men&apos;s Shed
                </div>
              </div>
            </div>
            <p className="text-warm-400 text-sm leading-relaxed">
              Providing a unique and practical way of addressing men&apos;s
              health and wellbeing since 2008.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:text-amber-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#activities"
                  className="hover:text-amber-400 transition-colors"
                >
                  Activities
                </a>
              </li>
              <li>
                <a
                  href="#visit"
                  className="hover:text-amber-400 transition-colors"
                >
                  Visit Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-amber-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-white mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm">
              <li>Tue: 9:00am – 12:00pm</li>
              <li>Thu: 1:30pm – 4:30pm</li>
              <li>Sat: 1:30pm – 4:30pm</li>
              <li className="text-amber-400">
                1st Wed: 10:00am – 11:30am
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:secretary@yassmensshed.org.au"
                  className="hover:text-amber-400 transition-colors"
                >
                  secretary@yassmensshed.org.au
                </a>
              </li>
              <li>
                <a
                  href="tel:0439931579"
                  className="hover:text-amber-400 transition-colors"
                >
                  0439 931 579
                </a>
              </li>
              <li>1428 Yass Valley Way</li>
              <li>North Yass, NSW 2582</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-warm-800 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-warm-500 text-sm">
            &copy; {new Date().getFullYear()} Yass Valley Men&apos;s Shed. All
            rights reserved.
          </p>
          <p className="text-warm-600 text-xs italic">
            &ldquo;Minimal bureaucracy, maximum fun&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
