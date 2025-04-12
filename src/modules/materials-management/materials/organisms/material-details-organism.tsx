import { FormItem } from '@/molecules';
import { Card } from '@/components/ui/card.tsx';
import { FormField } from '@/components/ui/form.tsx';
import { UseFormReturn } from 'react-hook-form';
import { MaterialDetails } from '@/modules/materials-management/types/material-details.form.ts';
import { Button } from '@/components/ui/button.tsx';

const MaterialDetailsOrganism = ({
    methods,
    onReset,
}: {
    methods: UseFormReturn<MaterialDetails>;
    onReset?: () => void;
}) => {
    return (
        <Card className="px-4 flex flex-col gap-3">
            <FormField
                control={methods.control}
                name="number"
                render={({ field }) => (
                    <FormItem>
                        <FormItem.Label>Numer materiału</FormItem.Label>
                        <FormItem.Input {...field} />
                    </FormItem>
                )}
            />
            <FormField
                control={methods.control}
                name="description"
                render={({ field }) => (
                    <FormItem>
                        <FormItem.Label>Opis materiału</FormItem.Label>
                        <FormItem.Input {...field} />
                    </FormItem>
                )}
            />
            <FormField
                control={methods.control}
                name="sku"
                render={({ field }) => (
                    <FormItem>
                        <FormItem.Label>SKU</FormItem.Label>
                        <FormItem.Input {...field} />
                    </FormItem>
                )}
            />
            <div className="flex justify-end gap-3">
                {onReset && (
                    <Button variant="outline" onClick={onReset} type="button">
                        Reset
                    </Button>
                )}
                <Button>Dalej</Button>
            </div>
        </Card>
    );
};

export { MaterialDetailsOrganism };
