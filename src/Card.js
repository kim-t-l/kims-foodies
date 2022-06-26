import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';

import InstagramDialog from './Dialog';


export default function RestaurantCard(props) {
  var city = props.city;

  function getAvatar(city) {
    switch (city) {
      case 'paris':
        return '🥐';

      case 'london':
        return '💂';
      
      case 'san francisco':
        return '🌉';
      
      case 'new york':
        return '🗽';
      
      case 'bangkok':
        return '🛺';
      
      default:
        return ''
    }
  };

  const avatar = getAvatar(city);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {avatar}
          </Avatar>
        }
        title={props.name}
        subheader={"📍" + props.location}
      />
      <CardContent>
        {props.description}
        <InstagramDialog instagram={props.instagram} />
      </CardContent>
    </Card>
  );
}