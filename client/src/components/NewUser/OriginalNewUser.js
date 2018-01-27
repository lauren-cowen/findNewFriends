import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from "react-router-dom";
import API from "../../utils/API";


export const fields = ['first_name', 'last_name', 'gender',
  'gender_preference', 'age_min', 'age_max', 'favoriteColor',
  'employed', 'description', 'image_url', 'birthday', 'status'];


class OldProfileForm extends Component {

  render() {

    const {
      fields: first_name, last_name, gender, gender_preference, age_min,
        age_max, description, image_url, birthday, status ,
      handleSubmit
    } = this.props;

    return (
      <div>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Profile Picture</label>
          <div>
          <img  />
          <br></br>
          <a href="/pictures">Change Profile Picture</a>
          </div>
        </div>
        <div>
          <label>First Name</label>
          <div>
            <input type="text" placeholder="First Name" {...first_name} />
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <input type="text" placeholder="Last Name" {...last_name} />
          </div>
        </div>
        <div>
          <label>Gender</label>
          <div>
            
          </div>
        </div>
        <div>
          <label>Birthday</label>
          <input type="date" name="birthday" max="1997-01-01" {...birthday} />
        </div>
        <div>
          
          <div>
            
            
          </div>
        </div>
        <div>
          <label>Age Preference</label>
          <div>
            <input type="number" min="18"  {...age_min} placeholder="Min Age" />
            <label>to</label>
            <input type="number" max="100" {...age_max} placeholder="Max Age" />
          </div>
        </div>
        <div>
          <label>
            <input
              type="checkbox" {...status}
              
              defaultChecked
            /> Want to be Matched?
          </label>
        </div>
        <div>
          <label>Description</label>
          <div>
            <textarea
              {...description}
              maxLength="100"
              // see: https://github.com/facebook/react/issues/2533
            />
          </div>
        </div>
        
      </form>
      </div>
    );
  }
}

export default ProfileForm;
