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
			overview:
				"WhoCo is a high-performance, scalable website developed for a U.S.-based recruitment startup founded by a former MySpace co-founder. The website was designed to align with their Figma-based UX/UI designs, offering a sleek, responsive, and multilingual experience. Hosted on the HubSpot platform, WhoCo allows the internal team to easily create and manage content through custom templates and components.",
			objective:
				"The primary objective of the WhoCo project was to build a highly responsive, visually appealing website that could be easily managed by the WhoCo team. The site was built to be scalable and performant, supporting a growing user base while maintaining fast load times and excellent SEO optimization.",
			motivation:
				"Given WhoCo's ambition to disrupt the recruitment industry with a modern approach, the website needed to reflect their innovative spirit. It was crucial to create a platform that was not only beautiful and easy to use but also technically robust, ensuring a seamless experience for users across the globe. Working closely with the design team, we ensured that the website faithfully translated their Figma designs into a functional, high-quality product.",
			techStack: {
				title: "Tech Stack",
				frontend:
					"HTML, CSS, and JavaScript were used for building the front-end, with a focus on clean, maintainable code that closely followed the provided designs.",
				stateManagement:
					"Handled via custom JavaScript code, ensuring smooth interactions and dynamic content updates.",
				backend:
					"Hosted on the HubSpot platform, leveraging HubL (HubSpot's templating language) and HubDb for managing dynamic content and database-driven elements."
			},
			keyFeatures: {
				title: "Key Features",
				features: [
					{
						title: "Responsive and Multilingual Design",
						text: "The website was built to be fully responsive, providing an optimal viewing experience across all devices. Additionally, it supports multiple languages, broadening WhoCo's reach to a global audience."
					},
					{
						title: "Custom HubSpot Integration",
						text: "Developed custom components using HubL to dynamically pull content from HubDb, allowing the WhoCo team to easily manage and update the site without technical assistance."
					},
					{
						title: "SEO Optimization and Performance",
						text: "Implemented best practices for SEO, including meta tags, alt attributes, and clean URLs. The website was optimized for speed through image compression, code minification, and efficient loading of assets, resulting in fast page load times."
					},
					{
						title: "Collaborative Agile Development",
						text: "The project was developed using Agile methodologies, which involved close collaboration between developers, designers, and the WhoCo team. This approach ensured that the project met deadlines and exceeded client expectations."
					}
				]
			},
			outcomes: {
				title: "Outcomes",
				outcome: [
					{
						title: "High-Performance Website",
						text: "Delivered a scalable, responsive website that provides a seamless user experience across devices, with excellent performance metrics that enhance user satisfaction and engagement."
					},
					{
						title: "Client Empowerment",
						text: "The integration with HubSpot allows the WhoCo team to easily manage their content, enabling them to stay agile and responsive to business needs without relying on continuous developer intervention."
					},
					{
						title: "Professional Growth and Team Collaboration",
						text: "This project marked one of my first full-team collaborations at KJA. It was an invaluable experience in teamwork and Agile development, deepening my understanding of collaborative coding practices, project management, and delivering a high-quality product within tight deadlines."
					},
					{
						title: "Enhanced SEO and Accessibility",
						text: "The site was optimized for both search engines and accessibility, ensuring it meets the needs of all users and performs well in search rankings."
					}
				]
			}
		},
		skills: [
			"HTML",
			"CSS",
			"JavaScript",
			"HubSpot",
			"HubL",
			"HubDb Tables",
			"HTML",
			"CSS",
			"SCSS",
			"SEO Optimization",
			"Responsive Design",
			"Agile Development"
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
			mobile: [
				"/images/projects/vibeaday/mobile/VibeADay1.jpg",
				"/images/projects/vibeaday/mobile/VibeADay2.jpg",
				"/images/projects/vibeaday/mobile/VibeADay3.jpg",
				"/images/projects/vibeaday/mobile/VibeADay4.jpg",
				"/images/projects/vibeaday/mobile/VibeADay5.jpg",
				"/images/projects/vibeaday/mobile/VibeADay6.jpg",
				"/images/projects/vibeaday/mobile/VibeADay7.jpg",
				"/images/projects/vibeaday/mobile/VibeADay8.jpg"
			]
		},
		url: "",
		details: {
			overview:
				"Vibe-A-Day is a mobile application designed to broaden users' musical horizons by providing daily curated song recommendations across a variety of genres. The app delivers five new tracks each day, carefully selected to appeal to both casual listeners and avid music enthusiasts. Vibe-A-Day aims to introduce users to niche musical artists and diverse genres, ensuring a fresh and enriching musical experience.",
			objective:
				"The goal of Vibe-A-Day was to create a seamless and user-friendly mobile app that curates and delivers high-quality music recommendations daily. The app is built to be simple yet effective, catering to music lovers who may not have the time to discover new music on their own. It also provides users with multiple options for streaming or purchasing the recommended tracks, thereby supporting independent artists.",
			motivation:
				"Music has always been a passion of mine, and Vibe-A-Day was born out of a desire to share the joy of discovering new music with others. As life becomes more hectic, finding time to explore new music can be challenging. This app fills that gap, offering a convenient way for users to enjoy fresh tracks and explore genres they might not have encountered otherwise. The app also addresses the need to support independent musicians by encouraging users to purchase tracks through platforms like Bandcamp and Apple Music, rather than just streaming.",
			techStack: {
				title: "Tech Stack",
				frontend:
					"React Native with Expo for streamlined development and a smooth user experience.",
				stateManagement:
					"Zustand for managing local state, ensuring quick and responsive interactions.",
				backend:
					"Supabase for handling track and playlist data, providing a robust and scalable backend solution."
			},
			keyFeatures: {
				title: "Key Features",
				features: [
					{
						title: "Daily Curated Song Recommendations",
						text: "Users receive five new songs every day, each carefully curated to ensure high quality and broad appeal across different genres."
					},
					{
						title: "Multi-Platform Support",
						text: "Each song recommendation includes links to multiple platforms such as Spotify, Apple Music, Bandcamp, and SoundCloud, allowing users to listen and support artists in their preferred way."
					},
					{
						title: "Smooth and Intuitive UI/UX",
						text: "The app's design prioritizes ease of use, with a clean and modern interface that makes exploring new music a delightful experience."
					},
					{
						title: "Artist and Genre Diversity",
						text: "The app ensures a wide range of genres and artists are featured each week, encouraging users to discover and enjoy music outside of their usual preferences."
					}
				]
			},
			outcomes: {
				title: "Outcomes",
				outcome: [
					{
						title: "Enhanced Music Discovery",
						text: "Users have reported finding new favorite artists and genres, expanding their musical tastes through the app's daily recommendations."
					},
					{
						title: "Support for Independent Musicians",
						text: "By providing purchase options and social media links, the app helps users directly support independent artists, fostering a more sustainable music ecosystem."
					},
					{
						title: "Personal Growth as a Developer",
						text: "This project marked my first foray into using Expo with React Native, which enhanced my skills in mobile app development and broadened my understanding of building user-centric applications."
					}
				]
			}
		},
		skills: [
			"React Native",
			"React",
			"Typescript",
			"TailwindCSS",
			"Expo",
			"Supabase",
			"Supabase Client API",
			"Auth",
			" OAuth2.0",
			"Spotify API",
			"Spotify Auth",
			"SoundCloud API",
			"SoundCloud Auth",
			"Bandcamp API",
			"Bandcamp Auth"
		]
	},
	{
		name: "USAHI",
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
			overview:
				"USAHI is a comprehensive project aimed at revamping the operations and customer experience of a Florida-based renovation company. The project involved a complete overhaul of their business model, optimizing logistics, streamlining the customer journey, and maximizing lead conversion. This was achieved through the migration of their booking and sales platform to Salesforce and a complete redesign of their customer-facing website using HubSpot and React.",
			objective:
				"The primary objective of the USAHI project was to modernize the company's operations and improve their customer experience. This included optimizing their internal logistics, enhancing the efficiency of field operations through a custom booking widget, and creating a high-performing, SEO-optimized website that effectively converts leads into customers.",
			motivation:
				"USAHI needed to modernize its business model to stay competitive in the renovation industry. By leveraging technology, the company sought to reduce operational costs, increase productivity, and provide a better customer experience. The project was driven by the need to create a scalable and efficient system that would support the company’s growth and enhance its market presence.",
			techStack: {
				title: "Tech Stack",
				frontend:
					"React and HubL were used to build the front-end, providing a dynamic and responsive user experience. HTML, CSS, and SCSS ensured the site was visually appealing and maintainable.",
				stateManagement:
					"Custom JavaScript was used to handle state and interactions across the website, ensuring smooth user experience.",
				backend:
					"Salesforce was integrated for managing customer interactions, booking, and sales operations. HubSpot was used to manage the website content, with HubL and HubDb supporting the dynamic content and data management."
			},
			keyFeatures: {
				title: "Key Features",
				features: [
					{
						title: "Salesforce Integration",
						text: "Migrated the company's booking and sales platform to Salesforce, allowing the sales team and managers to access and manage leads, track KPIs, and optimize field operations with real-time data."
					},
					{
						title: "Custom Booking Widget",
						text: "Developed an algorithm-driven booking widget that optimizes fuel efficiency and minimizes time wastage for field operatives. This widget assigns appointments based on the operative's location, job type, and estimated completion time."
					},
					{
						title: "SEO-Optimized Website",
						text: "Created a highly responsive and SEO-optimized website using HubSpot and React, with individual pages for each service offered. The site was designed to rank highly in search results, improving visibility and lead conversion."
					},
					{
						title: "Scalable and Accessible Design",
						text: "Built a scalable website structure that allows the USAHI team to update content independently. The design focused on accessibility, ensuring a seamless experience across devices and compliance with accessibility standards."
					}
				]
			},
			outcomes: {
				title: "Outcomes",
				outcome: [
					{
						title: "Optimized Operations",
						text: "The integration with Salesforce and the custom booking widget significantly improved operational efficiency, reducing costs and increasing productivity for field operatives."
					},
					{
						title: "Enhanced Customer Experience",
						text: "The new website and streamlined customer journey led to higher lead conversion rates and improved customer satisfaction. The site’s SEO performance also boosted the company’s visibility, attracting more potential customers."
					},
					{
						title: "Professional Growth and Team Collaboration",
						text: "This project provided valuable experience in client collaboration, Agile development, and the implementation of scalable solutions. It also enhanced my skills in React, HubSpot, and Salesforce integration."
					},
					{
						title: "Successful Modernization",
						text: "USAHI's revamped business model and modernized operations have positioned the company for sustained growth and success in the competitive renovation industry."
					}
				]
			}
		},
		skills: [
			"React",
			"Typescript",
			"HTML",
			"CSS",
			"REST APIs",
			"XML Sitemaps",
			"SEO Optimisation",
			"Google Analytics",
			"HubSpot",
			"HubL",
			"HubDb",
			"Salesforce",
			"React Hook Form",
			"Accessability",
			"Agile Development",
			"Figma Design Recreation",
			"User Accounts and Permissions",
			"Image Optimization",
			"Mobile Web-Design",
			"Navigation Routing",
			"CTAs and Lead Conversion",
			"Client Collaboration"
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
