"use client";

import { cn } from "@/lib/utils";
import { type Control, Controller, type FieldValues, type Path } from "react-hook-form";
import { HiEyeSlash, HiMiniEye } from "react-icons/hi2";
import { useState } from "react";

type FormInputProps<T extends FieldValues> = React.ComponentPropsWithRef<"input"> & {
  control: Control<T>;
  name: Path<T>;
};

export const FormInput = <T extends FieldValues>(props: FormInputProps<T>) => {
  const { control, name, type, className, ...rest } = props;
  const [showPassword, setShowPassword] = useState(type);

  const Icon = showPassword === "password" ? HiMiniEye : HiEyeSlash;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <div className="flex flex-col gap-y-1 w-full">
          <div className="relative flex justify-between items-center gap-x-2.5">
            <input
              {...field}
              {...rest}
              type={type === "password" ? showPassword : type}
              className={cn(
                "font-light 2xl:text-lg bg-shades-grey-10 border border-shades-grey-15 placeholder:text-shades-grey-35 rounded-full p-4 xl:p-5 2xl:p-6 focus-visible:outline-none w-full",
                type === "password" ? "pr-12 xl:pr-14 2xl:pr-16" : null,
                className,
                fieldState.error && "border-red-500"
              )}
            />
            {type === "password" ? (
              <Icon
                onClick={() =>
                  setShowPassword((prev) => (prev === "password" ? "text" : "password"))
                }
                className="absolute right-4 xl:right-5 2xl:right-6 size-5 text-shades-grey-35 cursor-pointer"
              />
            ) : null}
          </div>
          <span className="text-xs 2xl:text-sm text-red-500 text-center">
            {fieldState.error?.message}
          </span>
        </div>
      )}
    />
  );
};
