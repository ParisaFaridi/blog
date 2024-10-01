import { Grid } from "@mui/material";
import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";

function App() {
  return (
    <>
      <Header />

      <Grid container>
        <Grid item xs={8}>
          <h3> authors</h3>
        </Grid>
        <Grid item xs={4}>
          <h3> posts</h3>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default App;
