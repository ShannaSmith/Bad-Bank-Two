import React from 'react'
import { UserContext } from '../UserContext'
import { Card, Table } from 'react-bootstrap'
import AccountDataTable from './AccountDataTable'

const AllData = () => {
  const ctx = React.useContext(UserContext)
  return (
    <Card>
      <Card.Body>
        <Card.Title>All Data</Card.Title>
        <Table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {ctx.users.map((user, i) => (
              <AccountDataTable data={user} key={i} />
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  )
}

export default AllData
