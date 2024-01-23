import React from "react";
import { ArtgardernList } from "./data/Datahanginggarden";
import Layout from "./components/Layout/Layout";
// import Rating from "@mui/material/Rating";
import DownloadIcon from '@mui/icons-material/Download';
import { styled } from "@mui/material/styles";
import  MuiRating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
const StyledRating = styled(MuiRating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  }, 
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const Paintings = () => {
    return (
      <div style={{backgroundColor:'#ACE1AF'}}>
    <Layout  >
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {ArtgardernList.map((arts) => (
          <Card sx={{ maxWidth: "490px", display: "flex", m: 2 , marginLeft:"1px"}}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={arts.image}
                alt={arts.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {arts.name}
                </Typography>
                <Typography variant="body2">{arts.description}
               <h2> Title:"The Hanging Gardens of Babylon"</h2><br/>
            <h3>  Artist: Ferdinand Knab</h3><br/>
            <h3>Medium: Color Litho</h3> <br/>
         <h3> Description: The Hanging Gardens of Babylon, from a series of the 'Seven Wonders of the World' published in 'Munchener Bilderbogen', 1886 (colour litho), Knab, Ferdinand (1834-1902) </h3><br/>
         <DownloadIcon sx={{marginRight:'250px'}}/>
         
         <StyledRating  name="customized-color" defaultValue={arts.rating} precision={0.5} icon={<FavoriteIcon  fontSize="inherit" />} emptyIcon={<FavoriteBorderIcon  fontSize="inherit" />}  /> 
         {/* <p>Download</p>  */}
         <h2 style={{fontFamily:'initial',fontSize:'30px',color:'#120A8F'}}> To Buy: artgallery@gmail.com</h2>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
    </div>
  );
};

export default Paintings;
