import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetProductIdQuery } from '../services/productApi'
import { FiPlus } from 'react-icons/fi'
import Wrapper from '../components/Wrapper'

const Singleproduct = () => {

    const id = useParams()
    const { data } = useGetProductIdQuery(id?.id)

    return (
        <>
            <Wrapper>
                <div class="bg-light py-3">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 mb-0"><a href="index.html">Home</a> <span class="mx-2 mb-0">/</span> <a href="shop.html">Shop</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">{data?.title}</strong></div>
                        </div>
                    </div>
                </div>

                <div class="site-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="item-entry">
                                    <a href="#" class="product-item md-height bg-gray d-block">
                                        <img src={data?.image} alt="Image" class="img-fluid" />
                                    </a>

                                </div>

                            </div>
                            <div class="col-md-6">
                                <h2 class="text-black">{data?.title}</h2>
                                <p>{data?.description}</p>
                                <p><strong class="text-primary h4">${data?.price}</strong></p>
                                <div class="mb-1 d-flex">
                                    <label for="option-sm" class="d-flex mr-3 mb-3">
                                        <span class="d-inline-block mr-2" ><input type="radio" id="option-sm" name="shop-sizes" /></span> <span class="d-inline-block text-black">Small</span>
                                    </label>
                                    <label for="option-md" class="d-flex mr-3 mb-3">
                                        <span class="d-inline-block mr-2" ><input type="radio" id="option-md" name="shop-sizes" /></span> <span class="d-inline-block text-black">Medium</span>
                                    </label>
                                    <label for="option-lg" class="d-flex mr-3 mb-3">
                                        <span class="d-inline-block mr-2" ><input type="radio" id="option-lg" name="shop-sizes" /></span> <span class="d-inline-block text-black">Large</span>
                                    </label>
                                    <label for="option-xl" class="d-flex mr-3 mb-3">
                                        <span class="d-inline-block mr-2" ><input type="radio" id="option-xl" name="shop-sizes" /></span> <span class="d-inline-block text-black"> Extra Large</span>
                                    </label>
                                </div>
                                <div class="mb-5">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <button class="btn btn-outline-primary js-btn-minus" type="button">&minus;</button>
                                        </div>
                                        <input type="text" class="form-control text-center" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                        <div class="input-group-append">
                                            <button class="btn btn-outline-primary js-btn-plus" type="button"><FiPlus /></button>
                                        </div>
                                    </div>

                                </div>
                                <p><Link to="/cart" class="buy-now btn btn-sm height-auto px-4 py-3 btn-primary">Add To Cart</Link></p>

                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default Singleproduct