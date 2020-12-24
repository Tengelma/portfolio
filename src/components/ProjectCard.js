import { Card, Label, Image, Divider } from 'semantic-ui-react';

const ProjectCard = ({name, labelStrings, image, description}) => {
  const labels = []
  for(const label of labelStrings){
    labels.push(<Label basic>{label}</Label>)
  }
  return (
    <Card style={{width: "300px", margin: "40px"}}>
      <Image src={image} size="medium" wrapped ui={false}/>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>{description}</Card.Description>
        <Divider/>
        <Card.Content extra>
          {labels}
        </Card.Content>
      </Card.Content>
    </Card>
  )
}

export default ProjectCard;