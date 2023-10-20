import AdminLayout from "../home/AdminLayout"
import "./transactions.scss";
import FilterSearch from "../reusables/FilterSearch";


const Transactions = ()=>{
    return(
        <div>
            <AdminLayout content={<Content />} />
            
        </div>
    )
}

const Content = ()=>{
    return (
        <div className="transaction-content">
            <div className="table-content">
                <h2>Transactions</h2>
                <FilterSearch background="#EFEFEF" marginBlock="1.5rem" marginInline="1.5rem"  />
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
            </div>

        </div>
    )
}

export default Transactions;