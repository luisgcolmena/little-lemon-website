import '../Styles/BookingForm.css'

function BookingForm ({dispatch, availableTimes, formData, handleChange}) {

  return (
    <>
      <div className='date div-input'>
        <label htmlFor='date-input'><h3>Date</h3></label>
        <input
          name='date'
          type='date'
          id='date-input'A
          value={formData.date}
          onChange={(e)=> {
            handleChange(e)
            dispatch(e.target.value)
          }}
        />
      </div>

      <div className='time div-input'>
        <label htmlFor='time'><h3>Time</h3></label>
        <select 
          name='time'
          id='time'
          data-testid='time-select'
          value={availableTimes}
          /* onChange={handleChange} */
          /* onChange={(e) => handleChange(e)} */
        >
          {
            availableTimes.map((hour, index) => (
            <option  key={index}>{hour}</option>
            ))
          }

        </select>
      </div>

      <div className='guests div-input'>
        <label htmlFor='guests'><h3>Guests</h3></label>
        <input
            type='number'
            name='guests'
            value={formData.guests}
            placeholder='1'
            min={1}
            max={10}
            id='guests'
            onChange={handleChange}
            />
      </div>

      <div className='ocassion div-input'>
        <label htmlFor='ocassion'><h3>Occasion</h3></label>
        <select
          name='ocassion'
          id='ocassion'
          data-testid='ocassion-select'
          placeholder='Select Occasion'
          value={formData.ocassion}
          onChange={handleChange}
          >
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option selected>Simple meal</option>
        </select>
      </div>
    </>
  )
}

export default BookingForm