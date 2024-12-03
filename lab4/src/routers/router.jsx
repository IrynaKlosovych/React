import { createBrowserRouter} from 'react-router-dom';
import Layout from "../components/Layout";
import { Home, Page1, Page2, Page3, NotFound } from "../pages";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> }, 
        { path: "page1", element: <Page1 /> },
        { path: "page2", element: <Page2 /> },
        { path: "page3", element: <Page3 /> },
        { path: "*", element: <NotFound /> }, 
      ],
    },
  ]);

  export default router