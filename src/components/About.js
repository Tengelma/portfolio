import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

const About = () => {
  return (

    <Grid columns={1} textAlign="left" style={{paddingTop: "50px"}}>
      <Grid.Row verticalAlign="middle">
        <Grid.Column>
        <Container text>
          <p>
            Hi! My name is Trent Engelman. I am centered out of Seattle and am primarily a student -- I have one semester left before I graduate
            with a B.S. in Software Engineering. I have been tinkering with coding for almost four years now but have only been part
            of my current degree program for two. Prior to that, I had studied Philosophy & Physics at the same University but my itch
            to build and create led me astray. 
          </p>
          <p>
            I am graduating with a fairly diverse technological skill set and an even broader base of general knowledge. While
            my degree program has certainly advanced my understanding of software best practices and provided a great avenue for
            collaborating with other people, I would like to believe that most of what I know stems from independent study and
            personal projects. I strongly believe there's only so much that can be learned in the classroom and that general drive 
            to learn has led to projects ranging from the practical to the artistic and everywhere in between. This site should
            certainly showcase that.
          </p>
          <p>
            When I'm not focused on school, work or personal projects, I do my best to keep up with a long list of hobbies and raise
            a young Aussiedoodle named Watson. With the isolation wrought by our current state of affairs, I have been particularly
            invested in cooking / baking and continuing a lifelong study of music, particulary the piano. In warmer weather, I love to
            camp, hike and backpack, especially on longer, multi-week trips in unfamiliar places. This list of hobbies is always fluid,
            though, and I love to throw myself into new things.   
          </p>
        </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default About;