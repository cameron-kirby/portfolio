import styled from "styled-components"

const StyledHome = styled.div`
    padding: 0 64px 64px 64px;
    background-color: var(--main-bg-color);

    .header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        padding: 76px 0 76px 0;

        .logo {
            img {
                height: 96px;
            }
        }

        .description {
            h2 {
                color: var(--text-color-primary);
                font-size: 4rem;
            }
        }

        .pills {
            display: flex;
            flex-direction: row;
            align-items: center;
        }
    }

    .content {
        display: flex;
        flex-direction: row;
        border: 1px solid var(--text-color-primary);

        .about {
            width: 30%;
            border-right: 1px solid var(--text-color-primary);

            .column-heading {
                padding: 24px 32px;
                border-bottom: 1px solid var(--text-color-primary);
            }

            .column-article {
                padding: 24px 32px;
            }
        }

        .work {
            width: 50%;
            border-right: 1px solid var(--text-color-primary);

            .column-heading {
                padding: 24px 32px;
                border-bottom: 1px solid var(--text-color-primary);
            }

            .column-project {
                padding: 32px;

                img {
                    max-width: 100%;
                    height: auto;
                    border: 1px solid var(--text-color-primary);
                    margin-bottom: 16px;
                }

                .project-details {
                    .project-title {
                        margin: 0;
                        font-size: 1.4rem;
                    }

                    .project-tags {
                        padding: 12px 0;
                        color: var(--text-color-caption);
                    }

                    .project-description {
                        margin: 0;
                    }

                    .project-link {
                        padding-top: 12px;
                    }
                }
            }

            hr {
                color: var(--text-color-caption);
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
    }
`

export default StyledHome