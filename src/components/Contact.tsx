import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            Contact
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-warm-900">
            We&apos;d love to hear from you.
          </h2>
          <p className="mt-4 text-lg text-warm-600 leading-relaxed">
            Got a question or just want to know more? Drop us a line or give us
            a call.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Email */}
          <a
            href="mailto:secretary@yassmensshed.org.au"
            className="flex flex-col items-center p-8 bg-white rounded-2xl border border-warm-100 hover:shadow-lg hover:-translate-y-1 transition-all group"
          >
            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
              <Mail className="w-7 h-7 text-amber-600" />
            </div>
            <div className="font-bold text-warm-900 mb-1">Email</div>
            <div className="text-warm-500 text-sm text-center">
              secretary@yassmensshed.org.au
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:0439931579"
            className="flex flex-col items-center p-8 bg-white rounded-2xl border border-warm-100 hover:shadow-lg hover:-translate-y-1 transition-all group"
          >
            <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-forest-200 transition-colors">
              <Phone className="w-7 h-7 text-forest-600" />
            </div>
            <div className="font-bold text-warm-900 mb-1">Phone</div>
            <div className="text-warm-500 text-sm text-center">
              0439 931 579
            </div>
          </a>

          {/* Address */}
          <div className="flex flex-col items-center p-8 bg-white rounded-2xl border border-warm-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
              <MapPin className="w-7 h-7 text-amber-600" />
            </div>
            <div className="font-bold text-warm-900 mb-1">Visit</div>
            <div className="text-warm-500 text-sm text-center">
              1428 Yass Valley Way
              <br />
              North Yass, NSW 2582
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
