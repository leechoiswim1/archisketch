import fileDownload from 'utils/fileDownload';
import { downLoad } from 'service/Api';
const fileDownloadHandler = (selectedUrl: string, selectedItem: number) => {
  downLoad(selectedUrl)
    .then(res => {
      const result = res && URL.createObjectURL(res);
      return result;
    })
    .then(res => {
      res && fileDownload(res, `archisketch${selectedItem}`);
    });
};

export default fileDownloadHandler;
