import { Container, Grid, Typography } from "@mui/material";
import Authors from "../Authors";
import Posts from "../Posts";

function HomePage() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} mt={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            نویسنده ها
          </Typography>
          <Authors />
        </Grid>
        <Grid item xs={12} md={9} mt={4}>
          {" "}
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            مقالات
          </Typography>
          <Posts />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
