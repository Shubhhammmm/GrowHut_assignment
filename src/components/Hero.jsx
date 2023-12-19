import { Box } from "@mui/material";
import React from "react";

const Hero = () => {
  const style = {
    // backgroundImage: "url("+"HerobgFull.png"+")",
    // // backgroundPosition: "center",
    // // backgroundSize: "cover",
    // // backgroundRepeat: "no-repeat",
    // width: "90vw",
    // height: "90vh",
    position: "relative",
    mt:-10,
    zIndex:99
  };
  return (
    <>
    <img src="HerobgFull.png" alt="" style={{width:'92%',margin:'4%'}} />
      <Box sx={style}>
        <img
          src="feature1.png"
          alt=""
          style={{
            position: "absolute",
            bottom: 80,
            left: 500,
            width: "140px",
          }}
        />
        <img
          src="feture2.png"
          alt=""
          style={{ position: "absolute", top: -350, left: 600, width: "100px",
          zIndex:99 }}
        />
        <img
          src="feature3.png"
          alt=""
          style={{ position: "absolute", top: -350, right: 150, width: "100px",
          zIndex:99 }}
        />
        <img
          src="feature4.png"
          alt=""
          style={{
            position: "absolute",
            bottom: 20,
            right: 100,
            width: "100px",
          }}
        />
      </Box>
      <Box sx={{display:'flex', justifyContent:'end',mr:35}}>
        <img src="car1.png" alt="" style={{marginTop:'-420px', zIndex:99, height:'550px'}} />
      </Box>
    </>
  );
};

export default Hero;
