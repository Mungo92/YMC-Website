import { Hammer, Cog, Coffee, Calendar } from "lucide-react";

const activities = [
  {
    icon: Hammer,
    title: "Woodworking",
    description:
      "From furniture to garden projects, our fully equipped wood workshop is ready for your next creation.",
    image: "from-amber-300 to-warm-400",
  },
  {
    icon: Cog,
    title: "Metalworking",
    description:
      "Welding, fabrication, and metal crafts. Learn techniques and work on practical projects.",
    image: "from-warm-400 to-warm-500",
  },
  {
    icon: Coffee,
    title: "Social Catchups",
    description:
      "Every session starts with a cuppa. It's as much about the conversation as the craft.",
    image: "from-amber-200 to-amber-300",
  },
  {
    icon: Calendar,
    title: "Monthly Morning Tea",
    description:
      "First Wednesday of each month. Refreshments, guest presentations, and great company.",
    image: "from-forest-300 to-forest-400",
  },
];

export default function Activities() {
  return (
    <section
      id="activities"
      className="py-20 sm:py-28 bg-gradient-to-b from-warm-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-warm-900">
            Something for everyone.
          </h2>
          <p className="mt-4 text-lg text-warm-600 leading-relaxed">
            You don&apos;t need experience &mdash; just come along. Our members
            are always happy to show you the ropes.
          </p>
        </div>

        {/* Activity cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="group bg-white rounded-2xl overflow-hidden border border-warm-100 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {/* Gradient placeholder for activity image */}
              <div
                className={`aspect-[3/2] bg-gradient-to-br ${activity.image} flex items-center justify-center`}
              >
                <activity.icon className="w-12 h-12 text-white/80 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-warm-900 mb-2">
                  {activity.title}
                </h3>
                <p className="text-warm-600 text-sm leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
