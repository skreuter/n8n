import {
	INodeProperties,
} from 'n8n-workflow';

export const commentOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'comment',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a comment',
			},
		],
		default: 'create',
	},
];

export const commentFields: INodeProperties[] = [
	// ----------------------------------------
	//             comment: create
	// ----------------------------------------
	{
		displayName: 'Lead ID',
		name: 'leadId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'comment',
				],
				operation: [
					'create',
				],
			},
		},
	},
	{
		displayName: 'Message',
		name: 'message',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'comment',
				],
				operation: [
					'create',
				],
			},
		},
	},
];
