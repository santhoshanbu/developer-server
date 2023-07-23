import { GraphQLClient } from "graphql-request";
const client = new GraphQLClient("https://driven-mink-70.hasura.app/v1/graphql" ,{headers: {"x-hasura-admin-secret": "BdIzCPweHZtR8qAEd5tlwuP4zHs1r6QfClnCEA8vlsMcvoC786QEQ12Rax7tKOsT","hasura-client-name":'server'}})
export {client} 