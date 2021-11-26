import React, { useState } from "react";
import Job from "./job";
import {FormattedMessage,
  useIntl}
  from 'react-intl';

const JobsList = () => {  
  const intl = useIntl()

  const theme = () => {
    if (intl.locale === 'es-CO') {
      return 'table-light'
    }
    else {
      return 'table-dark'
    }
  }

  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      offerVisits: 134
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      offerVisits: 1250
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      offerVisits: 10300
    },
  ]);

  const [language, setLanguage] = useState(navigator.language)

  function changeLanguage(lang) {
    setLanguage(lang);
  }

  let i = 0
  const count = () => {
    i = i + 1;
    return i
  }

  return (
    <div>
        <table className="table">
          <thead className="thead-dark">
            <tr className = {theme()}>
              <th scope="col">#</th>
              <th scope="col">
                <FormattedMessage id="Position"/>
              </th>
              <th scope="col">
                <FormattedMessage id="Company"/>
              </th>
              <th scope="col">
                <FormattedMessage id="Salary"/>
              </th>
              <th scope="col">
                <FormattedMessage id="City"/>
              </th>
              <th scope="col">
                <FormattedMessage id="PublicationDate"/>
              </th>
              <th scope="col">
                <FormattedMessage id="Views"/>
              </th>
            </tr>
          </thead>
          <tbody>
            {offers.map((e, i) => (
              <Job key={i} offer={e} lang = {intl.locale} id = {count()}/>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default JobsList;
