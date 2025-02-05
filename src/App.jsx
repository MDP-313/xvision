import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Dashboard from './pages/dashboard'
import Media from './pages/media'
import Events from './pages/events'
import Reports from './pages/reports'
import Root from './pages/root'


const router = createBrowserRouter([
  {
    path: '/', element: <Root />, children: [
      { path: '/', element: <Home /> },
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/media', element: <Media /> },
      { path: '/events', element: <Events /> },
      { path: '/reports', element: <Reports /> },
    ]
  },

])

const App = () => {

  return <RouterProvider router={router} />
}

export default App
