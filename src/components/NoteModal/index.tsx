import { Outlet } from "react-router-dom"
import { Note } from "../../App"
import { Modal, ModalBody } from "react-bootstrap"

type NoteModalProps = {
  note: Note
  onClose: () => void
}

export function NoteModal({ note, onClose }: NoteModalProps) {
  return (
    <Modal show={true} size="lg" centered onHide={onClose}>
      <ModalBody>
        <Outlet context={note} />
      </ModalBody>
    </Modal>
  )
}