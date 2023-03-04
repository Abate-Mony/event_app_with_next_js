import Header from './Header'
import Footer from './footer'
const Layout = ({ children }) => {
   return <>
        <Header />
        <div className="pt-[65px]">
        {children}
        </div>
        <Footer />
    </>
}
export default Layout