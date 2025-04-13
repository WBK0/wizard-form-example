import { Link, Route, Routes } from 'react-router-dom';
import Home from '@/pages/home.tsx';
import MaterialsManagementWrapper from '@/modules/materials-management/materials-management-wrapper.tsx';
import MaterialsWrapper from '@/modules/materials-management/materials/materials-wrapper.tsx';
import CreateMaterialForm from '@/modules/materials-management/materials/pages/form/create/create-material-form.tsx';
import CreateMaterialDetailsTemplate from '@/modules/materials-management/materials/templates/create-material-details-template.tsx';
import CreateMaterialCharacteristicsTemplate from '@/modules/materials-management/materials/templates/create-material-characteristics-template.tsx';

function App() {
    return (
        <div>
            <nav>
                <ul className="flex justify-center gap-4 font-light py-2 shadow-md">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/materials-management/materials/create">Create Material</Link>
                    </li>
                </ul>
            </nav>
            <main className="container mx-auto py-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/materials-management" element={<MaterialsManagementWrapper />}>
                        <Route path="materials" element={<MaterialsWrapper />}>
                            <Route path="create" element={<CreateMaterialForm />}>
                                <Route path="" element={<CreateMaterialDetailsTemplate />} />
                                <Route
                                    path="characteristics"
                                    element={<CreateMaterialCharacteristicsTemplate />}
                                />
                            </Route>
                        </Route>
                    </Route>
                </Routes>
            </main>
        </div>
    );
}

export default App;
