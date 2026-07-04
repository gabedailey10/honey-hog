export const siteInfo = {
  name: "The Honey Hog",
  tagline: "The best menu starts with community driven food. Locally sourced whenever possible.",
  subTagline:
    "Whether you're in the mood for mouthwatering steaks, juicy burgers, or a delicious basket of cheese curds we've got you covered!",
  about:
    "The Honey Hog is a locally owned restaurant & bar located in Morganton, NC. We are farmer owned and operated, so the best menu starts with community driven food — locally sourced whenever possible.",
  address: "3221 NC-126, Morganton, NC 28655-6016",
  phone: "(828) 391-1210",
  phoneHref: "tel:+18283911210",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Gift Cards", href: "#gift-cards" },
  { label: "Contact", href: "#contact" },
];

export const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "11am – 8pm" },
  { day: "Wednesday", time: "11am – 8pm" },
  { day: "Thursday", time: "11am – 8pm" },
  { day: "Friday", time: "11am – 10pm" },
  { day: "Saturday", time: "11am – 10pm" },
  { day: "Sunday", time: "11am – 8pm" },
];

export const menus = [
  { label: "Restaurant Menu", href: "/pdf/restaurant-menu.pdf" },
  { label: "Full Bar Menu", href: "/pdf/bar-menu.pdf" },
];

export const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  alt: `The Honey Hog dish ${i + 1}`,
}));

export const testimonials = [
  {
    name: "Miriam",
    quote:
      "I've eaten there 2-3 times every week, tried every single item on their menu... the quality is unmatched thanks to their own farm-raised ingredients.",
  },
  {
    name: "Brad",
    quote:
      "Our first time & we will most definitely be back!! Excellent food, great service! The pork rinds & cheesecake were on point!",
  },
  {
    name: "Stacy",
    quote:
      "Went today for a late lunch, and everything was fantastic. The pork rinds & cheesecake were on point!",
  },
  {
    name: "Emily",
    quote: "Great food. Friendly atmosphere. Menu options are great. Best in Burke County.",
  },
  {
    name: "Penny",
    quote: "Great food and awesome service... The ribeye steak was tender and delicious.",
  },
  {
    name: "Julie",
    quote: "Hands down the best steak I have ever ate!! It was cooked perfectly and had the best flavor!",
  },
  {
    name: "Lakelyn",
    quote: "Bacon jam burger, Nannie's chicken sandwich and the cheese curds were all really good!",
  },
  {
    name: "Alona",
    quote: "The cheese curds and Brussel sprouts were awesome. Our burgers were cooked to perfection.",
  },
  {
    name: "Sylvie",
    quote: "The food is awesome... staff is great as well!! Highly recommend this restaurant!!",
  },
];

export const socialLinks = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
];
