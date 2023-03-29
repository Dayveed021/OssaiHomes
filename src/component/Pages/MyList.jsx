import React from 'react'
import "../../styles/MyList.scss";
import { PropertyData } from '../Data/Data_1';

function MyList () {
    return (
        <>
        <div>
            <nav className='searchNav'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            
        <input typeof='search' placeholder='Location' className='search_bar'/>
        <ul>
            <li className='search_bar-s'>Price <i class="fa fa-angle-down" aria-hidden="true"></i></li>
            <li className='search_bar-b'>Category <i class="fa fa-angle-down" aria-hidden="true"></i></li>
            <li className='search_bar-s'>Type <i class="fa fa-angle-down" aria-hidden="true"></i></li>
            <li className='search_bar-b'>Bedrooms <i class="fa fa-angle-down" aria-hidden="true"></i></li>
        </ul>
      </nav>
      <div className='main_search'>

      <h1>Showing Listing in "<span>Warri</span>" in Nigeria</h1>
      <p>Pages 1/<span>200</span>:<span>400</span>properties available</p>
      <div className='sort_box'>Sort by: Default <i class="fa fa-angle-down" aria-hidden="true"></i></div>
       <div>
{
    PropertyData.map((box) => {
        return(
            <div>
                 <div className='prop-container'>
                                <div>
                                    <img className='img' src={box.img_path} alt=''
                                     width={200} height={200}  />
                                </div>
                                <h2>{box.name}</h2>
                                <p className='text'>{box.desc}</p>
                                <p className='loc'>{box.location}</p><br />
                                <p><span className='amount'>{box.amount}</span>/month</p>
                                <div className='num'>call</div>
                                <div className='foot'>
                                    <div>guest toilet</div>
                                    <div>Bedrooms</div>
                                    <div>bathrooms</div>
                                    {/* favourite icon */}
                                </div>
                            </div>
            </div>
        )
    }
)}
       </div>
       </div>

       <section>
        <div className='ASF'>
          <h2>Advanced search filter</h2>
          <input placeholder='Location'/>
          <input value='Category'/>
          <input content='Category'/>
          <input content='Category'/>
          <input content='Category'/>
          <input content='Category'/>
          <input content='Category'/>
          <input content='Category'/>
        </div>
        <div>
            <input type='checkbox'/>
            <input type='checkbox'/>
            <input type='checkbox'/>
            <input type='checkbox'/>
            <input type='checkbox'/>
            <input type='checkbox'/>
        </div>
       </section>
      </div>
      </>
    )
}

export default MyList