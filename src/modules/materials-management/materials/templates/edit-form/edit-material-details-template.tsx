import { MaterialDetailsOrganism } from '@/modules/materials-management/materials/organisms/material-details-organism.tsx';
import { Form } from '@/components/ui/form.tsx';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    MaterialDetails,
    materialDetails,
} from '@/modules/materials-management/types/material-details.form.ts';

const CreateMaterialDetailsTemplate = () => {
    const methods = useForm<MaterialDetails>({
        defaultValues: {
            number: '',
            description: '',
            sku: '',
        },
        resolver: zodResolver(materialDetails),
    });

    const onSubmit = (data: MaterialDetails) => {
        console.log(data);
    };

    const onReset = () => {
        methods.reset();
    };

    return (
        <Form {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <MaterialDetailsOrganism methods={methods} onReset={onReset} />
            </form>
        </Form>
    );
};

export default CreateMaterialDetailsTemplate;
