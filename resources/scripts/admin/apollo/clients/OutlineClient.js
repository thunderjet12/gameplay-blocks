// import React from 'react';
// import { RestLink } from "apollo-link-rest";
import { ApolloClient, from,  ApolloLink, HttpLink  } from '@apollo/client';
import { InMemoryCache } from '@apollo/client/cache';
// import {} from '@apollo/client';
// import { HttpLink } from 'apollo-link-http';
import { onError } from '@apollo/client/link/error'
import {gql} from  "@apollo/client";
import { graphql, GraphQLError } from '@apollo/client/react/hoc';
import { setContext } from "@apollo/client/link/context";
import cache from "../cache";
import INITIAL_QUERY  from '../queries/initialStateQuery'

const endpoint =  document.location.origin;
// const Outlinesurl = endpoint + '/wp-json/sb/v2/';
const graphqlurl = endpoint + '/graphql';

// const OutlinesRestLink = new RestLink({ 
//     uri: Outlinesurl,
//     headers: { 
//         'Content-type': 'application/json',
//         'X-WP-Nonce': wpApiSettings.nonce
//     },
//     credentials: 'same-origin', 
// });

// Errors 

const errorLink = onError( ( {graphQLErrors, networkError, operation,forward } ) => { 
    if ( graphQLErrors ) { 
        for ( let err of graphQLErrors ) {
            switch ( err.extensions.code ) {
                case 'UNAUTHENTICATED':
                    const oldHeaders = operation.getContext().headers;
                    operation.setContext({
                        headers: {
                            ...oldHeaders,
                            authorization: getNewToken(),
                        },
                    });
                    console.log( err )

                    // retry the request, returning the new observable
                    return forward(operation);
            }
        }
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


const httpLink = new HttpLink({ uri: graphqlurl })


// Configure the ApolloClient with the default cache and RestLink
 const Outlineclient = new ApolloClient({
    link: ApolloLink.from([ errorLink, authLink, httpLink]),
    cache: cache,
    connectToDevTools: true,
});

// const query = gql`

//     query Outlines { 
//         outlines ( type: "outlines", path: "outline" ) {
//             id,
//             title,
//         }
//      }
// `;

// Queries 

// Outlineclient.query( {query} ).then( response => { 
//     console.log(response)
// } )



export default Outlineclient