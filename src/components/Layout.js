import React from 'react';
import Sidebar from "./Sidebar";
import Nav from "./Nav";

function Layout(props) {
    return (
        <>
        <div>
            <div style={{display: "flex"}}>
                <Sidebar history={props.history}/>
                <div style={{width: '100%'}}>
                    <Nav style={{float: 'right', 'flex-direction': 'row', 'padding': '20px', 'border-bottom': '1px' }}/>
                    {props.children}
                </div>
            </div>
        </div>
        </>
    );
}

 export default Layout;