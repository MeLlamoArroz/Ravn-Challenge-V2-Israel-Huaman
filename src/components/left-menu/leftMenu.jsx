import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { FixedSizeList } from 'react-window';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '25%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const RenderRow = ({ index, data }) => {
  console.log(data)
  return(
    <div key={index}>
      <ListItem button onClick={() => data.updatePersonInfo(data.people[index])}>
        <ListItemText 
          primary={data.people[index].name}
          secondary={`${data.people[index].species ? data.people[index].species.name : 'Human'} from ${data.people[index].homeworld.name}`}
        />
        <ListItemIcon>
          <ChevronRightIcon />
        </ListItemIcon>
      </ListItem>
      <Divider/>
    </div>
  )
}

const LeftMenu = ({ people, updatePersonInfo }) => {
  const classes = useStyles()

  console.log("People : ", Object.keys(people).length)

  return (
    <div className={classes.root}>
      <FixedSizeList height={1000} width={338} itemSize={46} itemCount={Object.keys(people).length} itemData={{ people: people, updatePersonInfo: updatePersonInfo }}>
        { RenderRow }
      </FixedSizeList>
    </div>
  )
}

export default LeftMenu;



// <List component="nav" style={{maxHeight: '100%', overflow: 'auto'}} >
//         {
//           people 
//           ?
//             Object.values(people).map((elem, idx) =>
//               idx
//               ?
//                 <div key={idx}>
//                   <ListItem button onClick={() => updatePersonInfo(elem)}>
//                     <ListItemText primary={elem.name} secondary={`${elem.species ? elem.species.name : 'Human'} from ${elem.homeworld.name}`} />
//                     <ListItemIcon>
//                       <ChevronRightIcon />
//                     </ListItemIcon>
//                   </ListItem>
//                   <Divider/>
//                 </div>
//               : null
//             )
//           : null
//         }
//       </List>