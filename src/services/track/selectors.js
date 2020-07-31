// @packages
import { get } from 'lodash';

export const selectContextUriTrack = ({ track }) => get(track, 'data.album.uri', '');
export const selectTrackNumber = ({ track }) => get(track, 'data.track_number', '');
