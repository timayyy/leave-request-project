import React from 'react'

const HeroSection = () => {
    return (
        <>
            <section class="hero-section py-3 py-md-5">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-6 pt-3 mb-5 mb-lg-0">
                            <h1 class="site-headline font-weight-bold mb-3 text-dark">Managing your <span className="hero-fancy-text">employees</span> has never been so simple</h1>
                            <div class="site-tagline mb-4">Designed for small business owners, and entrepreneurs</div>
                            <div class="cta-btns mb-lg-3">
                                <a class="btn custom-btn-primary mr-2 mb-3" href="pricing.html">Get Started Free <i class="fas fa-arrow-circle-right ml-2"></i></a>

                            </div>
                        </div>
                        <div class="col-12 col-lg-6 d-lg-block d-none  text-center">

                            {/* <img className="img-fluid" src="/img/undraw_Selecting_team_re_ndkbb.png" alt="..." /> */}
                            {/* <img className="img-fluid" src="/img/undraw_Business_decisions_re_84ag.png" alt="..." /> */}
                            <img className="img-fluid" src="/img/undraw_Hire_re_gn5j.png" alt="..." />
                        </div>
                    </div>
                    {/* <!--//row--> */}
                </div>
            </section>
        </>
    )
}

export default HeroSection
