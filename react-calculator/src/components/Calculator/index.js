import React from 'react';
import {Container, Screen, Previous, Current} from './Styled';

// Functional component for the calculator
export default function Calculator(){
    return(
        <Container>
            <Screen>
                <Previous>10 +</Previous>
                <Current>10</Current>
            </Screen>
        </Container>
        
    )
}



