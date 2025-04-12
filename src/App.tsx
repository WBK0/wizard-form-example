import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/home.tsx';
import WizardFormWrapper from '@/modules/wizard-form/wizard-form-wrapper.tsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wizard-form" element={<WizardFormWrapper />} />
      </Routes>
    </div>
  );
}

export default App;
