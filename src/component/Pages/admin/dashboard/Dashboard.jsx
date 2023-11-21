import { useState, useEffect } from "react";
import AdminLayout from "../home/AdminLayout"
import ActivitesBlock from "../reusables/ActivitesBlock";
import Listing from "../reusables/Listing";
import "./dashboard.scss";
import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";


const Dashboard = ()=>{
    return(
        <div>
            <AdminLayout content={<Content />} />
            
        </div>
    )
}

const Content = ()=>{

    const [properties, setProperties] = useState([]);
    const [agents, setAgents] = useState([]);
    const [ transactions, setTransactions] = useState([]);

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

              const lastFiveProperties = result.slice(-5);

              setProperties(lastFiveProperties);
            }
          } catch (error) {
            console.error('Error fetching properties:', error);
          }
        };

        const fetchAgents = async () => {
            try {
                const response = await fetch("https://homelanda-1d0d1907d8ae.herokuapp.com/v1/users",{
                  method: "GET",
                  headers: {
                    "Authorization": `Bearer ${user.access_token}`
                  }
                });
        
                if(response.ok) {
                  const data = await response.json();
                  const lastFiveAgents = data.slice(-5);

                  setAgents(lastFiveAgents);
                 
                }
              } catch (error) {
                console.error('Error fetching properties:', error);
              }
        }
    
        const fetchTransactions = async () => {
            try {
                const response = await fetch("https://homelanda-1d0d1907d8ae.herokuapp.com/v1/transactions",{
                  method: "GET",
                  headers: {
                    "Authorization": `Bearer ${user.access_token}`
                  }
                });
        
                if(response.ok) {
                  const data = await response.json();
                  const lastFiveTransactions = data.slice(-5);

                  setTransactions(lastFiveTransactions);
                 
                }
              } catch (error) {
                console.error('Error fetching Transactions:', error);
              }
        }

        fetchData();
        fetchAgents();
        fetchTransactions();
      }, []);


    return (
        <div className="dashboard-content">
            <ActivitesBlock 
            firstBlockLetters="Total Agents"
            firstBlockNumber="1500"
            secondBlockLetters="Total Properties"
            secondBlockNumber="1000"
            thirdBlockLetters="latest Transactions"
            thirdBlockNumber="500"
            />
           
            <div className="agents-header">
                <h2>Latest Agents</h2>
                <img src="../../flaticons/customer2.png" alt="icon" />
            </div>
            <div className="admin-table1">
                {agents && agents.length > 0 && (
                    <table>
                    <tr>
                        <th>Agent Name</th>
                        <th>Plan</th>
                        <th>Date Created</th>
                        <th>Properties</th>
                        <th>Phone Number</th>
                    </tr>
                    {agents && agents.map((agent)=>{
                        return(
                            <tr>
                                <td>{agent.name}</td>
                                <td>{agent.subcribeToPackage}</td>
                                <td>{moment(agent.createdAt).format('MM-DD-YYYY')}</td>
                                <td>{agent.properties.length}</td>                                               
                                <td>{agent.phone}</td>
                            </tr>
                        )
                    })}
                    
                 
                    </table>
                )}
                
                <Link to="/admin/agents" className="btn-div">
                    <button className="btn">View all
                        <img src="/flaticons/search2.png" alt="icon" />
                    </button>
                </Link>
                
            </div>
            <div className="transaction-header">
                <h2>Latest Transactions</h2>
                <img src="../../flaticons/customer2.png" alt="icon" />
            </div>
            <div className="admin-table1">
                {transactions && transactions.length > 0 && (
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
                    {transactions && transactions.map((transaction)=>{
                        return(
                            <tr>
                                <td>{transaction.agent.name}</td>
                                <td>{transaction.agent.email}</td>
                                <td>{moment(transaction.createdAt).format('MM-DD-YYYY')}</td>
                                <td>{moment(transaction.createdAt).format("HH:mm")}</td>
                                <td>{transaction.type}</td>    
                                <td>{transaction.subscription}</td>                                          
                                <td>{transaction.agent.phone}</td>
                            </tr>
                        )
                    })}
                    
    
                </table>
                )}
                
                <Link to="/admin/transactions" className="btn-div">
                    <button className="btn">View all
                        <img src="/flaticons/search2.png" alt="icon" />
                    </button>
                </Link>
                
            </div>
            <div className="transaction-header">
                <h2>Latest Listing</h2>
                <img src="/flaticons/customer2.png" alt="icon" />
            </div>
            {properties && properties.length > 0 && (
                <div className="listing">
                    {properties && properties.map((item)=>{
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
                        /> )
                    })}
                        
                <Link to="/admin/properties" className="btn-btn">
                    <button className="btn">View all
                        <img src="/flaticons/search2.png" alt="icon" />
                    </button>
                </Link>
            

            </div>
            )}
            
            
           
        </div>
    )
}

export default Dashboard;