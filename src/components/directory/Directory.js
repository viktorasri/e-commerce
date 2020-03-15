import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { DirectoryContainer } from './directory.styles';
import { sectionsSelector } from '../../redux/selectors/directory.selectors';

import MenuItem from '../menu-item/Menu-item';

export const Directory = ({ sections }) => {
  return (
    <DirectoryContainer>
      {sections.map(section => (
        <MenuItem key={section.id} {...section} />
      ))}
    </DirectoryContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: sectionsSelector
});

export default connect(mapStateToProps)(Directory);
