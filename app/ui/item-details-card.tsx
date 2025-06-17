import React from "react";

interface ItemDetailsCardProps {
  children: React.ReactNode;
}

function ItemDetailsCard({ children }: ItemDetailsCardProps) {
  return (
    <div className="bg-zinc-800/50 rounded-lg border-1 border-zinc-700 max-w-sm flex flex-col justify-center items-center p-2">
      {children}
    </div>
  );
}

export default ItemDetailsCard;
