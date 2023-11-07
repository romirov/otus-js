import { user } from './addFieldToObject';

export function copyObjectWithNewField() {
  const admin = { ...user };
  admin.name = 'admin';
  admin.role = 'admin';
  return admin;
}
