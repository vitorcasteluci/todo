import React from "react";
import { useStyles } from "./style";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function Cards(props) {
  const classes = useStyles();
  const { item } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="body2" color="textPrimary" component="p">
          {item}
        </Typography>
      </CardContent>
    </Card>
  );
}
