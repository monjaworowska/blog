import { BrowserRouter, Switch } from "react-router-dom";
import Post from "./component/Post";
import User from "./component/User";

const post = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body:
    "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
};

const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

const App = () => (
  <BrowserRouter>
    <div className="container mt-3">
      <div>
        <User user={user} />
        <br></br>
        <Post post={post} user={user} />
        <br></br>
        <Post post={post} user={user} details />
        <br></br>
      </div>
    </div>
    <Switch>
      {/*<Route path="/users/:id/posts" component={UsersPost} />*/}
    </Switch>
  </BrowserRouter>
);

export default App;
