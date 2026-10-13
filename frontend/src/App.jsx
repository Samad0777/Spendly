import { Toaster } from 'sonner';
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRoutes";
import AuthContextProvider from "./context/AuthContext";
import TransactionsContextProvider from "./context/TransactionsContext";
import ThemeContextProvider from './context/ThemeContext';

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <TransactionsContextProvider>
          <ThemeContextProvider>
          <RouterProvider router={router} />
          </ThemeContextProvider>
        </TransactionsContextProvider>
      </AuthContextProvider>
      <Toaster position='top-right' richColors/>
    </>
  );
};

export default App;
