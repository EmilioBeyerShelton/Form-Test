"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/store/signupSlice";
import { Button } from "@/infrastructure/components/ui/button";
import {
  Field,
  FieldSet,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/infrastructure/components/ui/field";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/infrastructure/components/ui/input";
import { Card, CardContent } from "@/infrastructure/components/ui/card";
import { H3, P } from "@/infrastructure/components/ui/typography";

const setupSchema = z
  .object({
    email: z.email({ message: "Please enter a valid e-mail" }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters. 1234asdf should work",
    }),
    confirmPassword: z.string(),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

type SetupForm = z.infer<typeof setupSchema>;

export default function SetupAccount() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SetupForm>({
    resolver: zodResolver(setupSchema),
  });

  async function onSubmit(data: SetupForm) {
    dispatch(setCredentials({ email: data.email, password: data.password }));
    router.push("/account-validation");
  }

  return (
    <main className="flex h-screen w-full flex-col items-center">
      <H3>Setup Account</H3>
      <P className="text-zinc-600">
        Enter your email and password below to setup your account
      </P>
      <Card className="mt-6 w-full max-w-sm">
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel>E-Mail</FieldLabel>
                  <Input
                    {...register("email")}
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  <FieldError errors={[errors.email]} />
                </Field>

                <Field>
                  <FieldLabel>Password</FieldLabel>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                      aria-invalid={errors.password ? "true" : "false"}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className="absolute top-2 right-2 text-sm text-zinc-500"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                  <FieldError errors={[errors.password]} />
                </Field>

                <Field>
                  <FieldLabel>Confirm password</FieldLabel>
                  <Input
                    type={showPassword ? "text" : "password"}
                    {...register("confirmPassword")}
                    aria-invalid={errors.confirmPassword ? "true" : "false"}
                  />
                  <FieldError errors={[errors.confirmPassword]} />
                </Field>

                <div className="mt-6 flex justify-center">
                  <Button type="submit" disabled={isSubmitting}>
                    Continue
                  </Button>
                </div>
              </FieldGroup>
            </FieldSet>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
