import '@/styles/globals.css'
import MainLayer from '../components/main-layout'
export default function App({ Component, pageProps }) {
    return (
        <>  <MainLayer>
        
            <Component {...pageProps}  />
       
        </MainLayer></>
    )
}