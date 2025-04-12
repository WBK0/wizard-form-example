import { z } from 'zod';
import { UnitOfMeasure } from '@/types/unit-of-measure.enum.ts';

const material = z.object({
    uuid: z.string().uuid(),
    number: z.string().min(1).max(12),
    description: z.string().max(255).optional(),
    sku: z.string().max(18).optional(),
    price: z.number().positive().optional(),
    unit_of_measure: z.nativeEnum(UnitOfMeasure).optional(),
    weight: z.number().positive().optional(),
});

type Material = z.infer<typeof material>;
export { material, type Material };
