import React, {useState} from 'react';
import { Container, Header, Image, Modal } from 'semantic-ui-react';
import ColorPicker from './ColorPicker';
import img1 from '../images/example.png';
import img2 from '../images/example1.png';
import img3 from '../images/example2.png';
import img4 from '../images/Cypresses214.jpg';
import img5 from '../images/CypressesPie.jpg';
import img6 from '../images/gogh_art_210.jpg';
import img7 from '../images/gogh_art_120.jpg';
import img8 from '../images/gogh_art_012.jpg';

export default function DataScience() {
  const [modalSrc, setModalSrc] = useState(null);
  const [modalOpen, setModalOpen] = useState(null);

  const onImageClick = (src) => {
    setModalOpen(true);
  }

  return (
    <Container text>
      <Header as='h1'>Art Sorting</Header>
      <p style={{fontStyle: 'italic'}}>Keywords: Python, Data Science, Image Processing, Web Scraping, Machine Learning, Graphics</p>
      <p>
        I've always been fascinated with the intersection of art and science and have always 
        enjoyed when one manages to provide new insight into the other. For a time I was possessed
        with the idea of 'sorting' art and dreamed of a platform where individuals could easily
        explore, arrange and analyze the art world more systematically than we can now. My favorite 
        piece of that effort, which I'll share here, is an exploration of the color space and figuring
        out how we can 'sort' art by its color. 
      </p>
      <Header as='h3'>The Building Blocks</Header>
      <p>
        An early challenge with the project was getting a grip on the many ways color
        could be represented. The RGB color space is well understood and well documented but, in 
        reality, alternatives have been presented that more accurately reflect human understanding of
        color. As an example, the HSV color space, which was one of the representations I eventually used, 
        opts to represent color through Hue, Saturation and Value as opposed to redness, greenness and blueness. 
        Hue is the value which lets us distinguish between colors in the standard color spectrum. Saturation determines
        the intensity of that color. Value is a measure of lightness. This representation offers a much more
        intuitive means of exploring the color space and was, consequently, better suited to the task of
        'sorting' color. You can see that for yourself using the widget provided below.     
      </p>
      <br/>
      <ColorPicker/>
      <br/>
      <p>
        So we have a representation for color. Now, how do I sort within that space? The color itself is
        just composed of three numerics so I can just sort based on one, or all, of those keys. Ultimately,
        it would be impossible to treat all the components of the color equally and I would have to prioritize based on 
        what made the most sense aesthetically. I still wanted to include all the information somehow but 
        had to order hue, saturation and value based on their perceived importance to what makes a color 'its' color. 
      </p>
      <p>
        In order to determine what made the most sense aesthetically, I had to find some way to present the colors in 
        a way that would be amenable to the eventual task of presenting images. Enter space-filling curves, which map 1D 
        collections to multidimensional spaces or, for me, a unit square. Of particular interest was the <a href="https://en.wikipedia.org/wiki/Hilbert_curve">Hilbert Curve</a>, 
        which has the property of preserving the 'closeness' of the items within. Things that were nearby eachother in 
        the 1D space would also be close to eachother in the 2D space.

        A bit of research and code later and I had the following:
      </p>
      <Image.Group size='small' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{margin: "25px"}} src={img2}/>
        <Image style={{margin: "25px"}} src={img3}/>
        <Image style={{margin: "25px"}} src={img1}/>
      </Image.Group>
      <p style={{fontSize: 14, fontStyle: 'italic', textAlign: "center"}}>
        Hue prioritized (LEFT) Saturation prioritized (CENTER) Value prioritized (RIGHT)
      </p>
      <p>
        Now, on to the fun part. How do we classify an image with potentially many colors as being predominantly a single color? 
        Averaging all the color values in the image might produce a color that's not even in the image. Counting the most common colors may miss the forest for
        the trees. Instead, we have to use a clustering algorithm to group 'alike' colors and hope for the best. Here, that meant
        using KMeans to group all pixels into K clusters whose centers adjust as pixels are attributed to them. Always assign pixels
        to the cluster with the closest center to that pixel and you end up with the K most prevalent colors in an image.
      </p>
      <p> 
        We need to figure out a good K, though. Keep in mind that if we performed this algorithm with 3 clusters on an image with 4 colors, the
        center of one of our clusters would be the average of two of the colors and not be a good representation of either.  
        Well, we can simulate the KMeans process over several options of K, compare their 
        performance (ie. how close pixels are, on average, to the cluster they were assigned to) and select the best one. Popular libraries 
        like <a href="https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html">scikit-learn</a> provide good documentation and implementations of this functionality and were used here. Marshal the results
        into an useful format and we get the following:    
      </p>
      <Image.Group size='medium' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{margin:"25px"}} src={img4}/>
        <Image style={{margin:"25px"}} src={img5}/>
      </Image.Group>
      <p style={{fontSize: 14, fontStyle: 'italic', textAlign: "center"}}>
        Cypresses by Van Gogh (LEFT) A pie chart showing the color distribution of the artwork (RIGHT)
      </p>
      <p>
        Results are imperfect with KMeans but, for the loosely defined task of 'sorting' artwork by color, the information provided through
        this process is more than enough. As seen above, we have the three dominant colors which best represent the image. Some filtering might be required to
        make these colors easily sortable but we're getting closer!
      </p>
      <p>
        The only major task left before we can put everything together is scraping artwork from the web. Fortunately, digital catalogues of the works of major
        artists are easy to find. I made use of the <a href="https://www.wga.hu/">Web Gallery of Art</a> as their site had an intuitive layout
        and image urls were named in a consistent fashion. A bit of Python later (thank you <a href="https://www.crummy.com/software/BeautifulSoup/bs4/doc/">BeautifulSoup</a>) 
        and I had enough artworks locally to do something meaningful.
      </p>
      <Header as='h3'>Putting it Together</Header>
      <p>
        What do you do when you have the ability to map colors to a Hilbert Curve, an easy way to determine an image's dominant colors, and
        hundreds of artworks to work with? You connect these pieces and produce something rather fascinating.
      </p>
      <Image.Group size='large' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Image onClick={()=> setModalOpen(true)} style={{margin: "25px"}} src={img6}/>
        {/* <Image style={{margin: "25px"}} src={img7}/>
        <Image style={{margin: "25px"}} src={img8}/> */}
      </Image.Group>
      <Modal 
        onOpen={() => setModalOpen(true)}
        onClose={() => setModalOpen(false)}
        open={modalOpen}><Image src={img6}></Image></Modal>
      <p style={{fontSize: 14, fontStyle: 'italic', textAlign: "center"}}>
        A collection of Van Gogh artworks sorted by hue; Click to enlarge
      </p>
      <p>
        The payoff is there! Apart from some anomalies, these artworks of Van Gogh have, by and large, been 'sorted' by color.
        This project took me all over the internet and granted some fantastic insight into one of my favorite artists. With some patience,
        this workflow could be applied to any artist or collection of artists and produce interesting results. Maybe someday I will do this at scale...
      </p>
      <br/>
    </Container>
  )
}