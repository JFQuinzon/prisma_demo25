import { gql } from "@apollo/client";

export const DEMO_DATA_QUERY = gql`
  query DEMO_DATA_QUERY($data: DemoDataInput!) {
    DemoDataQuery(data: $data) {
      items {
        # ✅ Correctly nested inside DemoDataQuery
        id
        name
        age
        occupation
      }
      totalCount # ✅ Move totalCount inside DemoDataQuery
    }
  }
`;
