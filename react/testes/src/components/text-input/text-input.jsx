import './textinput.css'

export const TextInput = ({ serachValue, handleChange }) =>{
    return(
        <input className="inputTxt" value={serachValue} onChange={handleChange} type="search" placeholder="type your search"></input>
    )
}