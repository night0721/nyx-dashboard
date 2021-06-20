import React from 'react'
import CardContainer from '../../components/CardContainer'

function index() {
    return (
        <div>
            <h1>Control Panel</h1>
            <CardContainer link='/controlpanel/commands'>Commands</CardContainer>
        </div>
    )
}

export default index
