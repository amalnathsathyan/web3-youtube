// importing axios
import axios from 'axios';

const saveToIPFS = async (file) => {
  // create a new multipart form data
  const formData = new FormData();
  // add file to the form data
  formData.append('file', file);

  var config = {
    method: 'post',
    url: 'https://api.web3.storage/upload',
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDBBOTExMTY1QjRBZEJlNUZGRTdhMkNjNGUxRWZjYzBjNjM4NzBmOTgiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzY3MzA5MjA2MjUsIm5hbWUiOiJ5dC1jbG9uZS12MSJ9.sASYPsMjY1ZdcSY7LrQ4-BN6CF072r67C3Xj5BvRxCI`,
      'Content-Type': 'text/plain',
    },
    data: formData,
  };

  // Posting the form data to the IPFS API
  const response = await axios(config);
  // returning the CID
  return response.data.cid;
};

export default saveToIPFS;
