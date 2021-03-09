import React, {useState} from "react"

type PropsType = {
    status:any
    updateStatus:(status:string)=>void
}
export class Status extends React.Component<PropsType>{
state={
    editMode: false,
    status: this.props.status

}
    activateEditMode = () => {
        this.setState( {
            editMode: true
        } );
    }
    deactivateEditMode() {
        this.setState( {
            editMode: false
        } );
        // @ts-ignore
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e:any) => {
        this.setState({
            status: e.currentTarget.value
        });
    }


  render() {
      return (
          <div>
              {!this.state.editMode &&
              <div>
                  <span onDoubleClick={ this.activateEditMode }>{this.props.status || "-------"}</span>
              </div>
              }
              {this.state.editMode &&
              <div>
                  <input onChange={this.onStatusChange} autoFocus={true}
                         onBlur={ this.deactivateEditMode.bind(this) } value={this.state.status}/>
              </div>
              }
          </div>
      )
  }


}