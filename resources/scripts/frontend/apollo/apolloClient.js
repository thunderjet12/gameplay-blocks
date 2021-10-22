import { createClient, setClient } from '@urql/svelte';
import {gql} from  "graphql-tag";

import { getAccessToken, setAccessToken, setRefreshToken, getRefreshToken } from "./authHeader";


//cache
import cache  from './cache';

// =======================  graphql Endpoint =======================
const endpoint =  document.location.origin;
// const Outlinesurl = endpoint + '/wp-json/sb/v2/';
const graphqlurl = endpoint + '/graphql';

// const httpLink = new HttpLink({ uri: graphqlurl })







// =======================  Apollo Client =======================
const GameplayClient = createClient({
    url: graphqlurl,
 
});

export default GameplayClient