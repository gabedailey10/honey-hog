import { UtensilsCrossed } from "lucide-react";

const gradients = [
  "from-honey/70 via-brick/60 to-charcoal",
  "from-brick/70 via-honey/50 to-charcoal",
  "from-charcoal via-honey/40 to-brick/60",
];

export default function PlaceholderImage({
  label,
  index = 0,
  className = "",
}: {
  label?: string;
  index?: number;
  className?: string;
}) {
  const gradient = gradients[index % gradients.length];
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
    >
      <UtensilsCrossed className="h-8 w-8 text-cream/40" strokeWidth={1.5} />
      {label ? (
        <span className="absolute bottom-2 left-2 text-xs font-medium text-cream/70">
          {label}
        </span>
      ) : null}
    </div>
  );
}
