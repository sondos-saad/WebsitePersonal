import "./App.css"
import { Page } from "./components/Pages/Page"
import { useEffect } from "react"


import AOS from "aos"
import "aos/dist/aos.css"

function App() {
  //aos
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      <Page />
    </>
  )
}

export default App