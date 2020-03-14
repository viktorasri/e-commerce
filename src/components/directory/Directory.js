import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './directory.scss';
import { sectionsSelector } from '../../redux/selectors/directory.selectors';

import MenuItem from '../menu-item/Menu-item';

export const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(section => (
        <MenuItem key={section.id} {...section} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: sectionsSelector
});

export default connect(mapStateToProps)(Directory);
