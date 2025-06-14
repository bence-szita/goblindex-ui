import React from "react";

interface ItemDetailsCardProps {
  header: string;
  text: string | number;
}

function ItemDetailsCard({ header, text }: ItemDetailsCardProps) {
  return (
    <div className="bg-zinc-800 rounded-lg p-2 max-w-sm flex flex-col justify-center items-center">
      <h2 className="text-xs text-zinc-400">{header}</h2>
      <p className=" font-normal">{text}</p>
    </div>
  );
}

export default ItemDetailsCard;
