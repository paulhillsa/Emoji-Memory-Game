import React from 'react';
import { Container, Nav} from "react-bootstrap";
import Rules from './Rules';

// LandingPage component - the landing page component which the user sees when they first load the page

function LandingPage() {

    return (
        <Container >
            {/* Landing Page Title and subtitles */}
            <div className="titles">
                <h1> Emoji Memory Game 🥳 </h1>
                <h2 className="lead"> Test your memory with this memory game </h2>
                <h2 className="lead"> Please read the rules first! </h2>
            </div>

            {/* Button to start game and reveal  */}
            <div> 
                <Nav className="centered-pills" variant="pills" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/game" className='button-1'>Start Game</Nav.Link>
                        <Rules className='button-2' />
                    </Nav.Item>
                </Nav>
            </div>
        </Container>
    )
}

export default LandingPage;
