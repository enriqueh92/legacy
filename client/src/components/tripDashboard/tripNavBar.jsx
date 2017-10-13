import React from 'react';
import reducer from '../../Reducers';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { Menu } from 'semantic-ui-react';

class TripNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null
    };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({activeItem: name});
  }

  render() {
    return (
      <Menu>
        <Menu.Item className="btn" onClick={this.props.logout}>Logout
        </Menu.Item>

        {this.props.features.map((feature, index) => {
          return <Menu.Item key={index} className="btn" onClick={() => {
            this.props.dispatch(reducer.changeView(feature.link));
          }}>{feature.name}</Menu.Item>;
        })}

      </Menu>
    );
  }
};

export default TripNavBar;
