/** Active company copy checked against Planet Green's official site on 23 November 2026.
 * Sources: https://planetgreen.co.in/index.html · /about-us.html · /philosophy.html · /communities.html
 * Descriptions are editorial paraphrases. No availability, returns or project-size claims are made.
 * Community presentation uses Ecoworld in place of Dates County at the user's request.
 */
export const planetGreenCompany = {
  name: "Planet Green",
  invitation: "Move to Nature",
  website: "https://planetgreen.co.in/index.html",
  about: "https://planetgreen.co.in/about-us.html",
  philosophyUrl: "https://planetgreen.co.in/philosophy.html",
  communitiesUrl: "https://planetgreen.co.in/communities.html",
  purpose:
    "Natural farming and green eco-habitats that help urban Indian families reconnect with nature.",
  philosophy: [
    {
      name: "Indulge",
      title: "Experience a life closer to nature.",
      body: "Make room for nature in everyday living. Planet Green brings the landscape into its vision for communities and green eco-habitats.",
      href: "#purpose",
      link: "Discover Planet Green",
    },
    {
      name: "Involve",
      title: "Take part in cultivation.",
      body: "Reconnect with the land through participation. Planet Green's mission brings preparing food, growing produce and replenishing soil into practical experience.",
      href: "#portfolio",
      link: "Explore our communities",
    },
    {
      name: "Impact",
      title: "Care for the land that sustains us.",
      body: "Planet Green's philosophy places the relationship between human life and nature at its centre. Care for the ground is part of caring for the life it supports.",
      href: "#elements",
      link: "Explore earth and life",
    },
  ],
  communities: [
    { name: "Ecoworld", href: "https://theecoworld.in/" },
    { name: "Farm Natura", href: "https://www.farmnatura.in/" },
    { name: "Green Land Capital", href: "https://greenlandcapital.in/" },
    { name: "Veda Bharat", href: "https://vedabharath.com/" },
  ],
} as const;
