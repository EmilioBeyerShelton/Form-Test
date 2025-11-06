"use client";

import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/store";
import { toggleProduct } from "@/store/signupSlice";
import { SquareCheck, Square } from "lucide-react";
import { Button } from "@/infrastructure/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/infrastructure/components/ui/card";

export default function AdditionalProducts() {
  const products = useSelector((s: RootState) => s.signup.products);
  const dispatch = useDispatch();
  const router = useRouter();

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
    {
      id: "money_market",
      title: "Money Market",
      desc: "Higher yields with flexible access.",
    },
    {
      id: "high_yield_savings",
      title: "High Yield Savings",
      desc: "Grow your savings with competitive rates.",
    },
  ];

  return (
    <main className="flex w-full max-w-3xl flex-col items-center">
      <h2 className="text-2xl font-semibold">Additional Products</h2>
      <p className="text-muted-foreground">Add extras to your base account.</p>

      <div className="mt-6 grid w-full grid-cols-2 gap-4">
        {available.map((a) => {
          const active = products.includes(a.id);
          return (
            <Card
              key={a.id}
              onClick={() => dispatch(toggleProduct(a.id))}
              className={`hover:cursor-pointer hover:drop-shadow-lg ${active ? "border border-black" : ""}`}
            >
              <CardHeader>
                <CardTitle>{a.title}</CardTitle>
                <CardDescription>{a.desc}</CardDescription>
                <CardAction>{active ? <SquareCheck /> : <Square />}</CardAction>
              </CardHeader>
            </Card>
          );
        })}
      </div>

      <div className="mt-6 flex w-full justify-between px-4">
        <Button onClick={() => router.push("/create-account")}>Back</Button>
        <Button onClick={() => router.push("/create-account/setup-account")}>
          Continue
        </Button>
      </div>
    </main>
  );
}
