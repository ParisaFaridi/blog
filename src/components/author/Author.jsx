import { useQuery } from "@apollo/client";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { useParams } from "react-router-dom";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import sanitizeHtml from "sanitize-html";
import BlogCard from "../blog/BlogCard";

function Author() {
  const { slug } = useParams();
  const { data, loading, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  if (loading) {
    return <>loading...</>;
  }
  if (error) {
    return <>error...</>;
  }

  const {
    author: { name, field, post, description, avatar },
  } = data;
  return (
    <Container>
      <Grid container maxWidth="lg">
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt={10}
        >
          <Avatar src={avatar.url} sx={{ width: 250, height: 250 }} />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {name}
          </Typography>
          <Typography component="h3" variant="h5" color="text.secondary" mt={2}>
            {field}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(description.html),
            }}
          ></div>
          {description.html}
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            مقالات {name}
          </Typography>
          <Grid container spacing={2} mt={2}>
            {post.map((p) => (
              <Grid item xs={12} sm={6} md={4} key={p.id}>
                <BlogCard {...p} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Author;
