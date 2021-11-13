import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";
import { Box } from "@mui/system";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const Navbar = () => {
  // State managment - where we want to display our menu item
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl); // Convert anchorEL fromm 'null' to 'boolean' type

  // Toogle when click menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    //   Can replace <AppBar> by <Box>
    <AppBar elevation={0} sx={{ backgroundColor: "white" }}>
      <Toolbar>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "10px 0px",
          }}
        >
          {/* Logo */}
          <Box>
            <IconButton>
              <LocalMallIcon sx={{ fontSize: "4.2rem" }} />
            </IconButton>
          </Box>
          {/* Links */}
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
            >
              Home
            </Typography>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
            >
              Brand
            </Typography>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={openMenu ? "true" : undefined}
              onClick={handleClick}
            >
              Categories
            </Typography>
            {/* Dropdown Items */}
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Men</MenuItem>
              <MenuItem onClick={handleClose}>Women</MenuItem>
              <MenuItem onClick={handleClose}>Phones</MenuItem>
              <MenuItem onClick={handleClose}>Accessories</MenuItem>
              <MenuItem onClick={handleClose}>Others</MenuItem>
            </Menu>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
            >
              Mens
            </Typography>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
            >
              Womens
            </Typography>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
            >
              FAQ
            </Typography>
          </Box>
          {/* Button Links */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
            }}
          >
            <Button
              sx={{ backgroundColor: "#ff4081" }}
              disableElevation
              variant="contained"
            >
              Account
            </Button>
            <IconButton>
              <Badge badgeContent={4} color="primary">
                <ShoppingBasketIcon color="action" />
              </Badge>
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
