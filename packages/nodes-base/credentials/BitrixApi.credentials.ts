import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class BitrixApi implements ICredentialType {
	name = 'bitrixApi';
	displayName = 'Bitrix24 API';
	documentationUrl = 'bitrix';
	properties: INodeProperties[] = [
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'string',
			default: 'https://:domain/rest/:user/:token/',
			required: true,
		},
	];
}
