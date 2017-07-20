import React from 'react';

class Empire extends React.Component{
  MouseOn = e =>{
    e.stopPropagation()
    $(e.target).prev().addClass('rebelHoverOnRebel',500);
    $(e.target).addClass("empireHoverOn",500);
    $(e.target).find('i').stop().animate({color:"red"},500);
  }
  MouseOut = e =>{
    e.stopPropagation()
    $(e.target).find('i').stop().animate({color:"white"},500);
    $(e.target).prev().removeClass('rebelHoverOnRebel',500);
    $(e.target).removeClass("empireHoverOn",500);
  }
  render(){
    return  <div className="empire" onMouseEnter={e=>this.MouseOn(e)} onMouseLeave={e=>this.MouseOut(e)}>
                <p>SIDE</p>
                <i className="fa fa-empire"></i>
            </div>
  }
}

export default Empire
