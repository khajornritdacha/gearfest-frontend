import BlueLagoon from "@/assets/elements/blue-lagoon.png";
import Cosmo from "@/assets/elements/cosmopolitan.png";
import Gin from "@/assets/elements/gin-and-tonic.png";
import Lavender from "@/assets/elements/lavender-lemonade.png";
import Pina from "@/assets/elements/pina-colada.png";
import SBSangria from "@/assets/elements/summer-berry-sangria.png";
import { NAME } from "@/data/cocktail";

const parser = (
  data: string | undefined
): {
  name: string;
  image: string;
} => {
  switch (data) {
    case "sangria":
      return {
        name: NAME["raspberry"],
        image: SBSangria.src,
      };
    case "cosmopolitan":
      return {
        name: NAME["cosmo"],
        image: Cosmo.src,
      };
    case "pinacolada":
      return {
        name: NAME["pina"],
        image: Pina.src,
      };
    case "ginandtonic":
      return {
        name: NAME["gin"],
        image: Gin.src,
      };
    case "bluelagoon":
      return {
        name: NAME["lagoon"],
        image: BlueLagoon.src,
      };
    case "lavenderlemonade":
      return {
        name: NAME["lalemon"],
        image: Lavender.src,
      };
    default:
      return {
        name: NAME["raspberry"],
        image: SBSangria.src,
      };
  }
};

export default parser;
