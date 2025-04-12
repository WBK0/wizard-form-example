import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/home.tsx';
import MaterialsManagementWrapper from '@/modules/materials-management/materials-management-wrapper.tsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wizard-form" element={<MaterialsManagementWrapper />} />
      </Routes>
    </div>
  );
}

export default App;
