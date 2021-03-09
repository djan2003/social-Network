import React from "react";
import { compose } from "redux"
import {newPostDataType} from "../../redux/stateType";
import {RootState} from "../../redux/redux-store";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    changeStatusProfileThunk,
    getProfileThunk,
    getStatusProfileThunk,
    setUsersProfile
} from "../../redux/ProfilePageReducer";
import {withRouter} from "react-router-dom"
import {RouteComponentProps} from 'react-router';
import {WithAuthRedirect} from "../../Hoc/withAuthRedirect";

type ParamsType = {
    userID: string
}
type OwnPropsType = MapStateToPropsType & MapDispatchToProps
type PropsType = OwnPropsType & RouteComponentProps<ParamsType>
type MapStateToPropsType = {
    status:string
    profile: any
    newPostData: Array<newPostDataType>

}
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string

}
type PhotoType = {
    small: string | null
    large: string | null
}
type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotoType

}
type MapDispatchToProps = {
    getProfileThunk: (userID: any) => void
    getStatusProfileThunk:(userID: string)=>void
    changeStatusProfileThunk:(status:string)=>void
}

export class ProfileContainer extends React.Component<PropsType> {
    componentDidMount(): void {
        let userID = this.props.match.params.userID
        this.props.getProfileThunk(userID)
        this.props.getStatusProfileThunk(userID)
    }

    render(): React.ReactNode {
        return (<Profile {...this.props} profile={this.props.profile}
                          status={this.props.status} updateStatus={this.props.changeStatusProfileThunk}    />)


    }
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        profile: state.profilePageReduser.profile,
        newPostData: state.profilePageReduser.newPostData,
        status:state.profilePageReduser.status
    }
}

export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps,
    {setUsersProfile, getProfileThunk,
        getStatusProfileThunk,changeStatusProfileThunk}),
    withRouter)
(ProfileContainer)
