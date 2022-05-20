import React from "react"
import styled from "styled-components"
import { devices } from '../utils'

const StyledPill = styled.div`
    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 4px 8px;
        text-decoration: none;
        color: var(--text-color-primary);

        @media screen and ${devices.mobile} {
            padding: 8px 0;
        }

        .icon {
            width: 1.5rem;
            height: 1.5rem;
            @media screen and ${devices.mobile} {
                width: 2.5rem;
                height: 2.5rem;
            }
        }

        .text {
            padding-left: 0.25rem;
            @media screen and ${devices.mobile} {
                font-size: 1.5rem;
            }
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