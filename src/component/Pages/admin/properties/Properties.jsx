import AdminLayout from "../home/AdminLayout"
import ActivitesBlock from "../reusables/ActivitesBlock";
import FilterSearch from "../reusables/FilterSearch";
import Listing from "../reusables/Listing";
import PropertyContent from "../reusables/PropertyContent";
import "./properties.scss";
import { useSelector } from "react-redux";
import moment from "moment";
import { useEffect, useState } from "react";


const Properties = ()=>{
    return(
        <div>
            <AdminLayout content={<Content />} />
            
        </div>
    )
}

const Content = ()=>{

    const [data, setData] = useState(null);

    const itemsPerPage = 8;

  const [currentPage, setCurrentPage] = useState(1);

  const { user } = useSelector(
    (state) => state.auth
  );

  useEffect(()=>{
     
    const fetchData = async () => {
      try {
        const response = await fetch("https://homelanda-1d0d1907d8ae.herokuapp.com/v1/properties",{
          method: "GET",
          headers: {
            "Authorization": `Bearer ${user.access_token}`
          }
        });

        if(response.ok) {
          const result = await response.json();
          setData(result);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  const totalNumberOfPages = Math.ceil((data ? data.length : 0) / itemsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalNumberOfPages; i++) {
    pageNumbers.push(i);
  }


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data ? data.slice(indexOfFirstItem,indexOfLastItem) : [];

  console.log(data);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  
    return (
        <div className="properties-container">
            <ActivitesBlock 
            firstBlockLetters="Total Properties"
            firstBlockNumber="1500"
            secondBlockLetters="Published Properties"
            secondBlockNumber="1000"
            thirdBlockLetters="Unpublished Properties"
            thirdBlockNumber="500"
            />
            <FilterSearch />

            <div className="properties-content">
                <div className="bloc-tabs">
                    <div className="tabs active-tabs">
                        <h4>Published</h4>
                    </div>
                    <div style={{marginLeft:"1rem"}} className="tabs">
                        <h4>Unpublished</h4>
                    </div>
                </div>
                <div className="select-action">
                    <div className="select">
                        <p>Select all</p>
                        <div className="btn-green">
                        <img src="../../flaticons/check4.png" alt="" />
                        </div>
                    </div>
                    <div className="action">
                        <p>Action</p>
                        <img src="../../flaticons/expand-button3.png" alt="" />
                    </div>
                </div>
            


                {data && data.length > 0 && (
                <div>
                    {data && currentItems.map((item)=>{
                        return(<Listing
                            propertyImages={item.propertyImages[0]}
                            propertyTitle={item.propertyTitle}
                            address={item.address}
                            city={item.city}
                            state={item.state}
                            created={moment(item.createdAt).format("MM-DD-YYYY")}
                            updated={moment(item.updatedAt).format("MM-DD-YYYY")}
                            price={item.pricePerMonth}
                            bathrooms={item.bathrooms}
                            bedrooms={item.bedrooms}
                            tiolets={item.tiolets}

                         />)
                        
                    })}
                </div>
            )}
                
            </div>
            

            

            <div className="page-numbers">
              <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
              Prev
            </button>
              {pageNumbers.map(number => (
              <p key={number} onClick={() => paginate(number)} className={currentPage === number ? 'active' : ''}>
                {number}
              </p>
            ))}

              <button onClick={() => paginate(currentPage + 1)} disabled={currentItems.length < itemsPerPage}>
              Next
              </button>
          </div>


            
        </div>
    )
}

export default Properties;