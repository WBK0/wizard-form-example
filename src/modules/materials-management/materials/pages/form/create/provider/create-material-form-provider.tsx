import { ReactNode, useRef } from 'react';
import { createStore, StoreApi } from 'zustand';
import {
    CreateMaterialFormContext,
    CreateMaterialFormStore,
} from '@/modules/materials-management/materials/pages/form/create/provider/create-material-form-context.tsx';
import { UnitOfMeasure } from '@/types/unit-of-measure.enum.ts';

type CreateMaterialFormProviderProps = {
    children: ReactNode;
};

export const CreateMaterialFormProvider = ({ children }: CreateMaterialFormProviderProps) => {
    const storeRef = useRef<StoreApi<CreateMaterialFormStore> | null>(null);

    if (storeRef.current === null) {
        storeRef.current = createStore<CreateMaterialFormStore>((set) => ({
            details: {
                number: '',
                sku: '',
                description: '',
            },
            characteristics: {
                name: '',
                unit: UnitOfMeasure.Pieces,
                value: '',
            },
            setDetails: (details) => set({ details }),
            setCharacteristics: (characteristics) => set({ characteristics }),
        }));
    }

    return (
        <CreateMaterialFormContext.Provider value={storeRef.current}>
            {children}
        </CreateMaterialFormContext.Provider>
    );
};
