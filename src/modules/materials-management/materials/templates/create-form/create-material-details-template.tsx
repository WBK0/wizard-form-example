import { MaterialDetailsOrganism } from '@/modules/materials-management/materials/organisms/material-details-organism.tsx';
import { Form } from '@/components/ui/form.tsx';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    MaterialDetails,
    materialDetails,
} from '@/modules/materials-management/types/material-details.form.ts';
import { useCreateMaterialForm } from '@/modules/materials-management/materials/pages/form/create/provider/use-create-material-form.tsx';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const CreateMaterialDetailsTemplate = () => {
    const setDetails = useCreateMaterialForm((state) => state.setDetails);
    const details = useCreateMaterialForm((state) => state.details);
    const methods = useForm<MaterialDetails>({
        defaultValues: {
            number: '',
            description: '',
            sku: '',
        },
        resolver: zodResolver(materialDetails),
    });

    const navigate = useNavigate();

    const onSubmit = (data: MaterialDetails) => {
        setDetails(data);
        navigate('characteristics');
    };

    useEffect(() => {
        methods.reset(details);
    }, [methods, details]);

    return (
        <Form {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <MaterialDetailsOrganism methods={methods} />
            </form>
        </Form>
    );
};

export default CreateMaterialDetailsTemplate;
