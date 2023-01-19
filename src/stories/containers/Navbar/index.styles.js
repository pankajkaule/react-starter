import { styled, alpha } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import InputBase from "@mui/material/InputBase";

export const useStyles = makeStyles(theme=>({
  root: {
    display:"flex",
    justifyContent:"space-between",
padding:"0 20px",
    textAlign:"center",
  cursor:"pointer",
    [theme.breakpoints.down('sm')]: {
      padding:"0 5px",
    },
  },
}));



export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: "0 10px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor:"lightblue",
  cursor:"pointer",
  borderRadius:"0 10px 10px 0"
}));

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  color: "blue",
  width: "100%",
  marginLeft: 0,
  display: "flex",
  borderRadius:"10px"
}));

export const StyledInputBase = styled(InputBase)((props) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: "10px 10px 10px 0",
    paddingLeft: `20px`,

    [props.theme.breakpoints.down("sm")]: {
      width: "20ch",
    },
    [props.theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));
export const MyNavbar = styled("div")((props) => ({
  backgroundColor: "#2874f0",
  color: "white",
  padding: "10px",
  minWidth: "300px",

  [props.theme.breakpoints.up("sm")]: {},
}));

// export const MyNavbar =  styled(({ color, ...otherProps }) => (
//   <Button {...otherProps} classes={mobile} />
// ))`

//   & .mobile {
//     background-color: purple;
//   }

// `;
