import React,{useContext} from 'react'
import { ContactContext } from '../context/contactContext'

const EmailInput = (props) => {
const [state, setState] = useContext(ContactContext)

        const handleChange = async (event)=>{
            let val = event.target.value
            await setState(prevState => ({...prevState, email: val}))
            console.log(state)
        }

      

    return (
        <div>
         
          <input className='contact-input' value={state.email} type="text" onChange={handleChange} />
        </div>
    )
}
export default EmailInput