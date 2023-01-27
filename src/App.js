import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'
import { Box } from '@mui/material';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

import './App.css';

const Home = lazy(() => import('./pages/Home'))
const VideoDetail = lazy(() => import('./pages/VideoDetail'))
const Navbar = lazy(() => import('./components/Navbar'))
const SearchFeed = lazy(() => import('./components/SearchFeed'))

TimeAgo.addDefaultLocale(en)

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    {/* <Suspense> */}
    <BrowserRouter>
      <Box>
        <Navbar />
        <Routes>
          <Route path='/' exact element = {<Home />} />
          <Route path='/video/:id' exact element = {<VideoDetail />} />
          <Route path='/channel/:id' exact element = {<Home />} />
          <Route path='/search/:searchInput' exact element = {<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
    {/* </Suspense> */}
    <ReactQueryDevtools initialIsOpen = {false} position='bottom-right'/>
    </QueryClientProvider>
  );
}

export default App;
