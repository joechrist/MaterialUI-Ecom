import React, { useState } from "react";
import {
  Toolbar,
  IconButton,
  Typography,
  Button,
  Badge,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import DrawerComponent from "./DrawerComponent";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  // State managment - where we want to display our menu item
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(true); //
  //theme instance
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm")); // return a boolean

  // Convert anchorEL fromm 'null' to 'boolean' type
  const openMenu = Boolean(anchorEl);

  // Toogle when click menu
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  // Close menu
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {/* Can replace <AppBar> by <Box></Box> */}
      <Box elevation={0} sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "10px 0px ",
            }}
            component="div"
          >
            {/* logo */}
            <Box>
              <IconButton>
                <LocalMallIcon sx={{ fontSize: "2.4rem" }} />
              </IconButton>
            </Box>

            {/* Links display for large or smal screen*/}
            {matches ? (
              <DrawerComponent
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
              />
            ) : (
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                  }}
                >
                  Home
                </Typography>

                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                  }}
                >
                  Brand
                </Typography>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                  }}
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
                >
                  <MenuItem onClick={handleClose}>Men</MenuItem>
                  <MenuItem onClick={handleClose}>Women</MenuItem>
                  <MenuItem onClick={handleClose}>Phones</MenuItem>
                  <MenuItem onClick={handleClose}>Accessories</MenuItem>
                  <MenuItem onClick={handleClose}>Others</MenuItem>
                </Menu>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                  }}
                >
                  Men
                </Typography>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                  }}
                >
                  Women
                </Typography>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                  }}
                >
                  FAQ
                </Typography>
              </Box>
            )}

            {/* button links */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                sx={{ background: "#ff4081", marginLeft: "10px" }}
                disableElevation
                variant="contained"
              >
                Account
              </Button>

              {matches ? (
                <IconButton onClick={() => setOpenDrawer(true)}>
                  <MenuIcon />
                </IconButton>
              ) : (
                <IconButton>
                  <Badge badgeContent={4} color="primary">
                    <ShoppingBasketIcon color="action" />
                  </Badge>
                </IconButton>
              )}
            </Box>
          </Box>
        </Toolbar>
      </Box>
    </>
  );
};

export default Navbar;
