export default {
    actions: {
        async fetchPosts(ctx){
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await res.json();
            ctx.commit('updatePosts', posts);        }
    },
    mutations: {
        updatePosts(state,posts){
            state.posts = posts;
        },
        creatPost(state, newPost){
            state.posts.unshift(newPost);
        }
    },
    state: {
        posts: []
    },
    getters:{
        allPosts(state){
            return state.posts;
        },
        postsCount(state){
            return state.posts.length;
        }
    }
}