"use client";
import ProgressSteps from "./ProgressSteps";
import InfoCards from "./InfoCards";
import ConsigneeDetails from "./ConsigneeDetails";
import ShippingDetails from "./ShippingDetails";
import CostSummary from "./CostSummary";
import ShippingTables from "./ShippingTables";
import AddDetails from "./AddDetails";
import ActionButton from "./ActionButton";

const ShippingInterface = () => {
  const steps = [
    { title: "Create Shipment", completed: true },
    { title: "Repacking & Consolidation", completed: true },
    { title: "Shipment Details", completed: true },
    { title: "Shipping Method", completed: true },
    { title: "Summary & Confirmation", completed: false, current: true },
  ];

  return (
    <div className="px-3 ml-10 md:mx-auto max-w-7xl sm:px-4 md:px-6 lg:px-8">
      {/* Progress Steps */}
      <ProgressSteps steps={steps} currentStep={4} />

      {/* Info Cards */}
      <InfoCards />

      {/* Shipping Method Section */}
      <h2 className="mb-4 font-semibold text-gray-800 text-xl sm:mb-6">
        Shipping Method
      </h2>

      <div className="grid grid-cols-1 gap-4 mb-6 lg:grid-cols-2 sm:gap-6 sm:mb-8">
        {/* Consignee Details */}
        <ConsigneeDetails />
        {/* Shipping Details */}
        <ShippingDetails />
      </div>
      <div className="grid grid-cols-5 gap-4 items-center">
        {/*Add Details */}
        <AddDetails />
        {/* Cost Summary */}
        <CostSummary />
      </div>

<ActionButton/>


      {/* Tables Section */}
      <ShippingTables />
    </div>
  );
};

export default ShippingInterface;
