import Hero from "../components/Home/Hero"
import Navbar from "../components/Navbar"
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero className='z-[-100]'/>
    </div>
  )
}