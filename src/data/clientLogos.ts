// src/data/clientLogos.ts

const allClientLogos = [
    { src: "/bacardi_logo.png" },
    { src: "/vitality-logo.svg" },
    { src: "/Anheuser-Busch_InBev.svg" },
    { src: "/googlelogo_clr_74x24px.svg" },
    { src: "/Logo_NIKE.png" },
    { src: "/miele.svg" },
    { src: "/patek-philippe-sa-1.svg" },
    { src: "/Allwyn-Logo.png" },
    { src: "/AGY_22_Logo_Doner_RGB.png" },
    { src: "/MSC_Cruises_Logo.png" }
];

function getRandomLogos(count: number): typeof allClientLogos {
    const shuffled = [...allClientLogos].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Export 9 random logos
export const clientLogos = getRandomLogos(9);