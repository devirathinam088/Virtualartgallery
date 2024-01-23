import React from "react";
import { MenuList } from "../data/data";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  return (
    <div>
    <AppBar position="static" sx={{backgroundColor:"#0F0F0F"}}>
    <Toolbar>
      
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        Virtual Art Gallery
      </Typography>
   
      <Box sx={{ flexGrow: 1 }} />
      <a href="/arts"><Button style={{backgroundColor:'black'}} variant="contained" >
          arts
        </Button> </a>
        
<a href="/profile1"><Button style={{backgroundColor:'black'}} variant="contained" >
          Profile
        </Button> </a>

    </Toolbar>
  </AppBar>

    <div>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "490px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      </div>
      </div>
  );
};

export default Menu;
