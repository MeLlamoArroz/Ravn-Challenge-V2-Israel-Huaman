import React from 'react';

import { Query } from 'react-apollo';
import { gql, split } from 'apollo-boost';

import LeftMenuBar from '../left-menu/leftMenu';
import Spinner from '../spinner/spinner';

const GET_ALL_PEOPLE = gql`
  {
    allPeople {
      people {
        name
        species {
          name
        }
        homeworld {
          name
        }      
        eyeColor
        hairColor
        skinColor
        birthYear
        vehicleConnection {
          vehicles {
            name
          }
        }
      }
    }
  }
`

const LeftMenuContainer = () => {
  return (
    <Query query={GET_ALL_PEOPLE}>
      {({ loading, error, data }) => {
        return <Spinner/>
        // if (loading) return <Spinner/>
        // return <LeftMenuBar people={data ? data.allPeople.people : null}/>
      }}
    </Query>
  )
}

export default LeftMenuContainer;