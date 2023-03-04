
import Render from '../../components/renderCity'
const eventPage = ({ events }) => {
    return (
        <div>
            <h1 className="text-center text-3xl text-green-400
            pb-0 capitalize">event page</h1>

            <div className="container mx-auto pb-20 ">

                <div className="grid grid-cols-1 space-y-6
px-4 md:px-0
">
                    {

                        events?.map(({ title, description, 
                        id, image }) => (<Render title={title} description={description} id={id}
                            image={image} />))
                    }
                   
                </div>
            </div>
        </div>
    )

}


export default eventPage;
export async function getStaticProps() {
    const data = await import('../../data/data.json')
    return (
        {
            props: {
                events: data.events_categories
            }
        }

    )

}