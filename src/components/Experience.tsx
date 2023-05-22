import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { experienceList } from "./helpers/ExperienceHelper";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, color: "#fff" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Experience() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      justifyContent={"center"}
      style={{ position: "relative" }}
      spacing={3}
    >
      <Grid item xs={12}>
        <Typography
          color={"#CCD6F6"}
          variant={"h4"}
          style={{ textAlign: "right" }}
        >
          Experience
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
        <Box sx={{ flexGrow: 1, display: "flex" }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              borderRight: 1,
              borderColor: "divider",
              color: "#fff",
              width: 300,
            }}
          >
            <Tab
              label="Acoer"
              sx={{ color: value === 0 ? "#5BE3D0" : "#fff" }}
            />
            <Tab
              label="ADM Optimization"
              sx={{ color: value === 1 ? "#5BE3D0" : "#fff" }}
            />
            <Tab
              label="Springboard"
              sx={{ color: value === 2 ? "#5BE3D0" : "#fff" }}
            />
            <Tab
              label="OpenClassrooms"
              sx={{ color: value === 3 ? "#5BE3D0" : "#fff" }}
            />
            <Tab
              label="Certara"
              sx={{ color: value === 4 ? "#5BE3D0" : "#fff" }}
            />
            <Tab
              label="AT&T"
              sx={{ color: value === 5 ? "#5BE3D0" : "#fff" }}
            />
          </Tabs>
          <TabPanel value={value} index={value}>
            <Grid container>
              <Grid item xs={12}>
                <Typography color={"primary"} variant={"h5"}>
                  {experienceList[value].title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography color={"inherit"} variant={"caption"}>
                  {experienceList[value].date}
                </Typography>
              </Grid>
              <Grid item>
                <List dense>
                  {experienceList[value].tasks.map(
                    (item: string, index: number) => {
                      return (
                        <ListItem key={`experience-${index}`}>
                          <ListItemIcon>
                            <ArrowRightIcon color={"primary"} />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography
                                variant={"body2"}
                                style={{
                                  fontFamily:
                                    "Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace",
                                }}
                              >
                                {item}
                              </Typography>
                            }
                          />
                        </ListItem>
                      );
                    }
                  )}
                </List>
              </Grid>
            </Grid>
          </TabPanel>
        </Box>
      </Grid>
    </Grid>
  );
}
