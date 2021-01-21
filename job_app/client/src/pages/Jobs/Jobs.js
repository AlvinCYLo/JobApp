import React from 'react';

import JobButtonRow from '../../components/JobButtonRow';
import JobCard from '../../components/JobCard/JobCard';

const jobs = [
  {
    company: 'Deloitte',
    name: 'Software Development Intern',
    keywords: ['java', 'python'],
    url:
      'https://www2.deloitte.com/content/dam/Deloitte/global/Images/promo_images/gx-deloitte-logo-global.jpg',
  },
  {
    company: 'KPMG',
    name: 'Software Development Intern',
    keywords: ['java', 'python'],
    url: 'https://mamri.ca/wp-content/uploads/2016/01/KPMG-logo.jpg',
  },
];

const Jobs = () => {
  return (
    <div>
      JOBS
      {jobs.map((job) => (
        <JobCard job={job} />
      ))}
      <JobButtonRow />
    </div>
  );
};

export default Jobs;
