import styled from "styled-components";

export const Styled = styled.div`
    .progress-bar-component{
        margin-bottom: 50px;
        border-radius: 40px;
        padding: 60px 0;
        height: 70px;
        .child-div{
            text-align: right;
            .progress-lister{
                margin-top: 10px;
            }
        }
        &.dark-mode{
            background-color: #3B185F;
            .progress-header {
                background-color: #3B185F;
                color: white;
                margin: 0;
            }
        }
        &.light-mode{
            background-color: #FEC260;
            .progress-header {
                background-color: #FEC260;
                color: white;
                margin: 0;
            }
        }
        .progress-bar-img{
            width: 75px;
            height: 75px;
        }
        .task-complete-image{
            margin-left: 83%;
        }
        .task-starting-image{
            margin-right: 83%;
            position: relative;
            top: -80px;
        }
    }
`;