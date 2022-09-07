import { GraphQLClient } from "graphql-request";
const client = new GraphQLClient("https://developers.hasura.app/v1/graphql" ,{headers: {"x-hasura-admin-secret": "fXYPjcmYB0wsp5PchwowLsF1fPOKs88rrXiRAJfrs4SS5fqyiyGu02NwYtJMLoWD","hasura-client-name":'server'}})
export {client} 