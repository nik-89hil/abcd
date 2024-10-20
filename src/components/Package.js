import React from 'react'

const Package = () => {

    const dubai = 'https://media.cnn.com/api/v1/images/stellar/prod/200924183413-dubai-9-1.jpg?q=w_1600,h_900,x_0,y_0,c_fill';

    const thailand = 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D';







  return (
    <div>
        <h1 className='headingTop'>Travel Packages</h1>
        <br />
        <br />
        <p className='packInt'>
        Ready to embark on your next journey? Browse our selection of travel packages or contact our team for personalized recommendations. Whether you're dreaming of exotic beaches, historic cities, or breathtaking mountains, we’re here to help you create memories that will last a lifetime.
        </p>
        <div className="process">
      <div className="pro1" id="1">
        <div className="traCover">
            <img src={dubai} alt="" srcset="" />
        </div>
        <p className="steps">Dubai</p>
        <p className="headVisa">Travel Package </p>
      </div>
      <div className="pro2" id="2">
        <div className="traCover">
            <img src={thailand} alt="" srcset="" />
        </div>
        <p className="steps">Thailand</p>
        <p className="headVisa">Travel Package </p>
      </div>
    </div>
      
    </div>
  )
}

export default Package
