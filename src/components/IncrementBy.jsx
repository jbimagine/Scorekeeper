import React from 'react';
import styled from 'styled-components/macro';

export const IncrementFooterHeight = 80;

const IncremetnCntnr = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    position: relative;
    color: #FFF;
    height: ${IncrementFooterHeight}px;
`;

const IncrementBody = styled.div`
    width: 90vw;
    height: 60px;
    box-sizing: border-box;
    padding: 0 16px;
    border: 1px solid #FFF;
    border-radius: 6px;
    display: grid;
    align-items: center;
    font-size: 24px;
    grid-template-columns: 1fr 1fr;
`;

const IncrementContent = styled.div`
    display: grid;
    justify-items: ${props => props.justifyItems ? props.justifyItems : 'start'};
`

const Input = styled.input`
    justify-self: ${props => props.justifyItems ? props.justifyItems : 'start'};
    height: 30px;
    width: 60px;
    background: none;
    border-radius: 2px;
    color: #FFF;
    font-size: 24px;
    border: none;
    box-sizing:border-box;
    margin: 0 4px;
    padding: 0 4px;
`;

export default class IncrementBy extends React.Component {
    render() {
        const { incrementBy } = this.props;

        return (
            <>
                <IncremetnCntnr><IncrementBody>
                    <IncrementContent>Increment Of:</IncrementContent>
                    <Input
                        type='number'
                        value={incrementBy}
                        onChange={this.props.handleChange}
                        justifyItems='end'
                    />
                </IncrementBody></IncremetnCntnr>
            </>
        );
    }
}