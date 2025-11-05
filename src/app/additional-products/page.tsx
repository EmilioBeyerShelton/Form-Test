"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { toggleProduct } from "@/store/signupSlice";
import { Button } from "@/infrastructure/components/ui/button";

export default function AdditionalProducts() {
  const products = useSelector((s: RootState) => s.signup.products);
  const dispatch = useDispatch();

  const available = [
    {
      id: "investment",
      title: "Investment Package",
      desc: "Auto-invest spare change and boost savings.",
    },
    {
      id: "cashback",
      title: "Cashback Rewards",
      desc: "Earn cashback on qualifying purchases.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50">
      <main className="w-full max-w-3xl bg-white p-8">
        <h2 className="text-2xl font-semibold">Additional Products</h2>
        <p className="text-muted-foreground">
          Add extras to your base account.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4">
          {available.map((a) => {
            const active = products.includes(a.id);
            return (
              <div
                key={a.id}
                className={`p-4 border rounded ${
                  active ? "ring-2 ring-primary" : ""
                }`}
              >
                <h4 className="font-medium">{a.title}</h4>
                <p className="text-sm text-zinc-600">{a.desc}</p>
                <div className="mt-3">
                  <Button
                    onClick={() => dispatch(toggleProduct(a.id))}
                    variant={active ? "secondary" : "default"}
                  >
                    {active ? "Remove" : "Add"}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex justify-end">
          <Button onClick={() => (window.location.href = "/setup-account")}>
            Continue
          </Button>
        </div>
      </main>
    </div>
  );
}
