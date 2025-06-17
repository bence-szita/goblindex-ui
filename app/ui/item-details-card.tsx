import React from "react";

interface ItemDetailsCardProps {
  header: string;
  text: string | number;
}

function ItemDetailsCard({ header, text }: ItemDetailsCardProps) {
  return (
    <div className="bg-zinc-800/50 rounded-lg border-1 border-zinc-700 max-w-sm flex flex-col justify-center items-center p-2">
      <h2 className="text-xs text-zinc-400">{header}</h2>
      <p className=" font-normal">{text}</p>
    </div>
  );
}

export default ItemDetailsCard;
