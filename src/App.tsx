import { RouterProvider } from "react-router-dom";
import { router } from "./router";

// 루트 컴포넌트
function App() {
  return <RouterProvider router={router} />;
}

export default App;
