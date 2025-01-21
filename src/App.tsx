import './App.css';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';

import HomeBlog from './pages/HomeBlog';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Blogpost from './pages/Blogpost';
import NotFound from './components/NotFound.tsx';
import Search from './pages/search.tsx';
import Signup from './pages/Signup.tsx';
import Login from './pages/Login.tsx';
import BlogCreationPage from './pages/CreateBlogPage.tsx';
import AuthGuard from './guards/AuthGurd.tsx';

function App() {
  return (
    <Box>
      <Navbar />
      {/* <Signup /> */}
      <Box mt={9} pt={1}>
        <Routes>
          <Route path='/' element={<HomeBlog />} />
          <Route
            path='/post'
            element={
              <>
                <AuthGuard>
                  <BlogCreationPage />
                </AuthGuard>
              </>
            }
          />

          <Route path='/view/:id' element={<Blogpost />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/search' element={<Search />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
