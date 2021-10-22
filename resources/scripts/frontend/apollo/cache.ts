import {  InMemoryCache, useMutation, useQuery, makeVar} from '@apollo/client';
// import INITIAL_QUERY from '../apollo/queries/initialStateQuery';
// import { currentOutlineID } from './reactivities/currentOutlineID';

const cache = new InMemoryCache({
    typePolicies: {
        Query: {            
            fields: {
            }       
    }
      
    },

});


export default cache