"use client";

import { Badge } from "@/infrastructure/components/ui/badge";
import { Button } from "@/infrastructure/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/infrastructure/components/ui/card";
import { RootState } from "@/store";
import { BadgeCheck, BadgeX } from "lucide-react";
import { ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { reset } from "@/store/signupSlice";

export default function PersonalInformation() {
  const signupData = useSelector((st: RootState) => st.signup);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(reset());
    router.push("/");
  };

  return (
    <main className="flex h-screen w-full flex-col items-center">
      <h2 className="text-2xl font-semibold">Review your data</h2>
      <p className="text-muted-foreground"></p>

      <Card className="mt-6 w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <KeyValuePair
              keyName="Account Type"
              value={signupData.accountType?.toString()}
            />
            <KeyValuePair
              keyName="Products"
              value={
                <div className="flex flex-wrap gap-2">
                  {signupData.products.map((p) => (
                    <Badge variant="secondary" key={p}>
                      {p}
                    </Badge>
                  ))}
                </div>
              }
            />
          </div>
        </CardContent>
      </Card>
      <Card className="mt-6 w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <KeyValuePair
              keyName="E-Mail"
              value={
                <div className="flex gap-4">
                  {signupData.email}{" "}
                  {signupData.otpVerified ? (
                    <BadgeCheck color="green" />
                  ) : (
                    <BadgeX color="red" />
                  )}
                </div>
              }
            />
            <KeyValuePair
              keyName="First Name"
              value={signupData.personalData.firstName}
            />
            <KeyValuePair
              keyName="Last Name"
              value={signupData.personalData.lastName}
            />
            <KeyValuePair
              keyName="Phone"
              value={signupData.personalData.phone}
            />
            <KeyValuePair
              keyName="Date of Birth"
              value={new Date(
                signupData.personalData.dateOfBirth,
              ).toLocaleDateString()}
            />
          </div>
          <p className="pt-2 underline">Address:</p>
          <div>
            <KeyValuePair
              keyName="Street"
              value={signupData.personalData.street}
            />
            <KeyValuePair keyName="City" value={signupData.personalData.city} />
            <KeyValuePair
              keyName="State"
              value={signupData.personalData.state}
            />
            <KeyValuePair
              keyName="Zip Code"
              value={signupData.personalData.zipcode}
            />
          </div>
        </CardContent>
      </Card>
      <div>
        <Button className="mt-6" onClick={handleClick}>
          Back to the Start
        </Button>
      </div>
    </main>
  );
}

function KeyValuePair({
  keyName,
  value,
}: {
  keyName: string;
  value: string | undefined | ReactElement;
}) {
  return (
    <div className="flex gap-6 border-b py-2 last:border-0">
      <span className="basis-1/4 text-right font-medium">{keyName}:</span>
      <span className="basis-3/4">{value}</span>
    </div>
  );
}
