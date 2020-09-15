import React, { useState, useCallback, useEffect } from "react";
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme,
  Grid,
  Typography,
  Select,
  FormControl,
  MenuItem,
  Box,
} from "@material-ui/core";
import { useSelector } from "react-redux";

import Timeline from "./Timeline";
import TimelineMobile from "./TimelineMobile";
import { userInfoSelector } from "../../../../store/User/userSlice";

const Surveys = ({ reefId, classes }: SurveysProps) => {
  const [history, setHistory] = useState<string>("all");
  const [observation, setObservation] = useState<string>("any");
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const user = useSelector(userInfoSelector);
  const isAdmin = user
    ? user.adminLevel === "super_admin" ||
      (user.adminLevel === "reef_manager" &&
        Boolean(user.administeredReefs?.find((reef) => reef.id === reefId)))
    : false;

  const onResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [onResize]);

  const handleHistoryChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setHistory(event.target.value as string);
  };

  const handleObservationChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setObservation(event.target.value as string);
  };

  return (
    <Grid className={classes.root} container justify="center" spacing={2}>
      <Box
        bgcolor="#f5f6f6"
        position="absolute"
        height="100%"
        width="99vw"
        zIndex="-1"
      />
      <Grid
        className={classes.surveyWrapper}
        container
        justify="center"
        item
        lg={12}
        xs={11}
        alignItems="baseline"
      >
        <Grid
          container
          justify={windowWidth < 1280 ? "flex-start" : "center"}
          item
          md={12}
          lg={4}
        >
          <Typography className={classes.title}>
            {isAdmin ? "Your survey history" : "Survey History"}
          </Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          justify={windowWidth < 1280 ? "flex-start" : "center"}
          item
          md={12}
          lg={4}
        >
          <Grid item>
            <Typography variant="h6" className={classes.subTitle}>
              Survey History:
            </Typography>
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <Select
                labelId="survey-history"
                id="survey-history"
                name="survey-history"
                value={history}
                onChange={handleHistoryChange}
                className={classes.selectedItem}
              >
                <MenuItem value="all">
                  <Typography className={classes.menuItem} variant="h6">
                    All
                  </Typography>
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          justify={windowWidth < 1280 ? "flex-start" : "center"}
          item
          md={12}
          lg={4}
        >
          {/* TODO - Make observation a required field. */}
          <Grid item>
            <Typography variant="h6" className={classes.subTitle}>
              Observation:
            </Typography>
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <Select
                labelId="survey-observation"
                id="survey-observation"
                name="survey-observation"
                value={observation}
                onChange={handleObservationChange}
                className={classes.selectedItem}
              >
                <MenuItem value="any">
                  <Typography className={classes.menuItem} variant="h6">
                    Any
                  </Typography>
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" item xs={11} lg={12}>
        {windowWidth < 1280 ? (
          <TimelineMobile isAdmin={isAdmin} reefId={reefId} />
        ) : (
          <Timeline isAdmin={isAdmin} reefId={reefId} />
        )}
      </Grid>
    </Grid>
  );
};

const styles = (theme: Theme) =>
  createStyles({
    root: {
      marginTop: "5rem",
      position: "relative",
    },
    surveyWrapper: {
      marginTop: "5rem",
    },
    title: {
      fontSize: 22,
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.45,
      letterSpacing: "normal",
      color: "#2a2a2a",
      marginBottom: "1rem",
    },
    subTitle: {
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1,
      letterSpacing: "normal",
      color: "#474747",
      marginRight: "1rem",
    },
    formControl: {
      minWidth: 120,
    },
    selectedItem: {
      color: theme.palette.primary.main,
    },
    menuItem: {
      color: theme.palette.primary.main,
    },
  });

interface SurveyIncomingProps {
  reefId: number;
}

type SurveysProps = SurveyIncomingProps & WithStyles<typeof styles>;

export default withStyles(styles)(Surveys);