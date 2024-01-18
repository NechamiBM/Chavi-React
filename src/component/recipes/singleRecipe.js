import { useSelector } from "react-redux";
import * as React from 'react';
//mui
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Checkbox from '@mui/material/Checkbox';
//shopping list
//import AddToList from '../shoppingList/addToList';
import RemoveFromList from "../shoppingList/removeFromList";
//import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as actionType from '../store/action'
// import About from '../about'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function SingleRecipe({ i }) {
    const dispatch = useDispatch();
    const shoppingList = useSelector(state => state.shoppingList);
    const [expanded, setExpanded] = React.useState(false);
    // const [checked, setChecked] = React.useState(false);
    const recipes = useSelector(state => state.recipes);
    const user = useSelector(state => state.user);



    const RemoveFromList = ({ ingrident }) => {
        console.log("remove")
        const dispatch = useDispatch();
        const shoppingList = useSelector(state => state.shoppingList);
        shoppingList.map(m =>
            m.Name === ingrident.Name && m.Type === ingrident.Type ? m.Count -= ingrident.Count :
                dispatch({ type: actionType.DELETE_INGRIDENT, payload: m })
        )
        // return (
        //     <div>add to list</div>
        // )
    }

    const handleChange = (event,ingrident, index) => {
        // setChecked(event.target.checked);
        console.log(event.target.checked)
        if (event.target.checked) {
            //<><AddToList /><About></About></>
            //<AddToList ingrident={recipes[i].Ingrident[index]}/>

            console.log("ADD")
            console.log(ingrident);

// user={gg:"LLL"}

// {user:user}
// user{...user}
            axios.post(`http://localhost:8080/api/bay`, ingrident)
                .then(x => {
                    dispatch({ type: actionType.ADD_INGRIDENT, payload: x})
                })


            console.log(recipes[i].Ingrident[index]);
            // console.log("add to shopping list");

        }
        else
            RemoveFromList(recipes[i].Ingrident[index]);
        //<RemoveFromList ingrident={recipes[i].Ingrident[index]} />
        //console.log("remove from shopping list");
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (<>
        {/* <About></About> */}
        {/* <AddToList ingrident={"in"} /> */}
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {recipes[i].UserId === user?.Id ? user?.Name : 'N'}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={recipes[i].Name}
            // subheader={recipes[i].Description}
            />
            <CardMedia
                component="img"
                height="194"
                image={recipes[i].Img}
                alt={`תמונה של ${recipes[i].name}`}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {recipes[i].Description}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                    {recipes[i].Ingrident.map((m, i) =>
                        <div className="recipeDetails" key={i}>
                    <Checkbox onChange={(e) => handleChange(e, i)} inputProps={{ 'aria-label': 'controlled' }} /> {`${m?.Count} ${m?.Type != '-' ? m?.Type : ''} ${m?.Name}`} */}
                {/* <Checkbox checked={checked} onChange={(e) => handleChange(e,i)} inputProps={{ 'aria-label': 'controlled' }}/> {`${m?.Count} ${m?.Type != '-' ? m?.Type : ''} ${m?.Name}`} */}
                {/* </div>
                    )}
                </Typography> */}
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>החומרים:</Typography>
                    <Typography paragraph>
                        {recipes[i].Ingrident.map((m, i) =>
                            <div className="recipeDetails" key={i}>
                                <Checkbox onChange={(e) => handleChange(e,m, i)

                                }
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                                {`${m?.Count} ${m?.Type !== '-' ? m?.Type : ''} ${m?.Name}`}
                                {/* <Checkbox checked={checked} onChange={(e) => handleChange(e,i)} inputProps={{ 'aria-label': 'controlled' }}/> {`${m?.Count} ${m?.Type != '-' ? m?.Type : ''} ${m?.Name}`} */}
                            </div>
                        )}


                    </Typography>

                    <Typography paragraph>הוראות הכנה:</Typography>
                    <Typography paragraph>
                        <ul className="recipeDetails">{recipes[i].Instructions.map((r, i) =>
                            <li key={i}>{r}</li>
                        )}</ul>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    </>
    );
}