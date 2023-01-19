import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MyCart = styled(Paper)((props) => ({
 
  textAlign: "center",
  padding: "50px",
  minHeight: "60vh",
  margin: "0 auto",
  [props.theme.breakpoints.up("md")]: {
    maxWidth: "800px",
  },
}));

export const MyMobileCart = styled(Paper)((props) => ({
  padding: "20px",
  display: "flex",
  marginBottom: "20px",
  [props.theme.breakpoints.down("sm")]: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },
}));
