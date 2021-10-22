// import React from 'react';
import { RestLink } from "apollo-link-rest";
import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from '@apollo/client/cache';
import { ApolloLink, HttpLink} from '@apollo/client';
// import { HttpLink } from 'apollo-link-http';
import { onError } from '@apollo/client/link/error'
import {gql} from  "@apollo/client";
import { graphql, GraphQLError } from '@apollo/client/react/hoc';
import { setContext } from "@apollo/client/link/context";
import cache from "../cache";
import INITIAL_QUERY  from '../queries/initialStateQuery'

const endpoint =  document.location.origin;
const Outlinesurl = endpoint + '/wp-json/sb/v2/';

const OutlinesRestLink = new RestLink({ 
    uri: Outlinesurl,
    headers: { 
        'Content-type': 'application/json',
        'X-WP-Nonce': wpApiSettings.nonce
    },
    credentials: 'same-origin', 
});

// Errors 

const errorLink = onError( ( graphQLErrors, networkError, operation ) => { 
    if ( graphQLErrors ) { 
        graphQLErrors.foreach( ( message, path ) => {
            console.log(`[ GraphQL Error ] Message: ${message} Path: ${path} `);

        } ) ;
    }

    if ( networkError ) {
        console.log(
            ` [network error ${networkError.message}] Operation: ${
                operation.operationName
            } `
        )
    }

}  );

// Context Auth
const authLink = setContext( _, ( headers, ...rest ) => {
    const context = { 
        ...rest,
        headers: { 
            ...headers,
        }
    };
    return context;
} );


// const httpLink = new HttpLink({ uri:  })


// Configure the ApolloClient with the default cache and RestLink
 const client = new ApolloClient({
    link: ApolloLink.from([ errorLink, authLink, OutlinesRestLink]),
    cache: cache,
    connectToDevTools: true,
});

const query = gql`

    query Outlines { 
        outlines @rest( type: "outlines", path: "outline" ) {
            id,
            title,
        }
     }
`;

// Queries 

client.query( { query } ).then( response => { 
    console.log(response)
} )



export default client