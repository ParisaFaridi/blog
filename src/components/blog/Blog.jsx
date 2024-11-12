import { useQuery } from "@apollo/client";
import { GET_BLOG_INFO } from "../../graphql/queries";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../layout/Loader";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import sanitizeHtml from "sanitize-html";
import CommentForm from "../home/CommentForm";
import Comments from "./Comments";

function Blog() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { loading, data, error } = useQuery(GET_BLOG_INFO, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (error) {
    return <h3>error...</h3>;
  }
  console.log(data);

  const {
    post: { author, content, coverPhoto, title },
  } = data;
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
          <Typography
            variant="h4"
            component="h2"
            color="primary"
            fontWeight={700}
          >
            {title}
          </Typography>
          <ArrowBackIcon onClick={() => navigate(-1)} />
        </Grid>
        <Grid item xs={12} mt={6}>
          <img
            src={coverPhoto.url}
            alt={slug}
            width="100%"
            style={{ borderRadius: 15 }}
          />
        </Grid>
        <Grid item xs={12} mt={7} display="flex" alignItems="center">
          <Avatar
            src={author.avatar.url}
            sx={{ width: 80, height: 80, marginLeft: 2 }}
          />
          <Box component="div">
            <Typography component="p" variant="h5" fontWeight={500}>
              {author.name}
            </Typography>
            <Typography
              component="p"
              variant="p"
              fontWeight={500}
              color="text.secondary"
            >
              {author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(content.html) }}
          ></div>
        </Grid>
        <Grid item xs={12}>
          <CommentForm slug={slug} />
        </Grid>
        <Grid item xs={12}>
          <Comments slug={slug} />
        </Grid>
      </Grid>
      ;
    </Container>
  );
}

export default Blog;
