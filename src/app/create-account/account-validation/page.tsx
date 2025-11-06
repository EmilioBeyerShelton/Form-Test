"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setOTPVerified } from "@/store/signupSlice";
import { Button } from "@/infrastructure/components/ui/button";

export default function AccountValidation() {
  const dispatch = useDispatch();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  function submit() {
    if (code !== "123456") return alert("Invalid code");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(setOTPVerified(true));
      router.push("/personal-information");
    }, 2000);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50">
      <main className="w-full max-w-md bg-white p-8">
        <h2 className="text-2xl font-semibold">Account Validation</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Enter the 6-digit code sent to your e-mail. (Use 123456)
        </p>
        <label className="block mt-4">
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="mt-1 w-full border rounded p-2"
          />
        </label>

        <div className="mt-6 flex justify-end">
          <Button onClick={submit} disabled={loading}>
            {loading ? "Verifying…" : "Verify"}
          </Button>
        </div>
      </main>
    </div>
  );
}
