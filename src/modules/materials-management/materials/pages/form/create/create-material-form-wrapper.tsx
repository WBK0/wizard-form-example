import { Outlet } from 'react-router-dom';

const CreateMaterialFormWrapper = () => {
    return (
        <div className="flex flex-col">
            <h1 className="text-2xl">Tworzenie materiału</h1>
            <div className="flex flex-col mt-8">
                <Outlet />
            </div>
        </div>
    );
};

export default CreateMaterialFormWrapper;
