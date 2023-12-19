import { Box } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState("india");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        boxShadow: "1px 1px 5px #888888",
        zIndex: 99,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
          py: 2,
        }}
      >
        <Box sx={{ fontSize: 20, fontWeight: 600 }}>Logo</Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
          }}
        >
          <NavLink
            to="/Business"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            style={{ textDecoration: "none", marginTop: "5px" }}
          >
            Business
          </NavLink>
          <NavLink
            to="/DriverPartner"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            style={{ textDecoration: "none", marginTop: "5px" }}
          >
            Driver Partner
          </NavLink>
          <NavLink
            to="/Vehicles"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            style={{ textDecoration: "none", marginTop: "5px" }}
          >
            Vehicles
          </NavLink>
          <NavLink
            to="/AboutU"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            style={{ textDecoration: "none", marginTop: "5px" }}
          >
            About Us
          </NavLink>
          <NavLink
            to="/ContactUs"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            style={{ textDecoration: "none", marginTop: "5px" }}
          >
            Contact Us
          </NavLink>
          <FormControl
            sx={{
              minWidth: 120,
              "& .MuiSelect-select": {
                p: 0.5,
              },
            }}
          >
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              value={country}
              label=""
              onChange={(e) => setCountry(e.target.value)}
            >
              <MenuItem value={"english"}>English</MenuItem>
              <MenuItem value={"india"}>India</MenuItem>
              <MenuItem value={"US"}>US</MenuItem>
              <MenuItem value={"Africa"}>Africa</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
