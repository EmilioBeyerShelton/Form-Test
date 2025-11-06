"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setPersonalInfo } from "@/store/signupSlice";
import { Button } from "@/infrastructure/components/ui/button";

export default function PersonalInformation() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [ssn, setSsn] = useState("");

  const router = useRouter();

  function submit() {
    if (!name || !dob || !ssn) return alert("Please fill all fields");
    dispatch(setPersonalInfo({ name, dob, ssn }));
    router.push("/review");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50">
      <main className="w-full max-w-lg bg-white p-8">
        <h2 className="text-2xl font-semibold">Personal Information</h2>

        <label className="block mt-4">
          <div className="text-sm">Full name</div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full border rounded p-2"
          />
        </label>

        <label className="block mt-4">
          <div className="text-sm">Date of birth</div>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="mt-1 w-full border rounded p-2"
          />
        </label>

        <label className="block mt-4">
          <div className="text-sm">Social Security Number</div>
          <input
            value={ssn}
            onChange={(e) => setSsn(e.target.value)}
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
