interface Project {
	name: string;
	tagline: string;
	images: {
		web: string[];
		mobile: string[];
	};
	details: {
		objective: string;
		keyResults: string[];
	};
	url?: string;
	skills: string[];
}

const projects: Project[] = [
	{
		name: "Air Oasis",
		tagline: "Loving the Air Your Breath",
		images: {
			web: [],
			mobile: [
				"/images/projects/airoasis/mobile/Mobile_Add_Schedule.jpg",
				"/images/projects/airoasis/mobile/Mobile_Devices_Screen.jpg",
				"/images/projects/airoasis/mobile/Mobile_Edit_Place.jpg",
				"/images/projects/airoasis/mobile/Mobile_Place_Control.jpg",
				"/images/projects/airoasis/mobile/Mobile_Places.jpg",
				"/images/projects/airoasis/mobile/Mobile_Schedule_List.jpg",
				"/images/projects/airoasis/mobile/Mobile_Settings.jpg"
			]
		},
		details: {
			objective:
				"Was tasked as a solo project to Design and built an IoT Android and iOS mobile app which enables customers to sync their A.O Air Purifiers via Blu-Fi, with a control interface and scheduling capabilities.",
			keyResults: [
				"Developed skills in UX and UI design as well as gaining robust coding principles and experience in producing quality, scalable, performance optimized apps for a high profile client.",
				"Created an exceptionally Type-safe local and real-time cloud state management system within the application, and optimised the backend to repair edge-case errors, as well as ensure scalability going forwards."
			]
		},
		skills: [
			"React Native",
			"Typescript",
			"Firebase",
			"Cloud-Firestore",
			"Xcode",
			"Android Studio",
			"Android SDKs",
			"Jest",
			"JavaScript",
			"Bluetooth-Low-Energy",
			"React-Native-Maps",
			"X-State",
			"Zustand",
			"React Native Testing Library"
		]
	},
	{
		name: "WhoCo",
		tagline: "The People Company",
		images: {
			web: [
				"/images/projects/whoco/web/WHOCO-Talent.jpg",
				"/images/projects/whoco/web/WhoCo-Home.jpg",
				"/images/projects/whoco/web/WhoCo-Primary.jpg"
			],
			mobile: [
				"/images/projects/whoco/mobile/WhoCo-Home.jpg",
				"/images/projects/whoco/mobile/WhoCo-Talent.jpg"
			]
		},
		url: "https://web.archive.org/web/20230216050654/https://whoco.com/",
		details: {
			objective:
				"Was tasked as a solo project to Design and built an IoT Android and iOS mobile app which enables customers to sync their A.O Air Purifiers via Blu-Fi, with a control interface and scheduling capabilities.",
			keyResults: [
				"Developed skills in UX and UI design as well as gaining robust coding principles and experience in producing quality, scalable, performance optimized apps for a high profile client.",
				"Created an exceptionally Type-safe local and real-time cloud state management system within the application, and optimised the backend to repair edge-case errors, as well as ensure scalability going forwards."
			]
		},
		skills: [
			"React Native",
			"React",
			"HubSpot",
			"HubDb Tables",
			"HTML",
			"CSS",
			"SCSS",
			"SEO Optimisation"
		]
	},
	{
		name: "Fluent Outreach",
		tagline: "AI Lead Converter",
		images: {
			web: [
				"/images/projects/fluent/web/ContactOnboarding.jpg",
				"/images/projects/fluent/web/AddCampaign.jpg",
				"/images/projects/fluent/web/CampaignList.jpg",
				"/images/projects/fluent/web/CampaignDetails.jpg",
				"/images/projects/fluent/web/Contact.jpg",
				"/images/projects/fluent/web/Messages.jpg",
				"/images/projects/fluent/web/Settings.jpg"
			],
			mobile: []
		},
		url: "",
		details: {
			objective:
				"Was tasked as a solo project to Design and built an IoT Android and iOS mobile app which enables customers to sync their A.O Air Purifiers via Blu-Fi, with a control interface and scheduling capabilities.",
			keyResults: [
				"Developed skills in UX and UI design as well as gaining robust coding principles and experience in producing quality, scalable, performance optimized apps for a high profile client.",
				"Created an exceptionally Type-safe local and real-time cloud state management system within the application, and optimised the backend to repair edge-case errors, as well as ensure scalability going forwards."
			]
		},
		skills: [
			"Next.js",
			"Typescript",
			"Supabase",
			"TailwindCSS",
			"ChatGPT API",
			"React",
			"REST APIs",
			"PostgreSQL",
			"JavaScript",
			"Cypress Testing Suite",
			"PHP",
			"OAuth 2.0",
			"Dashboard Creation",
			"User Profiles",
			"Twillio",
			"Next-Auth",
			"Firebase",
			"Firebase-Auth",
			"Upstash",
			"React-Hook-Form"
		]
	},
	{
		name: "Vibe-A-Day",
		tagline: "Daily Song Selections",
		images: {
			web: [],
			mobile: []
		},
		url: "",
		details: {
			objective:
				"Was tasked as a solo project to Design and built an IoT Android and iOS mobile app which enables customers to sync their A.O Air Purifiers via Blu-Fi, with a control interface and scheduling capabilities.",
			keyResults: [
				"Developed skills in UX and UI design as well as gaining robust coding principles and experience in producing quality, scalable, performance optimized apps for a high profile client.",
				"Created an exceptionally Type-safe local and real-time cloud state management system within the application, and optimised the backend to repair edge-case errors, as well as ensure scalability going forwards."
			]
		},
		skills: ["React Native", "React", "Typescript", "TailwindCSS"]
	},
	{
		name: "usahi",
		tagline: "Home Improvement",
		images: {
			web: [
				"/images/projects/usahi/web/USA-AboutUS.jpg",
				"/images/projects/usahi/web/USAHI-Services.jpg",
				"/images/projects/usahi/web/USAhi-Contact.jpg",
				"/images/projects/usahi/web/USAhi-Financing.jpg"
			],
			mobile: [
				"/images/projects/usahi/mobile/USAHI-CONTACT-US.jpg",
				"/images/projects/usahi/mobile/USAHI-FINANCING.jpg",
				"/images/projects/usahi/mobile/USAHI-OURSERVICES.jpg",
				"/images/projects/usahi/mobile/USAhi-AboutUS.jpg"
			]
		},
		url: "https://usahomeimprovement.com/",
		details: {
			objective:
				"Was tasked as a solo project to Design and built an IoT Android and iOS mobile app which enables customers to sync their A.O Air Purifiers via Blu-Fi, with a control interface and scheduling capabilities.",
			keyResults: [
				"Developed skills in UX and UI design as well as gaining robust coding principles and experience in producing quality, scalable, performance optimized apps for a high profile client.",
				"Created an exceptionally Type-safe local and real-time cloud state management system within the application, and optimised the backend to repair edge-case errors, as well as ensure scalability going forwards."
			]
		},
		skills: [
			"React Native",
			"React",
			"Typescript",
			"HTML",
			"CSS",
			"React",
			"REST APIs",
			"XML Sitemaps",
			"SEO Optimisation",
			"Google Analytics"
		]
	},
	{
		name: "Tuition Covered",
		tagline: "AI maintained Scholarship Database",
		images: {
			web: [
				"/images/projects/tuition-covered/web/TC-Categories2.jpg",
				"/images/projects/tuition-covered/web/TC-Categories3.jpg",
				"/images/projects/tuition-covered/web/TC-Categories1.jpg",
				"/images/projects/tuition-covered/web/TC-College-Listing.jpg",
				"/images/projects/tuition-covered/web/TC-CollegesSearch.jpg",
				"/images/projects/tuition-covered/web/TC-Home.jpg",
				"/images/projects/tuition-covered/web/TC-ScholarshipsSearch.jpg"
			],
			mobile: [
				"/images/projects/tuition-covered/mobile/TC-Blog.jpg",
				"/images/projects/tuition-covered/mobile/TC-College-Details.jpg",
				"/images/projects/tuition-covered/mobile/TC-Colleges-Search.jpg",
				"/images/projects/tuition-covered/mobile/TC-Home.jpg",
				"/images/projects/tuition-covered/mobile/TC-Scholarships.jpg"
			]
		},
		url: "https://tuitioncovered.com/",
		details: {
			objective:
				"Was tasked as a solo project to Design and built an IoT Android and iOS mobile app which enables customers to sync their A.O Air Purifiers via Blu-Fi, with a control interface and scheduling capabilities.",
			keyResults: [
				"Developed skills in UX and UI design as well as gaining robust coding principles and experience in producing quality, scalable, performance optimized apps for a high profile client.",
				"Created an exceptionally Type-safe local and real-time cloud state management system within the application, and optimised the backend to repair edge-case errors, as well as ensure scalability going forwards."
			]
		},
		skills: [
			"Next.Js",
			"TypeScript",
			"Supabase",
			"TailwindCSS",
			"ChatGPT API",
			"OPEN AI GPT Models",
			"JavaScript",
			"SQL",
			"PostgreSQL",
			"HTML",
			"CSS",
			"React",
			"REST APIs",
			"XML Sitemaps",
			"SEO Optimisation",
			"Google Analytics"
		]
	}
];

export default projects;
