import {
  BadgeCheckIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/outline";
import clsx from "clsx";
import { useState } from "react";
import type { FC } from "react";

export const Newsletter: FC = () => {
  const [form, setForm] = useState<{
    message: string;
    state: "error" | "success" | "loading" | "initial";
  }>({ message: "", state: "initial" });

  const subscribe = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setForm({ message: "", state: "loading" });

    const formData = new FormData(e.target as HTMLFormElement);

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        email: formData.get("email"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { error } = await res.json();
    if (error) {
      setForm({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        message: error,
        state: "error",
      });
      return;
    }

    setForm({
      message: "Please check your email to confirm your subscription!",
      state: "success",
    });
  };

  return (
    <div className="px-3 my-6 w-full">
      <div className="relative">
        <div className="relative">
          <form
            className="sm:flex sm:mx-auto mt-6 sm:max-w-lg"
            onSubmit={subscribe}
          >
            <div className="relative flex-1 min-w-0">
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="block py-3 px-5 w-full text-base placeholder-gray-500 text-gray-900 rounded-md border border-transparent focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 shadow-sm focus:outline-none"
                placeholder="Enter your email"
              />
              {form?.state === "error" && (
                <div className="flex absolute inset-y-0 right-0 items-center pr-3 text-red-500 pointer-events-none">
                  <ExclamationCircleIcon className="w-3 h-3" />
                </div>
              )}
              {form?.state === "success" && (
                <div className="flex absolute inset-y-0 right-0 items-center pr-3 text-green-500 pointer-events-none">
                  <BadgeCheckIcon className="w-3 h-3" />
                </div>
              )}
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-3">
              <button
                type="submit"
                className={clsx(
                  "inline-flex items-center py-3 px-5 sm:px-10 w-full text-base font-medium text-white bg-indigo-500 hover:bg-indigo-400 dark:bg-indigo-600 dark:hover:bg-indigo-500 rounded-md border border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 shadow focus:outline-none",
                  "cursor-not-allowed" && form?.state === "loading",
                )}
              >
                {form?.state === "loading" && (
                  <svg
                    className="mr-3 w-5 h-5 text-white animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                )}
                {form?.state === "loading" && "Loading..."}
                {form?.state !== "loading" && "Subscribe"}
              </button>
            </div>
          </form>
          {form?.state === "error" && (
            <p
              className="px-5 mt-2 text-sm text-red-300 dark:text-red-500"
              id="email-error"
            >
              {form?.message}
            </p>
          )}
          {form?.state === "success" && (
            <p
              className="px-5 mt-2 text-sm text-green-300 dark:text-green-500"
              id="email-success"
            >
              {form?.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
