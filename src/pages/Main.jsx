import { useSelector } from "react-redux"
import Navbar from "../components/Navbar"
export default function Main() {
  const user = useSelector((state) => state.user)
  return (
    <div>
      <Navbar />
        <h1 className="text-3xl font-semibold text-[#512c16] underline-offset-1">Welcome! {user.user.name}</h1>
    </div>
  )
}
