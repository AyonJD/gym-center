import React, { useEffect, useState } from 'react';
import SharedNav from '../Shared/SharedNav';
import img from '../../../assets/Image/HomeShop/glo-p-img.png'
import { TbCurrencyTaka } from 'react-icons/tb';
import banner from '../../../assets/Image/shopPage/banner.jpg'
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import { useQuery } from 'react-query';
import Loading from '../../../hooks/Loading/Loading';
import Products from './Products';

const Shop = () => {
    const { token } = AuthUser()
    const [pageCount, setPageCount] = useState(0);
    const [productsCount, setProductsCount] = useState(4);
    const [pageNumber, setPageNumber] = useState(1);
    const [allProductsCount, setAllProductsCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [allProducts, setAllProducts] = useState([]);

    // console.log(products)
    const handleSearch = (e) => {

        const searchResult = allProducts?.filter(product => product?.name.toLowerCase().includes(searchValue.toLowerCase()));
        setSearchResult(searchResult);
    }


    useEffect(() => {
        fetch(`https://gym-management97.herokuapp.com/api/products`)
            .then(res => res.json())
            .then(data => {
                setAllProducts(data.data)
                const count = Math.ceil(data.data.length / productsCount)
                setAllProductsCount(data.data.length)
                setPageCount(count)
            }, [])
    })

    useEffect(() => {
        fetch(`https://gym-management97.herokuapp.com/api/products?page=${pageNumber}&limit=${productsCount}`)
            .then(res => res.json())
            .then(data => {

                setProducts(data)
            }, [pageNumber, productsCount])

    })

    let active = pageNumber;
    let button = [];
    for (let number = 1; number <= pageCount; number++) {
        button.push(
            <div key={number}>
                <button onClick={() => setPageNumber(number)} className={` btn ${number === active ? ' btn-active' : ''}`}>{number}</button>
            </div>
        );
    }



    // console.log(products)
    return (
        <>
            <SharedNav />
            <div className='mid-container'>
                <div className="form-control">
                    <div className="input-group">
                        <input onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Search…" className="input input-bordered" />
                        <button
                            onClick={handleSearch}
                            className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>


                <div className='my-16 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-6 gap-4'>
                    {
                        searchResult.length >= 1 ? (
                            searchResult?.map(product => <Products
                                key={product._id}
                                product={product}
                            ></Products>)
                        ) : (
                            products?.data?.map(product => <Products
                                key={product._id}
                                product={product}
                            ></Products>)
                        )
                    }
                </div>

                <div className="flex btn-group">
                    <button disabled={pageNumber === 1 && true} onClick={() => setPageNumber(pageNumber - 1)} className="btn outline-0 border-none mx-2">PRE</button>
                    {
                        button.slice(0, 2).map(user => user)
                    }
                    {/* <li> */}
                    <button>.....</button>
                    {/* </li> */}
                    {
                        pageNumber > 2 &&
                        <div >
                            <button className={` btn ${active ? ' btn-active' : ''}`}>{pageNumber} </button>
                        </div>
                    }
                    <button onClick={() => setPageNumber(pageNumber + 1)} className="btn outline-0 border-none mx-2">NEX</button>

                    <div>
                        <select
                            onChange={(e) => {
                                setPageCount(e.target.value);
                                setProductsCount(e.target.value);
                                setPageNumber(1);
                            }}
                            className="md:text-lg md:ml-2 text-md mt-5 md:mt-0 text-center font-bold btn-active text-white px-2 py-2 md:px-2 md:py-[10px] rounded-lg"
                        >
                            <option value="4">4</option>
                            <option value="8">8</option>
                            <option value={allProductsCount}>All</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;