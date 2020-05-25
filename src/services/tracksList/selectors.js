// @packages
import { get } from 'lodash';

export const selectTrackListOffset = ({ tracksList }) => get(tracksList, 'tracksList.offset', 0);
export const selectTracksList = ({ tracksList }) => get(tracksList, 'tracksList', {});
export const selectTracksListLoading = ({ tracksList }) => get(tracksList, 'loading', false);
export const selectTracksListTotal = ({ tracksList }) => get(tracksList, 'tracksList.total', 0);
