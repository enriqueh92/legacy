import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Grid, Button, Input } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePic: 'https://i1.wp.com/www.thisblogrules.com/wp-content/uploads/2010/02/batman-for-facebook.jpg?resize=250%2C280',
      profilePicChangeClicked: false,
      files: []
    };
    this.showChangeProfilePicForm = this.showChangeProfilePicForm.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  handleToggleClick() {
    this.setState({ profilePicChangeClicked: !this.state.profilePicChangeClicked });
  }

  showChangeProfilePicForm() {
    if (this.state.profilePicChangeClicked) {
      return (
        <section>
          <div className="dropzone">
            <Dropzone onDrop={this.onDrop.bind(this)}>
              <p>Try dropping some files here, or click to select files to upload.</p>
            </Dropzone>
          </div>
          <aside>
            <h2>Dropped files</h2>
            <ul>
              {
                this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
              }
            </ul>
          </aside>
        </section>
      );
    } else {
      return null;
    }
  }

  onDrop(files) {
    this.setState({ profilePic: files[0].preview }, () => {
      this.handleToggleClick();
      // console.log(this.state.profilePic);
    });
  }

  render() {
    return (
      <Card>
        <Image src={ this.state.profilePic } />
        <Card.Content>
          <p className='changeProfilePic' onClick={ this.handleToggleClick }>Change profile picture</p>
          { this.showChangeProfilePicForm() }
        </Card.Content>
        <Card.Content>
          <Card.Header>{this.props.user.name}</Card.Header>
          <Card.Meta>{this.props.user.email}</Card.Meta>
          <Card.Description>{this.props.user.name} is a crazy hacker studying at HackReactor.</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            10 Friends
          </a>
        </Card.Content>
      </Card>
    );
  }
}
  

export default ProfileCard;


{
//change the database. Add a profilePicture field to the user table and seta default profile pic.
//make change profile picture form component and hook it up to button on profile
//set up ajax call and endpoint to handle new profile pic change
}