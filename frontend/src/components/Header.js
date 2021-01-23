import React from 'react'

const Header = () => {
    return (
        <header class="header fixed-top">
            <div class="branding">
                <div class="container position-relative">
                    <nav class="navbar navbar-expand-lg">
                        <div class="site-logo">
                            <a class="navbar-brand" href="index.html">
                                <span class="logo-text">LMA</span>
                            </a>
                        </div>

                        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                            <span> </span>
                            <span> </span>
                            <span> </span>
                        </button>

                        <div class="collapse navbar-collapse py-3 py-lg-0" id="navigation">
                            <ul class="navbar-nav ml-lg-auto">

                                <li class="nav-item mr-lg-4">
                                    <a class="nav-link" href="login.html">Login</a>
                                </li>
                                <li class="nav-item mr-lg-0 mt-3 mt-lg-0">
                                    <a class="btn custom-btn-primary text-white" href="signup.html">Sign up</a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                </div>
                {/* <!--//container--> */}
            </div>
            {/* <!--//branding--> */}
        </header>
    )
}

export default Header
