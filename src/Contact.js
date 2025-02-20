import React from "react";
import { Container, TextField, Typography, Box, Paper, Avatar, IconButton, Button,} from "@mui/material";
import Badge from '@mui/material/Badge';
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import CelebrationIcon from '@mui/icons-material/Celebration';
import HomeIcon from '@mui/icons-material/Home';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import StarRateIcon from '@mui/icons-material/StarRate';
import DateRangeIcon from '@mui/icons-material/DateRange';

function Contact(){
  return <>
    <Container maxWidth="sm">
      <Box
        sx={{
          backgroundColor: "purple",
          color: "white",
          p: 2,
          borderRadius: "10px 10px 0 0",
          textAlign: "center",
          position: "relative",
        }}
      >
        <Avatar
          src="./man.jpg"
          alt="John Weak"
          sx={{ width: 50, height: 50, margin: "0 auto" }}
        />
        <Typography variant="h6">Hello,Welcome John Weak <CelebrationIcon/> </Typography>
        <IconButton
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "white",
          }}
        > 
      <Badge color="secondary" variant="dot">
      <NotificationsIcon />
      </Badge>
         
        </IconButton>
      </Box>

  
      <Paper sx={{ p: 3, mt: 0, borderRadius: "0 0 10px 10px" }}>
        <Typography variant="h4">Contact us</Typography>

   
        <Box display="flex" alignItems="center" my={1}>
          <EmailIcon sx={{ mr: 1 }} />
          <Typography>workforeign@gmail.com</Typography>
        </Box>

    
        <Box display="flex" alignItems="center" my={1}>
          <PhoneIcon sx={{ mr: 1 }} />
          <Typography>+91 XXXX XXX XXX</Typography>
        </Box>

        <TextField fullWidth label="Name" variant="outlined" margin="normal" placeholder="John Weak" />
        <TextField fullWidth label="Email" variant="outlined" margin="normal" placeholder="john@example.com" />
        <TextField fullWidth label="Message" variant="outlined" margin="normal" multiline rows={3} placeholder="Enter your query..." />

       
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Submit
        </Button>
      </Paper>

  
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          mt: 2,
          py: 1,
          backgroundColor: "#f5f5f5",
          borderRadius: "10px",
        }}
      >
        <Typography><HomeIcon/> Home</Typography>
        <Typography><FindInPageIcon/> Compliance</Typography>
        <Typography><ThumbUpAltIcon/>Eligibility</Typography>
        <Typography><StarRateIcon/> Resource</Typography>
        <Typography><DateRangeIcon/> Reminder</Typography>
      </Box>
    </Container>
  </>
};

export default Contact;