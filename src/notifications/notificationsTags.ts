import { OneSignal } from "react-native-onesignal";

export function tagUserEmailcreate(email: string){
    OneSignal.User.addTag("user_email", email);
}

export function tagUserDeleteTag(key: string){
    OneSignal.User.removeTag(key);
}

export function tagUserInfoCreate(name: string, email: string){
    OneSignal.User.addTags({
        user_name: name,
        user_email: email
    })
}