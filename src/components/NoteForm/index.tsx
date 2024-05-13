import { Col, Row, Form, Stack } from "react-bootstrap"

 function NoteForm() {
    return (
    <Form>
        <Stack gap={4}>
            <Row>
                <Col>
                <Form.Group controlId='title'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control required />

                </Form.Group>
                </Col>
            </Row>
        </Stack>

    </Form>
)
}

export default NoteForm;