import Skeleton from "react-loading-skeleton"

export function PostSkeleton() {
  return (
    <>
      <div className="py-3 border-b">
        <div className="max-w-screen-lg mx-auto px-5">
          <Skeleton height={36} width={36} />
        </div>
      </div>
      <div className="max-w-2xl mx-auto mt-5">
        <div className="mb-4">
          <Skeleton height={50} />
        </div>
        <div className="mb-4 border-b pb-8">
          <Skeleton height={150} />
        </div>
        <div className="mb-8">
          <Skeleton height={28} />
        </div>
        <Skeleton height={100} />
        <Skeleton height={100} />
      </div>
    </>
  )
}

export function PostPreviewSkeleton() {
  return (
    <div className="my-4">
      <Skeleton height={48} />
      <Skeleton height={20} />
      <Skeleton height={60} />
    </div>
  )
}
