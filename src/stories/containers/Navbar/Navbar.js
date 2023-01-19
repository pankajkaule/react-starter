import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
  MyNavbar,
  SearchIconWrapper,
  useStyles,
  Search,
  StyledInputBase,
} from "./index.styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { useUserStatus } from "../../../hooks/useUserStatus";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import SideDrawer from "../SideDrawer/SideDrawer";

function Navbar(props) {
  const classes = useStyles(props);

  const userSttus = useUserStatus();
  const navigate = useNavigate();
  const handleClick = () => {
    if (userSttus.isLogged) {
      localStorage.removeItem("authToken");
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const childFunc = useRef();

  return (
    <MyNavbar {...props} onClick={props.onClick}>
      <SideDrawer childFunc={childFunc} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container justifyContent={"space-around"} alignItems={"center"}>
          <Grid className="mobile" xs={1}>
            <div onClick={() => childFunc.current()}>
              <MenuIcon />
            </div>
          </Grid>
          <Link to={"/"}>
            <Grid xs={6}>Dorrenbeads</Grid>
          </Link>
          <Grid className="desktop">
            <Search>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
              <SearchIconWrapper onClick={() => alert("searching in progress")}>
                <SearchIcon />
              </SearchIconWrapper>
            </Search>
          </Grid>

          <Grid>
            <Grid
              container
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <Grid xs={1} className="mobile">
                <SearchIcon />
              </Grid>
              <Grid xs={1}>
                <div className={classes.root} onClick={handleClick}>
                  <div>
                    <PersonIcon />
                  </div>
                  &ensp;
                  <div style={{ textAlign: "center" }} className="desktop">
                    {userSttus.isLogged ? "LogOut" : "Login"}
                  </div>
                </div>
              </Grid>
              <Grid xs={1} sx={{ padding: "0 20px" }}>
                <Link to="/cart">
                  <div className={classes.root}>
                    <Badge badgeContent={props.itemCount} color="secondary">
                      <ShoppingCartIcon />
                    </Badge>
                    &ensp;
                    <span className="desktop">Cart</span>
                  </div>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </MyNavbar>
  );
}

Navbar.propTypes = {
  bgcolor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Navbar;
