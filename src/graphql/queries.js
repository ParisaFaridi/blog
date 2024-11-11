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

const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      field
      name
      description {
        html
      }
      post {
        coverPhoto {
          url
        }
        id
        slug
        title
      }
    }
  }
`;
const GET_BLOG_INFO = gql`
  query getAuthorInfo($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        avatar {
          url
        }
        field
        name
      }
      content {
        html
      }
      title
      coverPhoto {
        url
      }
    }
  }
`;
export { GET_BLOGS, GET_AUTHORS, GET_AUTHOR_INFO,GET_BLOG_INFO };
