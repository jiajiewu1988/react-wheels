import React from 'react';
import './List.css';

class List extends React.Component {
  state = {
    "preview": "https://verkada-public-data.s3-us-west-2.amazonaws.com/frontend-interview/preview.png",
    "events": [
      {
        "title": "Person of Interest",
        "subtitle": "Filip Kaliszan",
        "site": "3rd Floor",
        "detail": "Elevator East Lobby",
        "image": "https://verkada-public-data.s3-us-west-2.amazonaws.com/frontend-interview/event1.png",
        "timestamp": 1612247209,
        "active": true
      },
      {
        "title": "Motion",
        "subtitle": "People Detected",
        "site": "Outside",
        "detail": "Front Door",
        "image": "https://verkada-public-data.s3-us-west-2.amazonaws.com/frontend-interview/event2.png",
        "timestamp": 1612207950,
        "active": true
      },
      {
        "title": "Crowd",
        "subtitle": "2 or more people",
        "site": "London",
        "detail": "Intersection",
        "image": "https://verkada-public-data.s3-us-west-2.amazonaws.com/frontend-interview/event3.png",
        "timestamp": 1612202420,
        "active": true
      }
    ] 
  }

  render() {
    const {preview, events} = this.state;
    const match = (str, event) => {
      const keys = Object.keys(event);
      for (let key of keys) {
        if (typeof event[key] === 'string') {
          if (event[key].indexOf(str) > -1) {
            return true;
          }
        }
      }
      return false;
    }
    return (
      <div className='parent'>
        <img src={preview} alt='preview' className='preview'/>
        <div className="search-container">
          <span>&#128269;</span>
          <input type='text' onChange={(e) => {
            events.forEach((event) => {
              if (match(e.target.value, event)) {
                event.active = true;
              } else {
                event.active = false;
              }
            });
            this.setState({events})
          }}/>
        </div>
        <div className='list'>
          {events.map((event, index) => {
            let date = new Date(event.timestamp);
            return (<div className={(event.active ? '' : 'inactive ') + 'list-item'} key={index}>
              <div><img src={event.image} alt={`img-${event}-${index}`}/></div>
              <div className='title-container'>
                <strong>{event.title}</strong>
                <p>{event.subtitle}</p>
              </div>
              <div><p>{event.site} - {event.detail}</p></div>
              <div><p className='time'>{date.toLocaleTimeString()}</p></div>
              <p></p>
            </div>);
          })}
        </div>
      </div>
    );
  }
}

export default List;