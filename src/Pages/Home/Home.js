import { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { FilterAcordion } from "../../Components/FilterAcordion/FilterAcordion";
import {Card} from "../../Components/Card/Card"
export const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [page, setPage] = useState(1);
    // const [activePage, setActivePage] = useState(1);
    const [status, setStatus] = useState("");
    const [species, setSpecies] = useState("");
    const [gender, setGender] = useState("");
    const [pages, setPages] = useState(0);
    const [search, setSearchValue] = useState("")

    let InputRef = useRef();


    let url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
        // (() => {
        //   if(Array.isArray(data.results)){

        //   }
        // })()
            console.log(data); 
            setPages(data.info?.pages)
            setData(data.results);
            setLoading(false)
        })
        .catch(err => {
            setIsError(true);
            setLoading(false)
        })
    }, [url]);

    function debounce(callback, delay) {
        let timer;
        return function () {
            clearTimeout(timer);
            timer = setTimeout(callback, delay)
        }
    }

    function check() {
        console.log("Number of requests =>: ", InputRef.current.value)
        setSearchValue(InputRef.current.value)
        setPage(1)
    }

    return (
    <>
        <div className='container-costom'>
            <form method='get' autoComplete='off' onSubmit={(evt) => evt.preventDefault()}>
                <input className="form-control search-input mb-5 border-0" ref={InputRef} onInput={debounce(check, 1000)} type="search" placeholder="Search" />
            </form>

            <div className='row'>
                <div className='col-2'>
                    <FilterAcordion Status={setStatus} setSpecies={setSpecies} setGender={setGender} setPage={setPage}/>
                </div>
                <div className='col-10'>

                    {loading && <h2 className="loading-text">Loading . . .</h2>}
                    {isError && <h2 className="loading-text">Error . . .</h2>}

                    {data?.length ? (
                        <>
                            <ul className='row gy-4 mb-0 list-unstyled'>
                                {data.map(item => (
                                    <Card image = {item.image}
                                    name = {item.name}
                                    status = {item.status}
                                    species = {item.species}
                                    origin = {item.origin}
                                    location = {item.location}
                                    id={item.id} />
                                ))}
                            </ul>
                                
                            <ReactPaginate 
                                pageCount={pages}
                                className="pagination-list d-flex align-items-center justify-content-between list-unstyled"
                                activeLinkClassName="page-active"
                                onPageChange={(activePage) => {
                                    setPage(activePage.selected + 1)
                                }}
                                forcePage={page === 1 ? 0 : page - 1} 
                                breakLinkClassName = "text-white fs-4 text-decoration-none"
                                pageClassName="text-white"
                                previousLinkClassName="text-white text-decoration-none"
                                nextLinkClassName="text-white text-decoration-none"
                            />
                        </>

                    ):(
                        <h2 className='text-white'>Not Found</h2>
                    )}
    
                </div>
            </div>
        </div>
    </>)
}