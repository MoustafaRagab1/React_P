import React , {useState , useEffect} from 'react';
import { PortfolioSection, PortfolioTitle, Span, PortfolioList, PortfolioItem, ImageWrapper, Image, Overlay, OverlaySpam} from "./style.js";
import axios from 'axios';

const Portfolio = () => {

  const [ images , setImages ] = useState([])

  useEffect ( () => {
    axios.get('js/data.json').then( res => { setImages(res.data.portfolio )})
  } , [] )

  const portfolioImages = images?.map((imageItem)=>{
    return(
      <ImageWrapper key={imageItem.id}>
        <Image src={imageItem.image} alt=""/>
        <Overlay>
            <OverlaySpam>
                Show Image
            </OverlaySpam>
        </Overlay>
      </ImageWrapper>
    )  
  })

  return (
    <PortfolioSection>
    <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
    <PortfolioList>
        <PortfolioItem active>All</PortfolioItem>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>Wordpress</PortfolioItem>
        <PortfolioItem>Mobile</PortfolioItem>
    </PortfolioList>
    
    <div className="box">
      {portfolioImages}
    </div>
    
    </PortfolioSection>
  )
}
  
export default Portfolio;