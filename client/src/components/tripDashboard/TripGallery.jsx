import React from 'react';
import $ from 'jquery';
import { Image, Grid } from 'semantic-ui-react';

class TripGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tripPics: [],
      featuredImage: ''
    };
  }

  componentDidMount() {
    $.ajax({
      url: `https://www.googleapis.com/customsearch/v1?key=AIzaSyBEkRzfpS6T7dZcLaYA9lQdzMJNDSrgOgg&cx=012965794133406592343:m7o6dpksdcc&q=${'image of ' + this.props.trip.location}&searchType=image`, 
      success: (data) => { 
        console.log(data); 
      },
      error: (err) => { 
        console.log('error'); 
      }  
    });
    this.setState({
      featuredImage: 'http://www.telegraph.co.uk/content/dam/Travel/2017/July/fira-santorini-greece-sun-xlarge.jpg'
    });
  }

  updateFeatImg(e) {
    this.setState({
      'featuredImage': e.target.src
    });
  }

  render() {
    return (
      <div>
        <h4>{this.props.trip.name}</h4>
        <hr/>
        <Grid.Column computer={4} tablet={6} mobile={12}>
          <div className='featImgContainer'>
            <Image src={this.state.featuredImage} size={'massive'} centered={true} />
          </div>
          <hr/>
          <Image.Group size='medium'>
            <Image src='http://www.telegraph.co.uk/content/dam/Travel/2017/July/fira-santorini-greece-sun-xlarge.jpg' onClick={(e) => this.updateFeatImg(e)} />
            <Image src='https://fantasy-fantasytravel1.netdna-ssl.com/sites/default/files/santorini10_-_1.920px_x_1.200px-1600.jpg' onClick={(e) => this.updateFeatImg(e)} />
            <Image src='https://newmedia.thomson.co.uk/live/vol/4/8aaf814a91edba9fb2eefcc8a1b69d22faf3efc1/1080x608/web/EUROPEMEDITERRANEANGREECESANTORINIDES_000939.jpg' onClick={(e) => this.updateFeatImg(e)} />
            <Image src='http://www.planetware.com/photos-large/GR/greece-santorini-fira-view-out-to-sea.jpg' onClick={(e) => this.updateFeatImg(e)} />
          </Image.Group>
        </Grid.Column>
      </div>
    );
  }
}

export default TripGallery;