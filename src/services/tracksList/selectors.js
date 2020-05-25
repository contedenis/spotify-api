// @packages
import { get } from 'lodash';

export const selectTracksList = ({ tracksList }) => get(tracksList, 'tracksList', []);
export const selectTracksListLoading = ({ tracksList }) => get(tracksList, 'loading', false);
