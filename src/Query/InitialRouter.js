import { gql } from "graphql-request"

const DEVELOPER_LIST = gql`query developersList{
    developers{
      id
      name
    }
  }`

  export {DEVELOPER_LIST}