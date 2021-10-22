// import { Query, Mutation, Subscription } from '@apollo/client/react/components';
import {gql} from  "@apollo/client";


const INITIAL_QUERY = gql `
query MyQuery {
    contentTypes {
      edges {
        node {
          id
          name
        }
      }
    }
    contentNodes {
      edges {
        node {
          id
          __typename
          databaseId
          slug
        }
      }
    }
  }
  
`


export default INITIAL_QUERY