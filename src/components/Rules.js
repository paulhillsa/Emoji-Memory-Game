import React, {useState} from 'react'
import { Container, Button, Modal } from 'react-bootstrap';
import '../styles/App.css'

// Rules Modal - the rules modal component

export default function Rules() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container className="centered-pills">
            {/* Rules modal popup button */}
            <Button onClick={handleShow}> Rules</Button>

            <div className="rules-modal"> 
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title> <header> Rules </header> </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <h2> Objective </h2>
                            <ul>
                                <li> The objective of the game is to find all the matching card pairs. </li>
                            </ul>

                            <h2> How to Play </h2>
                            <ul>
                                <li> Click the "Start Game" button to shuffle and reveal the game. </li>
                                <li> To begin, click two cards to reveal them. </li>
                                <li> If the two cards match, they remain flipped. </li>
                                <li> If the two cards do not match, they are flipped back over. </li>
                                <li> The game ends when all matching card pairs have been revealed. </li>
                                <li> Good luck!</li>
                            </ul>

                            <h2> Restart </h2>
                            <ul>
                                <li> You can restart the game by clicking on the "Shuffle Cards" button. </li>
                            </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}> Close </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </Container>
    )
}
