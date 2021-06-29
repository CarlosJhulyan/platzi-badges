import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './styles/Badges.css';
import BadgesList from '../components/BadgesList';

import confLogo from '../images/logo.svg';
import api from '../api';

class Badges extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false,
            data: []
        };
        console.log('1. constructor()');
    }   
    
    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log({
            prevProps, prevState
        });
        console.log({
            props: this.props, state: this.state
        });
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });

        try {
            const data = await api.badges.list();
            this.setState({ loading: false, data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeOut);
    }

    render() {
        if (this.state.loading === true) {
            return <p className="m-2">Loading...</p>;
        }
        if (this.state.error) {
            return <p className="m-2">Error: {this.state.error.message}</p>;
        }
        
        return (
            <Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="Conf logo"/>
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>

                    <BadgesList badges={this.state.data}/>
                </div>
            </Fragment>
        )
    }
}

export default Badges;