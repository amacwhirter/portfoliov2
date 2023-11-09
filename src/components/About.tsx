import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import profilePic from "../assets/img/adm.jpeg";

export default function About() {
    return (
        <Grid
            container
            justifyContent={"center"}
            style={{position: "relative"}}
            spacing={3}
        >
            <Grid item xs={12}>
                <Typography color={"#CCD6F6"} variant={"h4"}>
                    About me
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Divider
                    variant={"middle"}
                    light
                    flexItem
                    style={{backgroundColor: "#8892B0"}}
                />
            </Grid>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Typography variant={"body1"} color={"#CCD6F6"}>
                                    Hello! My name is Ashley and I enjoy creating software that is
                                    user friendly and make a positive impact. My interest in web
                                    development started back in 2015 where I started learning on
                                    my own and eventually enrolled in the Georgia Tech bootcamp
                                    for web development in 2016!
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={"body1"} color={"#CCD6F6"}>
                                    Fast-forward to today, I’ve had the privilege of working
                                    at a huge corporation, within an accelerator team, and a
                                    start-up. I am currently the lead frontend developer for a
                                    start-up focusing on healthcare solutions.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={"body1"} color={"#CCD6F6"}>
                                    In my spare time, I enjoy mentoring current bootcampers who are working towards their
                                    passion much like I did several years ago. It is an amazing experience that allows
                                    me to teach and also learn from the incredible individuals I am fortunate to meet
                                    during this journey.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={"body1"} color={"#CCD6F6"}>
                                    Here are a few technologies I’ve been working with recently:
                                </Typography>
                                <Typography variant={"body1"} color={"#CCD6F6"}>
                                    Javascript, ReactJs, css,
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={profilePic} alt=""/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
