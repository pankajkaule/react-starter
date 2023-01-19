import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MyMainMenu = styled(Paper)((props) => ({
  textAlign: "center",
  padding: "10px",
  margin: "0 10px 10px 10px",
  width: "80%",


  [props.theme.breakpoints.down("sm")]: {
    margin: "10px",
    display:"flex",
    justifyContent:"center"
  },
}));
