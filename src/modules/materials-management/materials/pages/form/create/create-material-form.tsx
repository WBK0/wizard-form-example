import { Outlet } from 'react-router-dom';
import { MaterialTabsOrganism } from '@/modules/materials-management/materials/organisms/material-tabs-organism.tsx';
import { CreateMaterialFormProvider } from '@/modules/materials-management/materials/pages/form/create/provider/create-material-form-provider.tsx';

const CreateMaterialForm = () => {
    return (
        <div className="flex flex-col">
            <h1 className="text-2xl">Tworzenie materiału</h1>
            <div className="flex flex-col mt-8">
                <MaterialTabsOrganism mode="create" />
                <CreateMaterialFormProvider>
                    <Outlet />
                </CreateMaterialFormProvider>
            </div>
        </div>
    );
};

export default CreateMaterialForm;
