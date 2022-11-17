import { Routes, Route } from "react-router-dom";

import HomeUsers from '../../routes/HomeUsers'
import Users from '../../routes/Users'
import User from '../../routes/Users/User'
import Error from '../../routes/Error'

const MainUsers = () => {

  return (
      <Routes>

        <Route path="/" element={<HomeUsers />} />
        
        <Route path="users" element={<Users/>} />

        <Route path="users/:userId" element={<User/>} />

        <Route path="*" element={<Error />} />

      </Routes>
  )
}

  export default MainUsers;