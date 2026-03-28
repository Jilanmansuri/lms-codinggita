import React from "react";
import { Link } from "react-router-dom";

export default function SmallCard({ title, text, to = null }) {
  const content = (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900 h-full p-4 transition-all hover:border-neutral-700 hover:bg-neutral-800/50 group">
      <div className="text-neutral-400 text-sm group-hover:text-neutral-300 transition-colors">
        {title}
      </div>
      <div className="text-white text-base mt-1 group-hover:underline">
        {text}
      </div>
    </div>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }

  return content;
}
