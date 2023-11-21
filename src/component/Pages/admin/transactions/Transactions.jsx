import AdminLayout from "../home/AdminLayout"
import "./transactions.scss";
import FilterSearch from "../reusables/FilterSearch";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";


const Transactions = ()=>{
    return(
        <div>
            <AdminLayout content={<Content />} />
            
        </div>
    )
}

const Content = ()=>{

    const [data, setData] = useState(null);

    const { user } = useSelector(
        (state) => state.auth
      );

      const itemsPerPage = 8;

    const [currentPage, setCurrentPage] = useState(1);

      useEffect(()=>{
     
        const fetchData = async () => {
          try {
            const response = await fetch("https://homelanda-1d0d1907d8ae.herokuapp.com/v1/transactions",{
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

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }


    return (
        <div className="transaction-content">
            <div className="table-content">
                <h2>Transactions</h2>
                <FilterSearch background="#EFEFEF" marginBlock="1.5rem" marginInline="1.5rem"  />
                {data && data.length > 0 && (
                    <table>
                    <tr>
                        <th>Name</th>
                        <th>Email Address</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Type</th>
                        <th>Plan</th>
                        <th>Number</th>
                    </tr>

                    {data && currentItems.map((item)=>{
                        return(
                            <tr>
                                <td>{item.agent.name}</td>
                                <td>{item.agent.email}</td>
                                <td>{moment(item.createdAt).format('MM-DD-YYYY')}</td>
                                <td>{moment(item.createdAt).format("HH:mm")}</td>
                                <td>{item.type}</td>    
                                <td>{item.subscription}</td>                                          
                                <td>{item.agent.phone}</td>
                            </tr>
                        )
                    })}
                    
      
                </table>
                )}

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

        </div>
    )
}

export default Transactions;