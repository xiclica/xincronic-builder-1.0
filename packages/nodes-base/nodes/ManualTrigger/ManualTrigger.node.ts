import type {
	ITriggerFunctions,
	INodeType,
	INodeTypeDescription,
	ITriggerResponse,
} from 'n8n-workflow';

export class ManualTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Ejecutador Manual',
		name: 'manualTrigger',
		icon: 'fa:mouse-pointer',
		group: ['trigger'],
		version: 1,
		description: 'Ejecuta el flujo al hacer clic en un botón en n8n',
		eventTriggerDescription: '',
		maxNodes: 1,
		defaults: {
			name: 'Cuando se hace clic en "Ejecutador Manual"',
			color: '#7140C2',
		},

		inputs: [],
		outputs: ['main'],
		properties: [
			{
				displayName:
				'Este nodo es donde comienza la ejecución manual del flujo de trabajo. Para crear uno, regrese al lienzo y haga clic en probar flujo de trabajo',
				name: 'notice',
				type: 'notice',
				default: '',
			},
		],
	};

	async trigger(this: ITriggerFunctions): Promise<ITriggerResponse> {
		const manualTriggerFunction = async () => {
			this.emit([this.helpers.returnJsonArray([{}])]);
		};

		return {
			manualTriggerFunction,
		};
	}
}
