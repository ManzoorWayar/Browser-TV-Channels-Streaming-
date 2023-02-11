import Header from "./Header"
// import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <main>
            <Header />
            <article className="main">
                <Outlet />
            </article>
            {/* <Footer /> */}
        </main>
    )
}

export default Layout