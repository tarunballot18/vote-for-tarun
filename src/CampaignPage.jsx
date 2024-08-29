import React from 'react';

const CampaignPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center bg-gray-100">
            <div className="sticky top-0 bg-gray-800 text-white text-center text-3xl py-2 font-bold shadow-md z-50">
                Ballot Number: 18
            </div>

            <div className='flex justify-between p-4'>
                <img
                    src="/src/assets/iitbhu_logo.jpg"
                    alt="IIT Logo"
                    className="w-3/4 h-auto"
                />

                <img
                    src="/src/assets/18_logo.png"
                    alt="Ballot18"
                    className="w-1/5 h-auto"
                />
            </div>

            <div className='bg-white shadow-md p-4 mb-6 mt-6'>
                <h1 className="text-3xl font-bold text-center text-blue-600">Vote for Tarun Kumar in Student Parliament</h1>
            </div>

            <div className='flex justify-between bg-white rounded-lg shadow-lg mb-6'>
                <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Meet Tarun Kumar</h2>
                    <p className="text-gray-700 mb-4">
                        Tarun Kumar is a dedicated student with a vision to improve our campus experience. With a background in student leadership and a passion for positive change, John is ready to represent you in the student parliament.
                    </p>
                </div>
                <img
                    src="./src/assets/tarun_kumar.png"
                    alt="Tarun Kumar"
                    className="w-1/2 h-auto rounded-lg p-4"
                />
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Campaign Promises</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Enhance student facilities and resources</li>
                    <li>Promote mental health awareness and support</li>
                    <li>Increase transparency and communication between the student body and administration</li>
                    <li>Organize more student events and activities</li>
                </ul>
            </div>
        </div>
    );
};

export default CampaignPage;
