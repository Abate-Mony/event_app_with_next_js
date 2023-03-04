import Render from '../../../components/renderCity'
export default function indexCat({ data, id }) {
    return (
        <div>
            <h2 className="text-3xl text-green-500 
            text-center uppercase py-3 italic">
                Events in <span className="
            
            ">{id} </span> </h2>
            <div className="container mx-auto py-20 ">



                <div className="grid grid-cols-1 space-y-6
px-4 md:px-0
">
                    {

                        data?.map(({ title, description, id, image, city }) => (<Render title={title}
                            description={description} id={id} city={city}
                            image={image} />))
                    }

                </div>
            </div>

        </div>
    )
}
export async function getStaticPaths() {
    const { events_categories } = await import("../../../data/data.json");
    const allPaths = events_categories.map(({ id }) => {
        return (
            {
                params: {
                    cat: id.toString()
                }
            }
        )
    })
    return (
        {
            paths: allPaths,
            fallback: false
        }
    )
}

export async function getStaticProps(context) {
    const { allEvents } = await import("../../../data/data.json");
    const { params: { cat: id } } = context
    const data = [...
        allEvents.filter(({ city }) => city == id)
    ]
    return {
        props: {
            data,
            id
        }
    }
}