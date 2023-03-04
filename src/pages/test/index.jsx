export default function test() {

    return (
        <h1> test main page</h1>
    )
}


export async function getStaticProps() {
    console.log("hello from static propss")
    return (
        {
            props: {

            }
        }
    )

}