export default function test({slug}) {

    return (
        <h1> test page here {slug}</h1>
    )
}


export async function getStaticProps(context) {
    console.log(context,"the name of the code and gthe s")
    
const {params:{slug}} =context
    
    return (
        {
            props: {
slug
            }
        }
    )

}
export async function getStaticPaths() {
    const { events_categories } = await import("../../../data/data.json");
    const allPaths = events_categories.map(({ id }) => {
        return (
            {
                params: {
                    slug: id.toString()
                }
            }
        )
    })
    return (
        {
            paths: allPaths,
            fallback: true
        }
    )
}