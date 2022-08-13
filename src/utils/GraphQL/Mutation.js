import { gql } from "@apollo/client";

export const ADDD_NEW_CHECKIN = gql`
  mutation insert_check_in_one(
    $name: String
    $image_url: String
    $created_at: timestamptz
  ) {
    insert_check_in_one(
      object: { name: $name, image_url: $image_url, created_at: $created_at }
    ) {
      id
      name
      image_url
      created_at
    }
  }
`;
