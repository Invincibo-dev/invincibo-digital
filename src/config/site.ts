export const siteConfig = {
  name: "Invincibo Digital",
  legalName: null,
  description:
    "Solutions logicielles, applications métier et automatisations pour les entreprises.",
  footerDescription:
    "Nous concevons des systèmes numériques pour mieux organiser, suivre et contrôler les opérations des entreprises.",
  slogan: "Des logiciels conçus pour faire avancer votre entreprise.",
  domain: "https://invincibodigital.com",
  domainIsProvisional: true,
  locale: "fr-HT",
  language: "fr",
  phone: "+50936896407",
  whatsapp: "50936896407",
  email: null,
  socialLinks: {},
} as const;

export const mainNavigation = [
  { label: "Accueil", href: "/#accueil" },
  { label: "Solutions", href: "/solutions/" },
  { label: "Réalisations", href: "/#realisations" },
  { label: "Méthode", href: "/#methode" },
  { label: "À propos", href: "/#a-propos" },
  { label: "Contact", href: "/#contact" },
] as const;

export function createWhatsAppUrl(message?: string): string {
  const url = new URL(`https://wa.me/${siteConfig.whatsapp}`);

  if (message) {
    url.searchParams.set("text", message);
  }

  return url.toString();
}

export function formatPhoneForDisplay(phone: string): string {
  const match = phone.match(/^(\+\d{3})(\d{4})(\d{4})$/);

  return match ? `${match[1]} ${match[2]}-${match[3]}` : phone;
}
