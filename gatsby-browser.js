/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import { Auth } from "@aws-amplify/auth";

export const onClientEntry = () => {
    Auth.configure({
        Auth: {
            region: "",
            userPoolId: "",
            userPoolWebClientId: ""
        }
    });
};
