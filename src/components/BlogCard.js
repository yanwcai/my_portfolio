import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from '@mui/material/Link';

const ActionAreaCard = ( { title, authors, date, imageURL, link } ) => {
  return (
    <Card sx={{ maxWidth: 345, padding: "20px", marginLeft: "20px", backgroundColor: "#f0f0f0"}}>
      <Link href={link} underline="none" style={{ color: "#831324", fontWeight: "bold"}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={imageURL}
            alt="card"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {authors} | {date}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}

export { ActionAreaCard };