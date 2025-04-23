import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ChatInterface } from "../components/Chat";
import ErrorBoundary from "../components/ErrorBoundary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/chat",
    element: <ChatInterface />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "*",
    element: <ErrorBoundary />,
  },
]);
