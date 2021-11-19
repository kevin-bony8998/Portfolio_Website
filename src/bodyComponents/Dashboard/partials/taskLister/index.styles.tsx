import styled from "styled-components";

export const Styled = styled.div`
.task-display{
    border-radius: 40px;
    padding-bottom: 10px;
    .rdt_Pagination{
        width: 50%;
        border: 0;
        margin: auto;
    }
    &.dark-mode{
        background-color: #3B185F;
        color: white;
        .rdt_TableRow, .rdt_Pagination, .rdt_TableHeadRow, .rdt_Table {
            background-color: #3B185F;
            color: white;
        }
        svg{
            fill: white;
        }
    }
    &.light-mode{
        background-color: #FEC260;
        color: white;
        .rdt_TableRow, .rdt_Pagination, .rdt_TableHeadRow, .rdt_Table {
            background-color: #FEC260;
            color: white;
        }
        svg{
            fill: white;
        }
    }
}

`;