import User from "./User";
import Userclass from "./Userclass";
import React from "react";
// const AboutPage = () =>{
//     return (
//         <div>
//             <h1>About Page</h1>
//             {/* <User /> */}
//             <Userclass name={"Jashwanth Roy"} location={"Hyd"}/>
//         </div>
//     )
// }
class Aboutpage extends React.Component {
    constructor(props){
        // console.log("Parent Constructor");
        
        super(props)
    }
    componentDidMount(){
        // console.log("Parent Mounted");
        
    }
  render() {
    // console.log("Parent Render");
    
    return (
      <div>
        <h1>About Page</h1>
        {/* <User /> */}
        <Userclass name={"Jashwanth Roy"} location={"Hyd"} />
      </div>
    );
  }
}
export default Aboutpage;
