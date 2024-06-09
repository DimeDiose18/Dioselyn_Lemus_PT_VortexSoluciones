import { Card } from "./Card";
import { Home } from "./Home";
import { Login } from "./Login";
import { Resources } from "./Resources";
import { Signup } from "./Signup";
import { WhyScribbleHub } from "./WhyScribbleHub";
import { YourFeed } from "./YourFeed";

const viewsData = [
    {
        path: "/signin",
        element: <Login />,
        title: "signin",
    },
    {
        path: "/signup",
        element: <Signup />,
        title: "signup",
    },
    {
        path: "/",
        element: <Home />,
        title: "home",
    },
    {
        path: "/your-feed",
        element: <YourFeed />,
        title: "your-feed",
    },
    {
        path: "/resources",
        element: <Resources />,
        title: "your-feed",
    },
    {
        path: "/why-scribblehub",
        element: <WhyScribbleHub />,
        title: "your-feed",
    },
    {
        path: "/card/1",
        element: <Card />,
        title: "your-card",
    }

];

export { viewsData }