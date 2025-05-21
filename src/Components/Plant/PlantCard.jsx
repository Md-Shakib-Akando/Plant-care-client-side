import { format } from 'date-fns';
import React from 'react';
import { Link } from 'react-router';

const PlantCard = ({plant}) => {
    const {_id,PlantName,image,wateringFrequency,category,HealthStatus,nextWatering,lastWatered,careLevel}= plant;
    const formattedDate1 = format(new Date(nextWatering), 'dd/MM/yyyy');
    const formattedDate2 = format(new Date(lastWatered), 'dd/MM/yyyy');
    return (
        <>
            <tbody className="bg-white divide-y divide-gray-200">
                  
                    <tr key={_id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden">
                            <img
                              src={image}
                              alt=''
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {PlantName}
                            </div>
                            
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            careLevel === "easy"
                              ? "bg-green-100 text-green-800"
                              : careLevel === "moderate"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {careLevel}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                        {formattedDate2}
                      </td>
                      <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                        {formattedDate1}
                      </td>
                      <td className="px-6 py-4 text-center whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {wateringFrequency}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            HealthStatus === "Excellent"
                              ? "bg-green-100 text-green-800"
                              : HealthStatus === "Good"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {HealthStatus}
                        </span>
                      </td>
                      
                      <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium">
                        <Link to={`/details/${_id}`}>
                        <button className="btn text-green-600 hover:text-green-900 mr-3 cursor-pointer  whitespace-nowrap">
                          View Details
                        </button>
                        </Link>
                        
                      </td>
                    </tr>
                 
                </tbody>
        </>
    );
};

export default PlantCard;