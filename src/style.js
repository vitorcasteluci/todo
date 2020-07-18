import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: "column",
    width: 25 + "%",
    marginTop: 50,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    width: 100 + "%",
  },
}));
