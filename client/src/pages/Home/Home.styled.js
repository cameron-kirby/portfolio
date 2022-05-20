import styled from "styled-components"
import { devices } from '../../utils'

const StyledHome = styled.div`
    padding: 64px;
    background-color: var(--main-bg-color);

    @media screen and ${devices.mobile} {
        padding: 32px;
    }

    .header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        padding-bottom: 64px;

        @media screen and ${devices.mobile} {
            height: 90vh;
            justify-content: space-between;
        }

        .logo {
            height: 96px;
        }

        .text {
            h2 {
                color: var(--text-color-primary);
                font-size: 4rem;
                @media screen and ${devices.mobile} {
                    font-size: 3rem;
                }
            }
        }

        .pills {
            display: flex;
            flex-direction: row;
            align-items: center;

            @media screen and ${devices.mobile} {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    }

    .content {
        display: flex;
        flex-direction: row;
        border: 1px solid var(--text-color-primary);

        @media screen and ${devices.mobile} {
            flex-direction: column;
            border: none;
        }

        .column-heading {
            padding: 24px 32px;
            border-bottom: 1px solid var(--text-color-primary);
            font-family: 'Rubik', sans-serif;
            font-weight: 500;

            @media screen and ${devices.mobile} {
                padding: 24px 0;
                border: none;
                font-family: 'Source Serif Pro', serif;
                font-weight: 700;
                font-size: 3rem;
            }
        }

        .about {
            width: 25%;
            border-right: 1px solid var(--text-color-primary);

            @media screen and ${devices.mobile} {
                width: 100%;
                border: none;
            }

            .column-article {
                padding: 32px;
                @media screen and ${devices.mobile} {
                    padding: 0;
                }

                img {
                    width: 100%;
                    border: 1px solid var(--text-color-primary);
                    
                    @media screen and ${devices.mobile} {
                        border: none;
                    }
                }

                p:first-child {
                    margin: 0;
                    font-size: 1.25rem;
                }

                p {

                }
            }
        }

        .work {
            width: 42%;
            border-right: 1px solid var(--text-color-primary);

            @media screen and ${devices.mobile} {
                width: 100%;
                border: none;
            }

            .column-project {
                padding: 32px;
                @media screen and ${devices.mobile} {
                    padding: 0 0 32px 0;
                }

                img {
                    max-width: 100%;
                    height: auto;
                    border: 1px solid var(--text-color-primary);
                    margin-bottom: 16px;

                    @media screen and ${devices.mobile} {
                        border: none;
                    }
                }

                .project-details {
                    .project-title {
                        margin: 0;
                        font-size: 1.4rem;
                    }

                    .project-tags {
                        padding: 12px 0;
                        color: var(--text-color-caption);
                        font-family: 'Rubik', sans-serif;
                        font-weight: 500;
                    }

                    .project-description {
                        margin: 0;
                    }

                    .project-link {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        padding-top: 12px;
                        font-family: 'Rubik', sans-serif;
                        font-weight: 500;
                        color: var(--text-color-caption);
                        transition: 500ms;

                        &:hover {
                            color: var(--text-color-primary);
                        }

                        svg {
                            width: 1.5rem;
                        }
                    }
                }
            }

            hr {
                margin: 0;
                color: var(--text-color-caption);
            }
        }

        .skills {
            width: 33%;

            @media screen and ${devices.mobile} {
                width: 100%;
            }

            .column-article {
                padding: 24px 32px;
                @media screen and ${devices.mobile} {
                    padding: 0;
                }
            }
        }
    }

    .footer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 40px 32px;
        border: 1px solid var(--text-color-primary);
        border-top: 0px solid;

        @media screen and ${devices.mobile} {
            border: none;
        }
    }
`

export default StyledHome