import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from './Routes/Routes.jsx';
import AuthProvider from './providers/AuthProvider.jsx';



ReactDOM.createRoot(document.getElementById("root")).render(
 <div className="max-w-7xl mx-auto">
   <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
 </div>
);
