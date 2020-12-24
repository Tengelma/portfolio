import React from 'react';
import { Grid, Container, Divider, Header, Image } from 'semantic-ui-react';
import Projects from './Projects';
import selfImage from '../images/PortfolioPic.jpg';

const Home = () => {
  return (
    <Container style={{paddingTop: "50px"}}>
      <Grid style={{width: "75%", margin: 'auto'}} columns={2} stackable textAlign="center">
        <Grid.Row verticalAlign='middle'>
          <Grid.Column>
            <Header as="h2">
              Hi, my name is Trent Engelman.<br/>I am a graduating senior pursuing<br/> a career in Software Engineering.
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Image src={selfImage} size="medium" circular style={{margin: 'auto'}}></Image>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider/>
      <Container text textAlign='center'>
        <p>
          Welcome to my site! Here, you'll find longform interactive descriptions of a selection of past and active projects
          as well as more information about me. While this
          is mostly intended as a porfolio for employers, I do hope that the contents of the site prove engaging and perhaps even
          educational. Most of these projects were developed with larger projects in mind and, in time, I hope to dive deeper
          into these rabbit holes and document that adventure as well.      
        </p>
        <p>Thanks for visiting.</p>      
      </Container>
      <Divider/>
      <Projects/>
    </Container>
  )
}

export default Home;