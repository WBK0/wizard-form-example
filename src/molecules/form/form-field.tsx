import * as React from 'react';
import { ForwardedRef, forwardRef } from 'react';
import { cn } from '@/lib/utils.ts';
import { Input } from '@/components/ui/input.tsx';
import { Label } from '@/components/ui/label.tsx';

type FormFieldProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: React.ReactNode;
};

type FormFieldComponent = React.ForwardRefExoticComponent<
  FormFieldProps & React.RefAttributes<HTMLDivElement>
> & {
  Label: typeof FormFieldLabel;
  Input: typeof FormFieldInput;
};

export const FormFieldLabel = (props: React.ComponentProps<'label'>) => {
  const { className, ...rest } = props;

  return <Label className={cn('text-sm font-medium text-muted-foreground', className)} {...rest} />;
};

export const FormFieldInput = (props: React.ComponentProps<'input'>) => {
  const { className, ...rest } = props;

  return <Input className={cn(className)} {...rest} />;
};

const FormFieldBase = forwardRef(function FormField(
  props: FormFieldProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { className, children, ...rest } = props;

  return (
    <div {...rest} className={cn('grid grid-cols-2 w-full', className)} ref={ref}>
      {children}
    </div>
  );
}) as FormFieldComponent;

FormFieldBase.Label = FormFieldLabel;
FormFieldBase.Input = FormFieldInput;

export const FormField = FormFieldBase;
