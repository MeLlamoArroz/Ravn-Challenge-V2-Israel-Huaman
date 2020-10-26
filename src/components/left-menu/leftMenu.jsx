import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const LeftMenu = ({ people, updatePersonInfo }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <List component="nav" >
        {
          people 
          ?
            Object.values(people).map((elem, idx) =>
              idx
              ?
                <div key={idx}>
                  <ListItem button onClick={() => updatePersonInfo(elem)}>
                    <ListItemText primary={elem.name} secondary={`${elem.species ? elem.species.name : 'Human'} from ${elem.homeworld.name}`} />
                    <ListItemIcon>
                      <ChevronRightIcon />
                    </ListItemIcon>
                  </ListItem>
                  <Divider/>
                </div>
              : null
            )
          : null
        }
      </List>
    </div>
  )
}

export default LeftMenu;