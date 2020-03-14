import { createSelector } from 'reselect';

const directory = state => state.directory;

export const sectionsSelector = createSelector(directory, directory => directory.sections);
