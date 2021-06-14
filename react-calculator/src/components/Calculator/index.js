import React from 'react';
import {Container, Screen, Previous, Current, Button} from './Styled';

// Functional component for the calculator
export default function Calculator(){
    return(
        <Container>
            <Screen>
                <Previous>10 +</Previous>
                <Current>10</Current>
            </Screen>
            <Button gridSpan={2}>AC</Button>
            <Button></Button>
            <Button operation></Button>
            <Button></Button>
            <Button></Button>
            <Button></Button>
            <Button operation></Button>
            <Button></Button>
            <Button></Button>
            <Button></Button>
            <Button operation></Button>
            <Button></Button>
            <Button></Button>
            <Button></Button>
            <Button operation></Button>
            <Button></Button>
            <Button></Button>
            <Button gridSpan={2}>=</Button>
        </Container>
        
    )
}



