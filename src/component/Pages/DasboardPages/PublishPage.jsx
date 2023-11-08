import React, { useState } from "react";
import UserLayout from "./UserLayout";
import "../../../styles/UserDashboard/publish.scss";
import { useSelector, useDispatch } from "react-redux";
//import usePropertyContext from "../../../hooks/usePropertyContext";

const PublishPage = () => {
  return (
    <div>
      <UserLayout content={<Content />} />
    </div>
  );
};

const Content = () => {
  //const { dispatch } = usePropertyContext();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [sittingRoom, setSittingRoom] = useState("");
  const [price, setPrice] = useState();
  const [totalpackage, setTotalPackage] = useState();
  const [agentFee, setAgentFee] = useState();
  const [bedrooms, setBedrooms] = useState();
  const [bathrooms, setBathrooms] = useState();
  const [tiolets, setTiolets] = useState();
  const [ files, setFiles ] = useState([]);
  const [error,setError] = useState(null);
  const [ result, setResult ] = useState("");


  const { user } = useSelector(
    (state) => state.auth
  );

  const handleFileChange = (event) => {
    const fileList = event.target.files;
    setFiles(fileList);
  };

  const handleSubmit = async (event)=>{
    event.preventDefault();

    const formData = new FormData();
    formData.append("propertyTitle", title);
    formData.append("propertyDesc", desc);
    formData.append("propertyLocation", location);
    formData.append("category", category);
    formData.append("type", type);
    formData.append("state", state);
    formData.append("city", city);
    formData.append("address", address);
    formData.append("sittingRoom", sittingRoom);
    formData.append("pricePerMonth", price);
    formData.append("totalPackage", totalpackage);
    formData.append("agentFee", agentFee);
    formData.append("bedrooms", bedrooms);
    formData.append("bathrooms", bathrooms);
    formData.append("tiolets", tiolets);

    for (let i = 0; i < files.length; i++) {
      formData.append('propertyImages', files[i]);
    }
      try {
        const response = await fetch("https://homelanda-1d0d1907d8ae.herokuapp.com/v1/properties", {
          method: 'POST',
          body: formData,
          headers: {
            "Authorization": `Bearer ${user.access_token}`
          }
        });
        const data = await response.json();
  
        if (response.ok) {
          setTitle("");
          setAddress("");
          setType("");
          setSittingRoom("");
          setBedrooms("");
          setBathrooms("");
          setTiolets("");
          setState("");
          setCity("");
          setCategory("");
          setLocation("");
          setPrice(null);
          setTotalPackage(null);
          setAgentFee(null);
          setDesc("");
          setFiles([]);
          setResult("Property Was Added Successfully");

          //dispatch({type: "CREATE_PROPERTY", payload: data});
          
        } else {
          setError(data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    

  };
  

  
  return (
    <div className="profile">
      <h2>Publish a Property</h2>
      <div className="profile-con">
        <header>
          <h3
            style={{
              borderBottom: "2px solid #3f7843",
            }}
          >
            Publish
          </h3>
        </header>
          <>
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="personal">
              <div className="form-input">
                <label htmlFor="">Title</label>
                <input type="text" 
                value={title}
                onChange={(e)=> setTitle(e.target.value.toLowerCase())}
                placeholder="Propety Title"
                required
                />
              </div>
            </div>
            <div className="personal">
              <h3>Address</h3>
              <div className="form-input">
                <div className="d-inputs">
                  <div className="inputs">
                    <label htmlFor="">Category</label>
                    <select name="category" id="" value={category} onChange={(e)=> setCategory(e.target.value.toLowerCase())} required>
                      <option value="">Select</option>
                      <option value="duplex">Duplex</option>
                      <option value="bugalow">bugalow</option>
                      <option value="bedrooms">Bedrooms</option>
                    </select>
                  </div>
                  <div className="inputs">
                    <label htmlFor="">Type</label>
                    <select name="type" id="" value={type} onChange={(e)=> setType(e.target.value.toLowerCase())} required>
                      <option value="">Select</option>
                      <option value="buy">Buy</option>
                      <option value="Rent">Rent</option>
                    </select>
                  </div>
                  <div className="form-input">
                <div className="d-inputs">
                <div className="inputs">
                    <label htmlFor="">Sitting Room</label>
                    <select type="number" value={sittingRoom} onChange={(e)=> setSittingRoom(e.target.value)} name="" id="">
                    <option  value="0">Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  
                </div>
              </div>
                </div>
              </div>
              <div className="form-input">
                <div className="d-inputs">
                  <div className="inputs">
                    <label htmlFor="">Bedroom</label>
                    <select type="number" value={bedrooms} onChange={(e)=> setBedrooms(e.target.value)} name="" id="">
                    <option  value="0">Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div className="inputs">
                    <label htmlFor="">Bathroom</label>
                    <select name="bathrooms" type="number" onChange={(e)=> setBathrooms(e.target.value)} id="" required>
                    <option value="0">Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div className="inputs">
                    <label htmlFor="">Toilet</label>
                    <select name="tiolet" value={tiolets} onChange={(e)=> setTiolets(e.target.value)} id="" required>
                      <option value="0">Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="personal">
              <h3>Location Details</h3>
              <div className="form-input">
                <div className="d-inputs">
                  <div className="inputs">
                    <label htmlFor="">State</label>
                    <input type="text" value={state} onChange={(e)=> setState(e.target.value.toLowerCase())} placeholder="State" required/>
                  </div>
                  <div className="inputs">
                    <label htmlFor="">City</label>
                    <input type="text" value={city} onChange={(e)=> setCity(e.target.value.toLowerCase())} placeholder="City" required/>
                  </div>
                </div>
              </div>
              <div className="form-input">
                <div className="d-inputs">
                  <div className="inputs">
                    <label htmlFor="">Street/Estate</label>
                    <input type="text" value={address} onChange={(e)=> setAddress(e.target.value.toLowerCase())} placeholder="Address" required/>
                  </div>
                  <div className="inputs">
                    <label htmlFor="">Location</label>
                    <input type="text" value={location} onChange={(e)=> setLocation(e.target.value.toLowerCase())} placeholder="Area e.g Lekki" required/>
                  </div>
                </div>
              </div>
            </div>
            <div className="personal">
              <h3>Pricing</h3>
              <div className="form-input">
                <div className="d-inputs">
                <div className="inputs">
                    <label htmlFor="">Price</label>
                    <input type="number" value={price} onChange={(e)=> setPrice(e.target.value)} placeholder="10000" required/>
                  </div>
                  <div className="inputs">
                    <label htmlFor="">Total Package</label>
                    <input type="text" value={totalpackage} onChange={(e)=> setTotalPackage(e.target.value)} placeholder="500000" required/>
                  </div>
                  <div className="inputs">
                    <label htmlFor="">Agent Fee</label>
                    <input type="text" value={agentFee} onChange={(e)=> setAgentFee(e.target.value)} placeholder="1000"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="personal">
              <h3>Description</h3>
              <div className="form-input">
                <label htmlFor="">Property Details</label>
                <textarea value={desc} onChange={(e)=> setDesc(e.target.value.toLowerCase())}
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="text-area"
                  placeholder="Property Description"
                ></textarea>
              </div>
              <input type="file" onChange={handleFileChange} multiple />
            </div>
            {/* <div className="personal">
              <div className="form-input">
                <label htmlFor="">Youtube Link</label>
                <input type="text" />
              </div>
            </div> */}
            <button>Upload</button>
            {error && <div style={{background:"red", padding:"15px", borderRadius:"5px", color:"#ffffff"}}>{error}</div>}
            {result && <div style={{background:"#78cc7d", padding:"15px", borderRadius:"5px", color:"#ffffff"}}>{result}</div>}
            </form>
            
          </>
  
          
      </div>
    </div>
  );
};

export default PublishPage;
