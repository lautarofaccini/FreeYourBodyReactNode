import { Link } from 'react-router-dom'
import { toMain, toAbout, toLocation, toBuy } from '../../App'
import classnames from "classnames";



function Navbar() {

    let isInAdmin = false

    const abtClasses = classnames("btn btn-outline-primary me-2 ms-auto", {
        "--hidden": !isInAdmin,
    });
    const otherClasses = classnames("btn btn-outline-primary me-2", {
        "--hidden": !isInAdmin,
    });

    return (
        <>
            <nav className="OnStart navbar navbar-dark bg-black" id="navbar">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand d-flex align-items-center" onClick={toMain}>
                        <span className="text-primary fs-5 fw-bold ms-2">
                            Free Your Body
                        </span>
                    </Link>
                    <a className={abtClasses} role="button" onClick={toAbout}>About</a>
                    <a className={otherClasses} role="button" onClick={toLocation}>Location</a>
                    <a className={otherClasses} role="button" onClick={toBuy}>Buy</a >
                    <a className={otherClasses} data-bs-toggle="modal" href="#loginModalToggle" role="button" /* !*ngIf="!isLoggedIn" */>Login</a>
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