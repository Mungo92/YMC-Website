import { Heart, Users, Wrench } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Mateship",
    description:
      "A place to catch up over a cuppa, share a yarn, and build genuine friendships in a relaxed, no-pressure environment.",
    color: "amber",
  },
  {
    icon: Wrench,
    title: "Hands-On Skills",
    description:
      "Access woodworking and metalworking equipment, learn new skills from experienced members, and tackle rewarding projects together.",
    color: "forest",
  },
  {
    icon: Heart,
    title: "Wellbeing",
    description:
      "Our mission is to provide a unique and practical way of addressing men's health and wellbeing in the Yass Valley community.",
    color: "amber",
  },
];

const colorMap: Record<string, { bg: string; iconBg: string; icon: string }> = {
  amber: {
    bg: "bg-amber-50",
    iconBg: "bg-amber-100",
    icon: "text-amber-600",
  },
  forest: {
    bg: "bg-forest-50",
    iconBg: "bg-forest-100",
    icon: "text-forest-600",
  },
};

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-warm-900">
            More than a workshop.{" "}
            <span className="text-amber-600">A community.</span>
          </h2>
          <p className="mt-4 text-lg text-warm-600 leading-relaxed">
            Since 2008, the Yass Valley Men&apos;s Shed has been a place where
            blokes from all walks of life come together. Whether you&apos;re
            handy with tools or just looking for good company, there&apos;s a
            spot for you here.
          </p>
        </div>

        {/* Value cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => {
            const colors = colorMap[value.color];
            return (
              <div
                key={value.title}
                className={`${colors.bg} rounded-2xl p-8 border border-warm-100 hover:shadow-lg transition-shadow`}
              >
                <div
                  className={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center mb-5`}
                >
                  <value.icon className={`w-7 h-7 ${colors.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-warm-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-warm-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
