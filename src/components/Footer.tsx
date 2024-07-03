import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Grid
      container
      justifyContent={"center"}
      style={{ marginBottom: 10, marginTop: 100 }}
      id={"footer"}
    >
      <Grid>
        <Typography variant={"caption"} color={"#fff"}>
          &copy; 2024: amacwhirter.com
        </Typography>
      </Grid>
    </Grid>
  );
}
