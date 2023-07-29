import React, { useContext, useState } from 'react'
import { Context } from '../store/AppContext'
import { FaEdit, FaTrash } from 'react-icons/fa'
import Modal from '../components/Modal'

const Home = () => {
    const { store, actions } = useContext(Context)
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 pt-3">
                        <h3 className='shadow border-0 border-bottom-1 p-3'>Contacts List</h3>
                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Add Contact</button>
                    </div>
                    {!!store.contacts &&
                        store.contacts.length > 0 &&
                        store.contacts.map((user) => {
                            return (
                                <div className="col-md-6 pt-3" key={user.id}>
                                    <div className="card mb-3 shadow">
                                        <div className="card-body d-flex justify-content-between">
                                            <h4>Name: <span className='text-warning'>{user.name}</span></h4>
                                            <span>
                                                <FaEdit className='mx-1' size={20} data-bs-toggle="modal" data-bs-target="#myModalEdit" />
                                                <FaTrash className='mx-1' size={20} data-bs-toggle="modal" data-bs-target="#myModalDelete"/>
                                            </span>
                                        </div>
                                        <div className="card-footer">
                                            <h5>Email: {user.email}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Modal id="myModal" title={"Agregar"} onClick={() => alert('Agregar')}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </Modal>
            <Modal id="myModalEdit" title={"Editar"} onClick={() => alert('Editar')}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </Modal>
            <Modal id="myModalDelete" title={"Eliminar"} onClick={() => alert('Eliminar')}>
                <p>Desea eliminar este contacto?</p>
            </Modal>
        </>
    )
}

export default Home