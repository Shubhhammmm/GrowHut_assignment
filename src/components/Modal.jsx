import { Box } from "@mui/material";
import React from "react";

const Modal = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <img
        src="halfCircle.png"
        alt=""
        style={{
          position: "absolute",
          top: 700,
          left: 0,
          width: "80px",
        }}
      />
      <img
        src="Group.png"
        alt=""
        style={{
          position: "absolute",
          top: -90,
          right: 100,
          width: "50px",
          zIndex: 99,
        }}
      />
      <img
        src="shape2.png"
        alt=""
        style={{
          position: "absolute",
          top: 1500,
          right: 0,
          width: "100px",
          zIndex: 99,
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "500px",
          fontSize: 20,
          ml: 13,
          my: 5,
        }}
      >
        <span style={{ fontWeight: 600, textDecoration: "underline" }}>
          All Vehicle
        </span>
        <span>2-whiller</span>
        <span>3-whiller</span>
        <span>4-whiller</span>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 10 }}>
        <img
          src="modal1.png"
          alt=""
          style={{ width: "80%", height: "650px" }}
        />
        <img
          src="car2.png"
          alt=""
          style={{
            width: "877px",
            height: "605px",
            marginLeft: "-800px",
            marginTop: "60px",
          }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src="modal2.png"
          alt=""
          style={{ width: "80%", height: "650px", marginLeft: "-700px" }}
        />
        <img
          src="car3.png"
          alt=""
          style={{
            width: "877px",
            height: "605px",
            marginLeft: "-1500px",
            marginTop: "150px",
          }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src="modal1.png"
          alt=""
          style={{ width: "80%", height: "650px", marginRight: "-500px" }}
        />
        <img
          src="car4.png"
          alt=""
          style={{
            width: "863px",
            height: "525px",
            marginLeft: "-300px",
            marginTop: "160px",
          }}
        />
      </Box>
    </Box>
  );
};

export default Modal;
