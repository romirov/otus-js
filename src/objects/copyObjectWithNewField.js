import { user } from "./addFieldToObject";

export function copyObjectWithNewField(){
    let admin = JSON.parse(JSON.stringify(user));
    admin.name = "admin";
    admin.role = "admin"
    return admin;
}