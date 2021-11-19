import styled from "styled-components";

export const Styled = styled.div`
    .page-content{
        display: flex;
        padding-top: 45px;
        justify-content: center;
        .hide-content{
            display: none;
        }
        .fixed-header-container{
            font-family: 'Montserrat', sans-serif;
            z-index: 30;
            margin-right: 40px;
            width: 20%;
            min-height: 669px;
            border-radius: 50px;
            background-color: #FEC260;
            &.light-mode {
                background-color: #FEC260;
                color: #A12568;
                transition: background-color 0.3s ease;
            }
            &.dark-mode {
                background-color: #3B185F;
                color: #A12568;
            }
            .welcome-user{
                padding-top: 50px;
                .user-image{
                    border-radius: 50%;
                    img{
                        border-radius: 50%;
                    }
                }
                .welcome-text{
                    color: white;
                    margin-top: 10px;
                }
            }
            .dark-mode-setting{
                margin-top: 30px;
            }
            .nav-options{
                margin-top: -30px;
                display: flex;
                flex-direction: column;
                font-size: 22px;
                padding-top: 15px;
                color: white;
                .nav-option{
                    padding: 5px 10px;
                    margin: 5px 10px;
                    cursor: pointer;
                }
                .active-tab{
                    background-color: white;
                    border: 1px solid white;
                    color: #282C34;
                }
            }
        }
        .dashboard-component{
            width: 65%;
        }
        .conversion-component{
            width: 65%;
        }
    }
`;