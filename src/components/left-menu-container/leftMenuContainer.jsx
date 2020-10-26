import React from 'react';

import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import LeftMenuBar from '../left-menu/leftMenu'

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
        if (loading) console.log("Loading!")
        return <LeftMenuBar people={data ? data.allPeople.people : null}/>
      }}
    </Query>
  )
}

export default LeftMenuContainer;