import mainService from './MainService';

export default class FileService {
  uploadFileToServer(data, typeFile) {
    return mainService.getRestClient().post('/upload_file/' + typeFile, data);
  }

  generateFileFromServer(link_server) {
    return mainService.getFinalPDF().get('/generate_final_report');
  }
}
