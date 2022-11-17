import {Link, Outlet } from "react-router-dom"

const HomeInvoices = () => {
    return (
      <div>
        <h1>Users</h1>
        <p>User information</p>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
          }}
        >
          <Link to="/users">Users</Link>
          {/* <Link to="/expenses">Expenses</Link> */}
        </nav>
        <Outlet />
      </div>
    );
  }

  export default HomeInvoices