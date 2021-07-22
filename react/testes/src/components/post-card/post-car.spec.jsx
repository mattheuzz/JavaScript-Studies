import { render } from "@testing-library/react"
import { PostCard } from "."
import { props } from './mock'


describe('<PostCard />', ()=> {
    it('should render PostCard correctly', ()=>{
        render(<PostCard {...props}/>)
    })
})