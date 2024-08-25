import { time } from "console";
import { title } from "process";

export interface Project {
	name: string;
	tagline: string;
	images: {
		web: string[];
		mobile: string[];
	};
	details: {
		overview: string;
		objective: string;
		motivation?: string;
		techStack?: {
			title?: string;
			frontend: string;
			stateManagement: string;
			backend: string;
		};
		keyFeatures?: {
			title?: string;
			features?: {
				title: string;
				text: string;
			}[];
		};
		keyResults?: string[];
		outcomes?: {
			title?: string;
			outcome: {
				title: string;
				text: string;
			}[];
		};
	};
	url?: string;
	skills: string[];
}

const projects: Project[] = [
	{
		name: "Air Oasis Home",
		tagline: "- IoT Mobile Application",
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
			overview:
				"I developed Air Oasis Home, an IoT mobile application, independently from the ground up, available for both Android and iOS. Post-launch, I’ve taken sole responsibility for ongoing updates and maintenance on both the App Store and Google Play. This project showcases my ability to manage a full development cycle, from initial concept through to deployment and post-production support.",
			objective:
				"Was tasked as a solo project to Design and built an IoT Android and iOS mobile app which enables customers to sync their A.O Air Purifiers via Blu-Fi, with a control interface and scheduling capabilities.",
			motivation:
				"Air Oasis Home was designed to solve the challenge of managing and controlling air purification devices remotely. The app connects users with their A.O. air purifiers via Bluetooth and WiFi, allowing them to seamlessly sync, control, and schedule their devices directly from their smartphones.",
			techStack: {
				title: "Tech Stack",
				frontend:
					"React Native with TypeScript for robust and type-safe code.",
				stateManagement:
					"Zustand for local state management and XState for handling the complex state machines involved in device connectivity.",
				backend:
					"Firebase for a cloud-based database solution, ensuring real-time synchronization and reliable data storage."
			},
			keyFeatures: {
				title: "Key Features",
				features: [
					{
						title: "Bluetooth & WiFi Integration",
						text: "Utilized ESP-32 chip provisioning to enable device syncing over Bluetooth, with WiFi facilitating further backend communication."
					},
					{
						title: "Real-time Feedback",
						text: "Ensured real-time device status updates using a synchronised local state infrastructure, enhancing user experience with immediate feedback."
					},
					{
						title: "UX/UI Design",
						text: "Focused on creating an intuitive user interface, balancing aesthetics with functionality to provide users with a seamless and visually appealing experience."
					}
				]
			},
			outcomes: {
				title: "Outcomes",
				outcome: [
					{
						title: "User Experience",
						text: "Delivered a user-friendly app that allows users to manage their air purifiers with ease, providing real-time device status, scheduling, and control options."
					},
					{
						title: "Scalability & Maintenance",
						text: "Optimized the backend to handle edge cases and ensure the app remains scalable as the user base grows. My ongoing maintenance ensures the app continues to perform reliably."
					},
					{
						title: "Professional Growth",
						text: "Gained extensive experience in UX / UI design, state management, and backend development, solidifying my expertise in building high - quality, scalable mobile applications."
					}
				]
			}
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
			overview: "",
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
		details: {
			overview:
				"Fluent Outreach is a commercial web application designed to empower companies and teams to manage customer lead inboxes and monitor outreach campaign success. This application features an AI-powered customer service advisor, providing a seamless customer experience by automating responses and scheduling appointments based on real-time calendar availability.",
			objective:
				"Collaborated with the client company's CEO and leadership team to develop a minimum viable product (MVP) dashboard that enables companies to manage their customer outreach campaigns efficiently. The application allows for AI-driven customer interactions, manual overrides by users, and robust analytics to track campaign performance.",
			motivation:
				"The Fluent Outreach platform was created to streamline the customer outreach process by integrating AI into customer service, reducing the burden on human advisors, and ensuring timely and accurate responses to customer inquiries. The aim was to enhance conversion rates from potential leads to confirmed appointments by automating and optimizing key touchpoints in the customer journey.",
			techStack: {
				frontend:
					"Next.js and Tailwind CSS for building a responsive and user-friendly interface, with custom components tailored to the specific needs of the platform.",
				stateManagement:
					"React Hook Form for handling form data, synchronized with Firebase and Supabase for real-time updates and authentication management.",
				backend:
					"Upstash for low-latency, real-time data updates, Twilio SMS API for customer interactions, and OpenAI integration for the AI-powered customer service advisor. Cloud Firestore and PostgreSQL were used for data storage and retrieval, ensuring scalability and reliability."
			},
			keyFeatures: {
				title: "Key Features",
				features: [
					{
						title: "AI-Powered Customer Service",
						text: "Integrated an AI customer service advisor that can be trained on company-specific literature and automatically reach out to customers based on campaign checkpoints. The AI can book appointments in sync with the team's calendar and handle complex customer interactions."
					},
					{
						title: "Campaign Management Dashboard",
						text: "Developed a comprehensive dashboard that allows managers to onboard team members, assign permissions, and monitor the success of outreach campaigns through detailed analytics and real-time updates."
					},
					{
						title: "Real-Time Communication",
						text: "Created a responsive chat interface that supports real-time communication between customer service advisors and customers, with AI-driven automation for handling customer inquiries and scheduling appointments."
					},
					{
						title: "User Authentication & Permissions",
						text: "Implemented Next Auth for secure user authentication and session management, with customizable user permission profiles that allow managers to control access to various parts of the platform."
					}
				]
			},
			outcomes: {
				title: "Outcomes",
				outcome: [
					{
						title: "Enhanced Customer Interaction",
						text: "The AI integration significantly reduced response times and improved customer satisfaction by ensuring timely follow-ups and accurate information, leading to higher conversion rates."
					},
					{
						title: "Scalable and Maintainable Platform",
						text: "The platform was built with scalability in mind, utilizing cloud-based technologies and a modular architecture that allows for easy maintenance and future expansion."
					},
					{
						title: "Streamlined Team Management",
						text: "Managers can efficiently onboard new team members, assign tasks, and monitor performance, thanks to the intuitive dashboard and robust permission management system."
					}
				]
			}
		},
		skills: [
			"Next.js",
			"Next-Auth",
			"Firebase",
			"Firebase-Auth",
			"Upstash",
			"Twilio",
			"PostgreSQL",
			"React-Hook-Form",
			"TypeScript",
			"Supabase",
			"Tailwind CSS",
			"ChatGPT API",
			"JavaScript",
			"React",
			"REST APIs"
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
			overview: "",
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
			overview: "",
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
			overview: "",
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
