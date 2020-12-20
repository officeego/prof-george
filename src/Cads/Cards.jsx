import React, { Component } from 'react'
import Card from './CardUI'

import img1 from '../asset/image1.png'
import img2 from '../asset/image2.png'
import img3 from '../asset/image3.png'

class Cards extends Component {
    render() {
        return (
           <div className="container-fluid d-flex justify-content-center">
               <div className="row">
                   <div className="col-md-4">
                       <Card imgsrc={img1} title="Console" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quae ducimus odio explicabo quisquam aliquam "/>
                   </div>
                   <div className="col-md-4">
                       <Card imgsrc={img2} title="Playground" text="Our assessment solutions provide key indicators on the potential and skills for young graduates to join the Nigerian workforce."/>
                   </div>
                   <div className="col-md-4">
                       <Card imgsrc={img3} title="Adventure" text="and parastatals. We provide seamless real time agent monitoring,etc illo, ullam totam laborum id."/>
                   </div>
               </div>
           </div>
        );
    }
}

export default Cards