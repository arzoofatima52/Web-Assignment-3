import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import '../App.css';
function Navbar(){
    return(
        <>
         <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid">
            <a className="navbar-brand ms-4 text-white fs-1 fw-semibold" href="#">Hijabis-taa.</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><DensityMediumIcon sx={{color:'#fff'}}/></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <li className="nav-item ms-5">
                        <a className="nav-link" href="#">
                           <HomeIcon sx={{color:'#fff', fontSize: '2.4em'}}/></a>
                    </li>

                    <li className="nav-item ms-5">
                        <a className="nav-link" href="#">
                           <ShoppingCartIcon sx={{color:'#fff', fontSize: '2.4em'}}/></a>
                    </li>
                </ul>
                <form className="d-flex " role="search">
                    <input className="form-control me-2 fs-3" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-white text-white fs-2" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

        </>
    )
}

export default Navbar;