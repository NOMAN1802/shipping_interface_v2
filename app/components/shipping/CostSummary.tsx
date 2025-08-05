"use client"

const CostSummary = () => {
  const costItems = [
    { label: "Total Cost", value: "$100.00", color: "text-gray-800" },
    { label: "Repacking/Consolidation", value: "$10.00", color: "text-gray-800" },
    { label: "Total Shipping Cost", value: "$510.00", color: "text-blue-600 font-semibold" },
  ]

  return (
    <div className="col-span-3 border border-blue-600">
      <div className="bg-blue-200 border border-blue-400 rounded-lg overflow-hidden">
        <div className="grid grid-cols-3 divide-x divide-blue-200">
          {costItems.map((item, index) => (
            <div key={index} className="px-6  text-center">
              <p className="mb-2 text-sm font-medium text-gray-600">{item.label}</p>
              <p className={`${item.color} text-xl font-bold`}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CostSummary
