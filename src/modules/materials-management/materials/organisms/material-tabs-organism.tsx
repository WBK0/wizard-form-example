import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs.tsx';
import { useLocation, useNavigate } from 'react-router-dom';

const MaterialTabsOrganism = ({ mode }: { mode: 'create' | 'edit' }) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <Tabs value={pathname} className="w-full mb-4">
            <TabsList>
                <TabsTrigger
                    value={`/materials-management/materials/${mode}`}
                    onClick={() => navigate(`/materials-management/materials/${mode}`)}
                >
                    Detale
                </TabsTrigger>
                <TabsTrigger
                    value={`/materials-management/materials/${mode}/characteristics`}
                    onClick={() =>
                        navigate(`/materials-management/materials/${mode}/characteristics`)
                    }
                >
                    Charakterystyki
                </TabsTrigger>
            </TabsList>
        </Tabs>
    );
};

export { MaterialTabsOrganism };
