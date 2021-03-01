import React from 'react'
import Rate from './Rate.svg'
const NullRatting = ({ ratting }) => {
   return (
      <>
         {
            ratting == 1 ? <>
               <img src={Rate} alt="" />
               <img className='ml-1' className='ml-1' src={Rate} alt="" />
               <img className='ml-1' className='ml-1' src={Rate} alt="" />
               <img className='ml-1' className='ml-1' src={Rate} alt="" />
            </>
               :
               ''
         } {
            ratting == 2 ? <>
               <img src={Rate} alt="" />
               <img className='ml-1' src={Rate} alt="" />
               <img className='ml-1' src={Rate} alt="" />
            </>
               :
               ''
         } {
            ratting == 3 ? <>
               <img src={Rate} alt="" />
               <img className='ml-1' src={Rate} alt="" />
            </>
               :
               ''
         } {
            ratting == 4 ? <>
               <img src={Rate} alt="" />
            </>
               :
               ''
         }{
            ratting == null ? <>
               <img src={Rate} alt="" />
               <img src={Rate} alt="" />
               <img src={Rate} alt="" />
               <img src={Rate} alt="" />
            </>
               :
               ''
         }
      </>
   )
}

export default NullRatting
