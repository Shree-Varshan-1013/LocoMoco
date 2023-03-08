import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import BasicDetails from "./BasicDetails";
import "../Styles/register.css";
import FadeLoader from "react-spinners/FadeLoader";

const Register = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const initialState = {
    username: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
    country: "",
    address: "",
    pincode: "",
  };

  const [details, setDetails] = useState(initialState);

  const eventHandler = (event) => {
    setDetails({
      ...details,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container maxWidth={false}>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p:30
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
            className="spin"
          />
        </Box>
      ) : (
        <>
          <>
            <BasicDetails eventHandler={eventHandler} details={details} />
          </>
        </>
      )}
    </Container>
  );
};

export default Register;
