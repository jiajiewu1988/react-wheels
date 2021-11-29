import React from 'react';
import "./StarWidget.css";

class StarWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 0
    };
  }

  render() {
    return (
      <div className="star-container">
        <ul className="star-list">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <li
                key={index}
                className={this.state.rate >= index ? 'active' : 'inactive'}
                onClick={() => this.setState({rate: index})}
              >&#9733;</li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default StarWidget;