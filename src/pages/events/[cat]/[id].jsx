import Image from 'next/image'

export default function Yooland({ data,id }) {
    return (
        <div className="my-10">
            <h2 className="text-green-500   text-3xl  py-4 pl-[80px]">
                Event takes place in <span className="text-green-300">{data?.city}</span>
            </h2>
            <img src={data?.image} alt={data?.id} className="rounded-lg h-[300px] w-full"  />
            <div className="">
                <h2 className="text-green-500 
            text-lg md:text-2xl  py-4">
                    {data?.title}
                </h2>
                <p className="text-[12px] md:text-lg">
                    {data?.description}
                </p>
            </div>
           
         
         
        </div>
    )
}


export async function getStaticPaths() {
    const { allEvents } = await import("../../../data/data.json")
    const allPaths = allEvents.map(({ id, city }) => {
        return ({
            params: {
                cat: city,
                id
            }
        })

    })
    // console.log(allPaths)
    return ({
        paths: allPaths,
        fallback: false
    })

}
export async function getStaticProps(context) {
    console.log(context)
    const { allEvents } = await import("../../../data/data.json")
    const { params: {
        cat,
        id
    } } = context

    const data = allEvents.find((evt) => evt.id == id && evt.city == cat)
    //    console.log(data) 
    return (
        {
            props: {
                data
            }
        }
    )

}