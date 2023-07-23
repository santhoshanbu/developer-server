import { gql } from "graphql-request"

const DEVELOPER_LIST = gql`query employees{
    employee{
      id
      name
    }
  }`

  export {DEVELOPER_LIST}