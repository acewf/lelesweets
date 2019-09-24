import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from '@emotion/styled'

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  media: {
    height: 140,
  },
};

const StyledLi = styled.li`
  width: 30%;
  padding: 10px;
  display: flex;
  flex: 1 1 auto;
`;

const Post = ({ post, classes, key }) => {
  const { shortcode, img, id } = post;
  const [hover, setHover] = useState(false);
  //const { smallImage, likes, id } = post;
  // const { small } = smallImage.childImageSharp;
  return (
    <StyledLi key={key}>
      <Link to={`/${id}/`}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={img.src}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
          </Typography>
              <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
        </Button>
            <Button size="small" color="primary">
              Learn More
        </Button>
          </CardActions>
        </Card>
      </Link>
    </StyledLi>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    smallImage: PropTypes.object,
    likes: PropTypes.number,
    id: PropTypes.string.isRequired,
  }).isRequired,
}

export default withStyles(styles)(Post);