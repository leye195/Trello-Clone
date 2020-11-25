import styled from 'styled-components';

interface AddItemButtonProps {
    dark?: boolean;
}

export const ColumnContainer = styled.div`
    background-color: #ebecf0;
    width: 300px;
    min-height: 40px;
    border-radius: 3px;
    padding: 8px;
    margin: 0 5px;
    flex-grow:0;
`;

export const ColumnTitle = styled.div`
    padding: 6px 16px 12px;
    font-weight: bold;
`;

export const CardContainer = styled.div`
    background-color:#fff;
    cursor:pointer;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    max-width: 300px;
    border-radius: 3px;
    box-shadow: #091e4240 0px 1px 0px 0px;
`; 

export const AddItemButton = styled.button<AddItemButtonProps>`
    background-color: #ffffff3d;
    border-radius: 3px;
    border: none;
    color: ${props=>props.dark? '#000': '#fff'};
    cursor: pointer;
    max-width: 300px;
    padding: 10px 12px;
    text-align: left;
    width: 100%;
    transition: background-color 85ms ease-in;
    &:hover{
        background-color: #ffffff52;
    }
`
export const NewItemFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    max-width: 300px;
    align-items: flex-start;
`;

export const NewItemInput = styled.input`
    border-radius: 3px;
    border: none;
    box-shadow: #091e4240 0px 1px 0px 0px;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    width: 270px;
`;

export const NewItemButton = styled.button`
    background-color: #5aac44;
    border-radius: 3px;
    border: none;
    box-shadow: none;
    color: #fff;
    padding: 6px 12px;
    text-align: center;
`;


interface DragPreviewContainerProps {
    isHidden?: boolean;
}

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
    opacity: ${props=>(props.isHidden?0.3:1)};
`;