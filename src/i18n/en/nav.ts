/**
 * This configures the navigation sidebar.
 * All other languages follow this ordering/structure and will fall back to
 * English for any entries they haven’t translated.
 *
 * - All entries MUST include `text` and `key`
 * - Heading entries MUST include `header: true` and `type`
 * - Link entries MUST include `slug` (which excludes the language code)
 */
export default [
	{ text: 'Documentation', header: true, onlyMobile: true, anchor: true, type: 'learn', slug: '/documentation/', key: 'documentation' },
	{ text: 'Guides', header: true, onlyMobile: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/', key: 'guides' },
	{ text: 'Dev Tools', header: true, onlyMobile: true, anchor: true, type: 'learn', slug: '/documentation/products/dev-tools/', key: 'devTools' },
	{ text: 'Learn', header: true, onlyMobile: true, anchor: true, type: 'learn', slug: 'https://learn.azion.com/', key: 'Learn' },


	{
		text: 'Edge foundations', header: true, type: 'learn', key: 'edgeFoundations', hasLabel: 'menu.begin', children: [
			{ text: 'What is edge computing', slug: '/documentation/products/edge-foundations/what-is-edge-computing/', key: 'EdgeComputingIs' },
			{ text: 'How edge computing works', slug: '/documentation/products/edge-foundations/how-edge-computing-works/', key: 'edgeComputingWorks' },
			{ text: 'Characteristics of an edge-native platform', slug: '/documentation/products/edge-foundations/edge-native-platforms/', key: 'edgeNativePlatform' },
		]
	},
	{
		text: 'Azion foundations', header: true, type: 'learn', key: 'azionFoundations', children: [
			{ text: 'About Azion Edge Platform', slug: '/documentation/products/azion-foundations/about-azion-edge-platform/', key: 'aboutAzionPlatform' },
			{ text: 'How Azion Edge Platform works', slug: '/documentation/products/azion-foundations/how-azion-edge-platform-works/', key: 'howWorksAzionPlatform' },
			{ text: 'Azion products catalog', slug: '/documentation/products/azion-foundations/azion-products-catalog/', key: 'productsAzion' },
			{ text: 'Explore Azion', slug: '/documentation/products/azion-foundations/explore-azion/', key: 'startUsingAzion' },
		]
	},

	{ text: 'Understand your account WIP', header: true, anchor: true, type: 'learn', slug: '/documentation/', key: 'accountsProfile/createAccount' },

	{ text: 'Get help', header: true, anchor: true, type: 'learn', slug: 'documentation/products/get-help/', key: 'getHelp' },

	{ text: 'Welcome to the edge', header: true, anchor: true, type: 'learn', slug: '/documentation/products/get-started/', key: 'getStarted/welcome', hasLabel: "menu.getStarted" },
	{ text: 'Start with a template', header: true, anchor: true, type: 'learn', slug: '/documentation/products/start-with-a-template/', key: 'getStarted/template' },
	{ text: 'Go live with Azion', header: true, anchor: true, type: 'learn', slug: '/documentation/products/go-live-with-azion/', key: 'getStarted/goLive' },
	{ text: 'View metrics', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/use-real-time-metrics/', key: 'getStarted/viewMetrics', addBorder: true },


	{ text: 'Build', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/build/overview/', key: 'build', hasLabel: 'menu.journey' },
	{ text: 'Secure', header: true, anchor: true, type: 'learn', slug: 'documentation/products/secure', key: 'secure' },
	{ text: 'Deploy', header: true, anchor: true, type: 'learn', slug: 'documentation/products/deploy', key: 'deploy' },
	{ text: 'Observe', header: true, anchor: true, type: 'learn', slug: 'documentation/products/observe', key: 'observe' },

	{ text: 'Configure a domain', header: true, anchor: true, type: 'learn', key: 'configureDomain', slug: '/documentation/products/guides/configure-a-domain/', hasLabel: 'menu.domains' },
	{ text: 'Create digital certificate', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/create-a-digital-certificate/', key: 'certificateDomain' },
	{ text: 'Point your domain to Azion', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/point-domain-to-azion/', key: 'pointDomain' },
	{ text: 'Migrate NS to Azion', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/migrate-ns-to-azion/', key: 'migrateDomain' },




	{ text: 'Create account', header: true, anchor: true, type: 'learn', key: 'account/createAccount', slug: '/documentation/products/accounts/creating-account/', hasLabel: 'menu.account' },

	{
		text: 'Manage account', header: true, type: 'learn', key: 'accountsAccount', children: [
			{ text: 'Users', header: true, anchor: true, type: 'learn', key: 'account/Users', slug: '/documentation/products/guides/users-management/' },
			{ text: 'Teams permissions', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/teams-permissions/', key: 'account/teamsPermissions' },
			{ text: 'Activity history', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/activity-history/', key: 'account/activityHistory' },
			{ text: 'Credentials', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/credentials/' },
			{ text: 'SSO', header: true, anchor: true, type: 'learn', slug: 'documentation/products/guides/sso/', key: 'account/sso' },
			{ text: 'MFA', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/multi-factor-authentication/', key: 'account/mfa' },
			{ text: 'Billing and subscription', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/billing-and-subscriptions/', key: 'account/billingAndSubscriptions' },
		]
	},





	{
		text: 'Manage profile', header: true, type: 'learn', key: 'accountsProfile', addBorder: true, children: [
			{ text: 'Personal tokens', header: true, anchor: true, type: 'learn', key: 'accountsProfile/personalTokens', slug: '/documentation/products/guides/personal-tokens/' },
			{ text: 'Settings', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/account-settings/', key: 'accountsProfile/settings' },
			{ text: 'Delete account', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/delete-account/', key: 'accountsProfile/deleteAccount' },
		]
	},


	{
		text: 'Developer tools', header: true, type: 'learn', key: 'accountsProfile', hasLabel: 'menu.addResources', children: [
			{ text: 'API', header: true, anchor: true, type: 'learn', key: 'devtools/api', slug: 'https://api.azion.com/' },
			{ text: 'CLI', header: true, anchor: true, type: 'learn', key: 'devtools/cli', slug: '/documentation/products/cli/' },
			{ text: 'API GraphQL Playground', header: true, anchor: true, type: 'learn', slug: '/documentation/products/devtools/graphql-playground/', key: 'devtools/graphQLplayground' },
			{ text: 'Edge Runtime', header: true, anchor: true, type: 'learn', slug: '/documentation/products/edge-application/edge-functions/runtime/overview/', key: 'devtools/runtime' },
			{ text: 'SDK', header: true, anchor: true, type: 'learn', slug: '/documentation/devtools/sdk/go/', key: 'devtools/sdk' },
			{ text: 'Terraform', header: true, anchor: true, type: 'learn', slug: '/documentation/products/terraform-provider/', key: 'devtools/terraform' },
			{ text: 'Platform Kit WIP', header: true, anchor: true, type: 'learn', slug: '/documentation/', key: 'devtools/platformKit' },
			{ text: 'GitHub', header: true, anchor: true, type: 'learn', slug: 'https://github.com/aziontech/', key: 'devtools/gitHub' },

		]
	},

	{ text: 'Migrate to Azion WIP', header: true, anchor: true, type: 'learn', slug: '/documentation/', key: 'migrateAzion' },

	{
		text: 'Templates and integrations WIP', header: true, type: 'learn', key: 'accountsProfile', addBorder: true, children: [
			{ text: 'Understand Azion Templates WIP', header: true, anchor: true, type: 'learn', key: 'templatesIntegrations/understandTemplates', slug: '/documentation/' },
			{ text: 'Use a template WIP', header: true, anchor: true, type: 'learn', key: 'templatesIntegrations/useTemplate', slug: '/documentation/' },
			{ text: 'Build an integration WIP', header: true, anchor: true, type: 'learn', slug: '/documentation/', key: 'templatesIntegrations/buildIntegration' },
			{ text: 'Create and publish a template WIP', header: true, anchor: true, type: 'learn', slug: '/documentation/', key: 'templatesIntegrations/createPublishTemplate' },
		]
	},


	{
		text: 'Build', header: true, type: 'learn', key: 'accountsProfile', hasLabel: 'menu.reference', children: [
			{ text: 'Edge Application', header: true, anchor: true, type: 'learn', key: 'reference/edgeApplication', slug: '/documentation/products/edge-application/' },
			{ text: 'Application Acceleration', header: true, anchor: true, type: 'learn', key: 'reference/applicationAcceleration', slug: '/documentation/products/edge-application/application-acceleration/' },
			{ text: 'Edge Caching', header: true, anchor: true, type: 'learn', key: 'reference/edgeCaching', slug: '/documentation/products/edge-application/edge-caching/' },
			{ text: 'Edge Functions', header: true, anchor: true, type: 'learn', key: 'reference/edge Functions', slug: '/documentation/products/edge-application/edge-functions/' },
			{ text: 'Image Processor', header: true, anchor: true, type: 'learn', key: 'reference/imageProcessor', slug: '/documentation/products/edge-application/image-processor/' },
			{ text: 'Load Balancer', header: true, anchor: true, type: 'learn', key: 'reference/loadBalancer', slug: '/documentation/products/edge-application/load-balancer/' },
			{ text: 'L2 Caching', header: true, anchor: true, type: 'learn', key: 'reference/l2Caching', slug: '/documentation/products/edge-application/l2-caching/' },
			{ text: 'Cache Settings', header: true, anchor: true, type: 'learn', key: 'reference/cacheSettings', slug: '/documentation/products/edge-application/cache-settings/' },
			{ text: 'Edge Functions Instances', header: true, anchor: true, type: 'learn', key: 'reference/edgeFunctionsInstancesApplication', slug: '/documentation/products/edge-application/edge-functions-instances/' },
			{ text: 'Device Groups', header: true, anchor: true, type: 'learn', key: 'reference/deviceGroups', slug: '/documentation/products/edge-application/device-groups/' },
			{ text: 'Digital Certificates', header: true, anchor: true, type: 'learn', key: 'reference/digitalCertificates', slug: '/documentation/products/edge-application/digital-certificates/' },
			{ text: 'Error Responses', header: true, anchor: true, type: 'learn', key: 'reference/errorResponses', slug: '/documentation/products/edge-application/error-responses/' },
			{ text: 'Origins', header: true, anchor: true, type: 'learn', key: 'reference/origins', slug: '/documentation/products/edge-application/origins/' },
			{ text: 'Real-Time Purge', header: true, anchor: true, type: 'learn', key: 'reference/realTimePurge', slug: '/documentation/products/edge-application/real-time-purge/' },
			{ text: 'Rules Engine', header: true, anchor: true, type: 'learn', key: 'reference/rulesEngineedgeApplication', slug: '/documentation/products/edge-application/rules-engine/' },
		]
	},
	{
		text: 'Secure', header: true, type: 'learn', key: 'accountsProfile', children: [
			{ text: 'Edge Firewall', header: true, anchor: true, type: 'learn', key: 'reference/edgeFirewall', slug: '/documentation/products/edge-firewall/' },
			{ text: 'DDoS Protection', header: true, anchor: true, type: 'learn', key: 'reference/ddosProtection', slug: '/documentation/products/edge-firewall/ddos-protection/' },
			{ text: 'DDoS Mitigation', header: true, anchor: true, type: 'learn', key: 'reference/ddosMitigation', slug: '/documentation/products/edge-firewall/ddos-protection/ddos-mitigation/' },
			{ text: 'Network Layer Protection', header: true, anchor: true, type: 'learn', key: 'reference/networkLayerProtection', slug: '/documentation/products/edge-firewall/network-layer-protection/' },
			{ text: 'Network Lists', header: true, anchor: true, type: 'learn', key: 'reference/networkLists', slug: '/documentation/products/edge-firewall/network-layer-protection/network-lists/' },
			{ text: 'Web Application Firewall', header: true, anchor: true, type: 'learn', key: 'reference/webApplicationFirewall', slug: '/documentation/products/edge-firewall/web-application-firewall/' },
			{ text: 'WAF Rule Sets', header: true, anchor: true, type: 'learn', key: 'reference/wafRuleSets', slug: '/documentation/products/edge-firewall/waf-rule-sets/' },
			{ text: 'WAF Custom Allowed Rules', header: true, anchor: true, type: 'learn', key: 'reference/wafCustomAllowedRules', slug: '/documentation/products/edge-firewall/web-application-firewall/waf-custom-allowed-rules/' },
			{ text: 'Edge Functions', header: true, anchor: true, type: 'learn', key: 'reference/edgeFunctionsFirewall', slug: '/documentation/products/edge-firewall/edge-functions/firewall/' },
			{ text: 'Edge Functions Instances', header: true, anchor: true, type: 'learn', key: 'reference/edgeFunctionsInstancesFirewall', slug: '/documentation/products/edge-firewall/edge-functions-instances/' },
			{ text: 'Access Permissions', header: true, anchor: true, type: 'learn', key: 'reference/accessPermissions', slug: '/documentation/products/edge-firewall/access-permissions/' },
			{ text: 'Rules Engine', header: true, anchor: true, type: 'learn', key: 'reference/rulesEngineFirewall', slug: '/documentation/products/edge-firewall/rules-engine/' },
			{ text: 'Intelligent DNS', header: true, anchor: true, type: 'learn', key: 'reference/intelligentDNS', slug: '/documentation/products/intelligent-dns/' },
			{ text: 'DNSSEC Compatibility', header: true, anchor: true, type: 'learn', key: 'reference/dnssecCompatibility', slug: '/documentation/products/intelligent-dns/dnssec-compatibility/' },

		]
	},
	{
		text: 'Deploy', header: true, type: 'learn', key: 'accountsProfile', children: [
			{ text: 'Edge Orchestrator', header: true, anchor: true, type: 'learn', key: 'reference/edgeOrchestrator', slug: '/documentation/products/edge-orchestrator/' },
			{ text: 'Edge Services', header: true, anchor: true, type: 'learn', key: 'reference/edgeServices', slug: '/documentation/products/edge-orchestrator/edge-services/' },
			{ text: 'Edge Node', header: true, anchor: true, type: 'learn', key: 'reference/edgeNode', slug: '/documentation/products/edge-orchestrator/edge-node/' },

		]
	},
	{
		text: 'Observe', header: true, type: 'learn', key: 'accountsProfile', children: [
			{ text: 'Data Streaming', header: true, anchor: true, type: 'learn', key: 'reference/dataStreaming', slug: '/documentation/products/data-streaming/' },
			{ text: 'Edge Pulse', header: true, anchor: true, type: 'learn', key: 'reference/edgePulse', slug: '/documentation/products/edge-pulse/' },
			{ text: 'Real-Time Events', header: true, anchor: true, type: 'learn', key: 'reference/realTimeEvents', slug: '/documentation/products/real-time-events/' },
			{ text: 'Real-Time Metrics', header: true, anchor: true, type: 'learn', key: 'reference/realTimeMetrics', slug: '/documentation/products/real-time-metrics/' },
			{ text: 'Historical Real-Time Metrics', header: true, anchor: true, type: 'learn', key: 'reference/historicalRealTimeMetrics', slug: '/documentation/products/historical-real-time-metrics/' },

		]
	},
	{
		text: 'Marketplace', header: true, type: 'learn', key: 'mktp', children: [
			{ text: 'Marketplace', header: true, anchor: true, type: 'learn', key: 'mktp', slug: '/documentation/products/marketplace/' },
			{ text: 'Marketplace Independent Software Vendor', header: true, anchor: true, type: 'learn', key: 'mktp/isv', slug: '/documentation/products/marketplace/isv-signup/' },
			{ text: 'Marketplace Seller Guide', header: true, anchor: true, type: 'learn', key: 'mktp/sellerGuide', slug: '/documentation/products/marketplace/marketplace-seller-guide/' },
		]
	},

	{
        text: 'Professional Services', header: true, type: 'learn', key: 'professionalServices', children: [
            { text: 'Service Plans', header: true, anchor: true, type: 'learn', key: 'professionalServices/servicePlans', slug: '/documentation/services/service-plans/' },
            { text: 'Integration Services', header: true, anchor: true, type: 'learn', slug: '/documentation/services/solutions-lab/integration-services/', key: 'professionalServices/integrationServices' },
            { text: 'Technical Account Manager', header: true, anchor: true, type: 'learn', slug: '/documentation/services/technical-account-manager/', key: 'professionalServices/TAM' },
            { text: 'Best Practices Review', header: true, anchor: true, type: 'learn', slug: '/documentation/services/best-practices-review/', key: 'professionalServices/bestPracticesReview' },
            { text: 'Custom Education Programs', header: true, anchor: true, type: 'learn', slug: '/documentation/services/custom-education-programs/', key: 'professionalServices/customEducationPrograms' },
            { text: 'Security Response Team', header: true, anchor: true, type: 'learn', slug: '/documentation/services/security-response-team/', key: 'professionalServices/SRT' },
            { text: 'Technical Support', header: true, anchor: true, type: 'learn', slug: '/documentation/services/support/', key: 'professionalServices/technicalSupport' },
            { text: 'Business Events Support', header: true, anchor: true, type: 'learn', slug: '/documentation/services/business-events-support/', key: 'professionalServices/businessEventsSupport' },
            { text: 'Slack Channel', header: true, anchor: true, type: 'learn', slug: '/documentation/services/slack-channel/', key: 'professionalServices/SlackChannel' },
        ]
    },

	{
		text: 'Limits WIP', header: true, anchor: true, type: 'learn', slug: '/documentation/', key: 'limits'
	},

	{
		text: 'Glossary', header: true, anchor: true, type: 'learn', slug: '/documentation/products/azion-glossary/', key: 'glossary', addBorder: true
	},


	{
		text: 'System Status', header: true, anchor: true, type: 'learn', slug: 'https://status.azion.com/', key: 'systemStatus'
	},

	{
		text: 'Agreements', header: true, anchor: true, type: 'learn', slug: '/documentation/agreements/', key: 'agreements'
	},

	{
		text: 'Azion Network Program', header: true, anchor: true, type: 'learn', slug: '/documentation/products/azion-network-program/', key: 'azionNetworkProgram'
	},

] as const;
