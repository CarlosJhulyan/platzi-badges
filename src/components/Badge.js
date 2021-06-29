import React from 'react';
import './styles/Badge.css';
import logoBadge from "../images/badge-header.svg";
import Gravatar from '../components/Gravatar';

class Badge extends React.Component {
    render() {
        const {firstName, lastName, email, jobTitle, twitter} = this.props;

        return (
            <div className="badge">
                <header className="badge_header">
                    <img src={logoBadge} alt="Logo de la conferencia"/>
                </header>
                <section className="badge_section-name">
                    <Gravatar className="badge_avatar" email={email}/>
                    <h1>{firstName} <br/> {lastName}</h1>
                </section>
                <section className="badge_section-info">
                    <h3>{jobTitle}</h3>
                    <div>@{twitter}</div>
                </section>
                <footer className="badge_footer">
                    <span>#platziconf</span>
                </footer>
            </div>
        )
    }
}

export default Badge;