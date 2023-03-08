import * as React from "react";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Trains from "../Components/trains.json";

export default function Bookings() {
  return (
    <Container style={{display:"flex", justifyContent:"spave-evenly"}}>
      {Trains.map((train) => {
        return (
          <Card sx={{ maxWidth: 345, marginRight:9, marginTop:5 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={train.link}
              title={train.trainName}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {train.trainName}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                TRAIN NUMBER : {train.trainNumber}
              </Typography>
              <Typography variant="h6" color="text.secondary">
              FROM : {train.fromStation}
              </Typography>
              <Typography variant="h6" color="text.secondary">TO : {train.toStation}</Typography>
              <Typography variant="h6" color="text.secondary">DOB : {train.dateOfBooking}</Typography>
              <Typography variant="h6" color="text.secondary">DOJ : {train.dateOfJourney}</Typography>
              <Typography variant="h6" color="text.secondary">CLASS : {train.className}</Typography>
              <Typography variant="h6" color="text.secondary">FARE :  ₹{train.totalTicketFare}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Book</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        );
      })}
    </Container>
  );
}
