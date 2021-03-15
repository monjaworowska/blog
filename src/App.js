import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./component/Nav";
import Posts from "./view/Posts";
import PostDetails from "./view/PostDetails";
import UserPosts from "./view/UserPosts";

const App = () => (
  <BrowserRouter>
    <Nav />
    <div className="container">
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route path="/posts" component={Posts} />
        <Route path="/post/:id" component={PostDetails} />
        <Route path="/:id/:user/posts" component={UserPosts} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
