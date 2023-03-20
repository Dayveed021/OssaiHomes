import AdminLayout from "../home/AdminLayout"
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
            <div className="block">
                <div className="block1">
                    <h4>Total Agents</h4>
                    <p>1500</p>
                </div>
                <div className="block1">
                    <h4>Total Properties</h4>
                    <p>1000</p>
                </div>
                <div className="block1">
                    <h4>Latest Transactions</h4>
                    <p>500</p>
                </div>
            </div>
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
                <div className="detail-list">
                    <div className="single-listing">
                    
                    <div className="image">
                        <img src="../../flaticons/Rectangle346.png" alt="room" />
                    </div>
                    <div className="list-content">
                        <h5 className="details">Furnished 5 Bedroom</h5>
                        <div className="address">
                            <img src="../../flaticons/location1.png" alt="icon" />
                            <p>No. 10 Iterigbe, Warri, Delta State</p>
                        </div>
                        <div className="date">
                            <p className="date-left">Added: 21-02-23</p>
                            <p className="date-right">Updated: 21-02-23</p>
                        </div>
                        <div className="views">
                            <p className="view-left">Views: 0</p>
                            <p className="view-right">Automatic boost: 0</p>
                        </div>
                        <div className="prices">
                            <p className="price-left">25,000,000</p>
                            <p className="price-right">per year</p>
                        </div>
                        <div className="apartment-details">
                            <div>
                                <img src="../../flaticons/water-closet1.png" alt="" />
                                <p>6 Toilet</p>
                            </div>
                            <div>
                                <img src="../../flaticons/water-closet1.png" alt="" />
                                <p>6 Toilet</p>
                            </div>
                            <div>
                                <img src="../../flaticons/water-closet1.png" alt="" />
                                <p>6 Toilet</p>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                    <div  className="btn-list">
                        <button>Action <img src="../../flaticons/expand-button3.png" alt="" /></button>
                    </div>
                </div>
                <div className="detail-list">
                    <div className="single-listing">
                    
                    <div className="image">
                        <img src="../../flaticons/Rectangle346.png" alt="room" />
                    </div>
                    <div className="list-content">
                        <h5 className="details">Furnished 5 Bedroom</h5>
                        <div className="address">
                            <img src="../../flaticons/location1.png" alt="icon" />
                            <p>No. 10 Iterigbe, Warri, Delta State</p>
                        </div>
                        <div className="date">
                            <p className="date-left">Added: 21-02-23</p>
                            <p className="date-right">Updated: 21-02-23</p>
                        </div>
                        <div className="views">
                            <p className="view-left">Views: 0</p>
                            <p className="view-right">Automatic boost: 0</p>
                        </div>
                        <div className="prices">
                            <p className="price-left">25,000,000</p>
                            <p className="price-right">per year</p>
                        </div>
                        <div className="apartment-details">
                            <div>
                                <img src="../../flaticons/water-closet1.png" alt="" />
                                <p>6 Toilet</p>
                            </div>
                            <div>
                                <img src="../../flaticons/water-closet1.png" alt="" />
                                <p>6 Toilet</p>
                            </div>
                            <div>
                                <img src="../../flaticons/water-closet1.png" alt="" />
                                <p>6 Toilet</p>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                    <div  className="btn-list">
                        <button>Action <img src="../../flaticons/expand-button3.png" alt="" /></button>
                    </div>
                </div>
                <div className="detail-list">
                    <div className="single-listing">
                    
                    <div className="image">
                        <img src="../../flaticons/Rectangle346.png" alt="room" />
                    </div>
                    <div className="list-content">
                        <h5 className="details">Furnished 5 Bedroom</h5>
                        <div className="address">
                            <img src="../../flaticons/location1.png" alt="icon" />
                            <p>No. 10 Iterigbe, Warri, Delta State</p>
                        </div>
                        <div className="date">
                            <p className="date-left">Added: 21-02-23</p>
                            <p className="date-right">Updated: 21-02-23</p>
                        </div>
                        <div className="views">
                            <p className="view-left">Views: 0</p>
                            <p className="view-right">Automatic boost: 0</p>
                        </div>
                        <div className="prices">
                            <p className="price-left">25,000,000</p>
                            <p className="price-right">per year</p>
                        </div>
                        <div className="apartment-details">
                            <div>
                                <img src="../../flaticons/water-closet1.png" alt="" />
                                <p>6 Toilet</p>
                            </div>
                            <div>
                                <img src="../../flaticons/water-closet1.png" alt="" />
                                <p>6 Toilet</p>
                            </div>
                            <div>
                                <img src="../../flaticons/water-closet1.png" alt="" />
                                <p>6 Toilet</p>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                    <div  className="btn-list">
                        <button>Action <img src="../../flaticons/expand-button3.png" alt="" /></button>
                    </div>
                </div>
                <div className="detail-list">
                    <div className="single-listing">
                    
                    <div className="image">
                        <img src="../../flaticons/Rectangle346.png" alt="room" />
                    </div>
                    <div className="list-content">
                        <h5 className="details">Furnished 5 Bedroom</h5>
                        <div className="address">
                            <img src="../../flaticons/location1.png" alt="icon" />
                            <p>No. 10 Iterigbe, Warri, Delta State</p>
                        </div>
                        <div className="date">
                            <p className="date-left">Added: 21-02-23</p>
                            <p className="date-right">Updated: 21-02-23</p>
                        </div>
                        <div className="views">
                            <p className="view-left">Views: 0</p>
                            <p className="view-right">Automatic boost: 0</p>
                        </div>
                        <div className="prices">
                            <p className="price-left">25,000,000</p>
                            <p className="price-right">per year</p>
                        </div>
                        <div className="apartment-details">
                            <div>
                                <img src="../../flaticons/water-closet1.png" alt="" />
                                <p>6 Toilet</p>
                            </div>
                            <div>
                                <img src="../../flaticons/water-closet1.png" alt="" />
                                <p>6 Toilet</p>
                            </div>
                            <div>
                                <img src="../../flaticons/water-closet1.png" alt="" />
                                <p>6 Toilet</p>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                    <div  className="btn-list">
                        <button>Action <img src="../../flaticons/expand-button3.png" alt="" /></button>
                    </div>
                </div>
                
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