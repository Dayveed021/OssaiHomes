import AdminLayout from "../home/AdminLayout"
import ActivitesBlock from "../reusables/ActivitesBlock";
import FilterSearch from "../reusables/FilterSearch";
import Listing from "../reusables/Listing";
import PropertyContent from "../reusables/PropertyContent";
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

            <PropertyContent />

            
        </div>
    )
}

export default Properties;