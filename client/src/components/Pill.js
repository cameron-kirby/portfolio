import React from "react"
import styled from "styled-components"

const StyledPill = styled.div`
    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 4px 8px;
        text-decoration: none;
        color: var(--text-color-primary);

        .icon {
            width: 1.5rem;
            height: 1.5rem;
        }

        .text {
            padding-left: 0.25rem;
        }
    }
`

const Pill = ({ icon, text, link }) => {

    return (
        <StyledPill>
            <a href={link} target='_blank' rel='noreferrer'>
                <span className='icon'>{icon}</span>
                <span className='text'>{text}</span>
            </a>
        </StyledPill>
    )
}

export default Pill;