import Navbar from "../components/Navbar";
import LeftPart from "./../components/Profile/LeftPart";
import RightPart from "../components/Profile/RightPart";
// import { useParams } from "react-router-dom"
export default function Profile() {
  // const {userName} = useParams()

  return (
    <div>
      <Navbar/>
      <div className="flex gap-12 mt-12">
        <LeftPart />
        <RightPart />
      </div>
    </div>
  )
}
