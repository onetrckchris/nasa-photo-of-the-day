import React from 'react';
import styled from 'styled-components';

const RightOfImg = styled.div`
    padding-left: 25px;
`;

const ChrisAPOD = props => {
    return (
        <>
            <img src={props.nasaData.url} />
            <RightOfImg>
                <h4>{props.nasaData.date}</h4>
                <p>{props.nasaData.explanation}</p>
            </RightOfImg>
        </>
    )
}

export default ChrisAPOD;