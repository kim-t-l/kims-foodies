import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";

import RestaurantCard from "./Card.js";
import logo from './assets/kim-gif-restaurants.gif';
import restaurantsList from './assets/restaurants.json';


var cards = [];
Object.keys(restaurantsList).map(function (key, index) { cards = [...cards, ...restaurantsList[key]] });
console.log(cards);

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © Kim '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Album(props) {
  const city = props.city;
  if (city) {
    cards = cards.filter((element) => element.city === city);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <img src={logo} alt="loading..." width="400" height="400" />
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >

              <Link to="/paris" >🥐 Paris</Link>
              <Link to="/london" >💂 London</Link>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.name} xs={12} sm={6} md={4}>
                <RestaurantCard city={card.city} name={card.name} description={card.description} location={card.location} instagram={card.instagram} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}