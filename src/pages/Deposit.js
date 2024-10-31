// Thirdparty
import React, {useState, useEffect} from 'react';
// Styles
import './../styles/Deposit.css';
// Components
// Services

function Deposit(){
  // States
  const [depositAddress, setDepositAddress] = useState(false);

  useEffect(() => {
    setDepositAddress(false);
  }, []);

  function handleAcknowledgement() {
    setDepositAddress(true);
  }

  return (
    <div>
      <h2 style={{paddingTop:"30px", paddingLeft:"30px"}}>Deposit</h2>

      <div className="deposit-container">

        <h3>Choose coin to deposit</h3>

        <select disabled>
          <option value="BTC">BTC</option>
        </select>
        
        <h3>Choose a chain</h3>

        <select disabled>
          <option value="BTC">BTC</option>
        </select>
        
        <h3>Confirm deposit details</h3>

          {
            depositAddress
            ?
            <div>
              <p>BTC Address</p>
              <p>123abc456def789ghi012jkl345mno6789</p>
            </div>
            :
            <div>
              <p>Please confirm that you are depositing BTC to this address on the BTC network. Mismatched address information may result in the permanent loss of your assets.</p>

              <button type="button" className='acknowledge-btn' onClick={()=>{handleAcknowledgement()}}>Acknowledge</button>
            </div>
          }

        <div>
          <p>Minimum Deposit Amount</p>
          <p>0.000006 BTC</p>

          <p>Deposit Arrival</p>
          <p>1 confirmation</p>
          
          <p>Withdrawal Unlocked</p>
          <p>2 confirmations</p>
        </div>

      </div>

      <div className='FAQ-container'>
        <h2 style={{paddingTop:"30px", paddingLeft:"30px"}}>FAQ</h2>

        <ul>
          <li>How to Make a Deposit</li>
          <li>Unsupported Deposit Recovery Procedure Rules</li>
          <li>How to Recover a Deposit with Wrong or Missing Tag/Memo</li>
          <li>Deposits yet to be credited</li>
          <li>Deposit/Withdrawl Status</li>
        </ul>

      </div>
    </div>
  )
}

export default Deposit;
