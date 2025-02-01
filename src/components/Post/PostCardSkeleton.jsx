const PostCardSkeleton = () => {
    return (
      <div className="animate-pulse bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md w-full ">
        {/* Image Skeleton */}
        <div className="w-full h-48  bg-slate-300 dark:bg-gray-700 rounded-lg"></div>
  
        {/* Title Skeleton */}
        <div className="mt-4 h-6 bg-slate-300 dark:bg-gray-700 w-3/4 rounded-md"></div>
  
        {/* Description Skeleton */}
        <div className="mt-2 h-4 bg-slate-300 dark:bg-gray-700 w-full rounded-md"></div>
        <div className="mt-2 h-4 bg-slate-300 dark:bg-gray-700 w-5/6 rounded-md"></div>
  
        {/* Action Buttons Skeleton */}
        <div className="mt-4 flex space-x-3">
          <div className="w-10 h-10 bg-slate-300 dark:bg-gray-700 rounded-full"></div>
          <div className="w-10 h-10 bg-slate-300 dark:bg-gray-700 rounded-full"></div>
          <div className="w-10 h-10 bg-slate-300 dark:bg-gray-700 rounded-full"></div>
        </div>
      </div>
    );
  };
  
  export default PostCardSkeleton;
  