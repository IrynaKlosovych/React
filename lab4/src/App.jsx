// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
// import { Home, Page1, Page2, Page3, NotFound } from "./pages";
import router from './routers/router';
import { RouterProvider } from 'react-router-dom';
import './styles/App.css'

function App() {
  return (
    <>
      {
        //First variant

        /* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="page1" element={<Page1 />} />
              <Route path="page2" element={<Page2 />} />
              <Route path="page3" element={<Page3 />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter> */

      }

      {/*Second variant*/}
      <RouterProvider router={router} />

    </>
  )
}

export default App
