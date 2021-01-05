import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

 class Project extends Component {
     constructor(props) {
         super(props);
         this.state = { activeTab: 0 };
     }
    
     toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                  <div className="projects-grid">
                      {/* PART-1 */}
                {/* // Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
                   <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMACBiO1u8-xMQkILP_jY0Krai8Il8Q0shWw&usqp=CAU) center / cover' }}>
                   Contract Negotiation #1
                   </CardTitle>
                   <CardText>
                   Brief your project needs’ and find technologies to implement. Improve how technology is acquired in your industry and take the lead scouting for trends and innovation.
                   </CardText>
                   <CardActions border>
                       <Button colored>Proposals</Button>
                       {/* <Button colored>property</Button> */}
                       <Button colored>Analyze</Button>
                   </CardActions>
                   <CardMenu style={{color: 'green'}}>
                      <IconButton name="share" />
                   </CardMenu>
                </Card>

                {/* // Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
                   <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMPhzys45W4w4i3c6j4FPHG81mxykioe0STw&usqp=CAU) center / cover' }}>
                   Strategic Partnerships #2
                   </CardTitle>
                   <CardText>
                   Showcase your project and get perfect matches to sell and apply your technology,upload and manage proposals with a large number of categories, specific status, and keywords.
                   </CardText>
                   <CardActions border>
                       <Button colored>Consultancy</Button>
                       {/* <Button colored>CodePen</Button> */}
                       <Button colored>Services</Button>
                   </CardActions>
                   <CardMenu style={{color: 'green'}}>
                      <IconButton name="share" />
                   </CardMenu>
                </Card>
                
                {/* // Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
                   <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZQCPEIa64gTJ9ZzSCX7MXaK7q5H2SApPDA&usqp=CAU) center / cover' }}>
                   Alternative Investments #3
                   </CardTitle>
                   <CardText>
                   Leverage your steps with facilitators, regulatory affairs, IPR and strategy issues. Have an early plan on your funding needs, and take advantage from your exposure on the landscape
                   </CardText>
                   <CardActions border>
                       <Button colored>FUNDING</Button>
                       {/* <Button colored>CodePen</Button> */}
                       <Button colored>RESOURCES</Button>
                   </CardActions>
                   <CardMenu style={{color: 'green'}}>
                      <IconButton name="share" />
                   </CardMenu>
                </Card>
                </div>
            )
        } else if(this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/* PART-2 */}
                {/* // Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
                   <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsTM3-Y7mMpKKzgo_V0zKNk2cv5dLrllQJFQ&usqp=CAU) center / cover' }}>
                   Corporate Development #1
                   </CardTitle>
                   <CardText>
                   Leverage your steps with facilitators, regulatory affairs, IPR and strategy issues. Have an early plan on your funding needs, and take advantage from your exposure on the landscape
                   </CardText>
                   <CardActions border>
                       <Button colored>Strategy</Button>
                       {/* <Button colored>property</Button> */}
                       <Button colored>Investment</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                   </CardMenu>
                </Card>

                {/* // Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
                   <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://i2.wp.com/theentrepreneurway.com/wp-content/uploads/2016/05/The_Entrepreneur_Way_logo_512x512.jpg?fit=512%2C512) center / cover' }}>
                   Structured Finance #2
                   </CardTitle>
                   <CardText>
                   The MRL criteria are designed to manage manufacturing risk in procurement while increasing the capacity of technology development projects for the transition of new technology (Scale 1 to 10)
                   </CardText>
                   <CardActions border>
                       <Button colored>Management</Button>
                       {/* <Button colored>CodePen</Button> */}
                       <Button colored>Restructuring</Button>
                   </CardActions>
                   <CardMenu style={{color: 'yellow'}}>
                      <IconButton name="share" />
                   </CardMenu>
                </Card>
                
                {/* // Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
                   <CardTitle style={{color: 'yellow', height: '176px', background: 'url( https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8cVs31r1ojaBS__YNprC18-YBjbv51rvG1Q&usqp=CAU) center / cover' }}>
                   Business Valuation #3
                   </CardTitle>
                   <CardText>
                   All materials, manufacturing processes and procedures, inspection and test equipment are in production and controlled to six-sigma or some other appropriate quality level.
                   </CardText>
                   <CardActions border>
                       <Button colored>Savings</Button>
                       {/* <Button colored>CodePen</Button> */}
                       <Button colored>Negotiation</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                   </CardMenu>
                </Card>
                </div>
            )
        } else if(this.state.activeTab === 2 ) {
            return (
                <div className="projects-grid">
                {/* PART-3 */}
          {/* // Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
             <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://assets.entrepreneur.com/static/20190830053613-360-header.jpg) center / cover' }}>
             International Business #1
             </CardTitle>
             <CardText>
             No need to invest meaningful time checking information in of individual sites. C4 is a one place marketplace connecting all together technology scouting and open innovation stakeholders.
             </CardText>
             <CardActions border>
                 <Button colored>Acquisition</Button>
                 {/* <Button colored>property</Button> */}
                 <Button colored>Startup</Button>
             </CardActions>
             <CardMenu style={{color: 'yellow'}}>
                <IconButton name="share" />
             </CardMenu>
          </Card>

          {/* // Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
             <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ_q7ZjgKUikGgt0UfFye-9Q92muuoQIhWpg&usqp=CAU) center / cover' }}>
             Investment Banking #2
             </CardTitle>
             <CardText>
             C4, automatic knowledge provider that supports companies to structure their R&I strategies and projects, selectively introducing providers, partners, consortia opportunities and funding.
             </CardText>
             <CardActions border>
                 <Button colored>DueDiligence</Button>
                 {/* <Button colored>CodePen</Button> */}
                 <Button colored>Forecasting</Button>
             </CardActions>
             <CardMenu style={{color: 'green'}}>
                <IconButton name="share" />
             </CardMenu>
          </Card>
          
          {/* // Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
             <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdaGm0o4nctCf66p8ttwwgMD_iM-IHmTWuLA&usqp=CAU) center / cover' }}>
             Finacial Modeling #3
             </CardTitle>
             <CardText>
             We continuously consult our clients as a professional company in many different sectors, not only in business investment but also in project management, design and business consultation,
             </CardText>
             <CardActions border>
                 <Button colored>Finance</Button>
                 {/* <Button colored>CodePen</Button> */}
                 <Button colored>CapitalMarket</Button>
             </CardActions>
             <CardMenu style={{color: 'green'}}>
                <IconButton name="share" />
             </CardMenu>
          </Card>
          </div>
            )
        } else if(this.state.activeTab === 3 ) {
            return (
                <div className="projects-grid">
                {/* PART-4 */}
          {/* // Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
             <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6AxxcpErfv-OYT4JBbYkixIby1jCcm9MpSw&usqp=CAU) center / cover' }}>
             International Sales #1
             </CardTitle>
             <CardText>
             we are constantly passionate about finding solutions gather together, worthy of the name “C4”, we try our best to create a state-of-the-art to nurture the sprout named “Awesome things”
             </CardText>
             <CardActions border>
                 <Button colored>Corporate</Button>
                 {/* <Button colored>property</Button> */}
                 <Button colored>Partnerships</Button>
             </CardActions>
             <CardMenu style={{color: 'green'}}>
                <IconButton name="share" />
             </CardMenu>
          </Card>

          {/* // Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
             <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://assets.entrepreneur.com/content/3x2/2000/1398120994-5-key-characteristics-every-entrepreneur-should-have-2.jpg) center / cover' }}>
             Mergers & Acquisitions #2
             </CardTitle>
             <CardText>
             providing financial. with the increase in personnel, our solution provision segment expanded. creating services and business industries, establishes subsidiaries if necessary
             </CardText>
             <CardActions border>
                 <Button colored>Mergers</Button>
                 {/* <Button colored>CodePen</Button> */}
                 <Button colored>BusinessPlanning</Button>
             </CardActions>
             <CardMenu style={{color: 'green'}}>
                <IconButton name="share" />
             </CardMenu>
          </Card>
          
          {/* // Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
             <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKQdSGA9KAOcWNXGRaF4cOgjeNttduJQLolw&usqp=CAU) center / cover' }}>
             Strategic Partnerships #3
             </CardTitle>
             <CardText>
             The world that we are striving for is a society in which people who bring their passion,ambition “improve society” and “make people richer” can immerse themselves in creating new values
             </CardText>
             <CardActions border>
                 <Button colored>Improvement</Button>
                 {/* <Button colored>CodePen</Button> */}
                 <Button colored>Alternatives</Button>
             </CardActions>
             <CardMenu style={{color: 'green'}}>
                <IconButton name="share" />
             </CardMenu>
          </Card>
          </div>
            )
        }
     }


    render() {
        return (
            <div className="category-tabs">
               <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                  <Tab> Researchers </Tab>
                  <Tab> Businesses </Tab>
                  <Tab> Consulting </Tab>
                  <Tab> Investors </Tab>
               </Tabs>
               {/* <section className="projects-grid"> */}
                   <Grid >
                       <Cell col={12}>
                           <div className="content"> {this.toggleCategories()} </div>
                       </Cell>
                   </Grid>
                  
               {/* </section> */}
            </div>
        )
    }
}

export default Project; 
