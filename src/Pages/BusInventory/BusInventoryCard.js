import React from 'react';
import { Link } from 'react-router-dom';

const BusInventoryCard = () => {
    return (
        <Link
            to=""
            class="block p-4 rounded-lg shadow-sm shadow-indigo-100"
        >
            <img
                alt="123 Wallaby Avenue, Park Road"
                src="https://images.unsplash.com/photo-1554995207-c18c203602cb"
                class="object-cover w-full h-56 rounded-md"
            />

            <div class="mt-2">
                <dl>
                    <div>
                        <dt class="sr-only">
                            Price
                        </dt>

                        <dd class="text-sm text-gray-500">
                            $240,000
                        </dd>
                    </div>

                    <div>
                        <dt class="sr-only">
                            Address
                        </dt>

                        <dd class="font-medium">
                            123 Wallaby Avenue, Park Road
                        </dd>
                    </div>
                </dl>

                <dl class="flex items-center mt-6 text-xs space-x-8">
                    <div class="sm:inline-flex sm:items-center sm:shrink-0">
                        <div class="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt class="text-gray-500">
                                Parking
                            </dt>

                            <dd class="font-medium">
                                2 spaces
                            </dd>
                        </div>
                    </div>

                    <div class="sm:inline-flex sm:items-center sm:shrink-0">
                        <div class="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt class="text-gray-500">
                                Bathroom
                            </dt>

                            <dd class="font-medium">
                                2 rooms
                            </dd>
                        </div>
                    </div>

                    <div class="sm:inline-flex sm:items-center sm:shrink-0">
                        <div class="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt class="text-gray-500">
                                Bedroom
                            </dt>

                            <dd class="font-medium">
                                4 rooms
                            </dd>
                        </div>
                    </div>
                </dl>
            </div>
        </Link>

    );
};

export default BusInventoryCard;