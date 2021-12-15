import React, { Fragment } from 'react'

const NavbarImc = () => {
    return (
        <Fragment>
            <nav className="navbarImc">
                <div className="nav-wrapper">
                    <div className="container">
                        <a href="#" className="brand-logo">Logo</a>

                        <a href="#" data-target="menu-hamburguer" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>

                        <ul className="right hide-on-med-and-down">
                            <li><a href="sass.html">Imc</a></li>
                            <li><a href="badges.html">Agradecimientos</a></li>

                        </ul>


                        <ul className="sidenav" id="menu-hamburguer">
                            <li><a href="sass.html">Imc</a></li>
                            <li><a href="badges.html">Agradecimientos</a></li>

                        </ul>
                    </div>





                </div>
            </nav>

        </Fragment>
    )
}

export default NavbarImc
