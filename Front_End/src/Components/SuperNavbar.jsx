import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TrainIcon from "@mui/icons-material/Train";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../Styles/superNavbar.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#102B3F",
    },
    secondary: {
      main: "#c6b9cd",
    },
  },
});

export default function SuperNavbar() {
  const [value, setValue] = useState("recents");

  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const eventHandle = (event) => {
    navigate(event.target.name);
  };

  return (
    // <ThemeProvider theme={theme}>
      <BottomNavigation
        sx={{ width: "fullWidth" }}
        value={value}
        onChange={handleChange}
        className="super-navbar"
        >
        <BottomNavigationAction
          label="Home"
          value="home"
          name="/"
          icon={<HomeIcon color="primary"/>}
          onClick={eventHandle}
          />
        <BottomNavigationAction
          label="Bookings"
          value="bookings"
          icon={<TrainIcon />}
          name="/bookings"
          onClick={eventHandle}
          />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
          />
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon />}
          />
        <BottomNavigationAction
          label="Passengers"
          value="passengers"
          icon={<AccountCircleIcon />}
          name="/passengers"
          onClick={eventHandle}
          />
      </BottomNavigation>
    // </ThemeProvider>
  );
}
