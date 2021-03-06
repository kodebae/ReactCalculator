import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    width:400px;
    margin: 40px auto;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: minmax(120px, auto) repeat(5, 100px);
    box-shadow: 2px 2px 10px #FFFFFC;
    border-radius: 10px;
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) { 
        .Container {
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }
    }
`

export const Screen = styled.div`
    grid-column: 1 / -1;
    background-color: rgba(255, 173, 173, 0.75);
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 10px;
    word-wrap: break-word; 
    word-break: break-all;
    text-align: right;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

export const Previous = styled.div`
    color: rgba(255, 255, 252, 0.75);
    font-size: 1.5rem; 
`

export const Current = styled.div`
    color: white;
    font-size: 2.5rem; 
`

export const Button = styled.button`
    cursor: pointer;
    font-size: 2rem;
    border: 1px outset #FFFFFC;
    outline: none;
    background-color: rgba(255, 255, 252, 0.75);
    &:hover{
        background-color: rgba(255, 255, 255, 1.0);
    } 
/* Arrow funtion to define grid-span button sizing */

${({gridSpan}) => gridSpan && `grid-column: span ${gridSpan};`}

/* Arrow funtion to define background color of operation buttons */

${({operation}) => operation && `background-color: #CAFFBF;`}

/* Arrow funtion to define background color of control buttons */

${({control}) => control && `background-color: #9BF6FF;`}

/* Arrow funtion to define background color of equals button */

${({equals}) => equals && `border-bottom-right-radius: 10px; background-color: #CAFFBF;`}

/* Arrow funtion to define background color of decimal button */

${({period}) => period && `border-bottom-left-radius: 10px; background-color: #9BF6FF;`}
`





