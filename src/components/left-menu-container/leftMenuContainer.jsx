import React from 'react';

import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import LeftMenu from '../left-menu/leftMenu';
import Spinner from '../spinner/spinner';

import './leftMenuContainer.scss';

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
        return <div className="Error-message"> Failed to Load Data </div>
        // if (error) return <div> Failed to Load Data </div>
        // if (loading) return <Spinner/>
        // return <LeftMenu people={data ? data.allPeople.people : null} updatePersonInfo={updatePersonInfo}/>
      }}
    </Query>
  )
}

export default LeftMenuContainer;