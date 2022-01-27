/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import * as React from "react"
import {AnimatePresence} from "framer-motion"
import "@fontsource/montserrat/800.css"
import "@fontsource/montserrat/100-italic.css";
import "@fontsource/montserrat/variable.css"

export const wrapPageElement = ({element}) => (
    <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);