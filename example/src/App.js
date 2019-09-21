import React, { Component } from 'react'

import { ReactAwesomeTable } from 'react-awesome-table'


const data = [
  { name: 'Hugo', genre: 'male', age: 30, country: 'Spain', city: 'Barcelona' },
  { name: 'Angeles', genre: 'female', age: 12, country: 'Spain', city: 'Barcelona' },
  { name: 'Ana', genre: 'female', age: 42, country: 'Spain', city: 'Barcelona' },
  { name: 'Fer', genre: 'male', age: 52, country: 'Spain', city: 'Barcelona' },
  { name: 'Sonia', genre: 'female', age: 62, country: 'Spain', city: 'Barcelona' },
  { name: 'Rosita', genre: 'female', age: 72, country: 'Spain', city: 'Barcelona' },
  { name: 'Mari', genre: 'female', age: 3112, country: 'Spain', city: 'Barcelona' },
  { name: 'Nando', genre: 'male', age: 2, country: 'Spain', city: 'Barcelona' },
  { name: 'Ruben', genre: 'male', age: 0, country: 'Spain', city: 'Barcelona' },
  { name: 'Paula', genre: 'female', age: -1, country: 'Spain', city: 'Barcelona' },
  { name: 'Maria', genre: 'female', age: -5, country: 'Spain', city: 'Barcelona' },
  { name: 'Angeles', genre: 'female', age: -100, country: 'Spain', city: 'Barcelona' }
]

const columns = [
  {
    Header: 'Name',
    id: 'name',
    sortable: true,
    columnSortMethod: ({ a, b, sortBy, sortDirection }) => {
      if (sortDirection === 'ASC') {
        if (a[sortBy] < b[sortBy]) return -1
        if (a[sortBy] > b[sortBy]) return 1
      } else {
        if (a[sortBy] < b[sortBy]) return 1
        if (a[sortBy] > b[sortBy]) return -1
      }
    }
  },
  {
    Header: 'Genre',
    id: 'genre',
    sortable: true
  },
  {
    Header: 'Age',
    id: 'age',
    sortable: true
  },
  {
    Header: 'Country',
    id: 'country'
  },
  {
    Header: 'City',
    id: 'city'
  }
]

export function App() {
  const [loading, setLoading] = React.useState(false)

  // React.useEffect(() => {
  //   window.setTimeout(() => {
  //     setLoading(!loading)
  //   }, 2000)
  // }, [loading])

  return (
    <div style={{
      height: 500,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <ReactAwesomeTable
        data={data}
        columns={columns}
        // onRowClick={row => console.log(row)}
        // onHeaderClick={header => console.log(header)}
        // onColumnSort={props => console.log(props)}
        // noDataMessage={'There is no data'}
        // noDataComponent={({ noDataMessage }) => <span>{noDataMessage}</span>}
        // loading={loading}
      />
    </div>
  )
}
