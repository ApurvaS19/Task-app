import React from "react";
import { AppBar, Toolbar, Typography, Avatar, Container, Card, CardContent, CardMedia, BottomNavigation, BottomNavigationAction } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from '@mui/material/Badge';
import HomeIcon from '@mui/icons-material/Home';
import GavelIcon from "@mui/icons-material/Gavel";
import AssignmentIcon from "@mui/icons-material/Assignment";
import InfoIcon from "@mui/icons-material/Info";
import CelebrationIcon from '@mui/icons-material/Celebration';

function About(){
    return <>
       <Container maxWidth="sm">
          <div style={{  marginTop: 3 ,maxwidth:"sm", minHeight:"100px", backgroundColor: "#f5f5f5", minHeight: "70px" }}>
          <AppBar position="static" sx={{ backgroundColor: "purple", padding: "10px" }}>
            <Toolbar>
              <Avatar sx={{ marginRight: 2 }} src="./man.jpg" alt="John Weak" />
              <Typography sx={{ flexGrow: 1 }}>
              <h3> Hello, Welcome <CelebrationIcon/> <br/> John Weak</h3> 
              </Typography>
              <Badge color="secondary" variant="dot">
             <NotificationsIcon />
             </Badge>
            </Toolbar>
          </AppBar>
         
          <Typography >
                <h2>About Us</h2>  
                </Typography>
                
            <Card sx={{ marginTop: 3 }}>
              <CardMedia
                component="img"
                height="250"
                image="./man.jpg"
                alt="Profile Image"
              />
              <CardContent>
               
                <Typography variant="body1">
                  We are a team of dedicated professionals driven by creativity, innovation, and a passion for exceptional design.
                  whith years of experties in mobile apllication and website design.we specialize in 
                  transforming ideas into captivating digital experiences that seamlessly combine functionality 
                  and aesthetics. Our approach is centered on understanding the unique needs of each client, ensuring 
                  every project we undertake not only allgns with their vision but also elevates their brand in the 
                  digital space.

                </Typography>
              </CardContent>
            </Card>
            
          
        </div>
          </Container>
          <BottomNavigation showLabels sx={{ position: "fixed", bottom: 0, width: "100%" }}>
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Compliance" icon={<GavelIcon />} />
            <BottomNavigationAction label="Eligibility" icon={<AssignmentIcon />} />
            <BottomNavigationAction label="Resource" icon={<InfoIcon />} />
          </BottomNavigation>
       
      </>
}
export default About;