import { useState } from "react";
import AdminLayout from "../home/AdminLayout"
import "./profile.scss";


const Profile = ()=>{
    return(
        <div>
            <AdminLayout content={<Content />} />
            
        </div>
    )
}

const Content = ()=>{
    
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index)=>{
        setToggleState(index);
    }
    return (
        <div className="profile-content">
            <div className="contents">
                <div className="bloc-tabs">
                    <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={()=> toggleTab(1)}>
                        <h4>My Profile</h4>
                    </div>
                    <div style={{marginLeft:"1rem"}} className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={()=> toggleTab(2)}>
                       <h4>Edit Profile</h4> 
                    </div>
                </div>
                <div className="content-tabs">
                    <div className={toggleState === 1 ? "content active-content" : "content"}>
                        <div className="profile-details">
                            <h5>Agent Details</h5>
                            <div className="agent-details">
                                <p className="ligh-p">Name</p>
                                <p className="bold-p">Ossai Real Estate Agency</p>
                            </div>
                            <div className="agent-details">
                                <p className="ligh-p">Email</p>
                                <p className="bold-p">Ossaijenas@gmail.com</p>
                            </div>
                            <div className="agent-details">
                                <p className="ligh-p">Phone Number</p>
                                <p className="bold-p">08131877486</p>
                            </div>
                            <div className="agent-details">
                                <p className="ligh-p">Whatsapp Number</p>
                                <p className="bold-p">08131877486</p>
                            </div>

                            <button className="view-btn">View Government ID</button>
                        </div>
                        <div className="profile-details">
                            <h5>Business Details</h5>
                            <div className="agent-details">
                                <p className="ligh-p">Name</p>
                                <p className="bold-p">Ossai Real Estate Agency</p>
                            </div>
                            <div className="agent-details">
                                <p className="ligh-p">Address</p>
                                <p className="bold-p">No. 2 Iterigbi Warri Delta State</p>
                            </div>
                

                            <button style={{marginBottom: "2rem"}} className="view-btn">View Company Logo</button>
                        </div>
                         
                    </div>
                    <div className={toggleState === 2 ? "content active-content" : "content"}>
                    <div className="profile-form">
                            <h5 className="h5-header">Personal Details </h5>
                            <form action="">
                                <label for="agent-name">Name</label><br/>
                                <input type="text" className="input-long" id="agent-name" name="agent-name" placeholder="Ossai Jenas" /><br/>
                                <label> Upload Your Government Isuued ID</label>
                                <label className="btn-upload" for="upload-id">Upload ID</label>
                                <input type="file" name="upload-id" id="upload-id" accept="image/*" style={{display:"none"}}/>
                                
                                <div className="form-header">Business Details</div>
                                <label for="business-name" >Business Name</label><br/>
                                <input type="text" id="business-name" className="input-long" name="business-name" placeholder="Ossai Real Estate" /><br/>
                                <label>Upload Company Logo</label>
                                <label className="btn-upload" for="upload-logo">Upload Logo</label>
                                <input type="file" name="upload-logo" id="upload-logo" accept="image/*" style={{display:"none"}}/>
                                <div className="form-header">Address</div>
                                <div className="combine-field">
                                    <div className="address-field">
                                        <label for="state">State</label><br/>
                                        <input type="text" id="state" name="state" placeholder="Delta State" /><br/>
                                    </div>
                                    <div className="address-field right-field">
                                        <label for="city">City</label><br/>
                                        <input type="text" id="city" name="city" placeholder="Warri" /><br/>
                                     </div>
                                </div>

                                <p>Contact Infomation</p>
                                <div className="combine-field">
                                    <div className="address-field">
                                        <label for="phone-number">Phone Number</label><br/>
                                        <input type="tel" id="phone-number" name="phone-number" placeholder="08131877486" /><br/>
                                    </div>
                                    <div className="address-field right-field">
                                        <label for="whatsapp-number">Whatsapp Number</label><br/>
                                        <input type="text" id="whatsapp-number" name="whatsapp-number" placeholder="08131877486" /><br/>
                                     </div>
                                </div>

                                <label for="email">Email</label><br/>
                                <input type="email" className="input-long" id="email" name="email" placeholder="Ossaijenas@gmail.com" /><br/>
                                <div className="submit">
                                    <button className="submit-btn" type="submit">Update</button>
                                </div>
                            </form>
                         </div>
                    
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Profile;