import imgGrid from "./assets/grid.jpg";
import imgSolar from "./assets/solar2.jpg";
import imgWind from "./assets/wind.jpg";

export const innovationsSection = {
  title: "Latest Innovations",
  subheading: "Discover Our Cutting-edge Green Energy Technologies",
  innovations: [
    {
      title: "Smart Grid Integration",
      description:
        "Our smart grid technology optimizes energy distribution, reduces wastage, and enhances overall grid efficiency. Stay connected and in control with our innovative solutions.",
      visual: imgGrid,
    },
    {
      title: "Advanced Solar Panel Design",
      description:
        "Experience improved solar efficiency with our advanced solar panel designs. Our innovative technologies capture more sunlight, maximizing energy production for your home or business.",
      visual: imgSolar,
    },
    {
      title: "Next-gen Wind Turbines",
      description:
        "Elevate your wind energy experience with our next-generation wind turbines. Sleek design, enhanced efficiency, and minimal environmental impact define our commitment to innovation.",
      visual: imgWind,
    },
  ],
  visual: "innovations-section-image.jpg",
  callToAction: "Explore the Future of Green Energy with [Company Name]",
  button: "Learn More",
};
