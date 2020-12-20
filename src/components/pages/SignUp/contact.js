import React, { Component } from 'react'
import { Cell, Grid, List, ListItem, ListItemContent } from 'react-mdl'

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid"> 
                   <Cell col={6}>
                       {/* <h2>Karaplis</h2> */}
                <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-phone-square" aria-hidden="true"/>
                        <p> + 30 697 740 5050</p>
                    </ListItemContent>
                 </ListItem>
                 <hr/>
                 {/* <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-fax" aria-hidden="true"/>
                     <p> + 30 697 740 5050</p>
                    </ListItemContent>
                 </ListItem> */}
                 <hr/>
                 <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-envelope" aria-hidden="true"/>
                       <p> gkaraplis@iginvest.gr</p>
                    </ListItemContent>
                 </ListItem>
                 <hr/>
                 <hr/>
                 <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                      <i className="fab fa-skype" />
                     <p> george karaplis </p>
                    </ListItemContent>
                 </ListItem>
                 <hr/>
                 <hr/>
                       {/* <img 
                       src="images/svg-7.svg" 
                       alt={{height: '250px'}}
                       /> */}
                       {/* <p  style={{
                           width: '75%', 
                           margin: 'auto', 
                           paddingTop: '1em'
                           }}>No need to invest  in a plethora of individualtogether technology scouting and open innovation stakeholders. Our active recommendation engine takes into account users’ profile, interest with more accurate results</p> */}
                  </Cell>
                   <Cell col={6}>
                     {/* <h2>Contact me</h2> */}
                     {/* <hr/>  */}

                     <div className="contact-list">
                 <List>
                   {/* <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-phone-square" aria-hidden="true"/>
                        + 30 697 740 5050
                    </ListItemContent>
                 </ListItem> */}

                 {/* <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-fax" aria-hidden="true"/>
                        + 30 697 740 5050
                    </ListItemContent>
                 </ListItem> */}

                 {/* <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-envelope" aria-hidden="true"/>
                        gkaraplis@iginvest.gr
                    </ListItemContent>
                 </ListItem>

                 <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                      <i className="fab fa-skype" />
                        + 30 697 740 5050
                    </ListItemContent>
                 </ListItem> */}

                </List> 
                     </div>
                 
                   </Cell>                
                </Grid>
            </div>
        )
    }
}

export default Contact;
