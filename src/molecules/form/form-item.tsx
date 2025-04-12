import * as React from 'react';
import { cn } from '@/lib/utils.ts';
import { Input } from '@/components/ui/input.tsx';
import { FormLabel } from '@/components/ui/form.tsx';
import { FormControl, FormItem as FormItemShadCn, FormMessage } from '@/components/ui/form.tsx';

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

export const FormItem = FormItemBase;
