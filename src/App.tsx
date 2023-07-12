import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { Header } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
