import React from 'react'
import {Container,Breadcrumb} from 'react-bootstrap'
function Dashboard() {
    return (
        
        <div className ="d-flex mt-4">
        <Container>
        <h4>Dashboard</h4>
        <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item active href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        </Breadcrumb>
          </Container>
        < div className="text-end upgrade-btn mr-3">
        <a href="https://www.wrappixel.com/templates/xtremeadmin/" class="btn btn-danger text-white"
                                target="_blank">Upgrade to Pro</a>
         </div>
         </div>
       
    )
}

export default Dashboard
