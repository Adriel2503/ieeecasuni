export default function Loading() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex items-start gap-6 mb-8">
        <div className="w-20 h-20 rounded-full animate-shimmer" />
        <div className="flex-1 space-y-3">
          <div className="h-6 w-48 rounded animate-shimmer" />
          <div className="h-4 w-64 rounded animate-shimmer" />
        </div>
      </div>

      <div className="border-2 border-primary-100 bg-white p-2">
        <div className="border border-primary-100 px-6 py-12 sm:px-12 sm:py-16 space-y-6">
          <div className="h-12 w-48 mx-auto rounded animate-shimmer" />
          <div className="h-4 w-64 mx-auto rounded animate-shimmer" />
          <div className="h-px w-24 mx-auto bg-primary-100" />
          <div className="h-4 w-32 mx-auto rounded animate-shimmer" />
          <div className="h-10 w-3/4 mx-auto rounded animate-shimmer" />
          <div className="h-4 w-40 mx-auto rounded animate-shimmer" />
          <div className="h-6 w-2/3 mx-auto rounded animate-shimmer" />
          <div className="space-y-2 max-w-xs mx-auto">
            <div className="h-3 w-full rounded animate-shimmer" />
            <div className="h-3 w-full rounded animate-shimmer" />
            <div className="h-3 w-1/2 mx-auto rounded animate-shimmer" />
          </div>
          <div className="flex justify-between items-end pt-8">
            <div className="w-[120px] h-[120px] rounded animate-shimmer" />
            <div className="space-y-2">
              <div className="h-3 w-24 rounded animate-shimmer" />
              <div className="h-4 w-40 rounded animate-shimmer" />
              <div className="h-3 w-24 rounded animate-shimmer" />
              <div className="h-4 w-48 rounded animate-shimmer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
