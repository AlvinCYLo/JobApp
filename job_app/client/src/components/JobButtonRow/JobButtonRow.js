import React from 'react';
import PropTypes from 'prop-types';

import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import RedoIcon from '@material-ui/icons/Redo';

import JobButton from '../JobButton/JobButton';

import './JobButtonRow.css';

const JobButtonRow = () => {
  return (
    <div className="jobButtonRow">
      <JobButton icon={CloseIcon} />
      <JobButton icon={RedoIcon} />
      <JobButton icon={CheckIcon} />
    </div>
  );
};

JobButtonRow.propTypes = {
  job: PropTypes.shape({}).isRequired,
};

export default JobButtonRow;
