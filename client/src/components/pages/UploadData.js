import React from 'react';
import '../../App.css';
import FileUpload from '../pages/FileUpload';

const UploadData = () => (
  <div className='container mt-4'>
    <h4 className='display-4 text-center mb-4'>
      <i className='fab fa-react'></i> GPR File Upload
    </h4>
    <FileUpload />
  </div>
);

export default UploadData;
