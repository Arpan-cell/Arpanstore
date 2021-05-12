import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Taylor Stitch" {...a11yProps(0)} />
          <Tab label="Good as Gold" {...a11yProps(1)} />
          <Tab label="The Container Store" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      Taylor Stitch is an online and brick and mortar clothing shop for both men and women and they’ve really got a handle on this blogging business.


The company also has Tumblr blog called Sailor Twitch. It features the tagline, “The adventures and discoveries of Taylor Stitch,” and offers a bit of ambiance. In case the main blog doesn’t provide a vivid enough picture as to the kinds of people who would enjoy their products, Sailor Twitch fills in the gaps by offering mood and context. It shows imagery that appeals to their target market. Pretty smart.
      </TabPanel>
      <TabPanel value={value} index={1}>
      The Good as Gold Blog is attached to the Good as Gold online clothing store, which offers street wear fashion with a New Zealand edge. The blog is pretty straightforward as far as e-commerce blogs go. It offers posts that highlight specific products, lookbooks, sale announcements and coupons. But it does these things well, and that’s why it made my list.
      </TabPanel>
      <TabPanel value={value} index={2}>
      So, The Container Store isn’t a small retail store by any means, but it does have a truly excellent blog that I just had to include on this list. It’s called What We Stand For and offers a look at company culture and ethics in a to-the-point yet heartfelt way.

The blog offers an insider’s look at what it’s like to work for The Container Store, provides useful, actionable advice, and educates readers on a variety of community outreach and employee advocacy subjects. It’s well worth a look, in my opinion.
      </TabPanel>
    </div>
  );
}