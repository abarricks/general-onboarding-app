import React, { ReactNode } from 'react';
import WelcomeBanner from '../components/WelcomeBanner'
import '../styles/pages/ResourcePage.css'

interface ResourceLinkProps {
	href: string;
	children: ReactNode;
}

interface ResourceItemProps {
	children: ReactNode;
}

interface ResourceSubItemProps {
	children: ReactNode;
}

interface ResourceTertiaryItemProps {
	children: ReactNode;
}

const ResourceLink: React.FC<ResourceLinkProps> = ({ href, children }) => (
	<a
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		className='resource-link'
	>
		{children}
	</a>
);

const ResourceItem: React.FC<ResourceItemProps> = ({ children }) => (
	<li className="mb-2">{children}</li>
);

const ResourceSubItem: React.FC<ResourceSubItemProps> = ({ children }) => (
	<li className="ml-6 mb-1">{children}</li>
);

const ResourceTertiaryItem: React.FC<ResourceTertiaryItemProps> = ({ children }) => (
	<li className="ml-4 mt-1 text-sm text-gray-600">{children}</li>
);


export const ResourcesPage = () => {
	return (
		<div className="max-w-4xl mx-auto p-8">
			<WelcomeBanner
				preTitle='Welcome to the'
				title='Onboarding Resources Bank'
				description='This collection of resources is here to help you easily locate onboarding materials. If you have questions about onboarding, click the "Onboarding Assistant" button below for guidance from our chatbot.'
			/>

			<ul className="resources-list">
				{/* General B-PASS Resources */}
				<ResourceItem>
					<div className="resource-section">
						<h2>General B-PASS Resources</h2>
						<ul className="resource-subitems">
							<ResourceSubItem>
								<ResourceLink href="https://amedeloitte.sharepoint.com/:p:/r/sites/SEMOSS/_layouts/15/Doc.aspx?sourcedoc=%7B8FDE5F7C-35CB-4E94-A017-6A453A88E476%7D&file=B-PASS_BusinessProcesses%20(1).pptx&nav=eyJzSWQiOjIxNDI1MzI3MDIsImNJZCI6MzEwOTk5MDMyfQ&action=edit&mobileredirect=true">
									B-PASS Contract Business Processes Deck
								</ResourceLink>
								<ul className="resource-tertiary-items">
										<ResourceTertiaryItem>
											Contract POCs
										</ResourceTertiaryItem>
										<ResourceTertiaryItem>
											Travel
										</ResourceTertiaryItem>
										<ResourceTertiaryItem>
											Purchases
										</ResourceTertiaryItem>
										<ResourceTertiaryItem>
											Monthly Reports
										</ResourceTertiaryItem>
										<ResourceTertiaryItem>
											Security Clearance & GFE
										</ResourceTertiaryItem>
										<ResourceTertiaryItem>
											Training
										</ResourceTertiaryItem>
										<ResourceTertiaryItem>
											Teams & Confluence
										</ResourceTertiaryItem>
								</ul>
							</ResourceSubItem>
							<ResourceSubItem>
								<ResourceLink href="https://teams.microsoft.com/l/team/19%3ASWmTWDmt6dBAjxyHeh6r3to4L-dnZQCqOODjdUl-OAA1%40thread.tacv2/conversations?groupId=8625d9a2-facf-44db-869b-ecfd45895cd6&tenantId=36da45f1-dd2c-4d1f-af13-5abe46b99921">
									B-PASS Teams Channel
								</ResourceLink>
							</ResourceSubItem>
							<ResourceSubItem>
								<ResourceLink href="https://confluence.deloitte.com/">
									Deloitte Confluence Space
								</ResourceLink>
								<ul className="resource-tertiary-items">
										<ResourceTertiaryItem>
											If you don't have access to the B-PASS Confluence space, email Matt Muldowney (mmuldowney@deloitte.com) for access.
										</ResourceTertiaryItem>
								</ul>
							</ResourceSubItem>
							<ResourceSubItem>
								SAAR Form Resources
								<ul className="resource-tertiary-items">
									<ResourceTertiaryItem>
										<ResourceLink href="https://amedeloitte.sharepoint.com/:b:/r/sites/SEMOSSContractResourcesFinancials/Shared%20Documents/General/4.0%20Processes%20%26%20Forms/CAC%20%26%20GFE%20Forms/Last,%20First%20DD-2875_2024MMDD.pdf?csf=1&web=1&e=Tm5aZg">
											SAAR Form 2875
										</ResourceLink>
									</ResourceTertiaryItem>
									<ResourceTertiaryItem>
										<ResourceLink href="https://amedeloitte.sharepoint.com/:b:/r/sites/SEMOSSContractResourcesFinancials/Shared%20Documents/General/4.0%20Processes%20%26%20Forms/CAC%20%26%20GFE%20Forms/Last%20Name_First%20Name%20DD-2875_TAP.pdf?csf=1&web=1&e=sYQht3">
											SAAR Form TAP
										</ResourceLink>
									</ResourceTertiaryItem>
									<ResourceTertiaryItem>
										<ResourceLink href="https://amedeloitte.sharepoint.com/:w:/r/sites/SEMOSSContractResourcesFinancials/Shared%20Documents/General/4.0%20Processes%20%26%20Forms/CAC%20%26%20GFE%20Forms/How%20to%20complete%20the%20SAAR%20form%20v2.docx?d=w170ec5f6170148dcb8b2ca4272d53521&csf=1&web=1&e=WPrHHT">
											SAAR Form Instructions v2
										</ResourceLink>
									</ResourceTertiaryItem>
									<ResourceTertiaryItem>
										<ResourceLink href="https://amedeloitte.sharepoint.com/:b:/r/sites/SEMOSSContractResourcesFinancials/Shared%20Documents/General/4.0%20Processes%20%26%20Forms/CAC%20%26%20GFE%20Forms/AUP(Acceptable%20Use%20Policy).pdf?csf=1&web=1&e=0MHDHz">
											Acceptable Use Policy
										</ResourceLink>
									</ResourceTertiaryItem>
								</ul>
							</ResourceSubItem>
							<ResourceSubItem>
								<ResourceLink href="https://amedeloitte.sharepoint.com/:p:/r/sites/SEMOSSContractResourcesFinancials/Shared Documents/General/2.0 Onboarding/Deloitte ETID %26 ESA-BAD Onboarding_TEMPLATE JAN25.pptx?d=w42491d602c4c4ca7808134b8dcefd1a5&csf=1&web=1&e=qdEMvD">
									ESA-BAD and ETID (Formerly MTIO) Onboarding PowerPoint (Version JAN25)
								</ResourceLink>
								<ul className="resource-tertiary-items">
										<ResourceTertiaryItem>
											B-PASS Onboarding Checklist
										</ResourceTertiaryItem>
										<ResourceTertiaryItem>
											Week 1 Schedule
										</ResourceTertiaryItem>
										<ResourceTertiaryItem>
											About the DHA
										</ResourceTertiaryItem>
										<ResourceTertiaryItem>
											About the Project Teams: ETID (formerly MTIO), ESA-BAD, and Analytics
										</ResourceTertiaryItem>
										<ResourceTertiaryItem>
											Internal and Client Meetings
										</ResourceTertiaryItem>
										<ResourceTertiaryItem>
											SharePoint Collaboration Sites
										</ResourceTertiaryItem>
										<ResourceTertiaryItem>
											Program Management Tool: Confluence
										</ResourceTertiaryItem>
										<ResourceTertiaryItem>
											Government Furnished Equipment
										</ResourceTertiaryItem>
										<ResourceTertiaryItem>
											DHA Mandatory Training
										</ResourceTertiaryItem>
										<ResourceTertiaryItem>
											Contract Summary
										</ResourceTertiaryItem>
										<ResourceTertiaryItem>
											Locations
										</ResourceTertiaryItem>
								</ul>
							</ResourceSubItem>
						</ul>
					</div>
				</ResourceItem>

				{/* SEMOSS Onboarding Resources*/}
				<ResourceItem>
					<div className="resource-section">
						<h2>SEMOSS Onboarding Resources</h2>
						<ul className="resource-subitems">
							<ResourceSubItem>
								<ResourceLink href="https://amedeloitte.sharepoint.com/:p:/r/sites/SEMOSS/_layouts/15/Doc2.aspx?action=edit&sourcedoc=%7Bdc4c3543-7855-469f-86f9-042395c64b38%7D&wdOrigin=TEAMS-MAGLEV.teamsSdk_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1735071007909&web=1">
									SEMOSS Onboarding Deck
								</ResourceLink>
								<ul className="resource-tertiary-items">
										<ResourceTertiaryItem>
											Onboarding Schedule
										</ResourceTertiaryItem>
										<ResourceTertiaryItem>
											SEMOSS Overview
										</ResourceTertiaryItem>
										<ResourceTertiaryItem>
											GovConnect.ai (formerly AI Core) Overview
										</ResourceTertiaryItem>
										<ResourceTertiaryItem>
											SEMOSS Leadership Overview
										</ResourceTertiaryItem>
										<ResourceTertiaryItem>
											About SEMOSS Project Teams
										</ResourceTertiaryItem>
										<ResourceTertiaryItem>
											Getting started with SEMOSS
										</ResourceTertiaryItem>
								</ul>
							</ResourceSubItem>
							<ResourceSubItem>
								<ResourceLink href="https://amedeloitte.sharepoint.com/:f:/r/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Installation?csf=1&web=1&e=P8mDAe">
									SEMOSS Installation
								</ResourceLink>
							</ResourceSubItem>
							<ResourceSubItem>
									SEMOSS Training Resources
									<ul className="resource-tertiary-items">
										<ResourceTertiaryItem>
											<ResourceLink href="https://amedeloitte.sharepoint.com/:f:/r/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20%26%20Training/SEMOSS%20Training%20Materials/1%20-%20Basic%20Training?csf=1&web=1&e=BuOGXE">
												Basic Training Resources
											</ResourceLink>
										</ResourceTertiaryItem>
										<ResourceTertiaryItem>
											<ResourceLink href="https://amedeloitte.sharepoint.com/:f:/r/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20%26%20Training/SEMOSS%20Training%20Materials/2%20-%20Advanced%20Training?csf=1&web=1&e=RAUO6y">
												Advanced Training Resources (optional - time permitting)
											</ResourceLink>
										</ResourceTertiaryItem>
									</ul>
							</ResourceSubItem>
							<ResourceSubItem>
								<ResourceLink href="https://amedeloitte.sharepoint.com/:f:/r/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20%26%20Training/AI%20Core%20Training%20Materials?csf=1&web=1&e=117Vyv">
									GovConnect.ai (Formerly AI Core) Training Materials
								</ResourceLink>
							</ResourceSubItem>
						</ul>
					</div>
				</ResourceItem>
				
				{/* TAP Onboarding Resources*/}
				<ResourceItem>
					<div className="resource-section">
						<h2>TAP Onboarding Resources</h2>
						<ul className="resource-subitems">
							<ResourceSubItem>
								<ResourceLink href="https://amedeloitte.sharepoint.com/:w:/r/sites/TAP228/Shared%20Documents/General/Onboarding%20Resources/Getting%20Started%20with%20TAP.docx?d=w937a3dc6c86c4f40b9852fb068747abe&csf=1&web=1&e=qzBUPi">
									Getting Started with TAP
								</ResourceLink>
							</ResourceSubItem>
							<ResourceSubItem>
								<ResourceLink href="https://amedeloitte.sharepoint.com/:w:/r/sites/TAP228/Shared%20Documents/General/Onboarding%20Resources/TAP%20Onboarding%20Checklist.docx?d=w78f94757981943848fa357b4a5e231ec&csf=1&web=1&e=teYfVh">
									TAP Onboarding Checklist
								</ResourceLink>
							</ResourceSubItem>
							<ResourceSubItem>
								<ResourceLink href="https://amedeloitte.sharepoint.com/:w:/r/sites/TAP228/Shared%20Documents/General/Onboarding%20Resources/TAP%20Dashboard%20Checklist.docx?d=wf5a2c7d209384d36bf50c5259a1adc72&csf=1&web=1&e=y416ZO">
									TAP Dashboard Checklist
								</ResourceLink>
							</ResourceSubItem>
							<ResourceSubItem>
								<ResourceLink href="https://amedeloitte.sharepoint.com/:p:/r/sites/TAP228/Shared%20Documents/General/Onboarding%20Resources/TAP%20Dashboards%20Updated%201-24.pptx?d=w1546766725c74edfb63e683863edb3b7&csf=1&web=1&e=0QnMbg">
									TAP Dashboard (Updated 01-2024)
								</ResourceLink>
							</ResourceSubItem>
							<ResourceSubItem>
								<ResourceLink href="https://amedeloitte.sharepoint.com/:b:/r/sites/TAP228/Shared%20Documents/General/Onboarding%20Resources/Decom%20Resources%20Guide.pdf?csf=1&web=1&e=4O4FoZ">
									Decom Resources Guide
								</ResourceLink>
							</ResourceSubItem>
							<ResourceSubItem>
								<ResourceLink href="https://amedeloitte.sharepoint.com/:w:/r/sites/TAP228/Shared%20Documents/General/Onboarding%20Resources/Pixel%20Playbook%202021.docx?d=w527145bf91b34b978f183ecff8b2f4d6&csf=1&web=1&e=jsDSdT">
									Pixel Playbook 2021
								</ResourceLink>
							</ResourceSubItem>
							<ResourceSubItem>
								<ResourceLink href="https://amedeloitte.sharepoint.com/:p:/r/sites/TAP228/Shared%20Documents/General/Onboarding%20Resources/SEMOSS%20Security%20Steps.pptx?d=w2ea865adb29c490b8e9dbf0baec0e351&csf=1&web=1&e=MY1GAj">
									SEMOSS Security Steps
								</ResourceLink>
							</ResourceSubItem>
						</ul>

					</div>
				</ResourceItem>

				{/* ESA=BAD Onboarding Resources*/}
				<ResourceItem>
					<div className="resource-section">
						<h2>ESA-BAD Onboarding Resources</h2>
						<ul className="resource-subitems">
							<ResourceSubItem>
								Links to be added
							</ResourceSubItem>
						</ul>
					</div>
				</ResourceItem>

				{/* ETID Onboarding Resources*/}
				<ResourceItem>
					<div className="resource-section">
						<h2>ETID Onboarding Resources</h2>
						<ul className="resource-subitems">
							<ResourceSubItem>
								Links to be added
							</ResourceSubItem>
						</ul>
					</div>
				</ResourceItem>

				{/* EIDS Onboarding Resources*/}
				<ResourceItem>
					<div className="resource-section">
						<h2>EIDS Onboarding Resources</h2>
						<ul className="resource-subitems">
							<ResourceSubItem>
								Links to be added
							</ResourceSubItem>
						</ul>
					</div>
				</ResourceItem>

				{/* AMEDD Onboarding Resources*/}
				<ResourceItem>
					<div className="resource-section">
						<h2>AMEDD Onboarding Resources</h2>
						<ul className="resource-subitems">
							<ResourceSubItem>
								Links to be added
							</ResourceSubItem>
						</ul>
					</div>
				</ResourceItem>
			</ul>
		</div>
	);
};

export default ResourcesPage;