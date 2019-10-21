import React from "react"
import PropTypes from "prop-types"
import { Link as BaseLink } from "gatsby"
import styled from '@emotion/styled'

import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Img from "gatsby-image"

const styles = {
  media: {
    height: 220,
  },
};

const StyledLi = styled.li`
  padding: 10px;
  display: flex;
  flex: 1 1 auto;
`;

const Link = styled(BaseLink)`
  text-decoration:none;
`;

const CardMedia = styled(Img)`
  height:220px;
`;

const Post = ({ post, classes, key }) => {
  const { shortcode, img, id } = post;
  const { media } = classes;
  //const { smallImage, likes, id } = post;
  // const { small } = smallImage.childImageSharp;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <StyledLi key={key}>
        <Card className={classes.card}>
          <CardActionArea>
            <Link to={`/${id}/`}>
              <CardMedia fluid={img} />
              <CardContent>
                <Typography gutterBottom
                  variant="h5" component="h2"
                  color="primary">Cake Cake</Typography>
                <Typography component="p" color="primary">
                  Lemon drops gummi bears halvah. Dessert marshmallow gummies croissant.
                  Gummies marzipan cupcake oat cake fruitcake ice cream.
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">Share</Button>
            <Link to={`/${id}/`}>
              <Button size="small" color="primary">More Info</Button>
            </Link>
          </CardActions>
        </Card>
      </StyledLi>
    </Grid>
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