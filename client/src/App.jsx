import { useEffect, useState } from "react"
import Nav from "../components/Nav"
import Header from "../components/Header"
import Feed from "../components/Feed"
// import PopUp from "../components/PopUp"

const App = () => {

  const [user, setUser] = useState(null)
  const [threads, setThreads] = useState(null)
  const [viewThreadsFeed, setViewThreadsFeed] = useState(true)
  const [filteredThreads, setFilteredThreads] = useState(null)

  const userId = "e3096bc3-2a51-4300-8b4f-6180b8b3a660"

  const getUser = async () => {
    try {
      const response = await fetch(`http://localhost:3000/users?user_uuid=${userId}`)
      const data = await response.json()
      setUser(data[0])
    } catch (error) {
      console.error(error)  
    }
  }
  
  const getThreads = async () => {
    try {
      const response = await fetch (`http://localhost:3000/threads?thread_form=${userId}`)
      const data = await response.json()
      setThreads(data)
    } catch (error) {
      console.error(error)
    }
  }

  const getThreadsFeed = () => {
    if (viewThreadsFeed) {
      const standAloneThread = threads?.filter(thread => thread.reply_to === null)
      setFilteredThreads(standAloneThread)
    }
    if (!viewThreadsFeed) {
      const replyThreads = threads?.filter(thread => thread.reply_to!== null)
      setFilteredThreads(replyThreads)
    }
  }

  useEffect(() => {
    getUser()
    getThreads()
  }, [])

  useEffect(() => {
    getThreadsFeed()
  }, [user, threads, viewThreadsFeed])

  console.log(filteredThreads)

  return (
    <>
      { user && <div className="app">
        <Nav url={user.instagram_url} />
        <Header
        user= {user}
        viewThreadsFeed={viewThreadsFeed}
        setViewThreadsFeed={setViewThreadsFeed}
        />
        <Feed />
        {/* <PopUp /> */}
      </div> }
    </>
  )
}

export default App
