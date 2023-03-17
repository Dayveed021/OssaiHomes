import AdminLayout from "../agents/home/AdminLayout"
import "./transactions.scss";


const Transactions = ()=>{
    return(
        <div>
            <AdminLayout content={<Content />} />
            
        </div>
    )
}

const Content = ()=>{
    return (
        <div>Transactions</div>
    )
}

export default Transactions;