//GLOBAL imports
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import sampleSize from "lodash/sampleSize";
import { DebounceInput } from "react-debounce-input";
//LOCAL imports
import TableView from "./TableView";
import { Button } from "../../../common/components";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function TabPanelView(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { comments, handleFilterChange, filter, refresh } = props;
  const randomComments = sampleSize(comments, 10);
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'
        >
          <Tab label='Search' {...a11yProps(0)} />
          <Tab label='10 random comments' {...a11yProps(1)} />
        </Tabs>
        <Button text={"REFRESH"} onClick={refresh} />
      </AppBar>
      <TabPanel value={value} index={0}>
        <label>
          Filter:
          <DebounceInput
            type='text'
            value={filter}
            onChange={handleFilterChange}
            debounceTimeout={300}
          />
        </label>
        <TableView comments={comments} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TableView comments={randomComments} />
      </TabPanel>
    </div>
  );
}