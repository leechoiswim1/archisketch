import fileDownload from 'utils/fileDownload';
import { downLoad } from 'service/Api';
export const fileDownloadHandler = (selectedUrl: string, selectedItem: number) => {
  downLoad(selectedUrl)
    .then(res => {
      const result = res && URL.createObjectURL(res);
      return result;
    })
    .then(res => {
      res && fileDownload(res, `archisketch${selectedItem}`);
      alert('성공적으로 다운로드가 됐습니다! ');
    });
};
