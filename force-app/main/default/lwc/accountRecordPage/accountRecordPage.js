import { LightningElement, api} from 'lwc';

export default class AccountRecordPage extends LightningElement {
    @api recordId;
    handleSubmit(event)
    {
        console.log('onsubmit record event form'+event.details.fields);
    }
    handleSuccess(event)
    {
        
    }
}