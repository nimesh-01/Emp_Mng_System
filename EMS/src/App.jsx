import React, { useContext, useState } from 'react'
import Login from './components/Auth/Login'
import EmpDash from './components/Dashboard/EmpDash'
import AdminDash from './components/Dashboard/AdminDash'
import { useEffect } from 'react'
import { setLocalStorage } from './Utils/Localstorage'
import { getLocalStorage } from './Utils/Localstorage'
import { AuthContext } from './context/AuthProvider'


const App = () => {

  const [user, setUser] = useState(null)
  const [logedInUser, setlogedInUser] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)
  useEffect(() => {
    if (userData) {
      const logedInUser = localStorage.getItem("logedInUser")

      const userData = JSON.parse(logedInUser)
      if (userData) {
        console.log(userData);
        
        setUser(userData.role)
        setlogedInUser(userData.data)  

      }
    }
  }, [])

  const handleLogin = (email, password) => {
    if (email == "admin@example.com" && password == '123') {
      localStorage.setItem("logedInUser", JSON.stringify({ role: 'admin' }))
      console.log("Admin login");
      setUser('admin')

    }
    else if (userData && userData.find((e) => e.email == email && e.password == password)) {
      console.log("Emloyee login");
      localStorage.setItem("logedInUser", JSON.stringify({ role: 'employee' }))
      setUser('emloyee')
    }
    else {
      alert("Invalid Credentials...")

    }
  }
  return (
    <>

      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == 'admin' ? <AdminDash /> : <EmpDash />}
      {/* <EmpDash/> */}
      {/* <EmpDash/> */}
    </>
  )
}

export default App