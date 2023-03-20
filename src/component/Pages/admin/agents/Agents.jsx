import AdminLayout from "../home/AdminLayout"
import "./agents.scss";

const Agents = ()=>{
    return(
        <div>
            <AdminLayout content={<Content />} />
            
        </div>
    )
}

const Content = ()=>{
    return (
        <div>Agents</div>
    )
}

export default Agents;