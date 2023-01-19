import React from "react";
import PropTypes from "prop-types";
import { MyStyledGrid } from "./index.styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

function Grid1(props) {
  console.log(props);

  return (
    <MyStyledGrid {...props}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 1.5 }}
          columns={{ xs: 4, sm: 12, md: 12, lg: 12 }}
        >
          {props.data.map((_, index) => (
            <Grid item xs={2} sm={3} md={3} lg={2} key={index}>
              <Link to={ _.link}>
                <div>
                  {_.image ? (
                    <img width={"100%"} height={"100%"} src={_.image} />
                  ) : (
                    <img
                      width={"100%"}
                      height={"100%"}
                      src="/dben-sew210.jpg"
                    />
                  )}
                  <br />
<span style={{color:"black",textAlign:"center"}}>

                  {_.title}
                  </span>
                </div>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </MyStyledGrid>
  );
}

Grid1.propTypes = {
  bgcolor: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Grid1;
