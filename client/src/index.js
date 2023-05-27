import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

import "./index.css"
import "./scrollbar.css"
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Error404 from "views/404"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
    
      <Route path="" element={<App/>}>
        <Route path="" element={<h1>Home</h1>}/>
        <Route path="1" element={<h1>1</h1>}/>
        <Route path="2" element={<h1>2</h1>}/>
        <Route path="3" element={<h1>3</h1>}/>
        <Route path="4" element={<h1>4</h1>}/>
        <Route path="5" element={<h1>5</h1>}/>
        <Route path="6" element={<h1>6</h1>}/>
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