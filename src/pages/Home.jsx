import React from 'react';

function Home(props) {
    console.log("Home props", props);
    return (
        <div className="App">
            <h2>Hello, world!</h2>
            <p>Welcome to your new app.</p>
        </div>
    );
}

export default Home;
