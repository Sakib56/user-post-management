import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import UsersPage from './Pages/UsersPage.jsx';
import PostsPage from './Pages/PostsPage.jsx';
import UsersDetailsPage from './Pages/UsersDetailsPage.jsx';
import PostsDetailsPage from './Pages/PostsDetailsPage.jsx';
import Home from './Pages/Home.jsx';
import CreatePostPage from './Pages/CreatePostPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/users',
        element: <UsersPage></UsersPage>
      },
      {
        path: '/users/:id',
        element: <UsersDetailsPage></UsersDetailsPage>,
        loader: ({ params }) => fetch(`https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/users/${params.id}`)
      },
      {
        path: '/posts',
        element: <PostsPage></PostsPage>
      },
      {
        path: '/createNewPost',
        element: <CreatePostPage/>
      },
      {
        path: '/posts/:id',
        element: <PostsDetailsPage></PostsDetailsPage>,
        loader: ({ params }) => fetch(`https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/posts/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
