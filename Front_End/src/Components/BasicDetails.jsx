import React from "react";
import { Box, TextField, Button } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import "../Styles/BasicDetails.css";

const BasicDetails = (props) => {
  const navigate = useNavigate();

  const nextDetails = () => {
    localStorage.setItem("details", JSON.stringify(props.details));
    navigate("/personal");
  };

  return (
    <Container fullWidth={false} sx={{ height: "85vh" }}>
      <h1 variant="h2" component="h1" gutterBottom>
        Registration
      </h1>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          label="User Name"
          type="text"
          onChange={props.eventHandler}
          name="username"
          className="text-field"
          sx={{ marginBottom: "30px" }}
          required
          />
        <TextField
          label="Password"
          type="password"
          onChange={props.eventHandler}
          name="password"
          className="text-field"
          sx={{ marginBottom: "30px" }}
          required
          />
        <TextField
          label="Confirm Password"
          type="password"
          onChange={props.eventHandler}
          name="confirmPassword"
          className="text-field"
          sx={{ marginBottom: "30px" }}
          required
          />
        <Button id="basic-button" variant="contained" onClick={nextDetails}>
          Next
        </Button>
      </Box>
    </Container>
  );
};

export default BasicDetails;
