import React from "react";

export default function TableCell({ title }) {
  return (
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <div className="flex items-center">
        <div className="ml-3">
          <p className="text-gray-900 whitespace-no-wrap">{title}</p>
        </div>
      </div>
    </td>
  );
}
