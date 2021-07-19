export const loadPost = async () =>{    
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts')
    const imgResponse = fetch('https://jsonplaceholder.typicode.com/photos')

    const [posts, img] = await Promise.all([postsResponse, imgResponse])

    const postsJson = await posts.json()
    const imgJson = await img.json()
    
    const imgAndPosts = postsJson.map((post, index) => {
        return {...post, cover: imgJson[index].url}
    })

    return imgAndPosts
}