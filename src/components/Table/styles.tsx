import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(() => ({
  table: {
    borderSpacing: "1px",
    margin: "20px",
  },

  head: {
    backgroundColor: "#2196F3",
  },

  rowHead: {
    fontWeight: "bold",
    textAlign: "left",
    minHeight: "60px",
    color: "white",
    marginBottom: "20px",
    "& th": {
      padding: "20px",
    },

    "& th:first-child": {
      borderRadius: "15px 0 0 15px",
      textAlign: "center",
    },
    "& th:last-child": {
      borderRadius: " 0 15px 15px 0",
    },
  },

  row: {
    minHeight: "60px",
    marginBottom: "20px",
    fontWeight: "bold",

    "& td": {
      padding: "20px",
      borderRight: "1px solid gray",
      borderBottom: "1px solid gray",
    },

    "& td:first-child": {
      borderRadius: "15px 0 0 15px",
    },
    "& td:last-child": {
      borderRadius: " 0 15px 15px 0",
      borderRight: "none",
    },
  },

  sort: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
