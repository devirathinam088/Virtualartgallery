import React from "react";
import { Art3dList } from "./data/Dataart3d";
import Layout from "./components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Digitalarts = () => {
  return (
    <Layout><br/>
       <Typography>
        <h1 style={{backgroundColor:'#B2FFFF'}}> 3D ARTS </h1>
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {Art3dList.map((arts) => (
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

export default Digitalarts;