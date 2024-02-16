import imgGrid from "./assets/inno-grid.webp";
import imgSolar from "./assets/inno-panel.webp";
import imgWind from "./assets/inno-wind.webp";

export const innovationsSection = {
  title: "Latest Innovations",
  subheading1_1: "Discover Our Cutting-edge",
  subheading1_2: " Green Energy Technologies",
  innovations: [
    {
      title: "Smart Grid Integration",
      description:
        "Revolutionize energy distribution with our smart grid technology, optimizing efficiency, minimizing wastage, and adapting to demand fluctuations. Stay connected with innovative solutions for a sustainable, cost-effective energy ecosystem. Embrace the future with our cutting-edge smart grid integration, enhancing reliability and paving the way for efficiency and sustainability.",
      visual: imgGrid,
    },
    {
      title: "Advanced Solar Panel Design",
      description:
        "Boost solar efficiency with our state-of-the-art solar panel designs. Our innovative technologies capture more sunlight, ensuring maximum energy production for your home or business. Experience enhanced sustainability and increased energy output with our advanced solar solutions.",
      visual: imgSolar,
    },
    {
      title: "Next-gen Wind Turbines",
      description:
        "Transform your wind energy experience with our next-generation wind turbines. Our sleek design, enhanced efficiency, and minimal environmental impact underscore our commitment to innovation. Elevate your sustainable energy journey with cutting-edge wind solutions that prioritize both performance and environmental responsibility.",
      visual: imgWind,
    },
  ],
  visual: "innovations-section-image.jpg",
  callToAction: "Explore the Future of Green Energy with [Company Name]",
  button: "Learn More",
};
