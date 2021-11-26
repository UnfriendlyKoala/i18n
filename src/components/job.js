import React from "react";
import {FormattedDate,
  FormattedNumber,
  FormattedPlural,
  FormattedMessage
}
  from 'react-intl';

const Job = (props) => {
  const space = " "

  const single = () => {
    if (props.lang === 'es-CO') {
      return 'millón'
    }
    else {
      return 'million'
    }
  }

  const plural = () => {
    if (props.lang === 'es-CO') {
      return 'milliones'
    }
    else {
      return 'millions'
    }
  }

  const values = {
    id: "OffersId" + props.id,
    name: "OffersName" + props.id,
    company: "OffersCompany" + props.id,
    salary: "OffersSalary" + props.id,
    city: "OffersCity" + props.id,
    date: "OffersDate" + props.id,
    visits: "OfferVisits" + props.id,
  }

  return (
    <tr>
      <th scope="row">
        <FormattedMessage id={values.id}/>
      </th>
      <td>
        <FormattedMessage id={values.name}/>
      </td>
      <td>
        <FormattedMessage id={values.company}/>
      </td>
      <td>
        {props.offer.salary}
        {space}
        <FormattedPlural
        value={props.offer.salary}
        one={single()}
        other={plural()} />
      </td>
      <td>
        <FormattedMessage id={values.city}/>
      </td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>
        <FormattedNumber value={props.offer.offerVisits} />
      </td>
    </tr>
  );
};

export default Job;
