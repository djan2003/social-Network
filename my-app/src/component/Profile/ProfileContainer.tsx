import React from "react";
import {newPostDataType} from "../../redux/stateType";
import {RootState, StoreType} from "../../redux/redux-store";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk, setUsersProfile} from "../../redux/ProfilePageReducer";
import {withRouter} from "react-router-dom"
import {RouteComponentProps} from 'react-router';
import {API} from "../../api/axios-get";
import {WithAuthRedirect} from "../../Hoc/withAuthRedirect";

type ParamsType = {
    userID: string
}
type OwnPropsType = MapStateToPropsType & MapDispatchToProps
type PropsType = OwnPropsType & RouteComponentProps<ParamsType>
type MapStateToPropsType = {
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
}

export class ProfileContainer extends React.Component<PropsType> {
    componentDidMount(): void {
        debugger
        let userID = this.props.match.params.userID
        this.props.getProfileThunk(userID)
    }

    render(): React.ReactNode {
        return (<Profile {...this.props} profile={this.props.profile}/>)


    }
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        profile: state.profilePageReduser.profile,
        newPostData: state.profilePageReduser.newPostData
    }
}


const ProfileContainerWithRouter = withRouter(ProfileContainer)
export const ProfileMainContainer = WithAuthRedirect(connect(mapStateToProps,
    {setUsersProfile, getProfileThunk})(ProfileContainerWithRouter))