import React from 'react';
import './Carousel.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    
    const publicUrl = process.env.PUBLIC_URL;
    this.state = {
      active: 0,
      imgs: [
        {
          src: `${publicUrl}/cat.jpg`,
          alt: 'cat image'
        },
        {
          src: `${publicUrl}/dog.jpg`,
          alt: 'dog image'
        },
        {
          src: `${publicUrl}/horse.jpg`,
          alt: 'horse image'
        }
      ]
    };
  }
  
  switchImg(direction) {
    let { active, imgs } = this.state;
    active = (active + direction + imgs.length) % imgs.length;

    this.setState({ active });
  }

  prev() {
    this.switchImg(-1);
  }

  next() {
    this.switchImg(1);
  }

  render() {
    const { active, imgs } = this.state;
    return (<div className="carousel">
      <p className='left-arrow' onClick={() => {
        this.prev();
      }}>&#9664;</p>
      <div className='img-container'>
        {imgs.map((img, index) => {
          return (<div
            className={index === active ? "slide img-active" : "slide"}
            key={`slide_item_${index}`}>
              {index === active && (<img src={img.src} alt={img.alt}></img>)}
          </div>);
        })}
      </div>
      <p className='right-arrow' onClick={() => {
        this.next();
      }}>&#9654;</p>
      <div className='dot-container'>
          {imgs.map((img, index) => {
            let icon = '◦';
            if (index === active) {
              icon = "•";
            }
            return (<div className='dot-item' key={`dot_${index}`}>{icon}</div>);
          })}
      </div>
    </div>);
  }
}

export default Carousel;