import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Avatar,
  Divider,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

function BlogCard(props) {
  const { author, title, slug, coverPhoto } = props;
  return (
    <Card sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}>
      <CardHeader
        avatar={
          <Avatar
            src={author.avatar.url}
            sx={{ marginLeft: 2 }}
            title={
              <Typography component="p" variant="p" color="text.primary">
                {author.name}
              </Typography>
            }
          />
        }
      />
      <CardMedia component="img" height="194" image={coverPhoto.url} />
      <CardContent>
        <Typography
          component="h3"
          variant="h6"
          color="text.primary"
          fontWeight={600}
        >
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin: "10px" }} />
      <CardActions>
        <Link
          to={`/blogs/${slug}`}
          style={{ textDecoration: "none", width: "100%" }}
        >
          <Button
            variant="outlined"
            size="smaall"
            sx={{ width: "100%", borderRadius: 3 }}
          >
            مطالعه مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default BlogCard;
