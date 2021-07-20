import './style.css';

import { Component } from 'react'

import { loadPost } from '../../utility/load-post'
import { Posts } from '../../components/posts';
import { LoadMorePosts } from '../../components/button/load-posts-button';
import { TextInput } from '../../components/text-input/text-input';

export class Home extends Component  {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 4,
    serachValue: '',
  }

  async componentDidMount(){
    await this.loadPost()
  }

  loadPost = async () => {
    const { page, postsPerPage } = this.state
    const imgAndPosts = await loadPost()
    this.setState({posts: imgAndPosts.slice(page, postsPerPage), allPosts: imgAndPosts})
    
  }

  loadMorePost = async () => {
    console.log('está indo');
    const{
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state

    const nextPage = page + postsPerPage
    const nextPost = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPost)

    this.setState({ posts, page: nextPage })
    console.log(page, postsPerPage, nextPage)
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ serachValue: value });
  }

/* {posts.map(post=> <h1 key={post.id}>{post.title}</h1>)} para retornar um unico elemento */
  render(){
    //const posts = this.state.posts forma normal
    const { posts, page, postsPerPage, allPosts, serachValue }= this.state //desestruturação
    const noMorePosts = page + postsPerPage >= allPosts.length
    const filteredPosts = !!serachValue? allPosts.filter(post=>{
      return (
        post.title.toLowerCase().includes(serachValue.toLowerCase())
        )
      }) 
      : posts;


    return (
      <section className="container">
        <div className="box-search">
          {!!serachValue && (
            <h4>serachValue: {serachValue}</h4>
          )}

          <TextInput searchValue={serachValue} handleChange={this.handleChange}/>

        </div>
          {filteredPosts.length ===0 && (
            <p>Não existe post</p>
          )}
          {filteredPosts.length >0 && (
            <Posts posts={filteredPosts}/>
          )}

        <div className="box-btn">
          {!serachValue && (
            <LoadMorePosts txt="Load More Posts" onClick={this.loadMorePost} disabled={noMorePosts} />
          )}
          
        </div>
        
      </section>
    );
  }
}
