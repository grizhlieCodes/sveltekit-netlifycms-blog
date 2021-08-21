<script context="module">
    import marked from 'marked'

    export const load = async () => {
        let allPosts = []

        const postsData = await import.meta.glob('../../../static/posts/*.md')
        for (const path in postsData){
            let post = await postsData[path]()
            let slug = post.default.title.toLowerCase().split(' ').join('-')
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


{#each allPosts as {title, slug}}
     <a href="/blog/{slug}">{title}</a>
     <!-- {@html post.body} -->
{/each}