import React from 'react'
import { Helmet } from 'react-helmet'

const Comments = () => {
    return (
        <React.Fragment>
            <div id="commento">
                <Helmet>
                    <script
                        defer
                        src="https://cdn.commento.io/js/commento.js"
                    />
                </Helmet>
            </div>
        </React.Fragment>
    )
}

export default Comments