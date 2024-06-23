import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {
    let mainDiv = document.getElementById('Main');
    if (mainDiv) {
        var containerDiv = document.createElement('div');
        containerDiv.classList.add('container'); // Add a CSS class to the container div
        containerDiv.style.border = '1px solid black'; // Add a border style
        mainDiv.appendChild(containerDiv);

        function ContainerContent() {
            return (
                <>
                    <div className="text-center">
                        <p>Login Or Sign Up</p>
                    </div>
                </>
            );
        }

        // Use ReactDOM to render the React component into the container div
        ReactDOM.render(<ContainerContent />, containerDiv);
    } else {
        console.error('MainDiv is null');
    }
});
