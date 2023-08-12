import { cloneElement } from 'react'
import { useState } from 'react'
import btn from './images/radiobtn.svg'
import time from './images/time.svg'
import pay from './images/pay.svg'
import checkbox from './images/checkbox.svg'
const Pricing = () => {
  const [tt,setT]=useState('1');
  return (
    <div>
    <div style={{color:'black',display:'flex',flexDirection:'column',height:'65px',paddingBottom:'5px',
    backgroundColor:'#E7E7E7',borderStyle:'solid',borderWidth:'2px',borderColor:'#BEBEBE',borderRadius:'5px'
    }}>
       <div style={{marginLeft:'55px',backgroundColor:'#F77171',width:'121px',color:'white',textAlign:'center'
       ,borderBottomLeftRadius:'5px',borderBottomRightRadius:'5px'}}>Offer Expired</div> 
       <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <div style={{marginTop:'5px',fontFamily:'roboto',fontSize:'20px'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
        <img style={{marginLeft:'10px'}} src={btn}/>
        <span style={{color:'#BEBEBE',textAlign:'center',marginLeft:'25px'}}>
        12 Months Subscription</span></div></div>
        <div style={{marginRight:'10px',color:'#BEBEBE'}}>
        <div><span style={{fontSize:'12px'}}>Total</span> <span style={{fontSize:'16px',fontWeight:'600'}}>₹ 179</span></div>
        <div style={{marginLeft:'15px'}}><span style={{fontSize:'12px',fontWeight:'600'}}>₹ 15</span> <span style={{fontSize:'10px'}}>/mo</span></div>
        </div>
       </div>
    </div>
    <div className={tt=='1'?"kk":"bb"} style={{color:'black',display:'flex',flexDirection:'column',height:'65px',paddingBottom:'5px',
    borderStyle:'solid',borderWidth:'2px',borderRadius:'5px',
    marginTop:'20px'
    }} onClick={()=>{setT('1')}}>
      <div style={{marginLeft:'55px',backgroundColor:'rgba(71, 186, 104, 1)',width:'121px',color:'white',textAlign:'center'
       ,borderBottomLeftRadius:'5px',borderBottomRightRadius:'5px'}}>Recommended</div>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <div style={{marginTop:'5px',fontFamily:'roboto',fontSize:'20px'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
        {tt=='1'?<img style={{marginLeft:'10px'}} src={checkbox}/>:<input style={{height:'28px',width:'28px',marginLeft:'10px'}} type='radio' />}
        <span style={{color:'rgba(60, 72, 82, 1)',textAlign:'center',marginLeft:'25px'}}>
        12 Months Subscription</span></div></div>
        <div style={{marginRight:'10px',color:'rgba(60, 72, 82, 1)'}}>
        <div><span style={{fontSize:'12px'}}>Total</span> <span style={{fontSize:'16px',fontWeight:'600'}}>₹ 179</span></div>
        <div style={{marginLeft:'15px'}}><span style={{fontSize:'12px',fontWeight:'600'}}>₹ 15</span> <span style={{fontSize:'10px'}}>/mo</span></div>
        </div>
       </div>
    </div>
    <div className={tt=='2'?"kk":"bb"}  style={{color:'black',display:'flex',flexDirection:'column',height:'65px',paddingBottom:'5px',
    borderStyle:'solid',borderWidth:'2px',borderRadius:'5px',
    marginTop:'20px'
    }} onClick={()=>{ console.log("clicked");setT('2')}}>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:'15px'}}>
        <div style={{marginTop:'5px',fontFamily:'roboto',fontSize:'20px'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
        {tt=='2'?<img style={{marginLeft:'10px'}} src={checkbox}/>:<input style={{height:'28px',width:'28px',marginLeft:'10px'}} type='radio' />}
        <span style={{color:'rgba(60, 72, 82, 1)',textAlign:'center',marginLeft:'25px'}}>
        6 Months Subscription</span></div></div>
        <div style={{marginRight:'10px',color:'rgba(60, 72, 82, 1)'}}>
        <div><span style={{fontSize:'12px'}}>Total</span> <span style={{fontSize:'16px',fontWeight:'600'}}>₹ 149</span></div>
        <div style={{marginLeft:'15px'}}><span style={{fontSize:'12px',fontWeight:'600'}}>₹ 25</span> <span style={{fontSize:'10px'}}>/mo</span></div>
        </div>
       </div>
        
    </div>
    <div className={tt=='3'?"kk":"bb"}  style={{color:'black',display:'flex',flexDirection:'column',height:'65px',paddingBottom:'5px',
    borderStyle:'solid',borderWidth:'2px',borderRadius:'5px',
    marginTop:'20px' 
    }} onClick={()=>{setT('3')}}>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:'15px'}}>
        <div style={{marginTop:'5px',fontFamily:'roboto',fontSize:'20px'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
        {tt=='3'?<img style={{marginLeft:'10px'}} src={checkbox}/>:<input style={{height:'28px',width:'28px',marginLeft:'10px'}} type='radio' />}
        <span style={{color:'rgba(60, 72, 82, 1)',textAlign:'center',marginLeft:'25px'}}>
        3 Months Subscription</span></div></div>
        <div style={{marginRight:'10px',color:'rgba(60, 72, 82, 1)'}}>
        <div><span style={{fontSize:'12px'}}>Total</span> <span style={{fontSize:'16px',fontWeight:'600'}}>₹ 99</span></div>
        <div style={{marginLeft:'15px'}}><span style={{fontSize:'12px',fontWeight:'600'}}>₹ 33</span> <span style={{fontSize:'10px'}}>/mo</span></div>
        </div>
       </div>
        
    </div>
    <div className='bb' style={{marginTop:'30px',color:'black'}}>
      <div style={{display:'flex',justifyContent:'space-around',marginTop:'20px',color:'#3C4852',fontSize:'18px'}}>
        <span>Subscription Fee</span> <span style={{fontWeight:'600'}}>₹18,500 </span>
      </div>
      <div className='cool' style={{display:'flex',flexDirection:'column',justifyContent:'space-around',color:'#de4414',marginTop:'20px',height:'76px',borderStyle:'solid',borderWidth:'2px',borderColor:'#de4414',borderRadius:'5px'}}>
        <div style={{display:'flex',flexDirection:'row'}}>
          <div style={{marginLeft:'20px'}}><span style={{fontWeight:'600'}}>Limited Time Offer</span></div>
          <div style={{marginLeft:'240px'}}><span sytle={{marginRight:'20px',fontWeight:'600'}}>-₹18,401</span></div>
        </div>
        <div style={{marginLeft:'20px'}}>
          <img src={time}/> <span style={{marginLeft:'10px'}}>Offer valid till 25th march 2023</span>
        </div>
      </div>
    </div>  
    <div style={{display:'flex' ,justifyContent:'space-around',marginTop:'20px',marginBottom:'10px',color:'#3C4852',fontSize:'18px'}}>
        <div><span style={{fontWeight:'600',marginRight:'5px'}}>Total</span>(Incl. of 18% GST)</div> <span style={{textAlign:'center',fontWeight:'600'}}>₹{tt=='1'?229:""}{tt=='2'?199:""}{tt=='3'?149:""} </span>
    </div>
    <div style={{marginTop:'10px',marginBottom:'10px',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <button style={{width:'242px',height:'56px',borderRadius:'4px',color:'rgba(247, 113, 113, 1)',backgroundColor:'white',
      borderStyle:'solid',borderWidth:'2px',borderColor:'rgba(247, 113, 113, 1)',fontSize:'16px',lineHeight:'19px',cursor:'pointer'}}>Cancle</button>
      <button style={{width:'242px',height:'56px',borderRadius:'4px',backgroundColor:'rgba(71, 186, 104, 1)',
      fontSize:'16px',lineHeight:'19px',borderColor:'rgba(71, 186, 104, 1)',color:'white',cursor:'pointer'}}>
      Proceed to Pay</button>
    </div>
    <div style={{marginTop:'16px'}}><img src={pay}/></div>
    </div>
  )
}

export default Pricing
