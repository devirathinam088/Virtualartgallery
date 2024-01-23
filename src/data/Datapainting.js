import paint1 from "../images/paint 1.jpg" 
import paint2 from "../images/paint2.jpg";
import paint3 from "../images/paint3.jpg";
import paint4 from "../images/paint4.jpg";
import paint5 from "../images/paint5.jpg";
import paint6 from "../images/paint6.jpg";
import { Link } from "react-router-dom";
export const ArtList = [
  {
    name: (<Link to="/sundari">Sundari</Link>),
    image: paint1,
    // Title: Sundri
  //  Artist: Jayasri Burman,
  //  Art Type: Painting,
  //  Medium: Watercolor On Paper,
  },
  
  {
    name:(<Link to="/flying-high">Flying High</Link>),
    image: paint2,
//     Title: Flying High
// Artist: Abhay
// Art Type: Painting
// Medium: Oil On Canvas
  },
  {
    name: (  <Link to="/flute-seller">Flute Seller</Link>),
    image: paint3,
//     Title: Flute Seller
// Artist: Arnab Basu
// Art Type: Painting
// Medium: Acryclic On Canvas
  },
  {
    name: (<Link to="/banaras">Banaras</Link>),
    image: paint5,
//     Title: Banaras
// Artist: Saumen Saha
// Art Type: Painting
// Medium: Acryclic On Canvas
  },
  {
    name: ( <Link to="/wastalya">Wastalya</Link>),
    image: paint4,
//     Title: Wastalya
// Artist: Sanjay Raut
// Art Type: Painting
// Medium: Acryclic On Canvas,
  },
  {
    name: (<Link to="/peacock">Peacock</Link>),
    image: paint6,
//     Title: Peacock
// Artist: Nirakar Chowdhury
// Art Type: Painting
// Medium: Acrylic On Canvas
  },
];
