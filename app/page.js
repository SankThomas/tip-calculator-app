"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Divide } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState("");

  const tipAmount = bill && people ? (bill * (tip / 100)) / people : 0;
  const totalPerPerson = bill && people ? bill / people + tipAmount : 0;

  const handleReset = () => {
    setBill("");
    setTip(0);
    setCustomTip("");
    setPeople("");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 bg-teal-100">
      <Image
        src="/logo.svg"
        alt="Splitter"
        width={400}
        height={400}
        className="mb-10 w-20 object-cover"
      />
      <div>
        <div className="grid w-full max-w-4xl grid-cols-1 gap-6 rounded-2xl bg-white p-6 text-neutral-900 shadow-lg md:grid-cols-2">
          <div className="space-y-6">
            <article>
              <Label htmlFor="bill" className="mb-2 inline-block text-teal-800">
                Bill
              </Label>
              <Input
                id="bill"
                type="number"
                placeholder="$0"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                className="border-teal-100 bg-teal-50 text-teal-800 focus:ring-2 focus:ring-teal-200 lg:h-10 lg:text-lg"
              />
            </article>

            <article>
              <Label htmlFor="tip" className="mb-2 inline-block text-teal-800">
                Select tip %
              </Label>
              <div className="grid grid-cols-3 gap-2">
                {[5, 10, 15, 25, 50].map((value) => (
                  <Button
                    key={value}
                    onClick={() => setTip(value)}
                    className={`${tip === value ? "bg-teal-400" : "bg-teal-800"} hover:bg-teal-600`}
                  >
                    {value}%
                  </Button>
                ))}
                <Input
                  id="tip"
                  type="number"
                  placeholder="Custom"
                  value={customTip}
                  onChange={(e) => {
                    setCustomTip(e.target.value);
                    setTip(e.target.value);
                  }}
                  className="border-teal-100 bg-teal-50 text-teal-800 focus:ring-2 focus:ring-teal-200 lg:h-10 lg:text-lg"
                />
              </div>
            </article>

            <article>
              <Label
                htmlFor="people"
                className="mb-2 inline-block text-teal-800"
              >
                Number of People
              </Label>
              <Input
                id="people"
                type="number"
                placeholder="0"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                className="border-teal-100 bg-teal-50 text-teal-800 focus:ring-2 focus:ring-teal-200 lg:h-10 lg:text-lg"
              />
            </article>
          </div>

          <div className="flex flex-col justify-between rounded-xl bg-teal-800 p-6 text-teal-100">
            <div className="space-y-6">
              <article className="flex items-center justify-between">
                <p className="text-lg font-semibold text-white">
                  Tip Amount{" "}
                  <span className="block text-xs text-teal-400">/ person</span>
                </p>
                <p className="text-3xl font-bold">${tipAmount.toFixed(2)}</p>
              </article>

              <article className="flex items-center justify-between">
                <p className="text-lg font-semibold text-white">
                  Total{" "}
                  <span className="block text-xs text-teal-400">/ person</span>
                </p>
                <p className="text-3xl font-bold">
                  ${totalPerPerson.toFixed(2)}
                </p>
              </article>
            </div>

            <Button
              className="mt-6 w-full bg-teal-700 hover:bg-teal-600"
              onClick={handleReset}
            >
              RESET
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
