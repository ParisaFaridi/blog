import { useQuery } from "@apollo/client";
import { GET_BLOGS } from "../../graphql/queries";
import { Grid } from "@mui/material";
import BlogCard from "./BlogCard";

function Posts() {
  const { loading, data, error } = useQuery(GET_BLOGS);
  if (loading) return <h1>loading...</h1>;
  if (error) return <h3>Error</h3>;
  console.log(data);
  return (
    <Grid container spacing={2}>
      {data.posts.map((p) => (
        <Grid item xs={12} sm={6} md={4} key={p.id}>
          <BlogCard {...p} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
