import {NavLink, Link, Outlet } from "react-router-dom"

import useGetData from '../../hooks/useGetData'

const urlUsers = 'https://jsonplaceholder.typicode.com/users'

const Users = () => {

const users = useGetData(urlUsers)
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem"
        }}
      >
        {users.data.map(({id, name}) => (
          <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : ""
            };
          }}
          to={`/users/${id}`}
          key={id}
        >
          {name}

        </NavLink>
        ))}
          {/* <Link to=""><p>hhh</p></Link> */}

      </nav>
      <Outlet/>
    </div>
  );
}

  export default Users;