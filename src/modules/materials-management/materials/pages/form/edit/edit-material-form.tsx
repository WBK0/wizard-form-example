import { Outlet } from 'react-router-dom';
import { MaterialTabsOrganism } from '@/modules/materials-management/materials/organisms/material-tabs-organism.tsx';

const EditMaterialForm = () => {
    return (
        <div className="flex flex-col">
            <h1 className="text-2xl">Edytowanie materiału</h1>
            <div className="flex flex-col mt-8">
                <MaterialTabsOrganism mode="edit" />
                <Outlet />
            </div>
        </div>
    );
};

export default EditMaterialForm;
