// @packages
import { get } from 'lodash';

export const selectAuthError = ({ authError }) => get(authError, 'status', false);
