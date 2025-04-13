import { z } from 'zod';
import { material } from '@/modules/materials-management/models/material.ts';

const materialCharacteristics = material.pick({
    price: true,
    unit_of_measure: true,
    weight: true,
});

type MaterialCharacteristics = z.infer<typeof materialCharacteristics>;
export { materialCharacteristics, type MaterialCharacteristics };
