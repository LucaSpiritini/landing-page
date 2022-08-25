import React from "react";
import Box from "@mui/material/Box";
import MuiCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";



import arrowRight from "../../assets/img/arrow-right.svg";
import styles from "./styles";

const Card = ({ title, imgSrc }) => {
  return (
    <MuiCard sx={styles.card}>
      <CardContent sx={ { padding: 0 } }>
        <Box component="img" src={ imgSrc } />
        <Typography variant="h3" sx={ styles.title }>{ title }</Typography>
        <List>
          <ListItem sx={styles.listItem}>
            {" "}
            <Box component="img" src={arrowRight} />
            product management
          </ListItem>
          <ListItem sx={styles.listItem}>
            {" "}
            <Box component="img" src={arrowRight} />
            mpv definition
          </ListItem>
          <ListItem sx={styles.listItem}>
            {" "}
            <Box component="img" src={arrowRight} />
            product strategy
          </ListItem>
        </List>
      </CardContent>
      <CardActions sx={{ padding: 0 }}>
        <Button sx={styles.btn}>
          Read more <Box component="img" src={arrowRight} />
        </Button>
      </CardActions>
    </MuiCard>
  );
};

export default Card;
