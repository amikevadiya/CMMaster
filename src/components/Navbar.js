import React from 'react';
import Logo from '../image/logo.svg'

function Navbar() {
  return (
    // <section className='navabr'>
    //     <div className='container'>
    //         <div className='row'>
    //             <div className='col-sm-12 col-lg-3'>
    //                 <div className='logo'>
    //                     <img src={Logo} alt='logo' />
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </section>
    <nav className="navbar navbar-expand-lg ">
        <div className='container'>
        <a className="navbar-brand" href="#">
            <img src={Logo} alt='logo' />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Game</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Play Games</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About us</a>
                </li>
            </ul>
        </div>
       </div>
    </nav>
  );
}

export default Navbar;
