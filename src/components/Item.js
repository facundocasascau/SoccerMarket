import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { sizing } from '@material-ui/system';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import logo from './multimedia/logo.png';

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

  return (
    <div className="">
    <Card key={props.producto.id} className="card">
      <CardHeader
        title={props.producto.id}
      />
      <CardMedia component="img"
      src={props.producto.foto}
        className= {classes.media}
        title={classes.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            {props.producto.position}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
            <AddShoppingCartIcon />
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
        <Typography>${props.producto.precio}</Typography>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Descripción del producto:</Typography>
          <Typography paragraph>
          Descripción extendida
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
}