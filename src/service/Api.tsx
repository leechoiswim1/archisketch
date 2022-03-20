import request from 'axios';

type successResponse = {
  renderings: {
    _id: string;
  }[];
};
type errorResponse = {
  error: string;
};

export const getData = async () => {
  try {
    const { data } = await request.get<successResponse>(
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a7804447-abeb-473e-be8b-8025c4f624f6/test.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220320T115755Z&X-Amz-Expires=86400&X-Amz-Signature=caa55ba6ac17eecca00fd826882cddd25cc8b57f536c5b4feb313e703a19b705&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22test.json%22&x-id=GetObject',
    );
    return data;
  } catch (err) {
    if (request.isAxiosError(err) && err.response) {
      console.log((err.response?.data as errorResponse).error);
    }
  }
};
