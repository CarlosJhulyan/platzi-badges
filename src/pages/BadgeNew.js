import React, { Fragment } from 'react';
import './styles/BadgeNew.css';

import Header from '../images/platziconf-logo.svg';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';

import api from '../api';

class BadgeNew extends React.Component {
    state = { 
        loading: true,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        } 
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true, error: null});
        try {
            await api.badges.create(this.state.form);
            this.setState({ loading: false });
        } catch (error) {
            this.setState({ loading: false, error });
        }
    }

    render() {
        return (
            <Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={Header} alt="logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName={this.state.form.firstName || 'FIRST_NAME'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                twitter={this.state.form.twitter || 'TWITTER'}
                                email={this.state.form.email || 'carlos.medina.27@unsch.edu.pe'} 
                                lastName={this.state.form.lastName || 'LAST_NAME'}/>
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} 
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default BadgeNew;