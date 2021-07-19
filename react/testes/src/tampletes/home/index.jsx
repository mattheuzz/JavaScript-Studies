import './style.css';

import { Component } from 'react'

import { loadPost } from '../../utility/load-post'
import { Posts } from '../../components/posts';

export class Home extends Component  {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 4,
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
    
  }

  componentDidUpdate(){
    
  }

  componentWillUnmount(){
    
  }
  

/* {posts.map(post=> <h1 key={post.id}>{post.title}</h1>)} para retornar um unico elemento */
  render(){
    //const posts = this.state.posts forma normal
    const { posts }= this.state //desestruturação

    return (
      <section className="container">
        <Posts posts={posts}/>
      </section>
    );
  }
}
