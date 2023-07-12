import { FC, ReactElement, useState } from "react";
import { AddNewCommentsWrapper } from "./style";
import { Button, Card } from "../shared-comonents";
import { TextBox } from "../header/style";
import { debounce } from "../../helpers/helper";

export interface AddNewCommentsTypes {
    readonly blogId: number,
    readonly showHideAddNewCommentBoxHandler: () => void
};

/**
 * This component is responsible to add new comments
 * @params blogId
 * @returns ReactElement
 */
export const AddNewComments: FC<AddNewCommentsTypes> = ({ blogId, showHideAddNewCommentBoxHandler }): ReactElement => {

    const [newCommentText, setNewCommentText] = useState('');
    //on text change handler
    const onTextChange = async (e: any) => {

        //debounce for better performance
        const result = await debounce(500);

        const commentVal = e.target.value;

        setNewCommentText(commentVal);
    };

    const commentSaveHandler = () => {
        try {
            //if text box is empty just return back
            if (newCommentText === "") {
                alert('enter value to text box');
                return;
            }

            //here we can make an api call to save the new comment to db for blog id
            console.log('new comment: ', `blogId: ${blogId}, commentText: ${newCommentText}`);

            //clear the popup
            showHideAddNewCommentBoxHandler();
        } catch (err: any) {
            throw new Error(err)
        }

    }

    return <Card
        width="500px"
        height="200px"
        padding="15px"
        backgroundcolor="#f4f4f4">
        <TextBox required data-testid='comment_text' area-label='this is a add new comment textbox' type='text'
            placeholder='Add new comment'
            onChange={onTextChange} />
        <Button data-testid='save_comment' aria-label="Save new comment" backgroundcolor="#4792ef" onClick={commentSaveHandler}>Save</Button>
    </Card>
};