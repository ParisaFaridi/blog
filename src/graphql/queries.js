import { gql } from "@apollo/client";

const GET_BLOGS = gql`
  query {
    posts {
      author {
        avatar {
          url
        }
        name
      }
      coverPhoto {
        url
      }
      title
      slug
      id
    }
  }
`;

const GET_AUTHORS = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;
export { GET_BLOGS, GET_AUTHORS };
