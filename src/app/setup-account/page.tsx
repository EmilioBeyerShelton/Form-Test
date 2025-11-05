"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/store/signupSlice";
import { Button } from "@/infrastructure/components/ui/button";

export default function SetupAccount() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  function submit() {
    if (!email || !password) return alert("Please enter email and password");
    dispatch(setCredentials({ email, password }));
    router.push("/account-validation");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50">
      <main className="w-full max-w-lg bg-white p-8">
        <h2 className="text-2xl font-semibold">Setup Account</h2>
        <label className="block mt-4">
          <div className="text-sm">E-Mail</div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full border rounded p-2"
          />
        </label>
        <label className="block mt-4">
          <div className="text-sm">Password</div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full border rounded p-2"
          />
        </label>
        <div className="mt-6 flex justify-end">
          <Button onClick={submit}>Continue</Button>
        </div>
      </main>
    </div>
  );
}
