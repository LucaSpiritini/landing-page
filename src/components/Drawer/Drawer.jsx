import React from "react";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
import close from "../../assets/img/close.svg";
import Navbar from "../Navbar";

const Drawer = ({ open, onClose }) => {
  return (
    <MuiDrawer
      PaperProps={{
        sx: { width: "100%" },
      }}
      anchor={ "left" }
      open={ open }
      onClose={ onClose }
    >
      <Box sx={{ padding: "2px" }}>
        <IconButton onClick={ onClose } sx={{ padding: 0 }}>
          <img src={ close } alt="" />
        </IconButton>
      </Box>
      <Box sx={{ paddin: "44px" }}>
        <Navbar />
      </Box>
    </MuiDrawer>
  )
};

export default Drawer;
