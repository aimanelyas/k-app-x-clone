import { useState } from "react"
import Nav from "../components/Nav"
import Header from "../components/Header"
import Feed from "../components/Feed"
// import PopUp from "../components/PopUp"

const App = () => {

  const userId = 'f95ede60-d9b9-4137-b59c-a9d78fc77217'

  

  return (
      <div className="app">
        <Nav />
        <Header />
        <Feed />
        {/* <PopUp /> */}
      </div>
  )
}

export default App
