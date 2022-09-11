import React from 'react';
import bus1 from '../../Assets/Images/bus/bus1.jpg'

const BusInventoryCard = (product) => {
    let isActiveBool;
    if (product?.product?.isActive === 1) {
        isActiveBool = 'Yes'
    }
    else {
        isActiveBool = 'No'
    }
    return (
        <div
            class="block p-4 rounded-lg shadow-sm shadow-indigo-100"
        >
            <img
                alt="123 Wallaby Avenue, Park Road"
                src={bus1}
                class="object-cover w-full h-56 rounded-md"
            />

            <div class="mt-2">
                <dl>
                    <div>
                        <dt class="sr-only">
                            Name
                        </dt>

                        <dd class="font-medium ml-3">
                            {product?.product?.driver.Name}
                        </dd>
                    </div>
                </dl>
                <dl>
                    <div class="sm:ml-3 mt-1.5 sm:mt-0">
                        <dt class="text-gray-500">
                            Contact Number
                        </dt>

                        <dd class="font-medium">
                            {product?.product?.driver?.contact}
                        </dd>
                    </div>
                </dl>

                <dl class="flex items-center mt-6 text-xs">
                    <div class="sm:inline-flex sm:items-center sm:shrink-0">
                        <div class="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt class="text-gray-500">
                                License Number
                            </dt>

                            <dd class="font-medium">
                                {product?.product?.licenseNum}
                            </dd>
                        </div>
                    </div>

                    <div class="sm:inline-flex sm:items-center sm:shrink-0">
                        <div class="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt class="text-gray-500">
                                Codename
                            </dt>

                            <dd class="font-medium">
                                {product?.product?.codename}
                            </dd>
                        </div>
                    </div>

                    <div class="sm:inline-flex sm:items-center sm:shrink-0">
                        <div class="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt class="text-gray-500">
                                Capacity
                            </dt>

                            <dd class="font-medium">
                                {product?.product?.capacity}
                            </dd>
                        </div>
                    </div>
                    <div class="sm:inline-flex sm:items-center sm:shrink-0">
                        <div class="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt class="text-gray-500">
                                Available
                            </dt>

                            <dd class="font-medium">
                                {isActiveBool}
                            </dd>
                        </div>
                    </div>
                </dl>
            </div>
        </div>


    );
};

export default BusInventoryCard;