import ProjectCard from './ProjectCard';
import { Card } from 'semantic-ui-react';
import artSortingImg from '../images/example1.png'
import magikartImg from '../images/magikart.png'
import distDrawImg from '../images/DistDrawImg.png'
import halomodImg from '../images/halomodImg.png'

const projects = [
  {
    name: 'Distributed Drawing',
    link: '/projects/distributed_drawing',
    image: distDrawImg,
    description: "Synchronized free drawing for HTML Canvas elements",
    labelStrings: ["javascript", "full-stack", "react", "redux", "node", "canvas", "distributed", "web graphics"],
  },
  {
    name: 'Art Sorting',
    link: '/projects/art_sorting',
    image: artSortingImg,
    description: "Exploring the art world by color",
    labelStrings: ["python", "image processing", "numpy", "pandas", "data science", "scikit", "machine learning"]
  },
  {
    name: 'Procedural Mazes',
    link: '/projects/procedural_mazes',
    image: "",
    description: "Generating randomized 3D mazes",
    labelStrings: ["C#", "Unity", "procedural generation", "game development", "graphics"]
  },
  {
    name: 'Drone Simulator',
    link: '/projects/drone_simulator',
    image: "",
    description: "Flying a drone in Unity",
    labelStrings: ["C#", "Unity", "simulation", "game development"]
  },
  {
    name: 'magiKart',
    link: '/projects/magikart',
    image: magikartImg,
    description: "Automatically populate a shopping cart based on an automatically generated meal plan",
    labelStrings: ["javascript", "ui development", "react", "collaborative"]
  },
  {
    name: 'halomod',
    link: '/projects/halomod',
    image: halomodImg,
    description: "Bringing the functionality of an open source scientific package to the web",
    labelStrings: ["javascript", "python", "flask", "vue", "full-stack", "collaborative"]
  }
]

const Projects = () => {
  const cards = []
  for(const project of projects){
    cards.push(<ProjectCard {...project}/>)
  }
  return (
    <Card.Group centered stackable itemsPerRow={2}>
      {cards}
    </Card.Group>
  )
}

export default Projects
