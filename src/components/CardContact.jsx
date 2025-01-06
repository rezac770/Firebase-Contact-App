
import AddContact from './AddContact'
import useDisClouse from '../hooks/useDisClouse'

const CardContact = ({user ,deleteContact}) => {
    const{isClose , isOpen, showModal} =useDisClouse()
  return (
    <>
    <li   className="card-contact ">
    <i className="fa fa-user"></i>
  <div className="info-contact">
  <h1>{user.name}</h1>
  <p>{user.email}</p>
  </div>
  <div className="edit-contact">
  <i className="fa fa-edit" onClick={ isOpen }></i>
  <i onClick={()=> deleteContact(user.id)} className="fa fa-trash"></i>
  </div>
</li>
 <AddContact isUpdate isClose={isClose} showModal={showModal} user={user}/>
 </>
  )
}

export default CardContact
