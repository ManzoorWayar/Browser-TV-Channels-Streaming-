import React from 'react'
import { Route, RouterProvider } from 'react-router-dom'
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import TVScreen from './components/TVScreen'
import Layout from './components/Layout'
import ChannelState from './context/channel/channelState'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="tv" element={<TVScreen />} />
        <Route path="about-us" element={<AboutUs />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Route>
    )
  )

  return <ChannelState><RouterProvider router={router} /></ChannelState>
}

export default App