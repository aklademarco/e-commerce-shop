import React from "react";

function productCardSkeleton() {
  return (
    <div className="min-w-52 w-52 sm:min-w-68 sm:w-68">
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="animate-pulse">
          <div className="aspect-14/16 bg-gray-300 w-full rounded-2xl"></div>
          <div className="p-4">
            <div className="h-6 w-full bg-gray-300 rounded mb-2"></div>
            <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default productCardSkeleton;
