import {gql} from  "@apollo/client";

const ASSIGN_MUTATION = gql `
    mutation ASSIGN_MUTATION ( $ID: String!, $post_content: String! ) { 
        assign( input: {
            ID: $ID,
            post_content: $post_content
        } ) @rest( type: "posts", path: "assignments/posts/6", 
        method: "POST"  ) { 
            post_content
         }
     }

`

export default ASSIGN_MUTATION