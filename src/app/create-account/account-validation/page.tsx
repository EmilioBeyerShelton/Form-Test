"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setOTPVerified } from "@/store/signupSlice";
import { Button } from "@/infrastructure/components/ui/button";
import { Card, CardContent } from "@/infrastructure/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/infrastructure/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import {
  FieldGroup,
  Field,
  FieldLabel,
  FieldError,
} from "@/infrastructure/components/ui/field";
import { Spinner } from "@/infrastructure/components/ui/spinner";
import { toast } from "sonner";
import { Toaster } from "@/infrastructure/components/ui/sonner";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});
export default function AccountValidation() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  function submit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    setTimeout(() => {
      if (data.pin !== "123456") {
        setLoading(false);
        toast.error("Invalid code");
        form.setError("pin", { message: "Invalid code" });
        return;
      }
      setLoading(false);
      dispatch(setOTPVerified(true));
      router.push("/create-account/personal-information");
    }, 1500);
  }

  return (
    <main className="flex h-screen w-full flex-col items-center">
      <h2 className="text-2xl font-semibold">Account Validation</h2>
      <p className="text-muted-foreground">
        Enter the 6-digit code sent to your e-mail. (Use 123456)
      </p>
      <Card className="mt-6 w-full max-w-sm">
        <CardContent>
          <div className="flex w-full justify-center">
            <form
              id="otp-form"
              onSubmit={form.handleSubmit(submit)}
              className="w-[256px]"
            >
              <FieldGroup>
                <Controller
                  name="pin"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field className="flex items-center">
                      <FieldLabel>Verification Code</FieldLabel>
                      <InputOTP
                        disabled={loading}
                        maxLength={6}
                        {...field}
                        pattern={REGEXP_ONLY_DIGITS}
                      >
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                      <FieldError errors={[fieldState.error]} />
                    </Field>
                  )}
                />

                <div className="mt-6 flex justify-center">
                  <Button type="submit" form="otp-form" disabled={loading}>
                    {loading ? <Spinner /> : ""}Submit
                  </Button>
                </div>
              </FieldGroup>
            </form>
          </div>
        </CardContent>
      </Card>
      <Toaster position="top-center" />
    </main>
  );
}
