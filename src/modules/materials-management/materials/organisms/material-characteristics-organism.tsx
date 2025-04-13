import { FormItem } from '@/molecules';
import { Card } from '@/components/ui/card.tsx';
import { FormField } from '@/components/ui/form.tsx';
import { UseFormReturn } from 'react-hook-form';
import { Button } from '@/components/ui/button.tsx';
import { MaterialCharacteristics } from '@/modules/materials-management/types/material-characteristics.form.ts';
import { UnitOfMeasure } from '@/types/unit-of-measure.enum.ts';

const MaterialCharacteristicsOrganism = ({
    methods,
    onPreviousPage,
    onReset,
}: {
    methods: UseFormReturn<MaterialCharacteristics>;
    onPreviousPage?: () => void;
    onReset?: () => void;
}) => {
    const enumValues = Object.values(UnitOfMeasure);

    return (
        <Card className="px-4 flex flex-col gap-3">
            <FormField
                control={methods.control}
                name="price"
                render={({ field }) => (
                    <FormItem>
                        <FormItem.Label>Cena</FormItem.Label>
                        <FormItem.Input type="number" {...field} />
                    </FormItem>
                )}
            />
            <FormField
                control={methods.control}
                name="unit_of_measure"
                render={({ field }) => (
                    <FormItem>
                        <FormItem.Label>Jednostka miary</FormItem.Label>
                        <FormItem.Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormItem.SelectTrigger placeholder="Jednostka miary" />
                            <FormItem.SelectContent>
                                {enumValues.map((value) => (
                                    <FormItem.SelectItem key={value} value={value}>
                                        {value}
                                    </FormItem.SelectItem>
                                ))}
                            </FormItem.SelectContent>
                        </FormItem.Select>
                    </FormItem>
                )}
            />
            <FormField
                control={methods.control}
                name="weight"
                render={({ field }) => (
                    <FormItem>
                        <FormItem.Label>Waga</FormItem.Label>
                        <FormItem.Input type="number" {...field} />
                    </FormItem>
                )}
            />
            <div className="flex justify-between">
                <div>
                    {onPreviousPage && (
                        <Button variant="outline" onClick={onPreviousPage} type="button">
                            Wróć
                        </Button>
                    )}
                </div>
                <div className="flex justify-end gap-3">
                    {onReset && (
                        <Button variant="outline" onClick={onReset} type="button">
                            Reset
                        </Button>
                    )}
                    <Button>Dalej</Button>
                </div>
            </div>
        </Card>
    );
};

export { MaterialCharacteristicsOrganism };
