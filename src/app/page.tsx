"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/store";
import { setAccountType } from "@/store/signupSlice";
import { Button } from "@/infrastructure/components/ui/button";
import { CircleCheck } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/infrastructure/components/ui/card";
import { Checkbox } from "@/infrastructure/components/ui/checkbox";

interface AccountTypes {
  type: "personal" | "business";
  title: string;
  description: string;
  features: string[];
}

export default function Home() {
  const selectedAaccountType = useSelector(
    (s: RootState) => s.signup.accountType,
  );
  const dispatch = useDispatch();
  const [error, setError] = useState<string | null>(null);

  function select(type: "personal" | "business") {
    dispatch(setAccountType(type));
    setError(null);
  }

  const router = useRouter();

  function continueNext() {
    if (!selectedAaccountType)
      return setError("Please select an account to continue.");
    router.push("/additional-products");
  }

  const accountTypes: AccountTypes[] = [
    {
      type: "personal" as const,
      title: "Personal Account",
      description: "A personal account for everyday banking needs.",
      features: ["No monthly fees", "Instant transfers", "Mobile app"],
    },
    {
      type: "business" as const,
      title: "Business Account",
      description: "A business account with advanced features.",
      features: [
        "Multi-user access",
        "Higher limits",
        "Accounting integrations",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center gap-8 bg-white px-6 py-20 dark:bg-black">
        <h1 className="text-5xl font-bold">Welcome to Atlas Bank</h1>
        <p className="text-zinc-600">
          Create an account to manage your money, get rewards, and access extra
          products.
        </p>
        <p className="text-xl font-bold">
          Choose the type of account you would like to open:
        </p>

        <div className="grid w-full grid-cols-2 gap-6">
          {accountTypes.map((accountType) => (
            <AccountTypeCard
              key={accountType.type}
              accountType={accountType}
              onClick={() => select(accountType.type)}
              isSelected={accountType.type === selectedAaccountType}
            />
          ))}
        </div>

        {error && <div className="text-destructive">{error}</div>}

        <div className="flex w-full justify-center">
          <Button onClick={continueNext}>Continue</Button>
        </div>
      </main>
    </div>
  );
}

const AccountTypeCard = ({
  accountType,
  onClick,
  isSelected,
}: {
  accountType: AccountTypes;
  onClick: () => void;
  isSelected: boolean;
}) => {
  return (
    <Card
      className={`${isSelected ? "border-2 border-black" : ""}`}
      onClick={() => onClick()}
    >
      <CardHeader>
        <CardTitle>{accountType.title}</CardTitle>
        <CardDescription>{accountType.description}</CardDescription>
        <CardAction>
          <Checkbox checked={isSelected} />
        </CardAction>
      </CardHeader>
      <CardContent>
        <ol className="flex flex-col gap-2">
          {accountType.features.map((f, index) => (
            <li key={index}>
              <div className="flex gap-2">
                <CircleCheck /> {f}
              </div>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
};
