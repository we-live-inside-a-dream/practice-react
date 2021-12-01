import './Card.css'

function Card(props) {
    return <div ClassName={classes.card}>{props.children}</div>
}

export default Card;