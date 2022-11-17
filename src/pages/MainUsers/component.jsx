import { Routes, Route } from "react-router-dom";

import HomeUsers from '../../routes/HomeUsers'
import Users from '../../routes/Users'
import User from '../../routes/Users/User'
import Error from '../../routes/Error'

const MainUsers = () => {


  return (
      <Routes>

        <Route path="/" element={<HomeUsers />} >
          <Route path="users" element={<Users/>} >

          <Route
            index={true}
            element={<User />}
          />

            <Route path=":userId" element={<User/>} />
          </Route>

          {/* <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          /> */}
          </Route>
          <Route path="*" element={<Error />} />

      </Routes>
        
  )
}

  export default MainUsers;