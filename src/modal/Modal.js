import React, { useState } from 'react' ;
import AuthLayout from '../components/Auth/AuthLayout';


const Modal = () => {

  return (
    <div >
   
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      Launch static
    </button>
   
    <div class="modal fade " id="staticBackdrop"   data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <AuthLayout/>
          </div>
         
        </div>
      </div>
    </div>
    </div>
  )
}

export default Modal;