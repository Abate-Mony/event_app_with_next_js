import Link from 'next/link'

const renderCity = ({ title, description, id, image,city }) => {
var _href=`/events/${id}`
    if (city) { 
       _href= `/events/${city}/${id}`
    }
    return (
        <Link href={_href} key={id}
            passHref={true}
            className="shadow-lg py-4 md:grid 
            gap-4
            md:grid-cols-2"
        >
            <img src={image} alt={id} className="rounded-lg h-[300px] w-full" />
            <div className="">
                <h2 className="text-green-500 
            text-lg md:text-2xl  py-4">
                    {title}
                </h2>
                <p className="text-[12px] md:text-lg">
                    {description}
                </p>
            </div>
        </Link>)
}
export default renderCity