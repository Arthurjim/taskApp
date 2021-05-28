import React from 'react'
import Header from '../components/Header'
import CreateForm from '../components/CreateForm'
const Create = () => {
  return (
    <div>
      <Header></Header>
      <div className="contentForm">
        <CreateForm/>
      </div>
    </div>
  )
}

export default Create
