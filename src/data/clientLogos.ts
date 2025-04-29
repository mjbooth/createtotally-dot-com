const allClientLogos = [
    { src: "/bacardi_logo.png", alt: "Bacardi" },
    { src: "/vitality-logo.svg", alt: "Vitality" },
    { src: "/Anheuser-Busch_InBev.svg", alt: "Anheuser-Busch InBev" },
    { src: "/googlelogo_clr_74x24px.svg", alt: "Google" },
    { src: "/Logo_NIKE.png", alt: "Nike" },
    { src: "/miele.svg", alt: "Miele" },
    { src: "/patek-philippe-sa-1.svg", alt: "Patek Philippe" },
    { src: "/Allwyn-Logo.png", alt: "Allwyn" },
    { src: "/AGY_22_Logo_Doner_RGB.png", alt: "Doner" },
    { src: "/MSC_Cruises_Logo.png", alt: "MSC Cruises" },
];

function getRandomLogos(count: number): typeof allClientLogos {
    const shuffled = [...allClientLogos].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Export 9 random logos
export const clientLogos = getRandomLogos(9);