import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Grid
        container
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        // style={{ borderLeft: "2px solid #73AD21", borderTop: "2px solid #73AD21"}}
      >
        <Grid item xs={12} style={{ paddingTop: 60 }}>
          <Typography
            color={"primary"}
            variant={"body2"}
            style={{
              fontWeight: "bold",
              fontFamily:
                "Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace",
            }}
          >
            Hi, my name is
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            color={"#CCD6F6"}
            variant={"h2"}
            style={{
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Ashley MacWhirter.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            color={"#8892B0"}
            variant={"h3"}
            style={{
              fontWeight: "bold",
            }}
          >
            I build software.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            color={"#8892B0"}
            variant={"h3"}
            style={{
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Blockchain solution and Hedera enthusiast.
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ paddingBottom: 60 }}>
          <Typography
            color={"#8892B0"}
            variant={"h6"}
            style={{
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            I’m a software engineer specializing in building trustworthy
            solutions backed by blockchain with an excellent user experience.
            <br />
            Currently, I’m focused on building blockchain-enabled, accessible,
            human-centered healthcare products at{" "}
            <a
              href="https://www.acoer.com/"
              target={"_blank"}
              style={{ color: "#5BE3D0", textDecoration: "none" }}
              rel={"noreferrer"}
            >
              Acoer
            </a>{" "}
            as the lead frontend engineer.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
