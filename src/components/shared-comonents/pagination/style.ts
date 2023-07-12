import styled from 'styled-components';

export const PaginationWrapper = styled.div`
display:flex;
justify-content:end;

& .pagination {
    padding: 10px;
    display: flex;
    cursor:pointer;
    align-items:center;
    gap: 10px;
    list-style-type: none;
    background: #4792ef;
    color:white;
}

& .pageClass{
    background: white;
    width:20px;
    cursor:pointer;
    color:black;
    display: flex;
    justify-content:center;
}

& .activeClass{
    background: #065ac3;
    color:white;
}
`