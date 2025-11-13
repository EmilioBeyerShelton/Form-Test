"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/infrastructure/components/ui/card";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setBusinessUsers } from "@/store/signupSlice";
import { useRouter } from "next/navigation";
import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/infrastructure/components/ui/field";
import { Input } from "@/infrastructure/components/ui/input";
import { Button } from "@/infrastructure/components/ui/button";
import { useState } from "react";
import { type BusinessUser } from "@/store/signupSlice";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/infrastructure/components/ui/item";

export default function AddUsersPage() {
  const dispatch = useDispatch();
  const businessUsers = useSelector(
    (state: RootState) => state.signup.businessUsers,
  );
  const router = useRouter();
  const [newBusinessUsers, setNewBusinessUsers] = useState<BusinessUser[]>(
    businessUsers || [],
  );

  const formSchema = z.object({
    firstName: z.string().min(1, { message: "First Name is required" }),
    lastName: z.string().min(1, { message: "Last Name is required" }),
    email: z.email({ message: "Invalid email address" }),
    ssn: z.stringFormat("ssn", /^\d{9}$/, { message: "Invalid SSN" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      ssn: "",
    },
  });

  function handleFormSubmit(data: z.infer<typeof formSchema>) {
    const newUser = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      ssn: parseInt(data.ssn),
    };
    setNewBusinessUsers([...newBusinessUsers, newUser]);
    form.reset();
  }

  function handleSubmit() {
    dispatch(setBusinessUsers(newBusinessUsers));
    router.push("/review");
  }

  return (
    <main className="flex h-screen w-full max-w-2xl flex-col items-center">
      <h2 className="text-2xl font-semibold">Add business users</h2>
      <p className="text-muted-foreground">
        Add up to 5 users that will be part of this business account.
      </p>

      <Card className="mt-6 w-full">
        <CardHeader>
          <CardTitle>Business users (optional)</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            id="add-users-form"
            onSubmit={form.handleSubmit(handleFormSubmit)}
          >
            <FieldGroup>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="email">E-Mail *</FieldLabel>
                      <Input {...field} id="email" />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="ssn"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="ssn">SSN *</FieldLabel>
                      <Input
                        {...field}
                        id="ssn"
                        type="number"
                        placeholder="123456789"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>
              <div className="flex justify-center">
                <Button type="submit">Add User</Button>
              </div>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      {newBusinessUsers.length > 0 && (
        <Card className="mt-4 w-full">
          <CardHeader>
            <CardTitle>Added Business Users</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {newBusinessUsers.map((user, index) => {
              return (
                <Item key={index} variant="outline">
                  <ItemContent>
                    <ItemTitle>
                      {user.firstName} {user.lastName}
                    </ItemTitle>
                    <ItemDescription>
                      Email: {user.email} | SSN: {user.ssn}
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        const updatedUsers = newBusinessUsers.filter(
                          (_, i) => i !== index,
                        );
                        setNewBusinessUsers(updatedUsers);
                      }}
                    >
                      {" "}
                      Remove
                    </Button>
                  </ItemActions>
                </Item>
              );
            })}
          </CardContent>
        </Card>
      )}
      <div className="mt-4 flex w-full justify-end">
        <Button onClick={handleSubmit}>Continue</Button>
      </div>
    </main>
  );
}
