import { material } from '@/modules/materials-management/models/material.ts';
import { z } from 'zod';

const materialDetails = material.pick({
    number: true,
    description: true,
    sku: true,
});

type MaterialDetails = z.infer<typeof materialDetails>;
export { materialDetails, type MaterialDetails };
