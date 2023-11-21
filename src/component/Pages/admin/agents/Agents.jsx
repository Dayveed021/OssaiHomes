import { useEffect, useState } from "react";
import AdminLayout from "../home/AdminLayout"
import ActivitesBlock from "../reusables/ActivitesBlock";
import FilterSearch from "../reusables/FilterSearch";
import "./agents.scss";
import { useSelector } from "react-redux";
import moment from "moment";

const Agents = ()=>{
    return(
        <div>
            <AdminLayout content={<Content />} />
            
        </div>
    )
}

const Content = ()=>{

    const [isChecked, setIsChecked] = useState({});
    const [selectAll, setSelectAll] = useState(false);

    const [data, setData] = useState(null);

    const itemsPerPage = 8;

    const [currentPage, setCurrentPage] = useState(1);

    const { user } = useSelector(
        (state) => state.auth
      );
    

    const handleCheck = (e)=>{
            setIsChecked({...isChecked, [e.target.value]: e.target.checked});
        

    }


    useEffect(()=>{
     
        const fetchData = async () => {
          try {
            const response = await fetch("https://homelanda-1d0d1907d8ae.herokuapp.com/v1/users",{
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
        <div className="agent-content">
            <ActivitesBlock 
            firstBlockLetters="Total Customers"
            firstBlockNumber="1500"
            secondBlockLetters="Subscribed Customers"
            secondBlockNumber="1000"
            thirdBlockLetters="Unsubscribed Customers"
            thirdBlockNumber="500"
            />

            <div className="all-agents">
                <FilterSearch background="#EFEFEF" marginBlock="0.5rem" marginInline="0.5rem" />

                <div className="admin-table1">
                    
                  {data && data.length > 0 && (
                    <table>
                        <tr>
                        
                        <th><input checked={selectAll} onChange={(e)=>setSelectAll(e.target.checked)} type="checkbox" />Agent Name</th>
                        <th>Email Address</th>
                        <th>Plan</th>
                        <th >Date Created</th>
                        <th>Properties</th>
                        <th>Phone Number</th>
                    </tr>
                        {data && currentItems.map((item,index)=>{
                            return(
                                <tr className={isChecked[item._id] || selectAll? "green-bg": ""} key={item._id}>
                            
                                <td> <input value={item._id} type="checkbox" checked={isChecked[item._id] || selectAll} onChange={handleCheck}/>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.subcribeToPackage}</td>
                                <td>{moment(item.createdAt).format('MM-DD-YYYY')}</td>
                                <td>{item.properties.length} Properties</td>                                               
                                <td>{item.phone}</td>
                                </tr>
                            )
                            
                        })}
                    </table>
                        
                  )}  
                    

        
        <div className="select-all">
            <input type="checkbox" checked={selectAll} onChange={(e)=>setSelectAll(e.target.checked)} /> Select all
            <button>Action <img src="../flaticons/expand-button3.png" alt="" /></button>
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
            </div>
        </div>
    )
}

export default Agents;