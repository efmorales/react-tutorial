import React, { Component } from 'react'

// create two simple functions for a table header component and a table body component
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.data.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td><button onClick={() => props.removeCharacter(index)}> Delete</button></td>
        </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
  }

class Table extends Component {
    render() {
      const { characterData, removeCharacter } = this.props
  
      return (
        <table>
          <TableHeader />
          <TableBody data={characterData} removeCharacter={removeCharacter} />
        </table>
      )
    }
  }

export default Table