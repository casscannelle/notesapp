import { Navigate, Outlet, useOutletContext, useParams } from "react-router-dom"
import { Note } from "../../App"
import { Modal, ModalBody } from "react-bootstrap"

type NoteLayoutProps ={
    notes: Note[]
}

export function NoteLayout({notes}: NoteLayoutProps) {
    const {id} = useParams()
    const note = notes.find(n => n.id === id)

    if (note == null) return <Navigate to='/' replace />

    return (
        <Modal show={true} size="lg" centered>
            <ModalBody>
                <Outlet context={note}/>
            </ModalBody>
        </Modal>
    )
}

export function useNote() {
    return useOutletContext<Note>()
}