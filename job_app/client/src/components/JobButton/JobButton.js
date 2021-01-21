import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';

import './JobButton.css';

const JobButton = (props) => {
  const { icon } = props;
  return <IconButton>{icon}</IconButton>;
};

JobButton.propTypes = {
  icon: PropTypes.elementType.isRequired,
};

export default JobButton;
