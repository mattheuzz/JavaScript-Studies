import './button.css'

export const LoadMorePosts = ({txt, onClick, disabled}) =>{
    return(
        <button className="load" onClick={onClick} disabled={disabled}>{txt}</button>
    )
}