import React from "react";
import './styles/BadgesList.css'
import { Link } from 'react-router-dom';
import Gravatar from "./Gravatar";

class BadgesListItem extends React.Component {

  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br /><label className="twitter">@{this.props.badge.twitter}</label>
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

// Custom hook
function useSearchesBadges(badges) {
  const [query, setQuery] = React.useState('');
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges }
}

function BadgesList(props) {

  const badges = props.badges;
  const { query, setQuery, filteredBadges } = useSearchesBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input type="text" className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }} />
        </div>

        <h3>No badges were found</h3>
        <Link to="/badges/new" className="btn btn-primary">
          Create new Badge
        </Link>
      </div>
    );
  }

  return (
    <div className="BadgeList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input type="text" className="form-control"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }} />
      </div>

      <ul className="list-unstyled">
        {filteredBadges.map(badge => {
          return (
            <li key={badge.id}>
              <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;
