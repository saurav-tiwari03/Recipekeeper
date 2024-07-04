import { useSelector } from "react-redux"
import Navbar from "../components/Navbar"
export default function Main() {
  const user = useSelector((state) => state.user)
  return (
    <div>
      <Navbar />
        <h1 className="text-3xl font-semibold text-[#512c16] underline-offset-1">This is Main Page</h1>
        <h2>Welcome! {user.user.name}</h2>
    </div>
  )
}
