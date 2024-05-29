import BestRecipe from "../components/Home/BestRecipe"
import Hero from "../components/Home/Hero"
import WhatMakesUsDifferent from "../components/Home/WhatMakesUsDifferent"
import Navbar from "../components/Navbar"
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <BestRecipe />
      <WhatMakesUsDifferent/>
    </div>
  )
}
