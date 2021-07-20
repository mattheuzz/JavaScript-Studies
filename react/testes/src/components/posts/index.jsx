import './posts.css'
import { PostCard } from "../post-card"


export const Posts = ({posts}) =>{
    return(   
        <div className="posts">
            {posts.map(post=>(
                <PostCard
                post={post}
                key={post.id}
                // title={post.title}
                // body={post.body}
                // id={post.id}
                // cover={post.cover}
            />      
                    
            )
            )}
        </div>
    )
}