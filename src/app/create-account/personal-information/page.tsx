"use client";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setPersonalInfo } from "@/store/signupSlice";
import { Button } from "@/infrastructure/components/ui/button";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/infrastructure/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/infrastructure/components/ui/field";
import { Input } from "@/infrastructure/components/ui/input";
import { DatePickerInput } from "@/infrastructure/components/ui/datePickerInput";
import { RootState } from "@/store";

function isValidDate(date: Date | undefined) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

function getDate(dateStr: string) {
  const newDate = new Date(dateStr);
  if (isValidDate(new Date(newDate))) {
    return newDate;
  }
  return undefined;
}

export default function PersonalInformation() {
  const dispatch = useDispatch();
  const personalDate = useSelector((st: RootState) => st.signup.personalData);

  const formSchema = z.object({
    firstName: z.string().min(1, { message: "First Name is required" }),
    middleName: z.string().optional(),
    lastName: z.string().min(1, { message: "Last Name is required" }),
    dateOfBirth: z.date({ message: "Date of Birth is required" }),
    street: z.string().min(1, { message: "Street is required" }),
    appartment: z.string().optional(),
    city: z.string().min(1, { message: "City is required" }),
    state: z.string().min(1, { message: "State is required" }),
    zipcode: z.stringFormat("zip", /^\d{5}(?:[-\s]\d{4})?$/, {
      message: "Invalid ZIP code",
    }),
    phone: z.stringFormat(
      "phone",
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      { message: "Invalid phone number" },
    ),
  });

  const router = useRouter();

  function submit(data: z.infer<typeof formSchema>) {
    dispatch(
      setPersonalInfo({
        firstName: data.firstName,
        middleName: data.middleName ? data.middleName : "",
        lastName: data.lastName,
        dateOfBirth: data.dateOfBirth.toISOString(),
        street: data.street,
        appartment: data.appartment ? data.appartment : "",
        city: data.city,
        state: data.state,
        zipcode: data.zipcode,
        phone: data.phone,
      }),
    );
    router.push("/create-account/review");
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: personalDate.firstName,
      middleName: personalDate.middleName,
      lastName: personalDate.lastName,
      dateOfBirth: getDate(personalDate.dateOfBirth),
      street: personalDate.street,
      appartment: personalDate.appartment,
      city: personalDate.city,
      state: personalDate.state,
      zipcode: personalDate.zipcode,
      phone: personalDate.phone,
    },
  });

  return (
    <main className="flex h-screen w-full flex-col items-center">
      <h2 className="text-2xl font-semibold">Add Personal Information</h2>
      <p className="text-muted-foreground">
        Please provide your personal information to proceed.
      </p>

      <Card className="mt-6 w-full max-w-2xl">
        <CardContent>
          <form id="personal-information" onSubmit={form.handleSubmit(submit)}>
            <FieldGroup>
              <p className="font-semibold">Personal information</p>
              <div className="grid grid-cols-2 gap-6">
                <Controller
                  name="firstName"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="first-name">First Name *</FieldLabel>
                      <Input {...field} id="first-name" />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="middleName"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="middle-name">Middle Name</FieldLabel>
                      <Input {...field} id="middle-name" />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="lastName"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="last-name">Last Name *</FieldLabel>
                      <Input {...field} id="last-name" />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="dateOfBirth"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="date-of-birth">
                        Date of Birth *
                      </FieldLabel>
                      <DatePickerInput
                        id="date-of-birth"
                        date={field.value}
                        setDate={field.onChange}
                        locales="en-US"
                      />

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>
              <Controller
                name="phone"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="phone">Phone number *</FieldLabel>
                    <Input {...field} id="phone" />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <p className="font-semibold">Address</p>
              <Controller
                name="street"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="street">Street *</FieldLabel>
                    <Input {...field} id="street" />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="appartment"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="appartment">Appartment</FieldLabel>
                    <Input {...field} id="appartment" />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <div className="grid grid-cols-3 gap-6">
                <Controller
                  name="city"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="city">City *</FieldLabel>
                      <Input {...field} id="city" />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="state"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="state">State *</FieldLabel>
                      <Input {...field} id="state" />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="zipcode"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="zipcode">Zip code *</FieldLabel>
                      <Input {...field} id="zipcode" />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>
              <div className="mt-6 flex justify-center">
                <Button type="submit" form="personal-information">
                  Submit
                </Button>
              </div>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
