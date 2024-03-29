import art from "../images/art.jpg" 
import digital from "../images/digital.jpg";
import mordern from "../images/mordern.jpg";
import museum from "../images/museum.jpg";
import painting from "../images/painting.jpg";
import wonder from "../images/wonder.jpg";
import { Link } from "react-router-dom";
export const MenuList = [
  {
    
    name: (<Link to="/arts3d">3D Arts</Link>),
    description:
      "3D arts can be found in various fields, including animation, video games, film production, architecture, product design, and visual effects. This art form allows artists to create immersive and realistic visual experiences by manipulating shapes, textures, lighting, and perspectives.",
    image: art,
    
  },
  
  {
    name:(<Link to="/digitalarts">Digital Arts</Link>),
    description:
      "Digital arts refer to artistic creations that are produced using digital technology and tools. This form of art encompasses a wide range of mediums, including digital painting, digital photography, computer-generated imagery (CGI), digital sculpture, interactive installations, and more.",
    image: digital,
  },
  {
    name: (  <Link to="/modernportraits">Modern Portraits</Link>),
    description:
      "Modern portraits can be found in galleries, museums, and private collections, showcasing the diversity and innovation within the genre. They provide a contemporary lens through which viewers can explore and connect with the human experience in the present day.",
    image: mordern,
  },
  {
    name: (<Link to="/museum">Museum</Link>),
    description:
      "Museum arts can span various periods, styles, and movements, showcasing the diversity and evolution of artistic expression throughout history. Museums provide a platform for artists to showcase their creations and for audiences to explore and interpret the artworks within a curated context.",
    image: museum,
  },
  {
    name: ( <Link to="/paintings">Paintings</Link>),
    description:
      "Paintings have a rich history dating back thousands of years and have been created by artists from various cultures and periods. They serve as a means of storytelling, cultural expression, and personal exploration. Paintings can capture moments in time, freeze emotions, or challenge societal norms.",
    image: painting,
  },
  {
    name: (<Link to="/wonders">Wonders</Link>),
    description:
      "Wonders typically refer to extraordinary and awe-inspiring phenomena, structures, or creations that captivate the imagination and leave a lasting impression on those who witness them. Wonders can be natural, such as breathtaking landscapes, geological formations, or celestial events, or they can be man-made, showcasing remarkable feats of engineering, architecture, or artistic craftsmanship.",
    image: wonder,
  },
];
