/* eslint-disable no-unused-vars */
import { BrowserRouter, Link, Route, useParams, useRouteMatch,Switch } from "react-router-dom";

function Account () {
    const {account} = useParams()
    return <h3>ID:{account}</h3>
}

function Post () {
    let {postId} = useParams()
    return (
        <div>
            <h3>{postId}</h3>
        </div>
    )
}

function Posts () {
    let{path,url} = useRouteMatch()
    
    return(
        <>
        <h3>Posts</h3>
        <ul>
           <li><Link to={`${url}/hello-world`}>Hello World</Link></li>
           <li><Link to={`${url}/pie-recipe`}>How to make Pie</Link></li>
           <li><Link to={`${url}/sky-coloring`}>Why is the sky blue</Link></li>
        </ul>
        <Switch>
        <Route exact path={path}>
            <h3>Select a blog post</h3>
        </Route>
        <Route path={`${path}/:postId`}>
            <Post />
        </Route>
        </Switch>
        </>
        
    )
}

export default function Body() {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    
                    <li><Link to="/posts">Posts</Link></li>
                </ul>
             <Switch>
              <Route exact path="/">
              <h3>Home</h3>
              </Route> 
              <Route path="/posts">
              <Posts/>
              </Route>   
             </Switch>  
            </div>
        
        </BrowserRouter>
    )


}