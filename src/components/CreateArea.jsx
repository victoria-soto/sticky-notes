import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
    const [noteParts, setNoteParts] = useState({
        title: "",
        content: ""
    });

    const [isClicked, setIsClicked] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setNoteParts(function (prevValue) {
            // console.log(prevValue);
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleClick() {
        setIsClicked(true);
    }

    return (
        <div>
            <form className="create-note" onSubmit={handleSubmit}>
                {isClicked && (
                    <input
                        onChange={handleChange}
                        name="title"
                        value={noteParts.title}
                        placeholder="Title"
                    />
                )}
                <textarea
                    onChange={handleChange}
                    onClick={handleClick}
                    name="content"
                    value={noteParts.content}
                    placeholder="Take a note..."
                    rows={isClicked ? 3 : 1}
                />
                <Zoom in={isClicked}>
                    <Fab onClick={function () {
                        props.onAdd(noteParts);

                        // reset to empty object after add
                        setNoteParts({ title: "", content: "" });
                    }}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
