import React, { useState, useEffect } from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TrainService from "../TrainService";
import FadeLoader from "react-spinners/FadeLoader";
import "../Styles/personalDetails.css";

const PersonalDetails = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const res = localStorage.getItem("details");
  const details = JSON.parse(res);

  const [final, setFinal] = useState(details);

  const eventHandler = (event) => {
    setFinal({ ...final, [event.target.name]: event.target.value });
  };

  const eventSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("finalDetails", final);
    TrainService.savePassenger(final)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    navigate("/passengers");
  };

  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 30,
          }}
        >
          <FadeLoader
            color="#102b3f"
            cssOverride={{}}
            height={20}
            loading
            margin={5}
            radius={10}
            speedMultiplier={1}
            width={4}
          />
        </Box>
      ) : (
        <>
          <Container fullWidth={false}>
            <h1>Personal Details</h1>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextField
                label="First Name"
                onChange={eventHandler}
                type="text"
                name="firstName"
                value={final.firstName}
                className="personal-text"
                required
                sx={{ marginBottom: 5 }}
                />
              <TextField
                label="Last Name"
                onChange={eventHandler}
                type="text"
                name="lastName"
                value={final.lastName}
                className="personal-text"
                sx={{ marginBottom: 5 }}
                required
                />
              <TextField
                label="Phone Number"
                onChange={eventHandler}
                type="number"
                name="phoneNumber"
                value={final.phoneNumber}
                className="personal-text"
                sx={{ marginBottom: 5 }}
                required
                />
              <TextField
                label="Email"
                name="email"
                onChange={eventHandler}
                type="email"
                value={final.email}
                className="personal-text"
                sx={{ marginBottom: 5 }}
                required
                />
              <TextField
                label="Country"
                onChange={eventHandler}
                type="text"
                name="country"
                value={final.country}
                className="personal-text"
                sx={{ marginBottom: 5 }}
                required
                />
              <TextField
                label="Pincode"
                onChange={eventHandler}
                type="number"
                name="pincode"
                value={final.pincode}
                className="personal-text"
                sx={{ marginBottom: 5 }}
                required
                />
              <TextField
                label="Address"
                onChange={eventHandler}
                type="text"
                name="address"
                value={final.address}
                className="personal-text"
                sx={{ marginBottom: 5 }}
                required
              />
              <Button onClick={eventSubmit} id="personal-button" sx={{color:"white"}}>Submit</Button>
            </Box>
          </Container>
        </>
      )}
    </>
  );
};

export default PersonalDetails;
