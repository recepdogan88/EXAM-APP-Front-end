import ExamUpper from '../components/exam/ExamUpper'
import ExamMain from '../components/exam/ExamMain'
import ExamFooter from '../components/exam/ExamFooter'
import "./css/Exam.css"



export default function Exam() {

  return (
    <div className='main-exam row'>
      <div className='row exam d-flex flex-column col-6'>
        <ExamUpper/>
         <hr className='mb-5'></hr>
         <ExamMain/>
         <ExamFooter/>
      </div>
    </div>
  )
}

//<MyTimer expiryTimestamp={time} />