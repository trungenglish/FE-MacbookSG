import React, {useState} from "react";

const OrderTabs = ({tabs, setActiveTab, activeTab}) => {

    return (
        <div className="flex space-x-6 mb-10 border-b border-gray-200">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    className={`pb-4 px-4 font-medium text-base transition-colors duration-200 ${
                        activeTab === tab.id
                            ? "text-orange-600 border-b-2 border-orange-600"
                            : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    )
}

export default OrderTabs;