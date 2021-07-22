import './button.css'

export const LoadMorePosts = ({text, onClick, disabled}) =>{
    return(
        <button className="load" onClick={onClick} disabled={disabled}>{text}</button>
    )
}