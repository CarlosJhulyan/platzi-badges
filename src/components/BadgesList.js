import React, { useState, useMemo } from "react";
import './styles/BadgesList.css';
import { Link } from 'react-router-dom';
import Gravatar from '../components/Gravatar';

function useSearchBadges(badges) {
    const [query, setQuery] = useState('');
    const [filteredBadges, setFilteredBadges] = useState(badges);

    useMemo(() => {
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
        });

        setFilteredBadges(result);
    }, [badges, query]);
    
    return {query, setQuery, filteredBadges}
}

function BadgesList ({ badges }) {

    const { query, setQuery, filteredBadges } = useSearchBadges(badges);

    if (filteredBadges.length === 0) {
        return (
            <div>
                <form className="form-group">
                    <label>Filter Badges</label>
                    <input type="text" 
                        value={query}
                        onChange={(e)=> {
                            setQuery(e.target.value)
                        }}
                        className="form-control"/>
                </form>
                <p>No badges were found</p>
                <Link className="btn btn-primary" to="/badges/new">Create new badge</Link>
            </div>
        )
    }

    return (
        <div className="Badges__list">
            <form className="form-group">
                <label>Filter Badges</label>
                <input type="text" 
                    value={query}
                    onChange={(e)=> {
                        setQuery(e.target.value)
                    }}
                    className="form-control"/>
            </form>
            <ul className="list-unstyled">
                {
                    filteredBadges.map(badge => {
                        return(
                            <li key={badge.id} className="card mb-2 p-2">
                                <Gravatar className="badge_avatar" email={badge.email}/>
                                <div>
                                    <span className="card__name">{badge.firstName} {badge.lastName}</span>
                                    <div className="card__twitter">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg>
                                        {badge.twitter}
                                    </div>
                                    <span className="card__job">{badge.jobTitle}</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default BadgesList;