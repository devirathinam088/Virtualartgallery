
import mordern1 from "../images/mordern1.jpg" 
import mordern2 from "../images/mordern2.jpeg";
import mordern3 from "../images/mordern3.jpeg";
// import digitalart4 from "../images/digitalart4.jpg";
// import digitalart5 from "../images/digitalart5.jpg";
// import digitalart6 from "../images/digitalart6.jpg";
import { Link } from "react-router-dom";
<h1>
Digital Arts
</h1>
export const ArtportraitList = [
  {
    name: (<Link to="/ladyagnew">Lady Agnew Of Lochnaw</Link>),
    image: mordern1,
    // Title: Lady Agnew Of Lochnaw
    // Artist: John Singer Sargent | 
    // Art Type: Painting4
    // Medium: Acryclic On Canvas
  },
  
  {
    name:(<Link to="/monalisa">Mona Lisa</Link>),
    image: mordern2,
    // Title: Mona Lisa
    // Artist:  Kolte
    // Art Type: Painting
    // Medium: Acryclic On Canvas
  },
  {
    name: (  <Link to="/hansholbein">Hans Holbein</Link>),
    image: mordern3,
    // Title: Hans Holbein
    // Artist: edwin
    // Art Type: Painting
    // Medium: Oil On Canvas
  },
//   {
//     name: (<Link to="/epic">Epic</Link>),
//     image: digitalart4,
//     // Title: Untitle,
//     // Artist: Shrikant Kadam
//     // Art Type: Painting
//     // Medium: Acryclic On Canvas
//   },
//   {
//     name: ( <Link to="/life-of-horse">The Life of Horse</Link>),
//     image: digitalart5,
//     // Title: Untitled
//     // Artist: Devidas Dharmadhikari
//     // Art Type: Painting
//     // Medium: Acryclic On Canvas
//   },
//   {
//     name: (<Link to="/peaceful life">Peaceful Life</Link>),
//     image: digitalart6,
//     // Title: Untitled
//     // Artist: Somnath Bothe
//     // Art Type: Painting
//     // Medium: Charcoal & Acrylic On Canvas
//   },
];