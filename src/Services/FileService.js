import mainService from './MainService';

export default class FileService {
	uploadFileToServer(data, link_server) {
		//returns Promise object
		return mainService.getRestClient().post('/upload_' + link_server, data);
	}

	generateFileFromServer(link_server) {
		return mainService.getFinalPDF().get('/generate_final_report');
	}
}