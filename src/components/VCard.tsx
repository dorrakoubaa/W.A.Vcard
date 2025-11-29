import { Facebook, Instagram, MessageCircle, MapPin } from "lucide-react";
import profilePhoto from "@/assets/profile-placeholder.png";

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  href: string;
  colorClass: string;
}

const VCard = () => {
  // You can customize these values
  const name = "Your Name";
  const work = "Your Profession";
  const location = "Your City, Country";
  const photoUrl = profilePhoto;

  const socialLinks: SocialLink[] = [
    {
      icon: <Facebook className="w-5 h-5" />,
      label: "Facebook",
      href: "https://facebook.com/yourprofile",
      colorClass: "bg-facebook hover:bg-facebook/80",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      href: "https://instagram.com/yourprofile",
      colorClass: "bg-instagram hover:bg-instagram/80",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      href: "https://wa.me/yourphonenumber",
      colorClass: "bg-whatsapp hover:bg-whatsapp/80",
    },
  ];

  return (
    <div className="glass-card rounded-3xl p-8 md:p-12 w-full max-w-sm animate-float">
      {/* Glow Background Effect */}
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent" />
      
      {/* Profile Photo */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden glow-ring animate-pulse-glow border-2 border-primary/30">
            <img
              src={photoUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Online indicator */}
          <div className="absolute bottom-2 right-2 w-4 h-4 bg-whatsapp rounded-full border-2 border-card" />
        </div>
      </div>

      {/* Name & Work & Location */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-2 tracking-tight">
          {name}
        </h1>
        <p className="text-muted-foreground text-sm md:text-base font-light tracking-wide mb-2">
          {work}
        </p>
        <div className="flex items-center justify-center gap-1.5 text-muted-foreground/80 text-sm">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex flex-col gap-3">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-btn flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl text-foreground font-medium ${link.colorClass}`}
          >
            {link.icon}
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default VCard;
