import React from "react";
import {newPostDataType} from "../../redux/stateType";
import {RootState, StoreType} from "../../redux/redux-store";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUsersProfile} from "../../redux/ProfilePageReducer";
import  {withRouter} from "react-router-dom"
import { RouteComponentProps } from 'react-router';


/*type propsType={
    store:StoreType
    newPostData:Array<newPostDataType>
    setUsersProfile:(state:stateType)=>void
    profile:any

}*/
type ParamsType={
    userID:string
}
type OwnPropsType=MapStateToPropsType&MapDispatchToProps
type PropsType=OwnPropsType&RouteComponentProps<ParamsType>
type MapStateToPropsType ={
    profile:any
    newPostData:Array<newPostDataType>

}
type ContactsType={
    github: string
    vk: string
    facebook:string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink:string

}
type PhotoType={
    small:string|null
    large:string|null
}
type ProfileType={
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription:string
    fullName: string
    contacts:ContactsType
    photos:PhotoType

}
type MapDispatchToProps={
    setUsersProfile:(profile:ProfileType)=>void
}
export class ProfileContainer extends React.Component<PropsType>{
    componentDidMount(): void {
        let userID=this.props.match.params.userID
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/`+userID)
            .then(response => {
                this.props.setUsersProfile(response.data);
            } )
    }
    render(): React.ReactNode {
        return ( <Profile {...this.props} profile={this.props.profile}/>)


    }
}

const mapStateToProps=(state:RootState):MapStateToPropsType=>{
    return{
profile:state.profilePageReduser.profile,
        newPostData:state.profilePageReduser.newPostData
    }
}


const ProfileContainerWithRouter= withRouter(ProfileContainer)
export const ProfileMainContainer = connect(mapStateToProps,{setUsersProfile})(ProfileContainerWithRouter)