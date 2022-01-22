import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(() => ({
  searchInput: {
    position: "relative",
    display: "flex",
    minWidth: "600px",
    minHeight: "80px",
    borderRadius: "20px",
    border: "1px solid gray",
    boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.25)",
    paddingLeft: "32px",
    fontSize: "48px",

    "&:hover": {
      borderColor: "#2196F3",
      boxShadow: "2px 2px 2px 1px #2196F3",
    },

    "&:focus": {
      borderColor: "#2196F3",
    },

    "&::placeholder": {
      position: "absolute",
      fontSize: "48px",
      color: "#B2B2B2",
      top: "12px",
      left: "32px",
    },
  },

  wrap: {
    position: "relative",
  },

  search: {
    position: "absolute",
    height: "30px",
    width: "30px",
    top: "30px",
    right: "22px",
  },
}));
