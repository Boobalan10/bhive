import React from "react";

const HomeView = React.lazy(() => import('../Views/HomeView'));

const PageRoutes = [
    { id: '1', path: '/', name: 'Home Page View', element: HomeView }
]

export default PageRoutes;