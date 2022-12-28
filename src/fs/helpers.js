import { access, constants } from 'fs';

export const checkExists = async (url) => new Promise(resolve => {
  access(url, constants.F_OK, (err) => resolve(!err));
});
