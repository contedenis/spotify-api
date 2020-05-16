// @packages
import { get } from 'lodash';

export const selectRecentlyListened = ({ recentlyListened }) => get(recentlyListened, 'list', []);
export const selectRecentlyListenedLoading = ({ recentlyListened }) => get(recentlyListened, 'loading', false);
