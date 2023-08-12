import group from './images/group.svg';
import clock from './images/clock.svg';
import ttvv from './images/ttvv.svg';
import adds from './images/adds.svg';
import Pricing from './Pricing';
import okok from './images/okok.svg';
import rectangle from './images/rectangle.svg';
const Content = () => {
  return (
    <div className='content'>
        <div className='leftC' style={{display:'flex',flexDirection:'column'}}>
            <div style={{lineHeight:'70px',fontWeight:'600',fontSize:'56px'}}>Access curated Courses worth</div>
            <div style={{lineHeight:'70px',fontWeight:'600',fontSize:'64px'}}>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}><span>₹ 18,500 at just ₹<span style={{color:'#0096FF'}}>99</span> per year</span><img style={{marginLeft:'-780px'}} src={rectangle}/>
            </div> 
            </div>
            <div className='center' style={{marginTop: '72px'}}>
                <img src={group} style={{marginRight:'55px'}}/>
                <div className='txt'><span style={{color:'#0096FF'}}>100+</span> Job relevant courses</div>
            </div>
            <div className='center' style={{marginTop: '72px'}}>
                <img src={clock} style={{marginRight:'55px'}}/>
                <div className='txt'><span style={{color:'#0096FF'}}>200+</span> Hourse of content</div>
            </div>
            <div className='center' style={{marginTop: '72px'}}>
                <img src={ttvv} style={{marginRight:'55px'}}/>
                <div className='txt'><span style={{color:'#0096FF'}}>Exclusive</span> Webinar access</div>
            </div>
            <div className='center' style={{marginTop: '72px'}}>
                <img src={okok} style={{marginRight:'55px'}}/>
                <div className='txt'>Scholarship worth <span style={{color:'#0096FF'}}>₹ 94,500</span></div>
            </div>
            <div className='center' style={{marginTop: '72px'}}>
                <img src={adds} style={{marginRight:'55px'}}/>
                <div className='txt'><span style={{color:'#0096FF'}}>Add free</span> Learning experience</div>
            </div>
        </div>
        <div className='rightC'>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',marginTop:'28px',}}>
                <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                <div style={{display:'flex',alignItems:'center',borderRadius:'1000px',height:'38px',width:'38px',
                backgroundColor:'#0096FF',}}>
                    <div style={{marginLeft:'12px',fontSize:'24px'}}>1</div>
                </div>
                <span style={{color:'black',}}>Sing up</span>
                </div>
                <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                <div style={{display:'flex',alignItems:'center',borderRadius:'1000px',height:'38px',width:'38px',backgroundColor:'#0096FF',
                }}>
                <div style={{marginLeft:'12px',fontSize:'24px'}}>2</div>
                </div><span style={{color:'black',padding:'0'}}>Subscribe</span></div>
            </div>
            <div style={{textAlign:'center',color:'#3C4852',marginTop:'28px',fontSize:'24px'}}>
                Select you Subscription plan
            </div>
            <div style={{marginTop:'28px',marginLeft:'15px',marginRight:'15px'}}>
                <Pricing/>
            </div>
        </div>
    </div>
  )
}

export default Content