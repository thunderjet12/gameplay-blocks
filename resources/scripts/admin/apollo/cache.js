import {  InMemoryCache, useMutation, useQuery, makeVar} from '@apollo/client';
import INITIAL_QUERY from './queries/initialStateQuery';
import { currentOutlineID } from './reactivities/currentOutlineID'

const cache = new InMemoryCache({
    typePolicies: {
        Query: {            
            fields: {
                currentOutlineID: {
                    read() {
                        return currentOutlineID();
                    }
                }
            }       
    }
      
    },

});


export default cache