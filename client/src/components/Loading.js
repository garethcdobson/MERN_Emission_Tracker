import React from 'react';
import { Spinner } from 'reactstrap';

const Loading = () => {
    return (
        <div class="min-vh-100 w-100 d-flex justify-content-center align-items-center">
        <Spinner color="dark" />
        </div>
    );
}
  
export default Loading;