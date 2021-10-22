import { makeVar, gql } from "@apollo/client";

export const currentOutlineID = makeVar( 1 );

    export const GET_CURRENT_OUTLINE_ID = gql `
        query getCurrentOutlineID {
            currentOutlineID @client
        }
    `;