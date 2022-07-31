import { Link } from "react-router-dom";


function NavBar() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark bg-gradient border border-warning rounded-3">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 text-warning">Bad Bank</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#banknav" aria-controls="banknav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="banknav">
                        <ul className="navbar-nav nav-tabs tab-warning border-0 active" data-bs-toggle="tooltip" data-bs-container="body" data-bs-placement="bottom">
                            <li className="nav-item">
                                <Link to='/' className="nav-link" tabIndex="1" title="Home page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/createAccount' className="nav-link" tabIndex="2" title="Create and account">Create Account</Link>
                            </li>
                            <li className="nav-item">
                             <Link to='/deposit' className="nav-link" tabIndex="3" title="Make a deposit">Deposit</Link>
                            </li>
                            <li className="nav-item">
                             <Link to='/withdrawal' className="nav-link" tabIndex="4" title="Make a withdrawal">Withdraw</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/alldata' className="nav-link" tabIndex="5" title="All our users">All Data</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;