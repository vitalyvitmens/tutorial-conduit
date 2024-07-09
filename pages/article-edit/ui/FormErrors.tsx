import { useActionData } from "@remix-run/react";
import { action } from "../api/action";

export function FormErrors() {
  const actionData = useActionData<typeof action>();

  if (Array.isArray(actionData?.errors)) {
    return (
      <ul className="error-messages">
        {actionData.errors.map((error: string) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
    );
  }
  return null;
}
