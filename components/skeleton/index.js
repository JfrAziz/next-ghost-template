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
        <Skeleton height={100} count={5} />
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
