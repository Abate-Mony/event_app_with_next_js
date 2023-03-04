
import Render from './renderCity'
// import styles from '@/styles/Home.module.css'

const main = ({ data }) => {
    // console.log(data,"joi")
    return (
        <main className="" >
            <h2 className="text-slate-500"></h2>
            <div className="container mx-auto py-20 ">



                <div className="grid grid-cols-1 space-y-6
                px-4 md:px-0
                ">

                    {

                        data?.map(({ title, description, id, image }) => (<Render title={title} description={description} id={id}
                            image={image} />))
                    }
                </div>
            </div>



        </main>

    )
}


export default main;
