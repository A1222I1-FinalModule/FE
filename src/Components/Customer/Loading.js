import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Loading() {
    return (
        <>
            <div class="d-flex justify-content-center">
                <div class="spinner-border text-primary" style={{ width: '15rem', height: '15rem' }} role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    );
}
export default Loading;