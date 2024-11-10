import { useQuery } from "@apollo/client";
import React from "react";
import { GET_AUTHORS } from "../../graphql/queries";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Authors() {
  const { loading, data, error } = useQuery(GET_AUTHORS);
  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error</h3>;
  console.log(data);
  return (
    <Grid
      container
      sx={{ boxShadow: "rgba(0,0,0,0.1 0px 4px 12px", borderRadius: 4 }}
    >
      {data.authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} padding={2}>
            <Link
              to={`/authors/${author.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Avatar src={author.avatar.url} sx={{ marginLeft: 2 }}>
                <Typography component="p" variant="p" color="text.secondary">
                  {author.name} 
                </Typography>
              </Avatar>
            </Link>
          </Grid>
          {index !== data.authors.length - 1 && (
            <Grid item xs={12} variant="middle">
              <Divider />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
}

export default Authors;
