import React from "react";

export default function banner({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="p-4 border-b">signin navbar</div>
      {children};
    </div>
  );
}
