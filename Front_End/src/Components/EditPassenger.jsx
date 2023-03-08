import React, { useState, useEffect } from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import TrainService from "../TrainService";
import "../Styles/EditPassenger.css";

const theme = createTheme({
  palette:{
    primary: {
      main: "#f70000",
    },
    secondary: {
      main: "#1BDC2E",
    },
  },
})

const EditPassenger = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [pass, setPass] = useState({
    serialNo: id,
    username: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
    country: "",
    address: "",
    pincode: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await TrainService.getPassenger(id);
        setPass(response.data);
        console.log(pass);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const eventHandler = (event) => {
    setPass({ ...pass, [event.target.name]: event.target.value });
  };

  const eventCancel = () => {
    navigate("/passengers");
  };

  const eventUpdate = (event) => {
    event.preventDefault();

    TrainService.updatePassenger(id, pass).then(() => {
      navigate("/passengers");
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container fullWidth={false}>
        <h1>Edit Passenger</h1>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            label="User Name"
            name="username"
            value={pass.username}
            onChange={eventHandler}
            className="form-control"
            style={{ marginBottom: "40px" }}
          />
          <TextField
            label="Password"
            name="password"
            value={pass.password}
            onChange={eventHandler}
            className="form-control"
            style={{ marginBottom: "40px" }}
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            value={pass.confirmPassword}
            onChange={eventHandler}
            className="form-control"
            style={{ marginBottom: "40px" }}
          />
          <TextField
            label="First Name"
            name="firstName"
            value={pass.firstName}
            onChange={eventHandler}
            className="form-control"
            style={{ marginBottom: "40px" }}
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={pass.lastName}
            onChange={eventHandler}
            className="form-control"
            style={{ marginBottom: "40px" }}
          />
          <TextField
            label="Email"
            name="email"
            value={pass.email}
            onChange={eventHandler}
            className="form-control"
            style={{ marginBottom: "40px" }}
          />
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={pass.phoneNumber}
            onChange={eventHandler}
            className="form-control"
            style={{ marginBottom: "40px" }}
          />
          <TextField
            label="Address"
            name="address"
            value={pass.address}
            onChange={eventHandler}
            className="form-control"
            style={{ marginBottom: "40px" }}
          />
          <TextField
            label="Country"
            name="country"
            value={pass.country}
            onChange={eventHandler}
            className="form-control"
            style={{ marginBottom: "40px" }}
          />
          <TextField
            label="Pincode"
            name="pincode"
            value={pass.pincode}
            onChange={eventHandler}
            className="form-control"
            style={{ marginBottom: "40px" }}
          />
          <div>
            <Button
              onClick={eventUpdate}
              variant="contained"
              sx={{ width: "200px", marginRight:"30px", color:"white" }}
              color="secondary"
            >
              Update
            </Button>
            <Button
              onClick={eventCancel}
              variant="contained"
              sx={{ width: "200px" }}
              color="primary"
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default EditPassenger;
