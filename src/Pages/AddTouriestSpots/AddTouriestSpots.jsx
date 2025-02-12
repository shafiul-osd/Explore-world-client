import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import swal from "sweetalert";

export default function AddTouriestSpots() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const spot = {
      spotName: event.target.spotName.value,
      image: event.target.image.value,
      countryName: event.target.countryName.value,
      location: event.target.location.value,
      shortDescription: event.target.shortDescription.value,
      averageCost: event.target.averageCost.value,
      seasonality: event.target.seasonality.value,
      travelTime: event.target.travelTime.value,
      totalVisitorsPerYear: event.target.totalVisitorsPerYear.value,
      userEmail: event.target.userEmail.value,
      userName: event.target.userName.value,
    };

    fetch("https://southeast-tourist-server.vercel.app/touristspot",{
      method: "POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(spot)

    })
      .then((res) => res.json())
      .then((data) => {
        swal("Added", "Added Successfully", "success");
      })
      .catch(err =>{
        swal("Error", `${err.message}`, "error");
      })
  };

  return (
    <Container component="main">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
        <Typography component="h1" variant="h5">
          Add tourist spot
        </Typography>
        <Box className="w-full">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Spot Name"
              name="spotName"
              autoComplete="Spot Name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Image URL"
              name="image"
              autoComplete="Image URL"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Country Name"
              name="countryName"
              autoComplete="Country Name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Location"
              name="location"
              autoComplete="Location"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              label="Average Cost"
              name="averageCost"
              autoComplete="Average Cost"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Seasonality"
              name="seasonality"
              autoComplete="Seasonality"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Travel Time"
              name="travelTime"
              autoComplete="Travel Time"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Total Visitors Per Year"
              name="totalVisitorsPerYear"
              autoComplete="Total Visitors Per Year"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="User Email"
              name="userEmail"
              autoComplete="User Email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="User Name"
              name="userName"
              autoComplete="User Name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Short Description"
              name="shortDescription"
              autoComplete="Short Description"
              className="md:col-span-2"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className="md:col-span-2"
            >
              Add
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
}
