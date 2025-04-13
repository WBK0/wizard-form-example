import { Form } from '@/components/ui/form.tsx';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    materialCharacteristics,
    MaterialCharacteristics,
} from '@/modules/materials-management/types/material-characteristics.form.ts';
import { MaterialCharacteristicsOrganism } from '@/modules/materials-management/materials/organisms/material-characteristics-organism.tsx';
import { useNavigate } from 'react-router-dom';
import { useCreateMaterialForm } from '@/modules/materials-management/materials/pages/form/create/provider/use-create-material-form.tsx';
import { useEffect } from 'react';
import { UnitOfMeasure } from '@/types/unit-of-measure.enum.ts';

const CreateMaterialDetailsTemplate = () => {
    const details = useCreateMaterialForm((state) => state.details);
    const setCharacteristics = useCreateMaterialForm((state) => state.setCharacteristics);
    const characteristics = useCreateMaterialForm((state) => state.characteristics);
    const navigate = useNavigate();
    const methods = useForm<MaterialCharacteristics>({
        defaultValues: {
            price: 0,
            unit_of_measure: UnitOfMeasure.Pieces,
            weight: 0,
        },
        resolver: zodResolver(materialCharacteristics),
    });

    const onSubmit = (data: MaterialCharacteristics) => {
        setCharacteristics(data);
        console.log({
            details,
            characteristics: data,
        });
    };

    const onPreviousPage = () => {
        navigate('/materials-management/materials/create');
    };

    useEffect(() => {
        methods.reset(characteristics);
    }, [methods, characteristics]);

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
