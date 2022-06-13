import React from 'react'

export default function Results({ results }) {
  console.log(results)
  return (
    <div>
      { results.map( result => (<h1> {result.title} </h1>)  ) }
    </div>
  )
}
