//class Based Component -> Normal Js class
import React from "react"
class Userclass extends React.Component {
    constructor(props){
        // console.log("Child Constructor");
        
        super(props);
        //State Variable
        this.state = {
            userData:{
                name: "Username",
                location:"Location",
                avatar_url: "http://dummy.com"
            },
        }
        // console.log(props);
    }

    async componentDidMount(){
        // setInterval(()=>{
        //     console.log("Hacker");
        // },1000);
        // console.log(this.props.name+"Child Mounted");
        const data = await fetch("https://api.github.com/users/jashwanthroy");
        const json = await data.json();
        this.setState({
            userData: json,
        })
        console.log(json);
    }
    componentDidUpdate(prevProps,prevState){
        if(this.state.userData.location !== prevState.location){
            console.log("PRevious!!!")
        }
        console.log("Component Updated!!!");
    }

    componentWillUnmount(){
        console.log("Component Unmounted!!");
    }

  render() {
    // console.log(this.props.name+"Child Render");
    
    return(
        <div className="user-card">
            <img src={this.state.userData.avatar_url}></img>
            <h2>Name: {this.state.userData.login}</h2>
            <h3>Location: {this.state.userData.node_id}</h3>
            <h4>Contact: jroy@Hyderabad.com</h4>
        </div>
    )
  }
}
export default Userclass;