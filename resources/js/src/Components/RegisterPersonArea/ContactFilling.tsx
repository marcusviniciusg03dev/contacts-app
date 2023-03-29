import * as React from "react";

import MaskInput from "../MaskInput";
import { TelephoneInputConfig } from "../MaskInput/masks";

export default () => {
    return (
        <tr>
            <td>
                <MaskInput
                    {...TelephoneInputConfig}
                    className="contact-telephone"
                />
            </td>
            <td>
                <input
                    className="contact-telephone-desc"
                />
            </td>
        </tr>
    )
}
