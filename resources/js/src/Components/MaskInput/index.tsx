import * as React from "react";

export default ({ mask, ...props }) => {
    const inputKeyUp = React.useCallback(mask, []);

    return (
        <input
            onKeyUp={inputKeyUp}
            {...props}
        />
    );
}
