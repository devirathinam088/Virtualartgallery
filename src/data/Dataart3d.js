
import art1 from "../images/art1.jpg" 
import art2 from "../images/art2.jpg";
import art3 from "../images/art3.jpg";
import art4 from "../images/art4.jpg";
import art5 from "../images/art5.jpg";
import art6 from "../images/art6.jpg";
import { Link } from "react-router-dom";
<h1>
Digital Arts
</h1>
export const Art3dList = [
  {
    name: (<Link to="/dancing">Dancing fairy</Link>),
    image: art1,
    // Title: Dancing fairy.
    // Artist: P_Wei
  },
  
  {
    name:(<Link to="/freeme">Free Me </Link>),
    image: art2,
    // Title:  FREE ME 
    // Artist: lisa-mckay
   // Art Type: Painting

  },
  {
    name: (  <Link to="/bigben">Big Ben </Link>),
    image: art3,
    // Title: Big Ben 
    // Artist: Abhay dev
    // Art Type: Painting
    // Medium: canvasProduct 
  },
  {
    name: (<Link to="/abstractroses">Abstract Roses</Link>),
    image: art4,
    // Title: Abstract Roses,
    // Artist: Shrikant 
    // Art Type: Painting
    // Medium: Acryclic On Canvas
  },
  {
    name: ( <Link to="/butterflyeffect">Butterfly Effect</Link>),
    image: art5,
    // Title: Butterfly Effect
    // Artist: Dharmadhikari
    // Art Type: Painting
    // Medium: Acryclic On Canvas
  },
  {
    name: (<Link to="/cherries">Cherries</Link>),
    image: art6,
    // Title: Cherries
    // Artist: Somnath 
    // Art Type: Painting
    // Medium:  Canvas
  },
];