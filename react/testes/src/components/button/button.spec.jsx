const { render, screen, fireEvent } = require("@testing-library/react")
import { LoadMorePosts } from './load-posts-button'

describe('<LoadMorePosts />', () => {
    it('should be render the button with text "Load More Posts"', ()=>{
        render(<LoadMorePosts text="Load More Posts" />)

        const button = screen.getByRole('button', { name: /load more posts/i })
        expect(button).toBeInTheDocument()
    })
    
    it('should call function on button click', ()=>{
        const fn = jest.fn()
        render(<LoadMorePosts text="Load More Posts" onClick={fn} />)

        const button = screen.getByRole('button', { name: /load more posts/i })

        fireEvent.click(button)
        expect(fn).toHaveBeenCalled()

    })

    it('should be disable when disable is true', ()=>{
        const fn = jest.fn()
        render(<LoadMorePosts text="Load More Posts" disabled={true} />)

        const button = screen.getByRole('button', { name: /load more posts/i })

        expect(button).toBeDisabled()

    })

    it('should be enable when disable is false', ()=>{
        const fn = jest.fn()
        render(<LoadMorePosts text="Load More Posts" disabled={false} />)

        const button = screen.getByRole('button', { name: /load more posts/i })

        expect(button).toBeEnabled()

    })
})