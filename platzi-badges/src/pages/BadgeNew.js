import React from 'react';

import './styles/BadgeNew.css'
import header from '../images/platziconf_logo.svg';
import BadgeForm from '../components/BadgeForm'
import Badge from '../components/Badge';
import PageLoading from '../components/PageLoading';
import api from '../api';

class BadgeNew extends React.Component {

  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    }
  };

  handleChange = e => {
    // Sobre escribimos el el valor anterior, agregandole un nuevo elemento
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({
      loading: true,
      error: null,
    });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });

      // Redireccionamos al usuario
      this.props.history.push('/badges');

    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  }

  render() {

    if (this.state.loading) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero-image img-fluid" src={header} alt="logo" />
        </div>

        <div className="container">
          <div className="row">

            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                twitter={this.state.form.twitter || 'TWITTER'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                email={this.state.form.email}
                avatarUrl="https://avatars0.githubusercontent.com/u/24928806?s=460&v=4"
              />
            </div>

            <div className="col-6">
              <h1>New Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
                onSubmit={this.handleSubmit}
                error={this.state.error} />
            </div>
          </div>
          <hr />
        </div>
      </React.Fragment>
    );
  }

}

export default BadgeNew;