import { Clock, MapPin } from "lucide-react";

const sessions = [
  { day: "Tuesday", time: "9:00am – 12:00pm", type: "Morning Session" },
  { day: "Thursday", time: "1:30pm – 4:30pm", type: "Afternoon Session" },
  { day: "Saturday", time: "1:30pm – 4:30pm", type: "Afternoon Session" },
  {
    day: "1st Wednesday",
    time: "10:00am – 11:30am",
    type: "Monthly Morning Tea",
    highlight: true,
  },
];

export default function Schedule() {
  return (
    <section id="visit" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Info */}
          <div>
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Visit Us
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-warm-900">
              The door is always open.
            </h2>
            <p className="mt-4 text-lg text-warm-600 leading-relaxed">
              No need to book &mdash; just drop in during any of our regular
              sessions. First visit? Come and have a look around, grab a coffee,
              and meet the crew.
            </p>

            <div className="mt-8 flex items-start gap-3 text-warm-700">
              <MapPin className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
              <div>
                <div className="font-semibold">
                  1428 Yass Valley Way, North Yass NSW 2582
                </div>
                <div className="text-sm text-warm-500 mt-1">
                  Look for the shed just off the main road
                </div>
              </div>
            </div>
          </div>

          {/* Right: Schedule cards */}
          <div className="space-y-4">
            {sessions.map((session) => (
              <div
                key={session.day}
                className={`flex items-center gap-4 p-5 rounded-2xl border transition-shadow hover:shadow-md ${
                  session.highlight
                    ? "bg-amber-50 border-amber-200"
                    : "bg-warm-50 border-warm-100"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    session.highlight
                      ? "bg-amber-200 text-amber-700"
                      : "bg-warm-200 text-warm-700"
                  }`}
                >
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-warm-900">
                      {session.day}
                    </span>
                    {session.highlight && (
                      <span className="text-xs bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full font-medium">
                        Special Event
                      </span>
                    )}
                  </div>
                  <div className="text-warm-600 text-sm">
                    {session.time} &middot; {session.type}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
