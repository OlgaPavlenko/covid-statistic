import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(() => ({
  wrap: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "48px",
    alignItems: "center",
    fontFamily: "Roboto",
    fontSize: "24px",
    color: "#666666",
  },

  category: {
    flexGrow: 2,
    textAlign: "left",
    paddingLeft: "29px",
  },
}));
