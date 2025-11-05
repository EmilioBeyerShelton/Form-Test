"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { setSubmittedAt } from "@/store/signupSlice";
import { Button } from "@/infrastructure/components/ui/button";

export default function Review() {
  const s = useSelector((st: RootState) => st.signup);
  const dispatch = useDispatch();

  function submit() {
    const now = new Date().toISOString();
    dispatch(setSubmittedAt(now));
    alert("Submitted — check the Submitted At timestamp");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50">
      <main className="w-full max-w-3xl bg-white p-8">
        <h2 className="text-2xl font-semibold">Review Submitted Details</h2>

        <dl className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <dt className="font-medium">Account type</dt>
            <dd className="text-zinc-700">{s.accountType ?? "—"}</dd>
          </div>
          <div>
            <dt className="font-medium">Products</dt>
            <dd className="text-zinc-700">{s.products.join(", ") || "—"}</dd>
          </div>
          <div>
            <dt className="font-medium">E-Mail</dt>
            <dd className="text-zinc-700">{s.email ?? "—"}</dd>
          </div>
          <div>
            <dt className="font-medium">OTP Verified</dt>
            <dd className="text-zinc-700">{s.otpVerified ? "Yes" : "No"}</dd>
          </div>
          <div>
            <dt className="font-medium">Full name</dt>
            <dd className="text-zinc-700">{s.name ?? "—"}</dd>
          </div>
          <div>
            <dt className="font-medium">Date of birth</dt>
            <dd className="text-zinc-700">{s.dob ?? "—"}</dd>
          </div>
          <div>
            <dt className="font-medium">SSN</dt>
            <dd className="text-zinc-700">{s.ssn ?? "—"}</dd>
          </div>
          <div>
            <dt className="font-medium">Submitted At</dt>
            <dd className="text-zinc-700">{s.submittedAt ?? "—"}</dd>
          </div>
        </dl>

        <div className="mt-6 flex justify-end">
          <Button onClick={submit}>Submit</Button>
        </div>
      </main>
    </div>
  );
}
