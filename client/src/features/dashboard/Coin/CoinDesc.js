import React from 'react';
import Title from '../../Title/Title';
import PropTypes from 'prop-types';

export default function CoinDesc({ stats }) {
  return (
    <div className="desc_coin">
      <Title>Description</Title>
      <p>
        {Object.keys(stats).length > 0 &&
          stats.description.en.replace(/[^\w\s]/gi, '')}
      </p>
    </div>
  );
}

CoinDesc.propTypes = {
  stats: PropTypes.shape({
    description: PropTypes.shape({
      en: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
