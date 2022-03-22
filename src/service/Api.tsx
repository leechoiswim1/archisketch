import request from 'axios';
import { successResponse, errorResponse } from './Api.type';

export const getData = async () => {
  try {
    const { data } = await request.get<successResponse>(
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a7804447-abeb-473e-be8b-8025c4f624f6/test.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220322T145449Z&X-Amz-Expires=86400&X-Amz-Signature=d03cbf25ff71c07618da4d97876b0a864d6f5f25b48ab7d8ff735d9fe142e8f7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22test.json%22&x-id=GetObject',
    );
    return data;
  } catch (err) {
    if (request.isAxiosError(err) && err.response) {
      console.log((err.response?.data as errorResponse).error);
    }
  }
};

export const downLoad = async (filePath: string) => {
  try {
    const { data } = await request.get<Blob>(filePath, {
      responseType: 'blob',
    });
    return data;
  } catch (err) {
    if (request.isAxiosError(err) && err.response) {
      console.log((err.response?.data as errorResponse).error);
    }
  }
};
