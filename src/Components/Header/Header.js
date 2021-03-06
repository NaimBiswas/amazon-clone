import React from 'react'
import './Header.css'
import Logo from '../../Logo.svg'
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider'
import { auth } from '../../firebase';

const Header = () => {
   const [{ basket, user },] = useStateValue()
   return (
      <div className='header'>
         {/* logo  */}
         <Link to='/'>
            <img className='header_logo' src={Logo} alt="" />
         </Link>

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
                  Hello {' '}
                  {
                     user ? user.email :
                        ' Guest'
                  }
               </span>
               <span className="header_optionOneBottom">
                  {
                     user ? <span style={{ cursor: 'pointer' }} onClick={() => auth.signOut()} className='text-white' > Sing Out</span> :
                        <Link to='/log-in' className='text-white' >  Sign In</Link>
                  }
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
               <span className="header_optionFourTop">
                  <Link to='/cart'>
                     <LocalMallIcon className='bag_icon text-light' />

                     <div className="cardOption">
                        {basket.length}
                     </div>
                  </Link>
               </span>


            </div>


         </div>
      </div>
   )
}

export default Header
