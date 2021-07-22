import './style.css';

import { useCallback, useEffect, useState } from 'react'

import { loadPost } from '../../utility/load-post'
import { Posts } from '../../components/posts';
import { LoadMorePosts } from '../../components/button/load-posts-button';
import { TextInput } from '../../components/text-input/text-input';

export const Home = () =>{

  const [ posts, setPosts ] = useState([]);
  const [ allPosts, setAllPosts ] = useState([]);
  const [ page, setPage ] = useState(0);
  const [ postsPerPage] = useState([4]);
  const [ searchValue, setSearchValue ] = useState('');


  const noMorePosts = page + postsPerPage >= allPosts.length

  const filteredPosts = !!searchValue? allPosts.filter(post=>{
    return (
      post.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    }) 
    : posts;

    const handleLoadPost = useCallback (async (page, postsPerPage) => {
      const imgAndPosts = await loadPost()
          
      setPosts(imgAndPosts.slice(page, postsPerPage))
      setAllPosts(imgAndPosts)
    }, [])

    useEffect(() =>{
      handleLoadPost(0, postsPerPage)
    },[handleLoadPost, postsPerPage])
    
  const loadMorePost = async () => {
    console.log('está indo');
    
    const nextPage = page + postsPerPage
    const nextPost = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPost)
    
    setPosts(posts)
    setPage(nextPage)
    console.log(page, postsPerPage, nextPage)
  }
    

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value) 
  }

  return (
    <section className="container">
      <div className="box-search">
        {!!searchValue && (
          <h4>searchValue: {searchValue}</h4>
        )}

        <TextInput searchValue={searchValue} handleChange={handleChange}/>

      </div>
        {filteredPosts.length ===0 && (
          <p>Não existe post</p>
        )}
        {filteredPosts.length >0 && (
          <Posts posts={filteredPosts}/>
        )}

      <div className="box-btn">
        {!searchValue && (
          <LoadMorePosts text="Load More Posts" onClick={loadMorePost} disabled={noMorePosts} />
        )}
        
      </div>
      
    </section>
  );
}
