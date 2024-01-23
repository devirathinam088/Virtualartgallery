import React from "react";
import { ArtbullList } from "./data/Databull";
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
        {ArtbullList.map((arts) => (
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
               <h2> Title:"Bull"</h2><br/>
            <h3>  Artist: B Vithal </h3><br/>
            <h3>Medium: Bronze</h3> <br/>
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
