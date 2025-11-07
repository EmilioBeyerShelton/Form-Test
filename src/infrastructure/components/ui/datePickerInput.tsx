"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/infrastructure/components/ui/button";
import { Calendar } from "@/infrastructure/components/ui/calendar";
import { Input } from "@/infrastructure/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/infrastructure/components/ui/popover";

function formatDate(
  date: Date | undefined,
  locales: Intl.LocalesArgument,
  dateFormatOptions: Intl.DateTimeFormatOptions,
) {
  if (!date) {
    return "";
  }

  return date.toLocaleDateString(locales, dateFormatOptions);
}

function isValidDate(date: Date | undefined) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

interface DatePickerInputProps {
  placeholder?: string;
  locales?: Intl.LocalesArgument;
  dateFormatOptions?: Intl.DateTimeFormatOptions;
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  id?: string;
}

export function DatePickerInput({
  placeholder = "",
  locales = "en-US",
  dateFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  },
  date,
  setDate,
  id,
}: DatePickerInputProps) {
  const [open, setOpen] = React.useState(false);
  const [month, setMonth] = React.useState<Date | undefined>(date);
  const [value, setValue] = React.useState(
    formatDate(date, locales, dateFormatOptions),
  );

  return (
    <div className="relative flex gap-2">
      <Input
        id={id}
        value={value}
        placeholder={placeholder}
        className="bg-background pr-10"
        autoComplete="off"
        autoCorrect="off"
        onChange={(e) => {
          const date = new Date(e.target.value);
          setValue(e.target.value);
          if (isValidDate(date)) {
            setDate(date);
            setMonth(date);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
          }
        }}
      />
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id={id}
            variant="ghost"
            className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
          >
            <CalendarIcon className="size-3.5" />
            <span className="sr-only">Select date</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto overflow-hidden p-0"
          align="end"
          alignOffset={-8}
          sideOffset={10}
        >
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            month={month}
            onMonthChange={setMonth}
            onSelect={(date) => {
              setDate(date);
              setValue(formatDate(date, locales, dateFormatOptions));
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
