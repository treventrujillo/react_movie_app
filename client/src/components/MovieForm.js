import React from 'react';
import DropZone from 'react-dropzone';
import { Form, Header, Button, Input, TextArea, Select } from 'semantic-ui-react';
import axios from 'axios';
import moment from 'moment';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

class MovieForm extends React.Component {
  state = {
     title: '', 
     file: '', 
     summary: '', 
     release: '' 
    }
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  onDrop = (files) => {
    this.setState({ file: files[0] })
  }

  handleChange = (e, {value}) => {
    this.setState({value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    const { title, file, summary, release } = this.state;
    data.append('title', title);
    data.append('img', file)
    data.append('summary', summary)
    data.append('release', release)
    axios.post('/api/movies', data)
      .then( res=> {
        this.props.addMovie(res.data)
        this.setState(
          {
            title: '',
            file: '',
            summary: '',
            release: ''
          });
      })

  }

  render() {
    return (
      <div>
        <Header as="h3">Enter Movie Information</Header>
        <Form 
          onSubmit={this.handleSubmit} 
          style={
            {  
              border: "solid 1px #d6d1d1", 
              padding: "10px"
            }
          }
          >
          <Form.Group grouped>
            <Form.Field
              required
              control={Input}
              placeholder="Movie's Title"
              label="Movie Title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <Form.Group inline>
              <label>Release Date</label>
              <DatePicker
                required
                value={this.state.release}
                selected={this.state.startDate}
                onChange={this.handleChange}
              />
              <label>Movie Thumbnail</label>
              <DropZone
                style={
                  {
                    marginBottom: '10px',
                    border: 'dashed 1px black',
                    width: '100%',
                    height: '50px',
                    textAlign: 'center'
                  }
                }
                value={this.state.file}
                onDrop={this.onDrop}
                multiple={false}
              />
            </Form.Group>
          </Form.Group>
          <Form.Field
            required
            label="Movie Summary"
            control={TextArea}
            value={this.state.summary}
            placeholder="Enter A Summary..."
            onChange={this.handleChange}
          />
        </Form>
        <Form.Button
          style={
            {
              margin: "10px"
            }
          }
          onClick={this.handleSubmit}
        >
          Submit
        </Form.Button>
      </div>
    );
  }
}

export default MovieForm;