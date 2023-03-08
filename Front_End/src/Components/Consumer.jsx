import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import "../Styles/Consumer.css";

const Consumer = () => {
  return (
    <>
      <Grid fullWidth={false}>
        <Grid
          item
          sx={{
            backgroundImage: "url(/assets/bookings.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            // opacity: 0.6,
          }}
        >
          <Box sx={{ height: 1000 }}>
            <div sx={{width:"200px", height:"200px"}}>
              <h2 id="consumer-heading">SATISFIED CUSTOMERS</h2>
            </div>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Consumer;
