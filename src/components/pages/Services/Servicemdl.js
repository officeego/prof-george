import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../../../App.css';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Servicemdl extends Component {
    render() {
        return (
            <div style={{background: 'linear-gradient(#e66465, #9198e5)'}}>
                <Grid>
                   <Cell col={4}>
                     <div style={{textAlign: 'center'}}> 
                       <img 
                        src="images/svg-5.svg"
                        alt="avatar"
                        style={{height: '200px'}}
                       />
                     </div>
                     <h2 style={{paddingTop: '2em'}}>Entrepreneurship</h2>
                     <h4 style={{color: 'grey'}}> Executive Director </h4>

                     <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />                     
                     <p>Excellenting’s vision is to make science easy to advertise for researchers and clear to monetize for marketers.</p>
                     <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                     <h5> Address </h5>
                     <p>route way Nat Park, 94025</p>
                     <h5>Phone</h5>
                     <p>+ 30 697 740 5050</p>
                     <h5>Email</h5>
                     <p>gkaraplis@iginvest.gr</p>
                     <h5>Web</h5>
                     <p>c4creativity.com</p>
                     <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />

                   </Cell>
                   <Cell className="resume-right-col" col={8}> 
                      <h2>Mission Vision</h2>

                      <Education 
                        startYear={1}
                        endYear={1}
                        schoolName="Mission"
                        shoolDescription="Build connections between R&I and markets so we can bring together the best of the two worlds. Create radical products and businesses with people who actually care about what they do."
                      />

                      <Education 
                        startYear={2}
                        endYear={2}
                        schoolName="Vision"
                        shoolDescription="VISION
                        Excellenting’s vision is to make science easy to advertise for researchers and clear to monetize for marketers. Create a world where everyone has the freedom to make awesome things that matter."
                      />

                    <Education 
                        startYear={3}
                        endYear={3}
                        schoolName="VALUES"
                        shoolDescription="Be proactive; Focus on results and Stay Agile, so you can seek and provide feedback, take smart decisions and remain responsive to change."
                      />             

                      <hr style={{borderTop: '3px solid #e22947'}} />
                      <h2>Strategic PartnerShips</h2>
                      <Experience
                       startYear={'Technology'}
                       endYear={'Trends'}
                       jobName="Trends"
                       jobDescription="Emerging technology trends can seem both elusive and ephemeral, but some become integral to business and strategies and form the backbone of tomorrow’s technology innovation"
                      />
                       <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                    <Experience
                       startYear={'Technology'}
                       endYear={'Updates'}
                       jobName="Updates"
                       jobDescription="Whatever type of company you have it’s essential to keep up todate with today’s ever-changing business technology"
                      />
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                      <Experience
                       startYear={'Competitors'}
                       endYear={'Watch'}
                       jobName="Competitors Watch"
                       jobDescription="To survive you must perform competitive intelligence activities and monitor the broader market for new developments that could affect your company, your products and brands, suppliers, and distributors."
                      />                    
                   
                    <hr style={{borderTop: '3px solid #e22947'}} /> 
                     
                      <h2>Offering</h2>                                                          
                       <Skills
                        skill="Entrepreneurship"
                        progress={100}
                       />

                       <Skills
                        skill="Strategic Planning"
                        progress={95}
                       />

                       <Skills
                        skill="Process Improvement"
                        progress={93}
                       />

                       <Skills
                        skill="Financial Analysis"
                        progress={90}
                       />

                       <Skills
                        skill="Mergers & Acquisitions"
                        progress={87}
                       />

                   </Cell>
                </Grid>
            </div>
        )
    }
}

export default Servicemdl;