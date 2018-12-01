import mainService from './MainService';

export default class FileService {
    uploadFileToServer(data){
        //returns Promise object
        return mainService.getRestClient().post('/files', data);
    }
}