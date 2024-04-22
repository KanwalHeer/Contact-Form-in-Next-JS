
import { contactInfoType, contactType } from "../Types/type";
export default function DisplayContact(props:{contactData:contactType[]}) {
    return (
        
         <div>
            <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    pHON
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Message
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {props.contactData.map((item,index)=>{
                return(
                 <tr key={index}>
                 <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                 <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                 <td className="px-6 py-4 whitespace-nowrap">{item.phon}</td>
                 <td className="px-6 py-4 whitespace-nowrap">{item.message}</td>
               </tr>
                )
                })}
                </tbody>
                </table>

                </div>
      </div>
    );
  }
  