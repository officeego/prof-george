import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data'
import Pricing from '../../Pricing'
// import Card from '../../../Cads/Cards'
import Servicemdl from './Servicemdl'
// import '../../../App.css';

function Services() {
    return (
        <>
            <Servicemdl />
           <Pricing />
           <HeroSection {...homeObjOne} /> 
           {/* <Card/>  */}
          
        </>
    )
}

export default Services
