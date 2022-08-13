import { gql } from "@apollo/client";

export const GET_CHECK_INS = gql`
  query MyQuery {
    check_in {
      name
      id
      image_url
      comment
      created_at
    }
  }
`;

export const GET_A_SINGLE_CHECKIN = gql`
  query ($id: Int!) {
    check_in_by_pk(id: $id) {
      id
      name
      image_url
    }
  }
`;
