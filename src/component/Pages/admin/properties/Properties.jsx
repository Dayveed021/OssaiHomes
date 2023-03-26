import AdminLayout from "../home/AdminLayout"
import ActivitesBlock from "../reusables/ActivitesBlock";
import FilterSearch from "../reusables/FilterSearch";
import Listing from "../reusables/Listing";
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
        <div className="properties-container">
            <ActivitesBlock 
            firstBlockLetters="Total Properties"
            firstBlockNumber="1500"
            secondBlockLetters="Published Properties"
            secondBlockNumber="1000"
            thirdBlockLetters="Unpublished Properties"
            thirdBlockNumber="500"
            />
            <FilterSearch />
            <div className="properties-content">
                <div className="bloc-tabs">
                    <div className="tabs active-tabs">
                        <h4>Published</h4>
                    </div>
                    <div style={{marginLeft:"1rem"}} className="tabs">
                        <h4>Unpublished</h4>
                    </div>
                </div>
                <div className="select-action">
                    <div className="select">
                        <p>Select all</p>
                        <div className="btn-green">
                        <img src="../../flaticons/check4.png" alt="" />
                        </div>
                    </div>
                    <div className="action">
                        <p>Action</p>
                        <img src="../../flaticons/expand-button3.png" alt="" />
                    </div>
                </div>
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <div className="select-action" style={{marginBottom:"2rem"}}>
                    <div className="select">
                        <p>Select all</p>
                        <div className="btn-green">
                        <img src="../../flaticons/check4.png" alt="" />
                        </div>
                    </div>
                    <div className="action">
                        <p>Action</p>
                        <img src="../../flaticons/expand-button3.png" alt="" />
                    </div>
                </div>



                
            </div>

            
        </div>
    )
}

export default Properties;