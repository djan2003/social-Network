import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "api-key": "6914c902-ebb2-47bd-8235-de43c8962e59"
    }
})

export const API = {
    getProfile(userID: string) {
        return APIForProfile.getProfile(userID)
    },
    getUsers(currentPage: number = 1, pageSize: number = 10): any {
        return instance.get(`users?page=
        ${currentPage}&count=${pageSize}`)
            .then((response: any) => response.data)
    },
    unfollow(users: any) {
        return instance.delete(`follow/${users.id}`)
            .then((response: any) => response.data)
    },
    follow(users: any) {
        return instance.post(
            `follow/${users.id}`)
            .then((response: any) => response.data)
    },
    auth(){
        return instance.get(`auth/me`)
            .then((response: any) => response.data)
    }


}

export const APIForProfile= {
    getProfile(userID: string) {
        return instance.get(`profile/` + userID)
            .then((response: any) => response.data)
    },
    getStatusProfile(userID: string) {
        return instance.get(`profile/status/` + userID)
            .then((response: any) => response.data)
    },
    changeProfileStatus(status:string){
        return instance.put(`profile/status`,{status:status})

    }
}