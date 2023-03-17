import AdminLayout from "../agents/home/AdminLayout"
import "./profile.scss";


const Profile = ()=>{
    return(
        <div>
            <AdminLayout content={<Content />} />
            
        </div>
    )
}

const Content = ()=>{
    return (
        <div>Profile</div>
    )
}

export default Profile;