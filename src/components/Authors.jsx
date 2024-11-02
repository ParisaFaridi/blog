import { useQuery } from "@apollo/client";
import { GET_AUTHORS } from "../graphql/queries";
import { Grid } from "@mui/material";
import AuthorCard from "./AuthorCard";

function Authors() {
  const { loading, data, error } = useQuery(GET_AUTHORS);
  if (loading) return <h3>loading...</h3>;
  if (error) return <h3>error...</h3>;
  console.log(data);
  return (
    <Grid container>
      {data.authors.map((author) => (
        <Grid item key={author.id} xs={12}>
          <AuthorCard {...author} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Authors;
