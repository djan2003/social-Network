import React from "react";
import {newPostDataType} from "../../redux/stateType";
import {StoreType} from "../../redux/redux-store";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {stateType} from "../../redux/state";
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
type PropsFromApp={
    store:StoreType
    newPostData:Array<newPostDataType>
}
type OwnPropsType=MapStateToPropsType&MapDispatchToProps&PropsFromApp
type PropsType=OwnPropsType&RouteComponentProps<ParamsType>
type MapStateToPropsType ={
    profile:any
}
type MapDispatchToProps={
    setUsersProfile:(profile:any)=>void
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

const mapStateToProps=(state:any):MapStateToPropsType=>{
    return{
profile:state.profilePageReduser.profile
    }
}


const ProfileContainerWithRouter= withRouter(ProfileContainer)
export const ProfileMainContainer = connect(mapStateToProps,{setUsersProfile})(ProfileContainerWithRouter)