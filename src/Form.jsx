import React from 'react'

function Form(props) {
  const add = () => {
    const job = document.querySelector('#job').value
    const description = document.querySelector('#description').value
    const deadline = document.querySelector('#deadline').value
    const listJobs = document.querySelector('.listJobs')
    props.removeClass(listJobs)
    props.hideModal()
    props.addJob(job, description, deadline)
  }

  function modal () {
    const updateBtn = document.querySelector('.update-btn')
    const addBtn = document.querySelector('.add-btn')
    const listJobs = document.querySelector('.listJobs')
    props.addClass(listJobs)
    props.hideBtn(updateBtn, addBtn)
    props.showModal()
    document.querySelector('#job').value = ''
    document.querySelector('#description').value = ''
    document.querySelector('#deadline').value = ''
  }

  function hide () {
    const listJobs = document.querySelector('.listJobs')
    props.removeClass(listJobs)
    props.hideModal()
  }

  let newIndex
  function updateHideBtn (index) {
    newIndex = index
    props.setIndex(newIndex)
    const updateBtn = document.querySelector('.update-btn')
    const addBtn = document.querySelector('.add-btn')
    props.hideBtn(addBtn, updateBtn)
    props.showModal()
  }

  function update() {
    const job = document.querySelector('#job').value
    const description = document.querySelector('#description').value
    const deadline = document.querySelector('#deadline').value
    props.updateJob(props.index, job, description, deadline)
    props.hideModal()
  }

  function delete1 () {
    props.deleteJob(props.index)
  }

  return (
      <div className='form'>

          <div className="form-header">
              <h1>To Do List</h1>
              <span onClick={modal}>+</span>
          </div>

          <div className={!props.openModal ? 'hideModal' : ''}>
            <input type="text" placeholder='Enter job...' id='job'/>
            <input type="description" placeholder='Enter description...' id='description'/>
            <input type="date" id='deadline'/>
            <button className='add-btn' onClick={add}>Add job</button>
            <button className='update-btn' onClick={update}>Update job</button>
            <button onClick={hide}>Cancel</button>
          </div>

          <div className='listJobs'>
            {props.list.map((job, index) => (
              <div key={index}>
                  <div className='jobItem'>
                    <div className='jobItem-left'>
                      <input 
                        type="checkbox" 
                        checked = {props.checked.includes(index)}
                        onChange={() => props.handleChecked(index)}
                      />
                    </div>
                    <div className={`jobItem-right check-${props.checked.includes(index)}`}>
                      <div>{job.job}</div>
                      <div>{job.description}</div>
                      <div>{job.deadline}</div>
                    </div>
                  </div>
                    <button onClick={() => updateHideBtn(index)}>Update</button>

                    <button onClick={delete1}>Delete</button>
              </div>
            ))}
          </div>
    </div>
  )
}

export default Form