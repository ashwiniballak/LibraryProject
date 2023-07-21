import React from 'react'

 const DateComponent = (props) => {
   const handleChange=(e)=>{
props.handleChange(e)
   }
    return (
       <>
       
        <input required
              type="date"
              className="form-control w-50"
              id="bookIssueDate"
              name="bookIssueDate"
              onChange={(e)=>handleChange(e)}
            />
       </>
    )
}
export default DateComponent;