import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleInterval" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain"}}>
                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-caption" style={{zIndex:"10"}}>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active" data-bs-interval="4000">
                        <img src="https://source.unsplash.com/random/900x700/?Hamburger" className="d-block w-100" style = {{filter:"brightness(30%)"}} alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src="https://source.unsplash.com/random/900x700/?Cake" className="d-block w-100" style = {{filter:"brightness(30%)"}} alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src="https://source.unsplash.com/random/900x700/?Pizza" className="d-block w-100"  style = {{filter:"brightness(30%)"}} alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src="https://source.unsplash.com/random/900x700/?IndianFood" className="d-block w-100"  style = {{filter:"brightness(30%)"}} alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src="https://source.unsplash.com/random/900x700/?Drinks" className="d-block w-100"  style = {{filter:"brightness(30%)"}} alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src="https://source.unsplash.com/random/900x700/?sandwich" className="d-block w-100"  style = {{filter:"brightness(30%)"}} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
