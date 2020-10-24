import React from 'react';
import './bootstrap.css';

const Table = (props) => {

    const {characterData, removeCharacter} = props
    return(
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
      </table>
    )

}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>    </th>
        <th>Name</th>
        <th>Job</th>
        <th>    </th>
      </tr>
    </thead>
  )
}
const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td> {index} </td>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>
            <button className="btn btn-danger" onClick={() => props.removeCharacter(index)}>Delete</button>
          </td>
        </tr>
      )
    })

    return <tbody>{rows}</tbody>
}

export default Table
