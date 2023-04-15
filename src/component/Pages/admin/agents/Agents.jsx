import { useState } from "react";
import AdminLayout from "../home/AdminLayout"
import ActivitesBlock from "../reusables/ActivitesBlock";
import FilterSearch from "../reusables/FilterSearch";
import "./agents.scss";

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

    const handleCheck = (e)=>{
            setIsChecked({...isChecked, [e.target.value]: e.target.checked});
        

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
                <table>
                    <tr>
                        
                        <th><input checked={selectAll} onChange={(e)=>setSelectAll(e.target.checked)} type="checkbox" />Agent Name</th>
                        <th>Email Address</th>
                        <th>Plan</th>
                        <th >Date Created</th>
                        <th>Properties</th>
                        <th>Phone Number</th>
                    </tr>
                    <tr className={isChecked["option1"] || selectAll? "green-bg": ""}>
                        
                        <td> <input value="option1" type="checkbox" checked={isChecked["option1"] || selectAll} onChange={handleCheck}/>Akara Jasper</td>
                        <td>Akarajasper@gmail.com</td>
                        <td>Basic Plan</td>
                        <td>1st Match 2023</td>
                        <td>200 properties</td>                                               
                        <td>09054523478</td>
                    </tr>
                    <tr className={isChecked["option2"]  || selectAll? "green-bg": ""}>
                        
                        <td><input value="option2" type="checkbox" checked={isChecked["option2"] || selectAll} onChange={handleCheck}/>Akara Jasper</td>
                        <td>Akarajasper@gmail.com</td>
                        <td>Basic Plan</td>
                        <td>1st Match 2023</td>
                        <td>200 properties</td>                                               
                        <td>09054523478</td>
                    </tr>
                    <tr className={isChecked["option3"]  || selectAll? "green-bg": ""}>
                               
                        <td><input value="option3" type="checkbox" checked={isChecked["option3"] || selectAll} onChange={handleCheck}/>Akara Jasper</td>
                        <td>Akarajasper@gmail.com</td>
                        <td>Basic Plan</td>
                        <td>1st Match 2023</td>
                        <td>200 properties</td>                                               
                        <td>09054523478</td>
                    </tr>
                    <tr className={isChecked["option4"]  || selectAll? "green-bg": ""}>
                           
                        <td><input value="option4" type="checkbox" checked={isChecked["option4"] || selectAll} onChange={handleCheck}/>Akara Jasper</td>
                        <td>Akarajasper@gmail.com</td>
                        <td>Basic Plan</td>
                        <td>1st Match 2023</td>
                        <td>200 properties</td>                                               
                        <td>09054523478</td>
                    </tr>

                    <tr className={isChecked["option5"]  || selectAll? "green-bg": ""}>
                        
                        <td><input value="option5" type="checkbox" checked={isChecked["option5"] || selectAll} onChange={handleCheck}/>Akara Jasper</td>
                        <td>Akarajasper@gmail.com</td>
                        <td>Basic Plan</td>
                        <td>1st Match 2023</td>
                        <td>200 properties</td>                                               
                        <td>09054523478</td>
                    </tr>
                    <tr className={isChecked["option6"]  || selectAll? "green-bg": ""}>
                        <td><input value="option6" type="checkbox" checked={isChecked["option6"] || selectAll} onChange={handleCheck}/>Akara Jasper</td>
                        <td>Akarajasper@gmail.com</td>
                        <td>Basic Plan</td>
                        <td>1st Match 2023</td>
                        <td>200 properties</td>                                               
                        <td>09054523478</td>
                    </tr>

                </table>
        
        <div className="select-all">
            <input type="checkbox" checked={selectAll} onChange={(e)=>setSelectAll(e.target.checked)} /> Select all
            <button>Action <img src="../flaticons/expand-button3.png" alt="" /></button>
        </div>
                
            </div>
            </div>
        </div>
    )
}

export default Agents;