import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs.tsx';

const CreateMaterialForm = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <div className="flex flex-col">
            <h1 className="text-2xl">Tworzenie materiału</h1>
            <div className="flex flex-col mt-8">
                <Tabs value={pathname} className="w-full mb-4">
                    <TabsList>
                        <TabsTrigger
                            value="/materials-management/materials/create"
                            onClick={() => navigate('/materials-management/materials/create')}
                        >
                            Detale
                        </TabsTrigger>
                        <TabsTrigger
                            value="/materials-management/materials/create/characteristics"
                            onClick={() =>
                                navigate('/materials-management/materials/create/characteristics')
                            }
                        >
                            Charakterystyki
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
                <Outlet />
            </div>
        </div>
    );
};

export default CreateMaterialForm;
