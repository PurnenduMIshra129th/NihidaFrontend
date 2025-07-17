// eslint-disable-next-line @typescript-eslint/naming-convention
export default function SuspenseSkeleton() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white">
      <div className="animate-pulse w-full max-w-6xl px-6 pb-8 pt-[8rem] space-y-6">
        {/* Title Placeholder */}
        <div className="h-6 w-1/3 bg-gray-200 rounded" />

        {/* Paragraph Blocks */}
        <div className="space-y-3">
          <div className="h-4 w-full bg-gray-200  rounded" />
          <div className="h-4 w-5/6 bg-gray-200  rounded" />
          <div className="h-4 w-4/6 bg-gray-200  rounded" />
        </div>

        {/* Grid or Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-24 bg-gray-200 rounded-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
