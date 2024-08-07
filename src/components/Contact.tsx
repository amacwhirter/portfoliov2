import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

export default function Contact() {
  return (
    <Grid
      container
      justifyContent={"center"}
      style={{ position: "relative" }}
      spacing={3}
    >
      <Grid item xs={12}>
        <Typography color={"#CCD6F6"} variant={"h4"}>
          Contact me
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider
          variant={"middle"}
          light
          flexItem
          style={{ backgroundColor: "#8892B0" }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant={"h6"}
          color={"#CCD6F6"}
          style={{ textAlign: "center" }}
        >
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question, interested in
          collaborating, or just want to say hi, I’ll try my best to get back to
          you!
        </Typography>
      </Grid>
      <br />
      <Grid item>
        <a
          href="mailto: amacwhirter@contact.com"
          style={{ textDecoration: "none" }}
        >
          <Button variant={"outlined"}>Say hello</Button>
        </a>
      </Grid>
    </Grid>
  );
}
