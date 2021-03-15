import List from "../component/List";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const Users = () => {
  return <List url={USERS_URL} type="users" />;
};

export default Users;
