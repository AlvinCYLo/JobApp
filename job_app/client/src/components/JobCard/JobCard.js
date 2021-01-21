import React from 'react';
import PropTypes from 'prop-types';

import './JobCard.css';
import TinderCard from 'react-tinder-card';

const JobCard = (props) => {
  const { job } = props;
  const onSwipe = (direction) => {
    console.log(`You swiped: ${direction}`);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(`${myIdentifier} left the screen`);
  };

  return (
    <div className="cardContainer">
      <TinderCard
        className="swipe"
        onSwipe={onSwipe}
        onCardLeftScreen={onCardLeftScreen}
        preventSwipe={['up']}
      >
        <div style={{ backgroundImage: `url(${job.url})` }} className="card">
          <h2>{`${job.company} - ${job.name}`}</h2>
          <h3>{job.keywords}</h3>
        </div>
      </TinderCard>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.shape({
    company: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    keywords: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
};

export default JobCard;
