import React from "react";

const MenuItem = ({ item }: { item: { title: string; price: string; tags: string } }) => {
  return (
    <div className="flex flex-col gap-1 lg:gap-2">
      <div className="flex justify-between gap-2 items-center">
        <p className="text-golden text-2xl font-base">{item.title}</p>
        <div className="flex flex-row gap-8 items-center">
          <div className="w-30 h-[1px] bg-grey" />
          <p className="text-white text-2xl font-base">{item.price}</p>
        </div>
      </div>
      <p className="text-grey font-alt">{item.tags}</p>
    </div>
  );
};

export default MenuItem;
