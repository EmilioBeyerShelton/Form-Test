"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/store";
import { setAccountType } from "@/store/signupSlice";
import { Button } from "@/infrastructure/components/ui/button";

export default function Home() {
  const accountType = useSelector((s: RootState) => s.signup.accountType);
  const dispatch = useDispatch();
  const [error, setError] = useState<string | null>(null);

  function select(type: "personal" | "business") {
    dispatch(setAccountType(type));
    setError(null);
  }

  const router = useRouter();

  function continueNext() {
    if (!accountType) return setError("Please select an account to continue.");
    router.push("/additional-products");
  }

  const personalFeatures = [
    "No monthly fees",
    "Instant transfers",
    "Mobile app",
  ];
  const businessFeatures = [
    "Multi-user access",
    "Higher limits",
    "Accounting integrations",
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center gap-8 py-20 px-6 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-bold">Welcome to Atlas Bank</h1>
        <p className="text-zinc-600">
          Create an account to manage your money, get rewards, and access extra
          products.
        </p>

        <div className="flex w-full gap-6">
          <div
            className={`flex-1 rounded-lg border p-6 ${
              accountType === "personal" ? "ring-2 ring-primary" : ""
            }`}
          >
            <h3 className="text-xl font-semibold">Personal Account</h3>
            <ul className="mt-3 space-y-1 text-sm text-zinc-700">
              {personalFeatures.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <div className="mt-4">
              <Button
                onClick={() => select("personal")}
                variant={accountType === "personal" ? "secondary" : "default"}
              >
                Select
              </Button>
            </div>
          </div>

          <div
            className={`flex-1 rounded-lg border p-6 ${
              accountType === "business" ? "ring-2 ring-primary" : ""
            }`}
          >
            <h3 className="text-xl font-semibold">Business Account</h3>
            <ul className="mt-3 space-y-1 text-sm text-zinc-700">
              {businessFeatures.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <div className="mt-4">
              <Button
                onClick={() => select("business")}
                variant={accountType === "business" ? "secondary" : "default"}
              >
                Select
              </Button>
            </div>
          </div>
        </div>

        {error && <div className="text-destructive">{error}</div>}

        <div className="w-full flex justify-end">
          <Button onClick={continueNext}>Continue</Button>
        </div>
      </main>
    </div>
  );
}
