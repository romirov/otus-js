import { user } from './addFieldToObject';

export function copyObjectWithNewField() {
  const admin = JSON.parse(JSON.stringify(user));
  admin.name = 'admin';
  admin.role = 'admin';
  return admin;
}
