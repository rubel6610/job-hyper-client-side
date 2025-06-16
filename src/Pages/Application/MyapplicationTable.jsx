import React from 'react';

const MyapplicationTable = ({application, index}) => {
    const {linkedin,instagram, github,company_logo,title,company,location}=application;
    return (
        <tr>
        <th>
          <label>
           {index + 1}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={company_logo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{company}</div>
              <div className="text-sm opacity-50">{location}</div>
            </div>
          </div>
        </td>
        <td>
            <a href={linkedin}> LinkedIn</a>
         
          <br />
          <a href={instagram} className="badge badge-ghost badge-sm">{instagram}</a>
          <br />
           <a className="badge badge-ghost badge-sm">{github}</a>
        </td>
        <td>{title}</td>
       
      </tr>
    );
};

export default MyapplicationTable;