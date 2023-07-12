import { FC, ReactElement } from 'react';
import { debounce } from '../../helpers/helper';
import { useAppContext } from '../../store/context';
import { HeaderContainer, HeaderTextWrapper, TextBox, TextBoxWrapper } from './style';

/**
 * This component is responsible to render header with serach text box
 * @returns ReactElement
 */
export const Header: FC = (): ReactElement => {
    const { setSearchTerm } = useAppContext();

    //on text change handler
    const onTextChange = async (e: any) => {

        //debounce for better performance
        const result = await debounce(500);

        const serachVal = e.target.value;

        //set serach term to context api store
        setSearchTerm(serachVal);

    };

    return <HeaderContainer area-label='app header is here'>
        <HeaderTextWrapper>Blog Site</HeaderTextWrapper>
        <TextBoxWrapper>
            <TextBox data-testid='serach_text' area-label='this is serach a blog textbox' type='text'
                placeholder='Search a blog...'
                onChange={onTextChange} />
        </TextBoxWrapper>
    </HeaderContainer>
}