import User from "./User";
import Userclass from "./Userclass";
const AboutPage = () =>{
    return (
        <div>
            <h1>About Page</h1>
            <User />
            <Userclass name={"Jashwanth Roy"} location={"Hyd"}/>
        </div>
    )
}
export default AboutPage;