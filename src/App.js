import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Nav from "./component/Nav";
import Posts from "./view/Posts";
import PostDetails from "./view/PostDetails";
import UserPosts from "./view/UserPosts";
import Users from "./view/Users";

const App = () => (
  <BrowserRouter>
    <Nav />
    <div className="container">
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/posts" />} />
        <Route path="/blog" render={() => <Redirect to="/posts" />} />
        <Route path="/posts" component={Posts} />
        <Route path="/post/:id" component={PostDetails} />
        <Route path="/:id/:user/posts" component={UserPosts} />
        <Route path="/users" component={Users} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
