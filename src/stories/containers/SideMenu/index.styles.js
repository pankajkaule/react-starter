import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";



export const MySideMenu = styled(Paper)((props) => ({
textAlign:"center",
padding:"10px",
margin:"0 0 0 5px ",
  width:"20%",
  height:"80vh",
 

  [props.theme.breakpoints.down("sm")]: {
    display:"none",
   
  },

}));