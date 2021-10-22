import { ApolloClient, NormalizedCacheObject, from,  ApolloLink, Observable,  HttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import {gql} from  "@apollo/client";
import { graphql } from '@apollo/client/react/hoc';
import { setContext } from "@apollo/client/link/context";
import { getAccessToken, setAccessToken, setRefreshToken, getRefreshToken } from "./authHeader";
// import jwtDecode from "jwt-decode";
// import { TokenRefreshLink } from 'apollo-link-token-refresh';

//cache
import cache  from './cache';

// =======================  graphql Endpoint =======================
const endpoint =  document.location.origin;
// const Outlinesurl = endpoint + '/wp-json/sb/v2/';
const graphqlurl = endpoint + '/graphql';

const httpLink = new HttpLink({ uri: graphqlurl })

const errorLink = onError( ( {graphQLErrors, networkError, operation,forward } ) => { 
    if ( graphQLErrors ) { 
        for ( let err  of graphQLErrors ) {
            switch ( err.extensions.code ) {
                case 'UNAUTHENTICATED':
                    const oldHeaders = operation.getContext().headers;
                    operation.setContext({
                        headers: {
                            ...oldHeaders,
                            authorization: getRefreshToken(),
                        },
                    });
                    console.log( err )

                    // retry the request, returning the new observable
                    return forward(operation);
            }
        }
        graphQLErrors.forEach( ( message, path ) => {
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


const requestLink = new ApolloLink(
    ( operation, forward ) => 
        new Observable( observer => {
            let handle: any;
            Promise.resolve( operation )
                .then( operation => {
                    const accessTocken = getAccessToken();
                    if( accessTocken ) {
                        operation.setContext({
                            headers: {
                                authurization: `bearer ${accessTocken}`
                            }
                        });
                    }
                } )
                .then( () => {
                    handle =  forward( operation ).subscribe({
                        next: observer.next.bind( observer ),
                        error: observer.error.bind( observer ),
                        complete: observer.complete.bind( observer )
                    });
                } )
                .catch( observer.error.bind( observer ) );
            
            return () => {
                if ( handle ) handle.unsubscribe();
            };

        } )
);


// Context Auth

const authLink = setContext( ( _, { headers } ) => {
    // Get the authentication token from local storage if it exists
    const token = localStorage.getItem('sict');
    // Return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}`: ''
        }
    }
} )


// const refreshTokenLink =  new TokenRefreshLink <{token: any, refreshToken: any}> ({ 
//     accessTokenField: "accessToken",
//     isTokenValidOrUndefined: () => {
//         const token = localStorage.getItem('sict');
    
//         if (!token) return true;
    
//         try {
//           const exp: any  = jwtDecode(token);
//           const expires = new Date(exp * 1000);
//           if ( Date.now() as any  >= expires ) return false;
//           return true;
//         } catch {
//           return false;
//         }
//       },
//       fetchAccessToken: () => {
//         return fetch(`${process.env.REACT_APP_API_URL}/refresh_token`, {
//           method: 'GET',
//           headers: {
//             authorization: `Bearer ${localStorage.getItem('sict')}`,
//             sicrt: localStorage.getItem('sicrt')
//           }
//         });
//       },
//     handleFetch: newTokens => {
//         const { token, refreshToken } = newTokens;
//         const accessTokenDecrypted = jwtDecode( token );
//         setAccessToken( token );
//         setRefreshToken( refreshToken );

//     }

//  })





// =======================  Apollo Client =======================
const GameplayApolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: ApolloLink.from([ errorLink, authLink, httpLink ]),
    cache: cache,
    connectToDevTools: true,
});

export default GameplayApolloClient