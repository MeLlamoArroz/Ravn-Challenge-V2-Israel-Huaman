import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const PersonDetails = () => {
  return (
    <ListItem>
      <ListItemText primary={"elem.name"} />
      <ListItemIcon>
        <ChevronRightIcon />
      </ListItemIcon>
    </ListItem>
  )
}

export default PersonDetails;