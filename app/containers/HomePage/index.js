/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Figure from 'react-bootstrap/Figure';


const StyledButton = styled(Button)`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

export default function HomePage() {
    return (
        <div>
            <h1>
                <FormattedMessage {...messages.header} />
                <StyledButton variant="primary">Primary</StyledButton>
                <Button variant="danger">Danger</Button>
            </h1>
            <ListGroup horizontal>
                <ListGroup.Item><Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src="https://i.pinimg.com/736x/e3/d3/fa/e3d3faa5b7c6640f3b45f877a7d2aef9.jpg"
                    />
                    <Figure.Caption>
                        Nulla vitae elit libero, a <br/>
                        pharetra augue mollis interdum.
                    </Figure.Caption>
                </Figure>
                </ListGroup.Item>
                <ListGroup.Item>ListGroup</ListGroup.Item>
                <ListGroup.Item>renders</ListGroup.Item>
                <ListGroup.Item>horizontally!</ListGroup.Item>
            </ListGroup>
        </div>
    );
}
