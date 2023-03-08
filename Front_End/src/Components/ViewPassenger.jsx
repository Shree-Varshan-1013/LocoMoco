import { useState, useEffect } from "react";
import { Box, Button, Container, Paper } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import TrainService from "../TrainService";

export default function ViewPassenger() {
  const { serialNo } = useParams();

  const navigate = useNavigate();

  console.log(serialNo);

  const initialState = {
    serialNo: serialNo,
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await TrainService.getPassenger(serialNo);
        setDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Box sx={{textAlign:"center"}}>
        <h1>Passenger Details</h1>
        <Paper elevation={15} sx={{padding:5}}>
          <h3>USERNAME : {details.username}</h3>
          <h3>PASSWORD : {details.password}</h3>
          <h3>FIRSTNAME : {details.firstName}</h3>
          <h3>LASTNAME : {details.lastName}</h3>
          <h3>PHONE NUMBER : {details.phoneNumber}</h3>
          <h3>COUNTRY : {details.country}</h3>
          <h3>PINCODE : {details.pincode}</h3>
        </Paper>
        <Button size="large" variant="contained" sx={{marginTop:3}} onClick={() => navigate("/passengers")}>BACK</Button>
      </Box>
    </Container>
  );
}
