import React from 'react';

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg';
import BadgeForm from '../components/BadgeForm'
import Badge from '../components/Badge';

class BadgeNew extends React.Component {

  state = {form: {
    firstName: '',
    lastName: '',
    email : '',
    jobTitle: '',
    twitter: '',
  }};

  handleChange = e => {
    // Sobre escribimos el el valor anterior, agregandole un nuevo elemento
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  render(){
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo"/>
        </div>

        <div className="container">
          <div className="row">
            
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                avatarUrl="https://avatars0.githubusercontent.com/u/24928806?s=460&v=4"
              />
            </div>

            <div className="col-6">
              <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

}

export default BadgeNew;