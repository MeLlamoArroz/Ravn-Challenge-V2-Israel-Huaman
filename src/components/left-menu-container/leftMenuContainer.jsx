import React from 'react';

import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import LeftMenu from '../left-menu/leftMenu';
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

const LeftMenuContainer = ({ updatePersonInfo }) => {
  return (
    <Query query={GET_ALL_PEOPLE}>
      {({ loading, error, data }) => {
        // return <Spinner/>
        if (loading) return <Spinner/>
        return <LeftMenu people={data ? data.allPeople.people : null} updatePersonInfo={updatePersonInfo}/>
      }}
    </Query>
  )
}

export default LeftMenuContainer;