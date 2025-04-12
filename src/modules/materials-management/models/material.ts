import { z } from 'zod';
import { UnitOfMeasure } from '@/types/unit-of-measure.types.ts';

const material = z.object({
    number: z.preprocess(
        (value) => (value && typeof value === 'string' && value.length > 0 ? value : undefined),
        z.string().max(12)
    ),
    description: z.string().max(255),
    sku: z.string().max(18),
    price: z.number().positive(),
    unit_of_measure: z.nativeEnum(UnitOfMeasure),
    weight: z.number().positive(),
});

type Material = z.infer<typeof material>;
export { material, type Material };
