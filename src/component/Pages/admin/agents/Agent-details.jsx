import React from 'react'
import AdminLayout from "../home/AdminLayout"
import ActivitesBlock from "../reusables/ActivitesBlock";
import FilterSearch from "../reusables/FilterSearch";
import "./agents.scss";
import PropertyContent from '../reusables/PropertyContent';


const AgentDetails = () => {
  return (
    <div><AdminLayout content={<Content />} /></div>
  )
}

const Content = ()=>{
    return (
        <div className="agent-details">
          <div className="arrow">
            <img src="/flaticons/arrow1.png" alt="arrow-icon" />
            <h3>Akara Jasper</h3>
          </div>
            <ActivitesBlock 
            firstBlockLetters="Properties uploaded"
            firstBlockNumber="10"
            secondBlockLetters="Unpublished properties"
            secondBlockNumber="2"
            thirdBlockLetters="Plan"
            thirdBlockNumber="Business"
            />
        <div className="info-details">
          <div className="personal-info">
            <h4>Personal Information</h4>
            <div className="agent-details">
                <p className="light-p">Name</p>
                <p className="bold-p">Akara Jasper</p>
            </div>
            <div className="agent-details">
                <p className="light-p">Address</p>
                <p className="bold-p">No.2 Pipeline Warri Delta State</p>
            </div>
            <div className="agent-details">
                <p className="light-p">Contact</p>
                <p className="bold-p">0900656589632</p>
            </div>
            <div className="agent-details">
                <p className="light-p">Whatsapp</p>
                <p className="bold-p">0900656589632</p>
            </div>
            <div className="agent-details">
                <p className="light-p">Email</p>
                <p className="bold-p">akarajasper@gmail.com</p>
            </div>
            <div className="agent-details">
                <p className="light-p">Date Created</p>
                <p className="bold-p">20th December 2022</p>
            </div>
            <button className="view-btn">View Government ID</button>
          </div>
          
         <div className="company-info">
          <h4>Company Information</h4>
          <div className="agent-details">
                <p className="light-p">Name</p>
                <p className="bold-p">Akara Agency</p>
            </div>
            <h4>Subscription Package</h4>
            <h2>Business</h2>
            <p className="dated">Create March 23 2023</p>
            <p className="dated">Expires March 23 2024</p>

         </div>
        </div>

        <FilterSearch />

        <PropertyContent />

        </div>

    )
}

export default AgentDetails