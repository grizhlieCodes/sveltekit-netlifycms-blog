<script context="module">
    
    export async function load({page}){
        let post
        const slug = page.params.slug

        const allPosts = import.meta.glob('../../../static/posts/*.md')
        for (const path in allPosts){
            let data = await allPosts[path]()
            let tempPost = await data.default
            console.log(tempPost.default)
            let postSlug = await tempPost.title.toLowerCase().split(' ').join('-')
            console.log(postSlug)
            if(postSlug === slug){
                post = tempPost
            } 
        }

        return {
            props: {
                post
            }
        }
        
    }
</script>

<script>
    export let post
    import {onMount} from 'svelte'
    console.log(post)

    onMount(() => {
        const allElements = document.querySelectorAll('article > *')
        console.log(allElements)
        allElements.forEach(e => e.id = '')
        console.log(allElements)
    })
</script>

<style lang="scss">
    :global(article.article-container){
        img {
            width: 100%;
        }
    }
</style>

<article class="article-container">
    <img src="{post.thumbnail}" alt="">
    <h1>{post.title}</h1>
    {@html post.body}
</article>