import {
	INodeProperties,
} from 'n8n-workflow';

import {
	address,
	currencies,
	makeCustomFieldsFixedCollection,
	makeGetAllFields,
} from './SharedFields';

export const activityOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'activity',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a activity',
			},
			// {
			// 	name: 'Create or Update',
			// 	value: 'upsert',
			// 	description: 'Create a new record, or update the current one if it already exists (upsert)',
			// },
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a activity',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a activity',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all activitys',
			},
			// {
			// 	name: 'Get Fields',
			// 	value: 'getFields',
			// 	description: 'Get activity fields',
			// },
			// {
			// 	name: 'Update',
			// 	value: 'update',
			// 	description: 'Update a activity',
			// },
		],
		default: 'create',
	},
];

export const activityFields: INodeProperties[] = [
	// ----------------------------------------
	//             activity: create
	// ----------------------------------------
	{
		displayName: 'Company',
		name: 'Company',
		description: 'Company at which the activity works',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'activity',
				],
				operation: [
					'create',
				],
			},
		},
	},
	{
		displayName: 'Last Name',
		name: 'lastName',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'activity',
				],
				operation: [
					'create',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'activity',
				],
				operation: [
					'create',
				],
			},
		},
		options: [
			address,
			{
				displayName: 'Annual Revenue',
				name: 'Annual_Revenue',
				type: 'number',
				default: '',
				description: 'Annual revenue of the activity’s company',
			},
			{
				displayName: 'Currency',
				name: 'Currency',
				type: 'options',
				default: 'USD',
				description: 'Symbol of the currency in which revenue is generated',
				options: currencies,
			},
			makeCustomFieldsFixedCollection('activity'),
			{
				displayName: 'Description',
				name: 'Description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Designation',
				name: 'Designation',
				type: 'string',
				default: '',
				description: 'Position of the activity at their company',
			},
			{
				displayName: 'Email',
				name: 'Email',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Email Opt Out',
				name: 'Email_Opt_Out',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Fax',
				name: 'Fax',
				type: 'string',
				default: '',
			},
			{
				displayName: 'First Name',
				name: 'First_Name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Full Name',
				name: 'Full_Name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Industry',
				name: 'Industry',
				type: 'string',
				default: '',
				description: 'Industry to which the activity belongs',
			},
			{
				displayName: 'Industry Type',
				name: 'Industry_Type',
				type: 'string',
				default: '',
				description: 'Type of industry to which the activity belongs',
			},
			{
				displayName: 'Activity Source',
				name: 'Activity_Source',
				type: 'string',
				default: '',
				description: 'Source from which the activity was created',
			},
			{
				displayName: 'Activity Status',
				name: 'Activity_Status',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Mobile',
				name: 'Mobile',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Number of Employees',
				name: 'No_of_Employees',
				type: 'number',
				default: '',
				description: 'Number of employees in the activity’s company',
			},
			{
				displayName: 'Phone',
				name: 'Phone',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Salutation',
				name: 'Salutation',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Secondary Email',
				name: 'Secondary_Email',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Skype ID',
				name: 'Skype_ID',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Twitter',
				name: 'Twitter',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Website',
				name: 'Website',
				type: 'string',
				default: '',
			},
		],
	},

	// ----------------------------------------
	//             activity: upsert
	// ----------------------------------------
	{
		displayName: 'Company',
		name: 'Company',
		description: 'Company at which the activity works',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'activity',
				],
				operation: [
					'upsert',
				],
			},
		},
	},
	{
		displayName: 'Last Name',
		name: 'lastName',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'activity',
				],
				operation: [
					'upsert',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'activity',
				],
				operation: [
					'upsert',
				],
			},
		},
		options: [
			address,
			{
				displayName: 'Annual Revenue',
				name: 'Annual_Revenue',
				type: 'number',
				default: '',
				description: 'Annual revenue of the activity’s company',
			},
			{
				displayName: 'Currency',
				name: 'Currency',
				type: 'options',
				default: 'USD',
				description: 'Symbol of the currency in which revenue is generated',
				options: currencies,
			},
			makeCustomFieldsFixedCollection('activity'),
			{
				displayName: 'Description',
				name: 'Description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Designation',
				name: 'Designation',
				type: 'string',
				default: '',
				description: 'Position of the activity at their company',
			},
			{
				displayName: 'Email',
				name: 'Email',
				type: 'string',
				default: '',
				description: 'Email of the activity. If a record with this email exists it will be updated, otherwise a new one will be created.',
			},
			{
				displayName: 'Email Opt Out',
				name: 'Email_Opt_Out',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Fax',
				name: 'Fax',
				type: 'string',
				default: '',
			},
			{
				displayName: 'First Name',
				name: 'First_Name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Full Name',
				name: 'Full_Name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Industry',
				name: 'Industry',
				type: 'string',
				default: '',
				description: 'Industry to which the activity belongs',
			},
			{
				displayName: 'Industry Type',
				name: 'Industry_Type',
				type: 'string',
				default: '',
				description: 'Type of industry to which the activity belongs',
			},
			{
				displayName: 'Activity Source',
				name: 'Activity_Source',
				type: 'string',
				default: '',
				description: 'Source from which the activity was created',
			},
			{
				displayName: 'Activity Status',
				name: 'Activity_Status',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Mobile',
				name: 'Mobile',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Number of Employees',
				name: 'No_of_Employees',
				type: 'number',
				default: '',
				description: 'Number of employees in the activity’s company',
			},
			{
				displayName: 'Phone',
				name: 'Phone',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Salutation',
				name: 'Salutation',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Secondary Email',
				name: 'Secondary_Email',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Skype ID',
				name: 'Skype_ID',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Twitter',
				name: 'Twitter',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Website',
				name: 'Website',
				type: 'string',
				default: '',
			},
		],
	},

	// ----------------------------------------
	//               activity: delete
	// ----------------------------------------
	{
		displayName: 'Activity ID',
		name: 'activityId',
		description: 'ID of the activity to delete',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'activity',
				],
				operation: [
					'delete',
				],
			},
		},
	},

	// ----------------------------------------
	//                activity: get
	// ----------------------------------------
	{
		displayName: 'Activity ID',
		name: 'activityId',
		description: 'ID of the activity to retrieve',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'activity',
				],
				operation: [
					'get',
				],
			},
		},
	},

	// ----------------------------------------
	//               activity: getAll
	// ----------------------------------------
	...makeGetAllFields('activity'),

	// ----------------------------------------
	//               activity: update
	// ----------------------------------------
	{
		displayName: 'Activity ID',
		name: 'activityId',
		description: 'ID of the activity to update',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'activity',
				],
				operation: [
					'update',
				],
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'activity',
				],
				operation: [
					'update',
				],
			},
		},
		options: [
			address,
			{
				displayName: 'Annual Revenue',
				name: 'Annual_Revenue',
				type: 'number',
				default: '',
				description: 'Annual revenue of the activity’s company',
			},
			{
				displayName: 'Company',
				name: 'Company',
				type: 'string',
				default: '',
				description: 'Company at which the activity works',
			},
			{
				displayName: 'Currency',
				name: 'Currency',
				type: 'options',
				default: 'USD',
				description: 'Symbol of the currency in which revenue is generated',
				options: currencies,
			},
			makeCustomFieldsFixedCollection('activity'),
			{
				displayName: 'Description',
				name: 'Description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Designation',
				name: 'Designation',
				type: 'string',
				default: '',
				description: 'Position of the activity at their company',
			},
			{
				displayName: 'Email',
				name: 'Email',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Email Opt Out',
				name: 'Email_Opt_Out',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Fax',
				name: 'Fax',
				type: 'string',
				default: '',
			},
			{
				displayName: 'First Name',
				name: 'First_Name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Full Name',
				name: 'Full_Name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Industry',
				name: 'Industry',
				type: 'string',
				default: '',
				description: 'Industry to which the activity belongs',
			},
			{
				displayName: 'Industry Type',
				name: 'Industry_Type',
				type: 'string',
				default: '',
				description: 'Type of industry to which the activity belongs',
			},
			{
				displayName: 'Last Name',
				name: 'Last_Name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Activity Source',
				name: 'Activity_Source',
				type: 'string',
				default: '',
				description: 'Source from which the activity was created',
			},
			{
				displayName: 'Activity Status',
				name: 'Activity_Status',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Mobile',
				name: 'Mobile',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Number of Employees',
				name: 'No_of_Employees',
				type: 'number',
				default: '',
				description: 'Number of employees in the activity’s company',
			},
			{
				displayName: 'Phone',
				name: 'Phone',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Salutation',
				name: 'Salutation',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Secondary Email',
				name: 'Secondary_Email',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Skype ID',
				name: 'Skype_ID',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Twitter',
				name: 'Twitter',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Website',
				name: 'Website',
				type: 'string',
				default: '',
			},
		],
	},
];
