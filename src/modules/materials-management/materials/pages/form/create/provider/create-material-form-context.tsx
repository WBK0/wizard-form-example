import { createContext } from 'react';
import { MaterialDetails } from '@/modules/materials-management/types/material-details.form.ts';
import { MaterialCharacteristics } from '@/modules/materials-management/types/material-characteristics.form.ts';
import { StoreApi } from 'zustand';

export type CreateMaterialFormState = {
    details: Partial<MaterialDetails>;
    characteristics: Partial<MaterialCharacteristics>;
};

export type CreateMaterialFormActions = {
    setDetails: (details: MaterialDetails) => void;
    setCharacteristics: (characteristics: MaterialCharacteristics) => void;
};

export type CreateMaterialFormStore = CreateMaterialFormState & CreateMaterialFormActions;

export const CreateMaterialFormContext = createContext<StoreApi<CreateMaterialFormStore> | null>(
    null
);
