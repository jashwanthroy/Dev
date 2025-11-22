//class Based Component -> Normal Js class
import React from "react"
class Userclass extends React.Component {
    constructor(props){
        super(props);
        // console.log(props);
    }
  render() {
    return(
        <div className="user-card">
            <h2>Name: {this.props.name}</h2>
            <h3>Location: {this.props.location}</h3>
            <h4>Contact: jroy@Hyderabad.com</h4>
        </div>
    )
  }
}
export default Userclass;