import { Form } from '@/components/ui/form.tsx';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    materialCharacteristics,
    MaterialCharacteristics,
} from '@/modules/materials-management/types/material-characteristics.form.ts';
import { MaterialCharacteristicsOrganism } from '@/modules/materials-management/materials/organisms/material-characteristics-organism.tsx';
import { UnitOfMeasure } from '@/types/unit-of-measure.enum.ts';

const EditMaterialCharacteristicsTemplate = () => {
    const methods = useForm<MaterialCharacteristics>({
        defaultValues: {
            price: 0,
            unit_of_measure: UnitOfMeasure.Pieces,
            weight: 0,
        },
        resolver: zodResolver(materialCharacteristics),
    });

    const onSubmit = (data: MaterialCharacteristics) => {
        console.log(data);
    };

    const onReset = () => {
        methods.reset();
    };

    return (
        <Form {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <MaterialCharacteristicsOrganism methods={methods} onReset={onReset} />
            </form>
        </Form>
    );
};

export default EditMaterialCharacteristicsTemplate;
