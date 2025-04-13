import { useContext } from 'react';
import { useStore } from 'zustand';
import {
    CreateMaterialFormContext,
    CreateMaterialFormStore,
} from '@/modules/materials-management/materials/pages/form/create/provider/create-material-form-context.tsx';

export const useCreateMaterialForm = <T,>(selector: (state: CreateMaterialFormStore) => T): T => {
    const store = useContext(CreateMaterialFormContext);
    if (!store)
        throw new Error('useCreateMaterialForm must be used within a CreateMaterialFormProvider');
    return useStore(store, selector);
};
