import styled from "styled-components";

export const Styled = styled.div`
    .task-addition-component{
        margin-bottom: 50px;
        border-radius: 40px;
        padding: 60px 50px;
        &.dark-mode{
            background-color: #3B185F;
            background-color: #3B185F;
            color: white;
            margin: 0;
        }
        &.light-mode{
            background-color: #FEC260;
            background-color: #FEC260;
            color: white;
            margin: 0;
        }
        .task-addition-header{
            margin-top: -30px;
        }
        .task-details-enter-area{
            .new-task-field{
                display: flex;
                justify-content: space-between;
            }
            
            
            .new-task-field{
                .name-prompt{
                    margin-top: -1px;
                }
                .name-blank{
                    width: 25%;
                    .react-autosuggest__container{
                        .react-autosuggest__input{
                            width: 100%;
                            font-family: inherit;
                            border: 0;
                            border-bottom: 2px solid grey;
                            outline: 0;
                            font-size: 1.3rem;
                            color: white;
                            padding: 2px 0;
                            background: transparent;
                            transition: border-color 0.2s;
                            height: 15px;
                            font-size: 15px;
                        }
                        .react-autosuggest__suggestions-container{
                            position: relative;
                            .react-autosuggest__suggestions-list{
                                list-style-type: none;
                                position: absolute;
                                background-color: #af376d;
                                width: 100%;
                                padding: 0;
                                margin: auto;
                                max-height: 80px;
                                overflow-y: auto;
                                box-shadow: 10px 5px 10px grey;
                                ::-webkit-scrollbar {
                                    width: 10px;
                                }

                                /* Track */
                                ::-webkit-scrollbar-track {
                                    background: #f1f1f1;
                                }

                                /* Handle */
                                ::-webkit-scrollbar-thumb {
                                    background: #888;
                                    border-radius: 10px;
                                }

                                /* Handle on hover */
                                ::-webkit-scrollbar-thumb:hover {
                                    background: #555;
                                }
                                .react-autosuggest__suggestion{
                                    color: black;
                                    padding: 5px 0;
                                    &::marker{
                                        display: none !important;
                                    }
                                }
                            }
                        }
                    }
                }
                &.task-points-details{
                    margin-top: 10px;
                    .points-prompt{
                        margin-top: -1px;
                    }
                    .points-blank{
                        width: 25%;
                        font-family: inherit;
                        border: 0;
                        border-bottom: 2px solid grey;
                        outline: 0;
                        font-size: 1.3rem;
                        color: white;
                        padding: 2px 0;
                        background: transparent;
                        transition: border-color 0.2s;
                        height: 15px;
                        font-size: 15px;
                    }
                }
            }
        }
        .get-it-right-info-box{
            display: none;
            text-align: right;
            position: fixed;
            margin-left: 29.7%;
            .arrow-section{
                width: 0; 
                height: 0; 
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                margin: auto;
                border-bottom: 5px solid black;
            }
            .text-section{
                border: 1px solid black;
                background-color: black;
                padding: 5px;
                border-radius: 10px;
            }
        }
        .add-task-button{
            display: flex;
            justify-content: flex-end;
            .task-addition-button{
                padding: 10px;
                border-radius: 10px;
                background-color: #F70000;
                margin-left: 90%;
                margin-top: 30px;
                border: 1px solid brown;
                margin-bottom: -30px;
                color: white;
            }
        }
    }
`;
