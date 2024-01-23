
import digitalart1 from "../images/digitalart1.jpg" 
import digitalart2 from "../images/digitalart2.jpg";
import digitalart3 from "../images/digitalart3.jpg";
import digitalart4 from "../images/digitalart4.jpg";
import digitalart5 from "../images/digitalart5.jpg";
import digitalart6 from "../images/digitalart6.jpg";
import { Link } from "react-router-dom";
<h1>
Digital Arts
</h1>
export const ArtdigitalList = [
  {
    name: (<Link to="/valley">Valleys</Link>),
    image: digitalart1,
    // Title: Valley
    // Artist: Tejal Patel
    // Art Type: Painting4
    // Medium: Acryclic On Canvas
  },
  
  {
    name:(<Link to="/puresoul">Pure Soul</Link>),
    image: digitalart2,
    // Title: Untitled 2003
    // Artist: Prabhakar Kolte
    // Art Type: Painting
    // Medium: Acryclic On Canvas
  },
  {
    name: (  <Link to="/birds Of paradise">Birds of Paradise</Link>),
    image: digitalart3,
    // Title: Birds Of Paradise
    // Artist: Abhay
    // Art Type: Painting
    // Medium: Oil On Canvas
  },
  {
    name: (<Link to="/epic">Epic</Link>),
    image: digitalart4,
    // Title: Untitle,
    // Artist: Shrikant Kadam
    // Art Type: Painting
    // Medium: Acryclic On Canvas
  },
  {
    name: ( <Link to="/life-of-horse">The Life of Horse</Link>),
    image: digitalart5,
    // Title: Untitled
    // Artist: Devidas Dharmadhikari
    // Art Type: Painting
    // Medium: Acryclic On Canvas
  },
  {
    name: (<Link to="/peaceful life">Peaceful Life</Link>),
    image: digitalart6,
    // Title: Untitled
    // Artist: Somnath Bothe
    // Art Type: Painting
    // Medium: Charcoal & Acrylic On Canvas
  },
];