import museum11 from "../images/museum11.jpg" 
import museum2 from "../images/museum2.jpg";
import museum3 from "../images/museum3.jpg";
import museum4 from "../images/museum4.webp";
import museum5 from "../images/museum5.webp";
import museum6 from "../images/museum6.webp";
import { Link } from "react-router-dom";
export const ArtList1 = [
  {
    name: (<Link to="/bull">Bull</Link>),
    image: museum11,
    // Title: Bull
    // Artist: B Vithal
    // Art Type: Sculpture   
    // Medium: Bronze
  },
  
  {
    name:(<Link to="/gold">Gold</Link>),
    image: museum2,
    // Title: Gold
    // Artist: B Vithal
    // Art Type: Sculpture
    // Medium: Bronze
  },
  {
    name: (  <Link to="/tune of love">Tune of Love</Link>),
    image: museum3,
    // Title : Tune Of Love
    // Artist: Subrata Paul
    // Medium : Bronze & Wood
  },
  {
    name: (<Link to="/The Royal Horse">The Royal Horse</Link>),
    image: museum4,
    // Material: Poly-Stone
  },
  {
    name: ( <Link to="/life-of-elephants">The Life of Elephants</Link>),
    image: museum5,
    // Material: Poly Stone + Resin
  },
  {
    name: (<Link to="/david-bust-statue">David's Bust Statue</Link>),
    image: museum6,
    // Material: Poly-Stone
  },
];