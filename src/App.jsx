import { useState } from 'react';
import './App.css';
import Form from './Form';

function App() {
  const [openModal, setOpenModal] = useState(false)
  const [jobs, setJobs] = useState([])
  const [index, setIndex] = useState(0)
  const [checked, setChecked] = useState([])
  
  // Function add class `hideModal`
  const addClass = (name) => {
    name.classList.add('hideModal')
  }

  // Function remove class `hideModal`
  const removeClass = (name) => {
    name.classList.remove('hideModal')
  }

  const hideBtn = (item1, item2) => {
    item1.classList.add('hideModal')
    item2.classList.remove('hideModal')
  }

  const showModal = (btn) => {
    setOpenModal(true)
  }

  const hideModal = () => setOpenModal(false)

  const addJob = (job, description, deadline) => {

    (job || description || deadline) ? 
    setJobs([...jobs, {job, description, deadline}]) : 
    alert('Vui lòng điền đầy đủ thông tin')

  }

  const updateJob = (index, job, description, deadline) => {
    jobs[index] = {job, description, deadline}
    setJobs([...jobs])
  }

  const deleteJob = (index) => {
    jobs.splice(index, 1)
    setJobs([...jobs])
  }

  const handleChecked = (index) => {
    setChecked(prev => {
      const isChecked = checked.includes(index)
      console.log(isChecked);
      if(isChecked) {
        return checked.filter(item => item !== index)
      } else {
        return [...prev, index]
      }
    })
  }

  return (
    <div className="App">
      <Form 
          openModal={openModal} 
          showModal={showModal} 
          hideModal={hideModal} 
          addJob={addJob} 
          list = {jobs} 
          addClass = {addClass}
          removeClass = {removeClass}
          hideBtn = {hideBtn}
          updateJob = {updateJob}
          setIndex = {setIndex}
          index = {index}
          deleteJob = {deleteJob}
          checked = {checked}
          setChecked = {setChecked}
          handleChecked = {handleChecked}
      >
      </Form>
    </div>
  );
}

export default App;
