<script context="module">
    import marked from 'marked'

    export const load = async () => {
        let allPosts = []

        const postsData = await import.meta.glob('./*.md')
        for (const path in postsData){
            let post = await postsData[path]()
            let slug = path.replace(/^\./mg, "").replace(/.md/mg,"").replace(/\//mg,"")
            allPosts = [...allPosts, {slug, ...post.default}]
        }

        return {
            props: {
                allPosts
            }
        }
    }



</script>

<script>
    export let allPosts
</script>


{#each allPosts as post}
     <p>{post.title}</p>
     <p>{post.slug}</p>
     <!-- {@html post.body} -->
{/each}