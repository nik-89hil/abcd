import React from 'react'

const Visa = () => {

  const submit = 'https://t4.ftcdn.net/jpg/04/63/95/51/360_F_463955145_mrDX4Jme6MaFfyu6cAbGH5lPiYXHLkel.jpg';
  const payment = 'https://img.freepik.com/free-vector/womans-hand-putting-dollar-bill-into-open-mans-wallet-payment-transfer-money-person-holding-purse-flat-vector-illustration-finance-concept-banner-website-design-landing-web-page_74855-25048.jpg';
  const visadone = 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png';
  const applyOnline = 'https://img.freepik.com/free-vector/online-job-application-concept-idea-employment-hiring-procedure-recruiter-searching-job-candidate-isolated-flat-vector-illustration_613284-1869.jpg';



  return (
    <div className='visaCont'>
      <h1 className='headingTop'>Visas</h1>
      <br />
      <br />
      <p className='visaInt'>
      Ready to begin your visa application journey? Contact us today for a consultation, and let our experts guide you every step of the way. Whether it’s a tourist visa, student visa, or work visa, we’re here to help you achieve your travel goals.
      </p>
   
    <h4 style={{color:'orange',margin:'auto'}}>How It Works?</h4>
    <h2>Get Your Visa Just in 4 Steps.</h2>
    <br />
    <br />
    <div className="process">
      <div className="pro1" id="1">
        <div className="visaCover">
            <img src={applyOnline} alt="" srcset="" />
        </div>
        <p className="steps">Step 1</p>
        <p className="headVisa">Apply Online</p>
      </div>
      <div className="pro2" id="2">
        <div className="visaCover">
            <img src={submit} alt="" srcset="" />
        </div>
        <p className="steps">Step 2</p>
        <p className="headVisa">Submit Documents</p>
      </div>
      <div className="pro3" id="3">
        <div className="visaCover">
            <img src={payment} alt="" srcset="" />
        </div>
        <p className="steps">Step 3</p>
        <p className="headVisa">Make Payment</p>
      </div>
      <div className="pro4" id="4">
        <div className="visaCover">
            <img src={visadone} alt="" />
        </div>
        <p className="steps">Step 4</p>
        <p className="headVisa">Receive Your Visas</p>
      </div>
    </div>
      
    </div>
  )
}

export default Visa
