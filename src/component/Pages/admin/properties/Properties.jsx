import AdminLayout from "../agents/home/AdminLayout"
import "./properties.scss";


const Properties = ()=>{
    return(
        <div>
            <AdminLayout content={<Content />} />
            
        </div>
    )
}

const Content = ()=>{
    return (
        <div>Properties</div>
    )
}

export default Properties;