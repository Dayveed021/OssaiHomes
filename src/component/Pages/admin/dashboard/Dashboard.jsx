import AdminLayout from "../home/AdminLayout"
import ActivitesBlock from "../reusables/ActivitesBlock";
import Listing from "../reusables/Listing";
import "./dashboard.scss";


const Dashboard = ()=>{
    return(
        <div>
            <AdminLayout content={<Content />} />
            
        </div>
    )
}

const Content = ()=>{
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
                <table>
                    <tr>
                        <th>Agent Name</th>
                        <th>Plan</th>
                        <th>Date Created</th>
                        <th>Properties</th>
                        <th>Phone Number</th>
                    </tr>
                    <tr>
                        <td>Akara Jasper</td>
                        <td>Basic Plan</td>
                        <td>1st Match 2023</td>
                        <td>200 properties</td>                                               
                        <td>09054523478</td>
                    </tr>
                    <tr>
                        <td>Akara Jasper</td>
                        <td>Basic Plan</td>
                        <td>1st Match 2023</td>
                        <td>200 properties</td>                                               
                        <td>09054523478</td>
                    </tr>
                    <tr>
                        <td>Akara Jasper</td>
                        <td>Basic Plan</td>
                        <td>1st Match 2023</td>
                        <td>200 properties</td>                                               
                        <td>09054523478</td>
                    </tr>
                    <tr>
                        <td>Akara Jasper</td>
                        <td>Basic Plan</td>
                        <td>1st Match 2023</td>
                        <td>200 properties</td>                                               
                        <td>09054523478</td>
                    </tr>
                </table>
                <div className="btn-div">
                    <button className="btn">View all
                        <img src="flaticons/search2.png" alt="icon" />
                    </button>
                </div>
                
            </div>
            <div className="transaction-header">
                <h2>Latest Transactions</h2>
                <img src="../../flaticons/customer2.png" alt="icon" />
            </div>
            <div className="admin-table1">
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
                    <tr>
                        <td>Akara Jasper</td>
                        <td>Akarajasper@gmail.com</td>
                        <td>20th Match 2023</td>
                        <td>9:30</td>
                        <td>Upgrade</td>    
                        <td>Bussiness+</td>                                          
                        <td>09054523478</td>
                    </tr>
                    <tr>
                        <td>Akara Jasper</td>
                        <td>Akarajasper@gmail.com</td>
                        <td>20th Match 2023</td>
                        <td>9:30</td>
                        <td>Upgrade</td>    
                        <td>Bussiness+</td>                                          
                        <td>09054523478</td>
                    </tr>
                    <tr>
                        <td>Akara Jasper</td>
                        <td>Akarajasper@gmail.com</td>
                        <td>20th Match 2023</td>
                        <td>9:30</td>
                        <td>Upgrade</td>    
                        <td>Bussiness+</td>                                          
                        <td>09054523478</td>
                    </tr>
                    <tr>
                        <td>Akara Jasper</td>
                        <td>Akarajasper@gmail.com</td>
                        <td>20th Match 2023</td>
                        <td>9:30</td>
                        <td>Upgrade</td>    
                        <td>Bussiness+</td>                                          
                        <td>09054523478</td>
                    </tr>
                </table>
                <div className="btn-div">
                    <button className="btn">View all
                        <img src="flaticons/search2.png" alt="icon" />
                    </button>
                </div>
                
            </div>
            <div className="transaction-header">
                <h2>Latest Listing</h2>
                <img src="../../flaticons/customer2.png" alt="icon" />
            </div>
            <div className="listing">
                <Listing />
                <Listing />
                <Listing />
                <Listing />           
                <div className="btn-btn">
                    <button className="btn">View all
                        <img src="flaticons/search2.png" alt="icon" />
                    </button>
                </div>
            

            </div>
            
           
        </div>
    )
}

export default Dashboard;