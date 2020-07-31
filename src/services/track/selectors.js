// @packages
import { get } from 'lodash';

export const selectContextUriTrack = ({ track }) => get(track, 'data.album.uri', '');
