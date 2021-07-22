import './post-card.css'

export const PostCard = ({title, cover, body, id}) =>{
    return (
        <div className="post"> 
            <img src={cover} alt={title}></img>
            <div className="post-content">
                <h1>{title} {id}</h1>
                <p>{body}</p>
            </div>
        </div>
    )
}