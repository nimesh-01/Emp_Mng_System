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
      const logedUser = localStorage.getItem("logedInUser")
      const usData = JSON.parse(logedUser)
      console.log(usData);
      
      if (usData) {
        console.log(usData);

        setUser(usData.role)
        setlogedInUser(usData.data)

      }
      else{
        setUser(null)
      }
    }
  }, [])

  const handleLogin = (email, password) => {
    if (email == "admin@ex.com" && password == '123') {
      localStorage.setItem("logedInUser", JSON.stringify({ role: 'admin' }))
      console.log("Admin login");
      setlogedInUser(JSON.parse(localStorage.getItem('admin'))[0])
      setUser({ role: 'admin' })

    }
    else if (userData) {
      const employee = userData.find((e) => e.email == email && e.password == password)
      if (employee) {
        console.log("Emloyee login");
        setlogedInUser(employee)
        setUser({ role: 'employee' })
        localStorage.setItem("logedInUser", JSON.stringify({ role: 'employee' }))
      }
    }
    else {
      alert("Invalid Credentials...")

    }
  }
  return (
    <>

      {!user ? <Login handleLogin={handleLogin} /> : user.role == 'admin' ? <AdminDash data={logedInUser}  /> : <EmpDash data={logedInUser} />}
    </>
  )
}

export default App
