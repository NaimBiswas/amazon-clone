import React from 'react'
import './Header.css'
import Logo from '../../Logo.svg'
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';

const Header = () => {
   return (
      <div className='header'>
         {/* logo  */}
         <img className='header_logo' src={Logo} alt="" />

         {/* search  */}
         <div className="header_search">
            <input type="text" className="header_seacrhIn form-control" />
            <SearchIcon className='seacrch-icon btn '></SearchIcon>
         </div>
         {/* header nav bar  */}
         <div className="header_nav">
            {/* right side bar option  */}
            <div className="header_option">
               <span className="header_optionOneTop">
                  Hello Guest
                </span>
               <span className="header_optionOneBottom">
                  Sing In
               </span>
            </div>

            <div className="header_option">
               <span className="header_optionTwoTop">
                  Return's
                </span>
               <span className="header_optionTwoBottom">
                  & Orders
               </span>
            </div>

            <div className="header_option">
               <span className="header_optionThreeTop">
                  Your
                </span>
               <span className="header_optionThreeBottom">
                  Prime
               </span>
            </div>

            <div className="header_option">
               <span className="header_optionFour
               Top">
                  <LocalMallIcon className='bag_icon' />
               </span>

            </div>


         </div>
      </div>
   )
}

export default Header
