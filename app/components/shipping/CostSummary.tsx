"use client"

const CostSummary = () => {
  const costItems = [
    { label: "Total Cost", value: "$100.00", color: "text-gray-800" },
    { label: "Repacking/Consolidation", value: "$10.00", color: "text-gray-800" },
    { label: "Total Shipping Cost", value: "$510.00", color: "text-blue-600 font-semibold" },
  ]

  return (
    <div className="col-span-3 border-1 border-blue-600 rounded-xl p-0.5 bg-blue-300 shadow-sm">
      <div className="bg-blue-100 border border-blue-700 rounded-xl overflow-hidden">
      <div className="flex divide-x divide-blue-300">
          {costItems.map((item, index) => (
            <div key={index} className="flex-1 px-6 py-4 text-center relative">
              <p className="mb-2 text-sm font-medium text-gray-700">{item.label}</p>
              <p className={`${item.color} text-xl font-bold`}>{item.value}</p>

              {index < costItems.length - 1 && <div className="absolute right-0 top-0 bottom-0 w-px h-1/2 my-auto bg-blue-300"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CostSummary
