import { useParams } from "react-router-dom";

import useGetData from '../../../hooks/useGetData'
// const urlUser = 'https://jsonplaceholder.typicode.com/users/1'

const User = () => {
  let {userId} = useParams();
console.log('userId',userId);

const user = useGetData(`https://jsonplaceholder.typicode.com/users/${userId}`)
console.log('user', user);

if(!user) {
  return (
      <main style={{ padding: "1rem" }}>
        <p>Select an invoice</p>
      </main>
  )
}

  return (
    <main style={{ padding: "1rem" }}>
      <h2>User Name: {user.data.username}</h2>
      <p>
        {user.data.email}: {user.data.website}
      </p>
      {/* <p>Due Date: {invoice.due}</p> */}
      <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
          }}
        >
          {/* <Link to="/">User</Link> */}
          {/* <Link to="/expenses">Expenses</Link> */}
        </nav>
    </main>
  );
}

  export default User;