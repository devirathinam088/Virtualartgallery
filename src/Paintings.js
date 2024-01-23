import React from "react";
import { ArtList } from "./data/Datapainting";
import Layout from "./components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Paintings = () => {
  return (
    <Layout><br/>
       <Typography>
        <h1 style={{backgroundColor:'#B2FFFF'}}>PAINTINGS </h1>
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {ArtList.map((arts) => (
          <Card sx={{ maxWidth: "490px", display: "flex", m: 2 }}>
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
                <Typography variant="body2">{arts.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Paintings;
