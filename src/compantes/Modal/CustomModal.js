import React from "react";

function CustomModal({ state, setState, title, content, button, buttonSave }) {
  return (
    <div className="custom-modal-cont">
      <div className="custom-modal">
        <div className="modal-header">
          <h3 className="titlemodal">{title}</h3>
          {button}
        </div>
        <hr></hr>
        <div className="modal-body">{content}</div>
        <div className="modal-fooder">{buttonSave}</div>
      </div>
    </div>
  );
}

export default CustomModal;
