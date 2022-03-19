import axios from 'axios';

export const getData = async () => {
  try {
    const { data } = await axios.get(
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a7804447-abeb-473e-be8b-8025c4f624f6/test.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220319T105916Z&X-Amz-Expires=86400&X-Amz-Signature=68300e95c21f73b9766ce5996ad0bc05837aed50f97ebf1b7392e287bc3fccfa&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22test.json%22&x-id=GetObject',
    );
    return data;
  } catch (e) {
    throw new Error(e);
  }
};
