import React, { useState , useEffect} from 'react'

export default function Landingpage() {
  const [amount,setAmount]= useState(" ")
  const [refernceNumber,setReferenceNumber] = useState("")


  const handlePlaceOrder = (e) =>{
    e.preventDefault()
   if(amount === " " ){
    alert('please enter amoutn')
   }else{
var options = {
  key : "rzp_test_teg1JiIR36bDMc",
  key_secret: "BNN52w3S9LgoaedJ7iDvz6tr",
  amount:amount*100,
  currency:"INR",
  name:"TESTNG PAYMENT",
  description:"For Ranjith testing purpose",



  handler:function(response){
    console.log(response)
    setReferenceNumber(response.razorpay_payment_id);
  },
  prefill:{
    
    name:"Ranjith",
    email:"bowbotox@gmail.com",
    contact:"12345678"
  },
  notes:{
    address:"Razorpay office"
  },
  theme:{
    color:"#8C55AA"
  }

};
var pay = new window.Razorpay(options);
pay.open();

}
  
  }
  return (
    <div className="paymentpage">
    <form onSubmit={handlePlaceOrder} type="submit" className='mains'>
      <label for="amount">Enter The Amount: </label>
         <input type="numbers"
         value={amount}
        
         onChange={e=>setAmount(e.target.value)}/> <br/>
         <button className='submits'>place Order</button>
        </form>
    <p>Your refernceNumber: {refernceNumber}</p>
    </div>
  )
}
