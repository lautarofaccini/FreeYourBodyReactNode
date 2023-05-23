import { Link } from 'react-router-dom'
function Navbar() {

    function toMain() {
        document.getElementById("main")?.scrollIntoView({ behavior: "smooth" })
    }
    function toAbout() {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
    }
    function toLocation() {
        document.getElementById("location")?.scrollIntoView({ behavior: "smooth" })
    }
    function toBuy() {
        document.getElementById("buy")?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <>
            <nav className="OnStart navbar navbar-dark bg-black" id="navbar">
                <div className="container-fluid"> Navbar Works
                    <Link to='/' className="navbar-brand d-flex align-items-center" onClick={toMain}>
                        <span className="text-primary fs-5 fw-bold ms-2">
                            Free Your Body
                        </span>
                    </Link>
                    <a className="btn btn-outline-primary me-2 ms-auto" role="button" /* !*ngIf="!isInAdmin" */ onClick={toAbout}>About</a>
                    <a className="btn btn-outline-primary me-2" role="button" /* !*ngIf="!isInAdmin" */ onClick={toLocation}>Location</a>
                    <a className="btn btn-outline-primary me-2" role="button" /* !*ngIf="!isInAdmin" */ onClick={toBuy}>Buy</a >
                    <a className="btn btn-outline-primary me-2" data-bs-toggle="modal" href="#loginModalToggle" role="button" /* !*ngIf="!isLoggedIn" */>Login</a>
                    {/* 
                    <Link to='/admin' className="btn btn-outline-primary me-2" role="button" !*ngIf="(isLoggedIn && !isInAdmin)" >Admin</Link> 
                    <a className="btn btn-outline-primary me-2" role="button" !*ngIf="isLoggedIn" onClick={logout}>Logout</a>
                    */}
                </div >

            </nav >
        </>
    )
}

export default Navbar