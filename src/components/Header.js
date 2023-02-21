import React,{useState,useEffect} from 'react';
import './Header.css';

function Header() {

  const [showHeaderBar, setShowHeaderBar] = useState(true);

  const contactHandler = () => {
    setShowHeaderBar(!showHeaderBar);
  }

  return (
    <div className="header">
      <div id="header__bar" style = {{transform: showHeaderBar? `translateY(120px)`: `translateY(0px)`}}>
       
      </div>

      <div className="header-logo"> Sorting<span> Visualizer</span></div>
      <div className="header__options">
         
      </div>
   </div>
  )
}

export default Header;