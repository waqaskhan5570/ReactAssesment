import React from "react";
import PrimaryBtn from "../../UI/PrimaryBtn/PrimaryBtn";
import { Modal, Form } from "react-bootstrap";

function AddCheckIn(props) {
  const {
    handleAddCheckIn,
    show,
    inputChangeHandler,
    addCheckIn,
    inputs,
    loading,
  } = props;
  return (
    <>
      <Modal show={show} onHide={handleAddCheckIn} centered>
        <Modal.Header closeButton>
          <Modal.Title>New Checkin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="Check In Title"
                name="name"
                onChange={(e) => inputChangeHandler(e)}
                value={inputs.name}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                type="text"
                placeholder="Image URL"
                name="image_url"
                onChange={(e) => inputChangeHandler(e)}
                value={inputs.image_url}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <PrimaryBtn
            size="sm"
            color="transparentBlack"
            type="button"
            onClick={handleAddCheckIn}
            disabled={loading}
          >
            Close
          </PrimaryBtn>
          <PrimaryBtn
            size="md"
            color="black"
            type="button"
            onClick={addCheckIn}
            disabled={loading}
          >
            {loading ? "Loading" : "Save Changes"}
          </PrimaryBtn>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCheckIn;
