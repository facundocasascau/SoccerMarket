import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {CartContext} from './context/CartContext';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  
}));

export default function Item(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [cart, setCart] = useContext(CartContext);
  const addToCart = () => {
     const player = props.player
      setCart(currentCart => [...currentCart, player])
  }

  return (
    <div className="">
      <Card key={props.player.id} className="card">
      <NavLink to={`/item/${props.player.id}`} className="cardPlayerName">
        <CardHeader
          title={props.player.name}
        />
      </NavLink>
      <NavLink to={`/item/${props.player.id}`}>
        <CardMedia component="img"
        src={props.player.photo}
          className= {classes.media}
          title={classes.name}
        />
        </NavLink>
        <CardContent>
          
            <Typography variant="body2" color="textSecondary" component="p">
                {props.player.position}
            </Typography>
          
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
              <AddShoppingCartIcon onClick={addToCart} />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
          <Typography>${props.player.price}</Typography>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Descripción del jugador:</Typography>
            <Typography paragraph>
            {props.player.bio}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}