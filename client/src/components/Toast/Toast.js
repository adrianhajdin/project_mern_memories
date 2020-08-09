import React from 'react'

import { Cinnamon } from "butter-toast";
import { DeleteSweep, AssignmentTurnedIn } from "@material-ui/icons";

const Toast = ({ action }) => {
    switch (action) {
        case 'create':
            return (
                <Cinnamon.Crisp 
                    title="Post Box"
                    content="Submitted successfully"
                    scheme={Cinnamon.Crisp.SCHEME_PURPLE}
                    icon={<AssignmentTurnedIn />}
                />
            );
        case 'delete':
            return (
                <Cinnamon.Crisp 
                    title="Post Box"
                    content="Deleted successfully"
                    scheme={Cinnamon.Crisp.SCHEME_PURPLE}
                    icon={<DeleteSweep />}
                />
            );
        default:
            return null;
    }
}

export default Toast;
