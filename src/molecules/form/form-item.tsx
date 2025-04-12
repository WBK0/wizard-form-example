import * as React from 'react';
import { cn } from '@/lib/utils.ts';
import { Input } from '@/components/ui/input.tsx';
import { FormLabel } from '@/components/ui/form.tsx';
import { FormControl, FormItem as FormItemShadCn, FormMessage } from '@/components/ui/form.tsx';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import * as SelectPrimitive from '@radix-ui/react-select';

type FormFieldProps = React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
    children: React.ReactNode;
};

export const FormItemLabel = (props: React.ComponentProps<'label'>) => {
    const { className, ...rest } = props;

    return <FormLabel className={cn(className)} {...rest} />;
};

export const FormItemInput = (props: React.ComponentProps<'input'>) => {
    const { className, ...rest } = props;

    return (
        <FormControl>
            <Input className={cn(className)} {...rest} />
        </FormControl>
    );
};

export const FormItemSelect = (props: React.ComponentProps<typeof SelectPrimitive.Root>) => {
    const { ...rest } = props;

    return (
        <FormControl>
            <Select {...rest} />
        </FormControl>
    );
};

export const FormItemTrigger = (props: React.ComponentProps<typeof SelectPrimitive.Value>) => {
    const { className, ...rest } = props;

    return (
        <SelectTrigger className={cn('w-full', className)}>
            <SelectValue {...rest} />
        </SelectTrigger>
    );
};

export const FormItemSelectContent = (
    props: React.ComponentProps<typeof SelectPrimitive.Content>
) => {
    const { children, ...rest } = props;
    return <SelectContent {...rest}>{children}</SelectContent>;
};

export const FormItemSelectItem = (props: React.ComponentProps<typeof SelectPrimitive.Item>) => {
    const { children, ...rest } = props;
    return <SelectItem {...rest}>{children}</SelectItem>;
};

const FormItemBase = function FormField(props: FormFieldProps) {
    const { className, children, ...rest } = props;

    return (
        <FormItemShadCn className={cn('grid grid-cols-2 w-full', className)} {...rest}>
            {children}
            <FormMessage />
        </FormItemShadCn>
    );
};

FormItemBase.Label = FormItemLabel;
FormItemBase.Input = FormItemInput;
FormItemBase.Select = FormItemSelect;
FormItemBase.SelectTrigger = FormItemTrigger;
FormItemBase.SelectContent = FormItemSelectContent;
FormItemBase.SelectItem = FormItemSelectItem;

export const FormItem = FormItemBase;
