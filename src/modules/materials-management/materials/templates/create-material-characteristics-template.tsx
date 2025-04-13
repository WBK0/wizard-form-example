import { Form } from '@/components/ui/form.tsx';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    materialCharacteristics,
    MaterialCharacteristics,
} from '@/modules/materials-management/types/material-characteristics.form.ts';
import { MaterialCharacteristicsOrganism } from '@/modules/materials-management/materials/organisms/material-characteristics-organism.tsx';

const CreateMaterialDetailsTemplate = () => {
    const methods = useForm<MaterialCharacteristics>({
        resolver: zodResolver(materialCharacteristics),
    });

    const onSubmit = (data: MaterialCharacteristics) => {
        console.log(data);
    };

    const onPreviousPage = () => {
        console.log();
    };

    return (
        <Form {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <MaterialCharacteristicsOrganism
                    methods={methods}
                    onPreviousPage={onPreviousPage}
                />
            </form>
        </Form>
    );
};

export default CreateMaterialDetailsTemplate;
