import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Icon from '@UI/Icon'
import { i18n } from '@UI/Translate'

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div hidden={value !== index} {...other}>
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabItem: {
    minHeight: 60,
    '& .MuiTab-wrapper': {
      fontSize: 13,
      display: 'flex',
      flexDirection: 'row',
      '& .Icon': {
        margin: 0,
        marginRight: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }
    }
  }
}));

export default function TabsComponent({ tabs }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          {tabs.map((item, index) =>
            <Tab key={index} className={classes.tabItem} icon={<Icon name={item.icon} />} label={i18n.t(item.title)} />
          )}
        </Tabs>
      </AppBar>
      <TabPanel>
        {tabs[value].component()}
      </TabPanel>
    </div>
  );
}