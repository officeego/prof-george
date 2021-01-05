import React, { Component } from 'react'
import { Cell, Grid } from 'react-mdl'
import '../../../App.css'
import Project from '../ProjectsPage/Project';



 class SignIn extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Project />
               <Grid className="landing-grid"> 
                  <Cell col={12}>
                      <img 
                      src="images/image2.jpg"
                      alt="avatar"
                      className="avatar-img"
                      /> 

                      <div className="banner-text">
                          <h1>Promote Ideas</h1>
                          <hr/>
                          <p> Imagine a world where everyone has the freedom to make awesome things that impact our lives. We will follow our passion, not others. We will look forward to tomorrow, not a paycheck. We will live to fulfill our dreams, not to survive.At C4CREATIVITY, we strive to provide a better choice for everyone.We stand at the intersection of technology, business and education, and we are bringing positive change to society.We are obsessed with making awesome things with awesome people.C4CREATIVITY Inc. CEO – George Karaplis </p>
                          <hr/>
                          <hr/>
                          <hr/>
                          <hr/>
                          <hr/>
                          <hr/>
                          <hr/>
                          <hr/>
                          <p>we keep things simple to help promote your product. You tell us about your product and if need be we help you modify your posting to improve the post's performance, ensuring that your social video campaign gets the best engagement it deserves on LinkedIn. </p>
                           <hr/>
                          <p>Fast-growing marketing service that promotes all kinds of innovatives from household goods to gadgets, machinery, equipment and much more. We don't restrict, if your product makes people's life easier at home, outdoors or workplace, then we would love to spread the word to a B2B audience through our engaging tech community</p>
                          <hr/>
                          <p>We work with you to create successful marketing campaigns that use highly-engaging social videos we create from your existing content and then distribute it organically in the feed through our Company Page. </p>

                          <p></p>
                          <div className="social-links">
                              
                              {/* linkedIn */}
                              <a href="/" rel="noopener noreferrer" target="_blank">
                              <i className="fas fa-laptop-code" aria-hidden="true" />
                              </a>
                              {/* linkedIn */}
                              <a href="/" rel="noopener noreferrer" target="_blank">
                              <i className="fas fa-laptop-code" aria-hidden="true" />
                              </a>
                              {/* linkedIn */}
                              <a href="/" rel="noopener noreferrer" target="_blank">
                              <i className="fas fa-laptop-code" aria-hidden="true" />
                              </a>
                              {/* linkedIn */}
                              <a href="/" rel="noopener noreferrer" target="_blank">
                              <i className="fas fa-laptop-code" aria-hidden="true" />
                              </a>
                          </div>
                      </div>
                      
                  </Cell>
               </Grid>
               <Project /> 
            </div>
            
        )
    }
}

export default SignIn;