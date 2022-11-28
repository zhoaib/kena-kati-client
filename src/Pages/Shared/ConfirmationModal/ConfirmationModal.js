import React from 'react';

const ConfirmationModal = ({ title, message, closeModal, modalData, successAction }) => {
    return (
        <div>

            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">

                        <button onClick={closeModal} className='btn btn-primary'>Cancel</button>
                        <label onClick={() => successAction(modalData)} htmlFor="confirmation-modal" className="btn btn-error">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;