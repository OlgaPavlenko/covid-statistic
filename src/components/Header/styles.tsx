import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(() => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoWrap: {
    display: "flex",
    alignItems: "center",
  },
  name: {
    textTransform: "uppercase",
    fontFamily: "Roboto",
    fontStyle: "Bold",
    fontSize: "72px",
  },
}));
