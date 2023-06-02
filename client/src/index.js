import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Error404 from "views/404"
import HomeView from "views/Home"
import MyOrganizations from "views/MyOrganizations"

import "./index.css"
import "./scrollbar.css"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
    
      <Route path="" element={<App/>}>
        <Route path="" element={<HomeView/>}/>
        <Route path="/demo/scoreboard" element={<h1>Demo: Scoreboard</h1>}/>
        <Route path="/demo/match-statistics" element={<h1>Demo: Match Statistics</h1>}/>
        <Route path="/demo/livestat" element={<h1>Demo: Livestat</h1>}/>
        <Route path="/demo/ui-builder" element={<h1>Demo: UI Builder</h1>}/>
        <Route path="/me/orgs" element={<MyOrganizations/>}/>
        <Route path="/me" element={<h1>My Profile</h1>}/>

        <Route path="7" element={<h1>7</h1>}/>
        <Route path="8" element={<h1>8</h1>}/>
        <Route path="9" element={<h1>9</h1>}/>

        <Route path="/admin" element={<h1>Admin</h1>}/>
        <Route path="11" element={<h1>11</h1>}/>

        <Route path="*" element={<Error404/>}/>
      </Route>
      
      <Route path="panel/*" element={<h1>panel</h1>}>
      </Route>

      <Route path="*" element={<Error404/>}/>
    </Route>
  )
)




const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
