import { SubTask, TaskGroup } from '../types/tasks';
import {TaskStatus} from '../types/status';

import contractDescriptionImage from '../../images/contractAndCLINs.png';
import DoD_DHA_OrgChart from '../../images/DoD_DHA_Org_Chart.png'
import dhaSeniorLeadershipOrgChart from '../../images/dhaSeniorLeadershipOrgChart.png'
import dhaADS_OrgChart from '../../images/dhaAD-S_OrgChart.png'
import peo_ms_j6_leadership from '../../images/peo_ms_j6_leadership.png'

import bpassContractDetails from '../../images/bpassContractDetails.png'
import cacRequestProcess from '../../images/cacRequestProcess.png'
import MermaidExample from '../../images/mermaidExample.png'
import formFillerExamplePage from '../../images/formFillerExamplePage.png'
import formFillerExamplePDF from '../../images/formFillerExamplePDF.png'
import gfeRequestProcess from '../../images/gfeRequestProcess.png'
import jkoTrainingImage from '../../images/jkoTrainingImage.png'
import semossCreation from '../../images/semossCreation.png'
import semossCapabilities from '../../images/semossCapabilities.png'
import onboardingProcessFlowESABAD from '../../images/onboardingProcessFlowESABAD.png'
import contractotInternalOnboardingProcessESABAD from '../../images/contractotInternalOnboardingProcessESABAD.png'
import ESABADOffboardingProcess from '../../images/ESABADOffboardingProcess.png'
import dunnLoringShuttle from '../../images/dunnLoringShuttle.png'
import pentagonShuttle from '../../images/pentagonShuttle.png'

import etidAndEsabadPOCs from '../../images/etidAndEsabadPOCs.png'
import tapPOCs from '../../images/tapPOCs.png'
import eidsPOCs from '../../images/eidsPOCs.png'
import ameddPOCs from '../../images/ameddPOCs.png'
import { PolicySharp } from '@mui/icons-material';


export const dummyTasks: TaskGroup[] = [
  {
    "id": "general-1",
    "title": "Welcome to B-PASS",
    "preTitle": "General",
    "dueDate": "2024-12-31",
    "page": "general",
    "subtasks": [
      {
        "id": "g1",
        "title": "Contract summary",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "The Business and Program Analytics Support Services (B-PASS) contract consists of four contract line item numbers (CLINs): ESA-BAD, ETID (formerly EISD/MTIO), TAP, and another ETID. Each CLIN is supported by a dedicated team."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Review the diagram of the contract CLINs below. NOTE: MTIO is now ETID (Enterprise Technology Integration Division)."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Review"
                },
                {"text": " B-PASS contract summary", href: 'https://amedeloitte.sharepoint.com/:p:/r/sites/SEMOSSContractResourcesFinancials/Shared%20Documents/General/4.0%20Processes%20%26%20Forms/BPASS%20Processes/B-PASS%20Business%20Processes%2019NOV24%20-%20OY3.pptx?d=w42ce6195178149c490b7693b9a893eb3&csf=1&web=1&e=fmEklS&nav=eyJzSWQiOjIxNDI1MzI3MjYsImNJZCI6MTkyMDg2Mzg0fQ'}
              ],
              "bulletLevel": 1
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "Contract Description",
            "url": contractDescriptionImage,
            "type": "image"
          }
        ]
      },
      {
        "id": "g2",
        "title": "About the Defense Health Agency (DHA)",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "The Defense Health Agency (DHA) is a joint, integrated Combat Support Agency within the Department of Defense (DoD), established in 2013 to provide a medically ready force and a ready medical force to Combatant Commands. The DHA manages the TRICARE health plan, ensuring comprehensive health care for military personnel, retirees, and their families, and oversees medical readiness, research, education, and health IT. Operating under the Under Secretary of Defense for Personnel and Readiness, the DHA collaborates with the Army, Navy, and Air Force medical departments to standardize and streamline health care delivery across the Military Health System (MHS), enhancing the efficiency and effectiveness of military health care."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Review the above information about the DHA"
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Review the "
                },
                {"text": "organizational charts", href: 'https://amedeloitte.sharepoint.com/:p:/r/sites/SEMOSSContractResourcesFinancials/Shared%20Documents/General/2.0%20Onboarding/Deloitte%20ETID%20%26%20ESA-BAD%20Onboarding_TEMPLATE%20JAN25.pptx?d=w42491d602c4c4ca7808134b8dcefd1a5&csf=1&web=1&e=eThCCx&nav=eyJzSWQiOjEyNjgsImNJZCI6MjI1NjkyNDc5N30'},
                {
                  "text": " listed under additional resources."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "Organization Chart - DoD/DHA",
            "url": DoD_DHA_OrgChart,
            "type": "image"
          },
          {
            "title": "DHA Senior Leadership Organizational Structure",
            "url": dhaSeniorLeadershipOrgChart,
            "type": "image"
          },
          {
            "title": "DHA Assistant Director of Support (AD-S) Organizational Structure",
            "url": dhaADS_OrgChart,
            "type": "image"
          },
          {
            "title": "PEO MS/ J-6 Leadership Organizational Structure",
            "url": peo_ms_j6_leadership,
            "type": "image"
          },
        ]
      }
    ]
  },
  {
    "id": "general-2",
    "title": "Logistics",
    "preTitle": "General",
    "dueDate": "2024-12-31",
    "page": "general",
    "subtasks": [
      {
        "id": "t1",
        "title": "Locations",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "The B-PASS contract teams work out of two Deloitte offices:"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Deloitte Rosslyn Office:", bold: true
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Address: ", bold: true
              },
              {
                "text": "1919 N Lynn St Suite 1500, Arlington, VA 22209"
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Details: ", bold: true
              },
              {
                "text": "The team frequently works together on floor 18"
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Purpose: ", bold: true
              },
              {
                "text": "The team may go into the Rosslyn office to collaborate together, engage with other teams in the project or the firm, and make use of office resources such as meeting rooms, technology, facilities, and more."
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Deloitte Fairview Park Office:", bold: true
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Address: ", bold: true
              },
              {
                "text": "2941 Fairview Park Dr Suite 400, Falls Church, VA 22042"
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Details: ", bold: true
              },
              {
                "text": "The 2nd floor of the parking garage has access the bridge to enter the building. Once you are inside, take the elevator to the 4th floor to go to the Deloitte Office. If your badge does not work at this office, please contact the front desk about getting access."
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Purpose: ", bold: true
              },
              {
                "text": "The Fairview Park office is another Deloitte office equipped with resources similar to the Deloitte Rosslyn office where various teams under the Military Health Systems (MHS) account gather. It offers the distinct advantage of being near the Defense Health Headquarters (DHHQ) office (details below) where presentations and meetings with DHHQ personnel may take place. The Fairview Park office is also a prime location for MHS events to engage teams under the account."
              }
            ],
            "bulletLevel": 2
          },


          {
            "spans": [
              {
                "text": "Defense Health Headquarters (DHHQ) Office:", bold: true
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Address: ", bold: true
              },
              {
                "text": "7700 Arlington Blvd, Falls Church, VA 22042"
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Details: ", bold: true
              },
              {
                "text": "Requires a Common Access Card (CAC) or Visitor Request for building access. Check in with your manager before your first visit for assistance. To bypass parking documentation, park at the Fairview Park office and walk to DHHQ."
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Purpose: ", bold: true
              },
              {
                "text": "Client meetings with DHHQ personnel may be conducted here. The IT department is also located here to assist with Government Furnished Equipment (GFE) set up and issues."
              },
              // {
              //   "text": "For shuttle information, see next task."
              // }
            ],
            "bulletLevel": 2
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Take note of the above information for your records."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ]
      },
      // {
      //   "id": "e2",
      //   "title": "Shuttles to DHHQ",
      //   "status": "not-started",
      //   "description": [
      //     {
      //       "spans": [
      //         {
      //           "text": "There are two shuttles that run to DDHQ: the Dunn Loring Shuttle and the Pentagon Shuttle"
      //         }
      //       ]
      //     }
      //   ],
      //   "steps": [
      //     [
      //       {
      //         "spans": [
      //           {
      //             "text": "Review the shuttle schedules below. Click on the images to open them in a new window and save them for your records."
      //           }
      //         ],
      //         "bulletLevel": 1
      //       }
      //     ]
      //   ],
      //   "additionalResources": [
      //     {
      //       "title": "Dunn Loring Shuttle",
      //       "url": dunnLoringShuttle,
      //       "type": "image"
      //     },
      //     {
      //       "title": "Pentagon Shuttle",
      //       "url": pentagonShuttle,
      //       "type": "image"
      //     }
      //   ]
      // },
    ]
  },
  {
    "id": "general-3",
    "title": "Access and Equipment",
    "preTitle": "General",
    "dueDate": "2024-12-31",
    "page": "general",
    "subtasks": [
      {
        "id": "g1",
        "title": "Join the B-PASS Teams Channel",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Joining the B-PASS Teams channel will provide you with access to essential resources, updates, and collaboration opportunities related to the B-PASS project."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "If you don’t have access to the B-PASS team’s channel, request to join"
                },
                {
                  "text": " here.", href: 'https://teams.microsoft.com/l/team/19%3ASWmTWDmt6dBAjxyHeh6r3to4L-dnZQCqOODjdUl-OAA1%40thread.tacv2/conversations?groupId=8625d9a2-facf-44db-869b-ecfd45895cd6&tenantId=36da45f1-dd2c-4d1f-af13-5abe46b99921'
                }
              ],
              "bulletLevel": 1
            }
          ]
        ]
      },
      {
        "id": "g2",
        "title": "Access Confluence",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Joining the B-PASS Confluence space is crucial for accessing comprehensive project documentation and knowledge sharing. It houses detailed guidelines, project plans, and collaborative tools that support your work."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Access the B-PASS team’s "
                },
                {
                  "text": " confluence space", href: 'https://confluence.deloitte.com/'
                },
                {
                  "text": ". If you don’t have access to the B-PASS team’s confluence space, email Matt Muldowney (mmuldowney@deloitte.com) for access."
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "g3",
        "title": "Common Access Card (CAC) Application",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "A Common Access Card (CAC) is a smart card issued by the Department of Defense (DoD) to military personnel, civilian employees, and contractors. It is used for physical and logical access to DoD facilities and systems. The CAC stores personal and biometric information, such as name, rank, photo, fingerprints, and certificates, on a single integrated circuit chip (ICC). "
              },
              {
                "text": "Note: the CAC request process timeline may vary depending on whether the you do or do not have an existing DoD security clearance (Public Trust, Secret, etc.).", color: "red"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "[1 day] The contract POC will submit a security nominal for you via SKIP (no action required)."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "[3-4 days] The GPS Security Team will send you security paperwork to complete and submit via SKIP."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "[10-12 days] The GPS security team will review and process the paperwork and submit you for federal investigation (no action required)."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "[1 day] You will receive an email from the Trusted Associate Sponsorship System (TASS) to complete an application spreadsheet. Complete the spreadsheet via SKIP. If necessary, complete the DHHQ Building Access process (see task below) prior to your CAC appointment."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "[5-7 days] Once your application is approved, you will receive an email from TASS instructing you to proceed to the nearest RAPIDS Issuance Facility (CAC Office). Mark this task completed once you pickup your CAC."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "CAC Request Process",
            "url": cacRequestProcess,
            "type": "image"
          }
        ]
      },
      {
        "id": "g4",
        "title": "DHHQ Building Access (As Needed)",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "After completing and submitting the TASS application spreadsheet via SKIP (see: CAC application task), you can begin the process to gain access to the DHHQ building. This task only needs to be completed AS NEEDED. If you do not need DHHQ building access, you can skip this task."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "[1 day] Complete the DHA "
                },
                {
                  "text": " Privilege management program (PMP) request form", href: "https://amedeloitte.sharepoint.com/sites/SEMOSSContractResourcesFinancials/_layouts/15/AccessDenied.aspx?Source=https%3A%2F%2Famedeloitte%2Esharepoint%2Ecom%2Fsites%2FSEMOSSContractResourcesFinancials%2FShared%20Documents%2FGeneral%2F4%2E0%20Processes%20%26%20Forms%2FCAC%20%26%20GFE%20Forms%2FPMP%20Building%20Access%20Request%20Form%20Blank%2023NOV23%2Epdf&correlation=db3a6ea1%2D00ae%2D7000%2D5dfb%2D041cbc8547b0&Type=item&name=5ca13090%2D310a%2D4a84%2Dacbb%2D4c0a1240ef23&listItemId=796&listItemUniqueId=b15b599f%2D03cd%2D43c7%2Db9c5%2Df760a7b1f7e2"
                },
                {
                  "text": " and submit to your government supervisor."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "[2-3 days] Government supervisor will sign the PMP form and return it to you."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "[1-2 days] Submit the signed PMP form to RAPIDS office via email or in person PRIOR to your CAC appointment."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "CAC Request Process",
            "url": cacRequestProcess,
            "type": "image"
          }
        ]
      },
      {
        "id": "g5",
        "title": "System Authorization Access Request (SAAR)",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Complete the SAAR to obtain your government email account and government furnished equipment (GFE). The principal purpose of a SAAR is to record names, signatures, and other identifiers for the purpose of validating the trustworthiness of individuals requesting access to Department of Defense (DoD) systems and information."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Upon receiving a CAC, notify the contract POC to submit a SKIP nomination."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Complete the SAAR form using the form filler application (linked below)."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Route the signed SAAR to your Deloitte Team Lead for signature."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Contract POC submits your security nomination via SKIP (no action required)."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Upload the signed SAAR, Cyber Awareness Certificate [DOD-US1364], HIPPA Certificate [DHA-US001], and signed Acceptable Use Policy to SKIP for Deloitte Security Officer processing."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Mark this task as complete, then continue to the GFE task."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "SAAR Form 2875",
            "url": "https://amedeloitte.sharepoint.com/:b:/r/sites/SEMOSSContractResourcesFinancials/Shared%20Documents/General/4.0%20Processes%20%26%20Forms/CAC%20%26%20GFE%20Forms/Last,%20First%20DD-2875_2024MMDD.pdf?csf=1&web=1&e=Tm5aZg",
            "type": "link"
          },
          {
            "title": "SAAR Form TAP",
            "url": "https://amedeloitte.sharepoint.com/:b:/r/sites/SEMOSSContractResourcesFinancials/Shared%20Documents/General/4.0%20Processes%20%26%20Forms/CAC%20%26%20GFE%20Forms/Last%20Name_First%20Name%20DD-2875_TAP.pdf?csf=1&web=1&e=sYQht3",
            "type": "link"
          },
          {
            "title": "SAAR Form Instructions v2",
            "url": "https://amedeloitte.sharepoint.com/:w:/r/sites/SEMOSSContractResourcesFinancials/Shared%20Documents/General/4.0%20Processes%20%26%20Forms/CAC%20%26%20GFE%20Forms/How%20to%20complete%20the%20SAAR%20form%20v2.docx?d=w170ec5f6170148dcb8b2ca4272d53521&csf=1&web=1&e=WPrHHT",
            "type": "link"
          },
          {
            "title": "Acceptable Use Policy",
            "url": "https://amedeloitte.sharepoint.com/:b:/r/sites/SEMOSSContractResourcesFinancials/Shared%20Documents/General/4.0%20Processes%20%26%20Forms/CAC%20%26%20GFE%20Forms/AUP(Acceptable%20Use%20Policy).pdf?csf=1&web=1&e=0MHDHz",
            "type": "link"
          }
        ]
      },
      {
        "id": "g6",
        "title": "Government Furnished Equipment (GFE)",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Government furnished equipment is government property that is furnished to a contractor for performance of a contract. "
              },
              {
                "text": "NOTE: this task can only be completed after finishing the previous SAAR task.", color: "red"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Pre-requisites: SAAR task (see above)"
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "[3-6 Days] Deloitte Security reviews the SAAR and sends to DHA IT for DoD email account creation and GFE processing."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "[1-2 Days] DHA IT completes the request and notifies you that that you will be contacted when GFE is ready. Schedule an appointment to pick-up your GFE."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "[1 Day] Pick-up your GFE from DHA IT. Take the inventory tracking form (receipt) you receive upon picking up your GFE and send it along with a picture of the serial number (begins with 2TK) to Kate Wallace (kawallace@deloitte.com) via email. She will send you a Deloitte barcode which you will need to write/print and tape next to your DHA barcode and email her a picture of both once completed."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "GFE Request Process Diagram",
            "url": gfeRequestProcess,
            "type": "image"
          }
        ]
      }
    ]
  },
  {
    "id": "general-4",
    "title": "Travel and Expense Management",
    "preTitle": "General",
    "dueDate": "2024-12-31",
    "page": "general",
    "subtasks": [
      {
        "id": "g1",
        "title": "Travel Request Form",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "The Travel Request Form is used when a Contractor is required to travel (domestic or international) with/on behalf of the Government."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Prior to initiating any travel arrangements, you must complete and receive approval on this form. Approval must be received from the Contractor PM Lead, the Government Program Manager/ Task Manager, and the Contracting Officer’s Representative (COR). "
              },
              {
                "text": "International travel requires additional steps.", color: "red"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "You do not need to complete this task as a part of onboarding. ", bold: true
              },
              {
                "text": "After you familiarize yourself with the process, you may mark the task as complete and return to reference the information as needed."
              }
            ],
            "bulletLevel": 1
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Complete the "
                },
                {
                  "text": "Travel Request Form", href: "https://amedeloitte.sharepoint.com/:b:/r/sites/SEMOSSContractResourcesFinancials/Shared%20Documents/General/4.0%20Processes%20%26%20Forms/Travel%20Forms/Approved%20Travel%20Request%20Forms/CTR_Travel%20Request%20Form.pdf?csf=1&web=1&e=KteY4N"
                },
                {
                  "text": " and submit it to your PM lead for signature."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Submit form to government manager/ task manager for signature."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Submit to Contract POC to submit to COR for signature."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Contract POC will return the signed form to you for record keeping. At this point, you may proceed with making travel arrangements."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ]
      },
      {
        "id": "g2",
        "title": "International Travel (Personal or Business)",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "DHA Form 18 must be submitted to the DHA Foreign Travel Office 30 days prior to any international travel (business or personal), follow guidance on the form for additional information."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Additionally, JS -US007-Level I Antiterrorism Awareness Training must be completed on JKO prior to submitting the DHA Form 18."
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "You do not need to complete this task as a part of onboarding. ", bold: true
              },
              {
                "text": "After you familiarize yourself with the process, you may mark the task as complete and return to reference the information as needed."
              }
            ],
            "bulletLevel": 1
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Complete the government process for both official and unofficial travel.", bold: true
                },
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Complete "
                },
                {
                  "text": "DHA Form 18", href: "https://amedeloitte.sharepoint.com/:b:/r/sites/SEMOSSContractResourcesFinancials/Shared%20Documents/General/4.0%20Processes%20%26%20Forms/Travel%20Forms/DHA%20Form%2018_BLANK_INTERNATIONAL.pdf?csf=1&web=1&e=I40pQq"
                },
                {
                  "text": " and JS -US007-Level I Antiterrorism (AT) Awareness training in JKO."
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Send signed DHA Form 18 and AT training certificate to Contract POC to submit to COR for signature."
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "After Contract POC returns signed form, email the form, AT training certificate, and any required documents to DHA Foreign Travel office and CC’s COR for awareness."
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Complete "
                },
                {
                  "text": "Form 119 Debriefing Form", href: "https://amedeloitte.sharepoint.com/:b:/r/sites/SEMOSSContractResourcesFinancials/Shared%20Documents/General/4.0%20Processes%20%26%20Forms/Travel%20Forms/Foreign%20Travel%20Form%20119%20Debriefing%20Form%20-%202019.07.01.pdf?csf=1&web=1&e=0NfgFi"
                },
                {
                  "text": " and return it to dha.ftv@health.mil within 5 working days of your return to work."
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Complete the Deloitte process for UNOFFICIAL travel only.", bold: true
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "For any unofficial international travel, access "
                },
                {
                  "text": " SKIP", href: "https://skip.deloittegps.com/DashBoard/Home"
                },
                {
                  "text": " to report international travel 40 days in advance."
                },
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Under request forms, look for “Reportable Information” and click on create."
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Under non-adverse information, select “Foreign Travel” and enter your trip details."
                }
              ],
              "bulletLevel": 2
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "B-PASS International Travel Request Process",
            "url": "https://amedeloitte.sharepoint.com/:p:/r/sites/SEMOSSContractResourcesFinancials/Shared%20Documents/General/4.0%20Processes%20%26%20Forms/BPASS%20Processes/B-PASS%20Business%20Processes%2019NOV24%20-%20OY3.pptx?d=w42ce6195178149c490b7693b9a893eb3&csf=1&web=1&e=1CkfXo&nav=eyJzSWQiOjIxNDI1MzI3MDIsImNJZCI6MzEwOTk5MDMyfQ",
            "type": "link"
          }
        ]
      },
      {
        "id": "g3",
        "title": "Other Direct Costs (ODCs)",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "The Purchase Requisition Form is required for Contractors seeking to purchase any items (i.e. Conference materials, shipping costs) using Other Direct Costs (ODCs) funds. This form must be completed and approved prior to any purchase being made. Approval must be received from the following individuals before you can make any purchases:"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Contractor PM Lead"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Government Program Manager/ Task Manager"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Contracting Officer’s Representative (COR)"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "You do not need to complete this task as a part of onboarding. ", bold: true
              },
              {
                "text": "After you familiarize yourself with the process, you may mark the task as complete and return to reference the information as needed."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Identify items and complete the "
                },
                {
                  "text": "Purchase Requisition Form.", href: "https://amedeloitte.sharepoint.com/sites/SEMOSSContractResourcesFinancials/Shared%20Documents/General/4.0%20Processes%20&%20Forms/Contract%20Forms/Purchase_Requisition_Form.pdf"
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Submit form Contract PM Lead for signature."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Submit form to Government Program Manager/Task Manager for signature."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Submit form to Contract POC to submit to COR for signature."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Contract POC will return the signed form for record keeping. At this point, you may proceed with the approved purchase."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "general-5",
    "title": "Mandatory Trainings",
    "preTitle": "General",
    "dueDate": "2024-12-31",
    "page": "general",
    "subtasks": [
      {
        "id": "g1",
        "title": "DHA Mandatory Trainings",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "All DHA Civilians, Military personnel and contractor support staff must complete the nine trainings listed below:"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "DOD-US1364: ", bold: true
              },
              {
                "text": "Cyber Awareness Challenge"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "DHA-US1369: ", bold: true
              },
              {
                "text": "OSD Records and Information Management"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "DHA-US001: ", bold: true
              },
              {
                "text": "HIPAA and Privacy Act Training"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "DOD-US323: ", bold: true
              },
              {
                "text": "DHA Employee Safety Course"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "JS-US072: ", bold: true
              },
              {
                "text": "Joint Staff Insider Threat Awareness"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "DOD-US082: ", bold: true
              },
              {
                "text": "Controlled Unclassified Information (CUI)"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "JS-US009: ", bold: true
              },
              {
                "text": "Joint Staff Operations Security (OPSEC)"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "DHA-US429: ", bold: true
              },
              {
                "text": "MHS Customer Service"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "DHA-US434: ", bold: true
              },
              {
                "text": "Counterintelligence"
              }
            ],
            "bulletLevel": 1
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Complete and submit the "
                },
                {
                  "text": "JKO Sponsored Account Request Form", href: "https://amedeloitte.sharepoint.com/:b:/r/sites/SEMOSSContractResourcesFinancials/Shared%20Documents/General/Processes%20%26%20Forms/JKO%20Forms/JKO%20Account%20Request%20Form.pdf?csf=1&web=1&e=f4QAgq"
                },
                {
                  "text": " to the Front Office POC (pre-CAC issuance)."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Government Lead signs off on JKO Sponsored Account Request form and submits to DHA IT Help Desk Support for processing, as necessary.​"
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Government Front Office support aligns new employee to the organization in JKO and assigns new employee to the appropriate user audience (post JKO account creation). "
                },
                {
                  "text": "​NOTE: Mandatory trainings are automatically assigned by JKO based on user audience.", color: "red"
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Completes the nine mandatory trainings in JKO. The Government Front Office will track training compliance in JKO. ​"
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Mark this task as complete once you have completed all the mandatory trainings."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "JKO Training Process",
            "url": jkoTrainingImage,
            "type": "image"
          }
        ]
      }
    ]
  },
  {
    "id": "general-6",
    "title": "SEMOSS Basic Training",
    "preTitle": "General",
    "dueDate": "2024-12-31",
    "page": "general",
    "subtasks": [
      {
        "id": "g1",
        "title": "Why was SEMOSS created?",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "In the 2010 – 2011 timeframe, prior to the "
              },
              {
                "text": "Military Health System ", bold: true
              },
              {
                "text": "acquiring a new Electronic Health Record (EHR) system called MHS GENESIS, they "
              },
              {
                "text": "wanted to identify and rationalize the systems that were currently in the portfolio. ", bold: true
              },
              {
                "text": "The TAP (Transition Application Planning) team took on the portfolio rationalization project to understand system redundancy in the Healthcare IT portfolio and find opportunities for consolidation. Not only was that challenging because there are hundreds of systems at the enterprise level, but also the data needed to determine the answers to these questions lies in several different data silos."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "SEMOSS was developed to conduct this large-scale portfolio rationalization and has since grown and developed into the full end to end data analytics platform that we use today."
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "While SEMOSS did originate with the Military Health System and many of our projects are still within that space, the system is data agnostic meaning that it can be applied to finance, cloud migration, supply chain data, etc."
              }
            ],
            "bulletLevel": 1
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Mark this task as complete after reviewing the origins of SEMOSS."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "Why SEMOSS was created",
            "url": semossCreation,
            "type": "image"
          }
        ]
      },
      {
        "id": "g2",
        "title": "What is SEMOSS?",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "SEMOSS is the End-to-End data analytics platform that our team both develops and uses daily. Some clients use all the full spectrum of these capabilities whereas some utilize specific functionality."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "SEMOSS Capabilities:", bold: true
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Data Import and Federation: ", bold: true
              },
              {
                "text": "SEMOSS unifies disparate data sources into a single view, enabling informed decision-making. It connects to over a dozen sources, including SQL Server and local files like CSVs and Excel, translating various data queries into one UI."
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Collect: ", bold: true
              },
              {
                "text": "Streamlines data collection through web-based forms, directly entering data into SEMOSS databases, eliminating manual Excel entries."
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Data Prep/Clean: ", bold: true
              },
              {
                "text": "Integrates R and Python for data preparation, offering 40 built-in cleaning routines and the ability to run custom scripts, allowing non-data scientists to clean data efficiently."
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Visualization: ", bold: true
              },
              {
                "text": "Similar to Tableau or PowerBI, SEMOSS creates interactive dashboards for key insights. Customizable click events enhance data interaction, making dashboards the primary client-facing product."
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Analyze: ", bold: true
              },
              {
                "text": "Bundled with R and Python, SEMOSS enables analytical routines at the click of a button or through custom scripts, facilitating deeper data analysis."
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Collaborate: ", bold: true
              },
              {
                "text": "Facilitates team collaboration via GitHub for file sharing and revision tracking. The console allows easy copying and sharing of dashboard code, promoting insight sharing among users."
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Customize: ", bold: true
              },
              {
                "text": "As an open-source platform, SEMOSS offers full customization of visualizations and can be deployed on-premises or in the cloud (AWS, Azure) to meet various security needs."
              }
            ],
            "bulletLevel": 2
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Review the SEMOSS Overview section of the "
                },
                {
                  "text": "SEMOSS Onboarding PowerPoint", href: "https://amedeloitte.sharepoint.com/:p:/r/sites/SEMOSS/_layouts/15/Doc2.aspx?action=edit&sourcedoc=%7Bdc4c3543-7855-469f-86f9-042395c64b38%7D&wdOrigin=TEAMS-MAGLEV.teamsSdk_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1735071007909&web=1"
                },
                {
                  "text": " for additional information."
                },
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Once you have reviewed the overview and capabilities of SEMOSS, mark this task as complete."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "SEMOSS Capabilities",
            "url": semossCapabilities,
            "type": "image"
          }
        ]
      },
      {
        "id": "g3",
        "title": "Get stated with SEMOSS",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Follow the steps below to start using SEMOSS."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Attend an Introduction Session: ", bold: true
                },
                {
                  "text": "Join a SEMOSS/GovConnect.ai introduction session to learn about SEMOSS capabilities, team structure, and onboarding logistics. These sessions are scheduled individually via email by the onboarding team."
                },
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Install SEMOSS: ", bold: true
                },
                {
                  "text": "Follow the "
                },
                {
                  "text": "SEMOSS Dev Installation deck", href: "https://amedeloitte.sharepoint.com/:p:/r/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Installation/%5BSTABLE%5D%20SEMOSS%20DEV%20Install.pptx?d=wec44a7da0b664624a836b522872cf157&csf=1&web=1&e=GTZUXb"
                },
                {
                  "text": " to install SEMOSS. The installation process usually takes 1-3 days. Document any issues encountered and contact the onboarding team for assistance if needed."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ]
      },
      {
        "id": "g4",
        "title": "SEMOSS trainings",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "There are a series of videos that will guide you through our basic SEMOSS training as well as a deck for your reference."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Please watch the SEMOSS training videos and follow-along using the corresponding deck. Please complete the sample exercises using your local SEMOSS instance, "
                },
                {
                  "text": " http://localhost:9090/SemossWeb/", href: "http://localhost:9090/SemossWeb/"
                },
                {
                  "text": ", and these "
                },
                {
                  "text": "CSV files.", href: "https://amedeloitte.sharepoint.com/:f:/r/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20%26%20Training/SEMOSS%20Training%20Materials/1%20-%20Basic%20Training/CSV%20Files?csf=1&web=1&e=p8wL9U"
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Basic Trainings:"
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Basic Training Videos", href: "https://amedeloitte.sharepoint.com/:f:/r/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20%26%20Training/SEMOSS%20Training%20Materials/1%20-%20Basic%20Training?csf=1&web=1&e=ld1jVD"
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Basic Training Deck", href: "https://amedeloitte.sharepoint.com/:p:/r/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20%26%20Training/SEMOSS%20Training%20Materials/1%20-%20Basic%20Training/SEMOSS%20Basic%20Training%20August%202022.pptx?d=w20d3e14802dd49bb92db3636d99e3aa3&csf=1&web=1&e=ZOqlky"
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Advanced Training Videos (optional, time permitting):"
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Advanced Training Videos", href: "https://amedeloitte.sharepoint.com/:f:/r/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20%26%20Training/SEMOSS%20Training%20Materials/2%20-%20Advanced%20Training?csf=1&web=1&e=crG9NV"
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Advanced Training Deck", href: "https://amedeloitte.sharepoint.com/:p:/r/sites/SEMOSS/_layouts/15/Doc2.aspx?action=edit&sourcedoc=%7B706da93b-0eed-496a-92b0-2dbb5775a1ec%7D&wdOrigin=TEAMS-MAGLEV.teamsSdk_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1735072940670&web=1"
                }
              ],
              "bulletLevel": 3
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "general-7",
    "title": "Introduction to GovConnect.ai",
    "preTitle": "General",
    "dueDate": "2024-12-31",
    "page": "general",
    "subtasks": [
      {
        "id": "g1",
        "title": "Origins of GovConnect.ai",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Organizations are looking to infuse AI into their practices, but face several challenges to AI adoption:", bold: true
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "High Barrier to AI Expertise: ", bold: true
              },
              {
                "text": "Organizations face significant challenges in gaining AI expertise and understanding the nuances of each model."
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Data Silos: ", bold: true
              },
              {
                "text": "Data exists in isolated silos, preventing teams from blending and maximizing organizational information."
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Resource Duplication: ", bold: true
              },
              {
                "text": "Time spent gaining AI expertise and configuring development environments is duplicated across teams, leading to resource inefficiencies and security concerns."
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Scalability and Governance Issues: ", bold: true
              },
              {
                "text": "Configured sandbox environments are not scalable at the enterprise level and lack proper governance."
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "GovConnect.ai Objective: ", bold: true
              },
              {
                "text": "Simplify the setup of an extensible AI ecosystem and enable rapid prototyping."
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Multi-Model: ", bold: true
              },
              {
                "text": "Supports private LLMs for sensitive data and allows clients to host their own fine-tuned or domain-specific LLMs."
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Multi-Cloud: ", bold: true
              },
              {
                "text": "Can be deployed on any cloud or client infrastructure, integrating seamlessly with existing technology footprints."
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Governance & Security: ", bold: true
              },
              {
                "text": "Controls and monitors LLM usage and data access, implementing guardrails to ensure trust in applications and the ecosystem."
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Democratizing AI for All Skillsets:", bold: true
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Developers: ", bold: true
              },
              {
                "text": "Utilize GovConnect.ai’s code editor and notebook to develop custom data pipelines and interfaces."
              }
            ],
            "bulletLevel": 3
          },
          {
            "spans": [
              {
                "text": "No-Code Business Users: ", bold: true
              },
              {
                "text": "Use app templates and drag-and-drop components to create AI applications from scratch without writing code."
              }
            ],
            "bulletLevel": 3
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Once you have reviewed the overview of GovConnect.ai, mark this task as complete."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ]
      },
      {
        "id": "g2",
        "title": "What is GovConnect.ai?",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Key Components of GovConnect.ai:", bold: true
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Access Management:", bold: true
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Provides access to catalogs based on security schemas."
              }
            ],
            "bulletLevel": 3
          },
          {
            "spans": [
              {
                "text": "Ensures enterprise-wide governance and alignment with organizational policies."
              }
            ],
            "bulletLevel": 3
          },
          {
            "spans": [
              {
                "text": "Logging & Metering:", bold: true
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Monitors LLM usage to meter, throttle, and control access and costs."
              }
            ],
            "bulletLevel": 3
          },
          {
            "spans": [
              {
                "text": "Identifies inappropriate usage."
              }
            ],
            "bulletLevel": 3
          },
          {
            "spans": [
              {
                "text": "Storage:", bold: true
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Persists and accesses unstructured data such as audio, video, images, and code."
              }
            ],
            "bulletLevel": 3
          },
          {
            "spans": [
              {
                "text": "Supported storage options include: S3, Google Cloud Storage, Azure Blob, OneDrive, DropBox, Minio, SFTP."
              }
            ],
            "bulletLevel": 3
          },
          {
            "spans": [
              {
                "text": "Databases:", bold: true
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Exposes different structured data sources."
              }
            ],
            "bulletLevel": 3
          },
          {
            "spans": [
              {
                "text": "Supported databases include: RDBMS, Vector Databases, RDF, Graph Databases, Excel/CSV converted to full databases."
              }
            ],
            "bulletLevel": 3
          },
          {
            "spans": [
              {
                "text": "Vector Databases:", bold: true
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Creates vector databases from storage for quick semantic search and reuse across applications."
              }
            ],
            "bulletLevel": 3
          },
          {
            "spans": [
              {
                "text": "Supported vector database: FAISS."
              }
            ],
            "bulletLevel": 3
          },
          {
            "spans": [
              {
                "text": "Models:", bold: true
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Exposes AI models in an abstracted manner for use across applications."
              }
            ],
            "bulletLevel": 3
          },
          {
            "spans": [
              {
                "text": "Supported models include: OpenAI, LLama2, Claude, Wizard, Orca, Platypus, Vicuna."
              }
            ],
            "bulletLevel": 3
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Review the GovConnect.ai (previously AI Core) Overview section of "
                },
                {
                  "text": "SEMOSS Onboarding Deck.", href: "https://amedeloitte.sharepoint.com/:p:/r/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20%26%20Training/SEMOSS%20Onboarding%20Deck.pptx?d=wdc4c35437855469f86f9042395c64b38&csf=1&web=1&e=K99zFQ&nav=eyJzSWQiOjEyMjksImNJZCI6MjMxMjkwOTU4NX0"
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Once you have reviewed the key components of GovConnect.ai, mark this task as complete."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ]
      },
    ]
  },
  {
    "id": "general-8",
    "title": "GovConnect.ai Trainings",
    "preTitle": "General",
    "dueDate": "2024-12-31",
    "page": "general",
    "subtasks": [
      {
        "id": "g1",
        "title": "Getting Started",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "There are a series of videos that will guide you through our basic GovConnect.ai trainings as well as a deck for your reference."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Access the "
                },
                {
                  "text": "demo instance", href: "https://workshop.cfg.deloitte.com/cfg-ai-demo/SemossWeb/packages/client/dist/"
                },
                {
                  "text": " of GovConnect.ai (formerly AI Core)"
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Log in using your Microsoft Deloitte login"
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Experiment with PUBLIC DATA ONLY", color: "red"
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Complete the subsequent taks and follow along using the "
                },
                {
                  "text": "onboarding deck", href: "https://amedeloitte.sharepoint.com/:p:/r/sites/SEMOSS/_layouts/15/Doc.aspx?sourcedoc=%7B8F92AA17-D555-4596-A6F2-03A67222472A%7D&file=AI%20Core%20Onboarding%20v1.pptx&action=edit&mobileredirect=true"
                },
                {
                  "text": "."
                },
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "If you do not have Deloitte GitHub access, gain access by following these steps: "
                },
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Go to  "
                },
                {
                  "text": "https://developer.deloitte.com/enterprisecoderepository/", href: "https://developer.deloitte.com/enterprisecoderepository/"
                },
                {
                  "text": "."
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Select “Sign up to Global GitHub” and follow the instructions​."
                },
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Request access to “Deloitte-Default”​ (this may take a few hours so you can work on the subsequent taks while waiting to gain access)."
                },
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Sign into your new account​."
                },
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Access CFG AI GitHub links below."
                },
              ],
              "bulletLevel": 2
            },
          ],
        ],
        additionalResources: [
          {
            "title": "Access the collection of onboarding videos.",
            "url": "https://workshop.cfg.deloitte.com/docs/",
            "type": "link"
          },
          {
            "title": "Reference documentation for instructions and how-to guides.",
            "url": "https://workshop.cfg.deloitte.com/docs/",
            "type": "link"
          },
          {
            "title": "Create pro code apps from templates.",
            "url": "https://github.com/Deloitte-Default/cfgai-apps",
            "type": "link"
          },
        ]
      },
      {
        "id": "g2",
        "title": "Basics of Using GovConnect.ai",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "This task will help you become more familiar with some of the basic use functions of GovConnect.ai."
              }
            ],
            "bulletLevel": 0
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Watch the following videos and follow along using the "
                },
                {
                  "text": "onboarding deck", href: "https://amedeloitte.sharepoint.com/:p:/r/sites/SEMOSS/_layouts/15/Doc.aspx?sourcedoc=%7B8F92AA17-D555-4596-A6F2-03A67222472A%7D&file=AI%20Core%20Onboarding%20v1.pptx&action=edit&mobileredirect=true"
                },
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "GovConnect.ai Introduction", href: "https://amedeloitte.sharepoint.com/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20&%20Training/AI%20Core%20Training%20Materials/USI%20KT%20on%202024-06-10/01%20-%20AI%20Core%20Introduction.mp4"
                },
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Basics of Using GovConnect.ai"
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Select and Use a Model", href: "https://amedeloitte.sharepoint.com/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20&%20Training/AI%20Core%20Training%20Materials/USI%20KT%20on%202024-06-10/08%20-%20Select%20and%20Use%20a%20Model.mp4"
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Create and Use a Vector Database", href: "https://amedeloitte.sharepoint.com/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20%26%20Training/AI%20Core%20Training%20Materials/USI%20KT%20on%202024-06-10/name.mp4"
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Use a Sample App: Policy Vector Engine", href: "https://amedeloitte.sharepoint.com/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20&%20Training/AI%20Core%20Training%20Materials/USI%20KT%20on%202024-06-10/10%20-%20Use%20a%20Sample%20App%20-%20Policy%20Vector%20Engine.mp4"
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Use a Sample App: CSV Querybot", href: "https://amedeloitte.sharepoint.com/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20&%20Training/AI%20Core%20Training%20Materials/USI%20KT%20on%202024-06-10/11%20-%20Use%20a%20Sample%20App%20-%20CSV%20Query%20Bot.mp4"
                }
              ],
              "bulletLevel": 3
            },
          ]
        ]
      },
      {
        "id": "g3",
        "title": "GovConnect.ai for Low/No Code Users",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "These videos highlight the features of GovConnect.ai that are meant for "
              },
              {
                "text": "business users. ", bold: true
              },
              {
                "text": "If you are a developer, these onboarding videos are still important for understanding some of GovConnect.ai's core features. "
              },
              {
                "text": "All users should complete this task.", color: "red"
              }
            ],
            "bulletLevel": 0
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Watch the following videos and follow along using the "
                },
                {
                  "text": "onboarding deck", href: "https://amedeloitte.sharepoint.com/:p:/r/sites/SEMOSS/_layouts/15/Doc.aspx?sourcedoc=%7B8F92AA17-D555-4596-A6F2-03A67222472A%7D&file=AI%20Core%20Onboarding%20v1.pptx&action=edit&mobileredirect=true"
                },
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Create a New App: Drag and Drop", href: "https://amedeloitte.sharepoint.com/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20&%20Training/AI%20Core%20Training%20Materials/USI%20KT%20on%202024-06-10/12%20-%20Create%20a%20New%20App%20-%20Drag%20and%20Drop.mp4"
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Using Templates: Blocks Guide", href: "https://amedeloitte.sharepoint.com/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20&%20Training/AI%20Core%20Training%20Materials/USI%20KT%20on%202024-06-10/13%20-%20Using%20Templates%20-%20Blocks%20Guide.mp4"
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Create a New App: Agent Builder", href: "https://amedeloitte.sharepoint.com/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20&%20Training/AI%20Core%20Training%20Materials/USI%20KT%20on%202024-06-10/14%20-%20Create%20a%20New%20App%20-%20Agent%20Builder.mp4"
                }
              ],
              "bulletLevel": 2
            },
          ]
        ]
      },
      {
        "id": "g4",
        "title": "Building Blocks of GovConnect.ai",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "These videos cover essential topics such as system architecture principles, deployment strategies, and the integration of front-end and backend services. You'll also explore the use of domain-specific languages (DSLs) and the concept of temporary creative workspaces for dynamic application development and data access."
              },
              {
                "text": "These videos are geared towards a developer audience, but are recommended for getting a better understanding of how the platform works. However, if you will not be working on the platform, you may skip this task and mark it as complete.", bold: true
              },
            ],
            "bulletLevel": 0
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Watch the following videos and follow along using the "
                },
                {
                  "text": "onboarding deck", href: "https://amedeloitte.sharepoint.com/:p:/r/sites/SEMOSS/_layouts/15/Doc.aspx?sourcedoc=%7B8F92AA17-D555-4596-A6F2-03A67222472A%7D&file=AI%20Core%20Onboarding%20v1.pptx&action=edit&mobileredirect=true"
                },
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Architecture", href: "https://amedeloitte.sharepoint.com/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20&%20Training/AI%20Core%20Training%20Materials/USI%20KT%20on%202024-06-10/02%20-%20Architecture.mp4"
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Deployment Architecture", href: "https://amedeloitte.sharepoint.com/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20&%20Training/AI%20Core%20Training%20Materials/USI%20KT%20on%202024-06-10/03%20-%20Deployment%20Architecture.mp4"
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "FE BE Comm and Pixel", href: "https://amedeloitte.sharepoint.com/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20&%20Training/AI%20Core%20Training%20Materials/USI%20KT%20on%202024-06-10/04%20-%20FE%20BE%20Comm%20and%20Pixel.mp4"
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Insights", href: "https://amedeloitte.sharepoint.com/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20&%20Training/AI%20Core%20Training%20Materials/USI%20KT%20on%202024-06-10/05%20-%20Insights.mp4"
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Project: Part 1", href: "https://amedeloitte.sharepoint.com/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20&%20Training/AI%20Core%20Training%20Materials/USI%20KT%20on%202024-06-10/06%20-%20Project%20Part%201.mp4"
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Project: Part 2", href: "https://amedeloitte.sharepoint.com/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20&%20Training/AI%20Core%20Training%20Materials/USI%20KT%20on%202024-06-10/07%20-%20Project%20Part2.mp4"
                }
              ],
              "bulletLevel": 2
            },
          ]
        ]
      },
      {
        "id": "g5",
        "title": "GovConnect.ai For Developers",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "These videos highlight the features of GovConnect.ai that are meant for developers. "
              },
              {
                "text": "If you are not a developer, you may skip this task and mark it as complete.", bold: true
              }
            ],
            "bulletLevel": 1
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Watch the following videos and follow along using the "
                },
                {
                  "text": "onboarding deck", href: "https://amedeloitte.sharepoint.com/:p:/r/sites/SEMOSS/_layouts/15/Doc.aspx?sourcedoc=%7B8F92AA17-D555-4596-A6F2-03A67222472A%7D&file=AI%20Core%20Onboarding%20v1.pptx&action=edit&mobileredirect=true"
                },
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "PNPM Package Install", href: "https://amedeloitte.sharepoint.com/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20&%20Training/AI%20Core%20Training%20Materials/USI%20KT%20on%202024-06-10/15%20-%20PNPM%20Install.mp4"
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Using the Python SDK", href: "https://amedeloitte.sharepoint.com/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20&%20Training/AI%20Core%20Training%20Materials/USI%20KT%20on%202024-06-10/16%20-Using%20the%20Python%20SDK.mp4"
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Insights Within the Code", href: "https://amedeloitte.sharepoint.com/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20&%20Training/AI%20Core%20Training%20Materials/USI%20KT%20on%202024-06-10/17%20-%20Insights%20within%20the%20Code.mp4"
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Reactors and Custom Reactors", href: "https://amedeloitte.sharepoint.com/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20&%20Training/AI%20Core%20Training%20Materials/USI%20KT%20on%202024-06-10/18%20-%20Reactors%20and%20Custom%20Reactors.mp4"
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Methods and Engines within Python", href: "https://amedeloitte.sharepoint.com/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20&%20Training/AI%20Core%20Training%20Materials/USI%20KT%20on%202024-06-10/19%20-%20Methods%20and%20Engines%20Python.mp4"
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Using the SEMOSS SDK", href: "https://amedeloitte.sharepoint.com/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20&%20Training/AI%20Core%20Training%20Materials/USI%20KT%20on%202024-06-10/20%20-%20Using%20the%20SEMOSS%20SDK.mp4"
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Local Development with Webpack", href: "https://amedeloitte.sharepoint.com/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20&%20Training/AI%20Core%20Training%20Materials/USI%20KT%20on%202024-06-10/21%20-%20Local%20Development%20with%20Webpack.mp4"
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Bundling and Adding an App", href: "https://amedeloitte.sharepoint.com/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20&%20Training/AI%20Core%20Training%20Materials/USI%20KT%20on%202024-06-10/22%20-%20Bundling%20and%20Adding%20App.mp4"
                }
              ],
              "bulletLevel": 2
            },
          ]
        ]
      },
    ]
  },
  {
    "id": "esa-bad-1",
    "title": "Welcome to ESA-BAD",
    "preTitle": "ESA-BAD",
    "dueDate": "2024-12-31",
    "page": "esa-bad",
    "subtasks": [
      {
        "id": "e1",
        "title": "Meet the team",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Executive Oversight: ", bold: true
              },
              {
                "text": "Prabhu Kapaleeswaran​"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Program Manager: ", bold: true
              },
              {
                "text": "Chrissy Weaver"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Program Operations: ", bold: true
              },
              {
                "text": "Matt Muldowney (Program Controller & Team Lead), Janet Rebeck (Project Controller & Agreements Specialist​), Tom Bartosic (Project Controller & Budget Execution Specialis), Colin Rote (Lead PM - VA), Kareem Abughannam (PM - VA), Mary Ann Dupont (Lead PM - DMDC), Derek Berkley (PM -DMDC)."
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Analytics: ", bold: true
              },
              {
                "text": "Hazen Dean, Kristin Polk, Elise Hynd​, Ari Sporkin, Zach Richardson"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Cloud Broker Service Section: ", bold: true
              },
              {
                "text": "Kelley Keith, Ben Bayer, Alexander Jones, Andrew Cook"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Resource Management Section: ", bold: true
              },
              {
                "text": "Ricco Grimaldi"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Special Support to the Director: ", bold: true
              },
              {
                "text": "Chelsi Vanderpol"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Administrative Management: ", bold: true
              },
              {
                "text": "Amanda Carrejo"
              }
            ],
            "bulletLevel": 1
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Read the above information."
                }
              ],
              "bulletLevel": 1
            }, 
            {
              "spans": [
                {
                  "text": "Review the list of POCs below."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Familiarize yourself with the PEO MS/CIO (J-6) and ESA-BAD organization charts and learn more about the each worksteam "
                },
                {
                  "text": "here.", href: "https://amedeloitte.sharepoint.com/:p:/r/sites/SEMOSSContractResourcesFinancials/Shared%20Documents/General/2.0%20Onboarding/Deloitte%20ETID%20%26%20ESA-BAD%20Onboarding_TEMPLATE%20JAN25.pptx?d=w42491d602c4c4ca7808134b8dcefd1a5&csf=1&web=1&e=6aKPfo&nav=eyJzSWQiOjEyNzMsImNJZCI6MTI0NzQwNzQ5Mn0"
                }
              ],
              "bulletLevel": 1
            },
          ]
        ],
        "additionalResources": [
          {
            "title": "ESA-BAD POCs",
            "url": etidAndEsabadPOCs,
            "type": "image"
          }
        ]
      },
      {
        "id": "e2",
        "title": "Mission and vision",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Mission: ", bold: true
              },
              {
                "text": "To recommend and advise on the technical strategy, business operations, and security architecture of IT infrastructure, networks, and platforms delivered to the global DoD Healthcare enterprise."
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Vision: ", bold: true
              },
              {
                "text": "To be a leader in providing higher quality, more cost-effective and secure IT infrastructure supporting all aspects of health-service delivery and decision support."
              }
            ],
            "bulletLevel": 1
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Mark the task as complete once you have reviewed the above information."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "esa-bad-2",
    "title": "Onboarding and Offboarding Processes",
    "preTitle": "ESA-BAD",
    "dueDate": "2024-12-31",
    "page": "esa-bad",
    "subtasks": [
      {
        "id": "e1",
        "title": "Onboarding process overview",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Branch Chief: ", bold: true
              },
              {
                "text": "notify the ESA-BAD Resource Manager when a new incoming staff member. NOTE: includes NIWC personnel."
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "ESA-BAD Resource Manager: ", bold: true
              },
              {
                "text": "Notify the ESA-BAD Front Office of new incoming personnel via email"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Branch Chief / Contract PM: ", bold: true
              },
              {
                "text": "The employee supervisor (Govt = Branch Lead and Contractor = Contract PM) must complete the form in its entirety and submit to the Front Office and CC ESA-BAD Resource Manager. (No less than three days from the new hire start date)."
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "ESA-BAD Front Office: ", bold: true
              },
              {
                "text": "Complete onboarding processes."
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "New Personnel: ", bold: true
              },
              {
                "text": "Complete required trainings (NIWC excluded) and follow up with PM for onboarding and offboarding process status."
              }
            ],
            "bulletLevel": 1
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Mark the task as complete once you are familiar with the onboarding process flow."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "ESA-BAD Onboarding Process Flow",
            "url": onboardingProcessFlowESABAD,
            "type": "image"
          }
        ]
      },
      {
        "id": "e2",
        "title": "Onboarding Steps",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "New personnel are considered fully onboarded once all the actions listed below are completed. This checklist is designed to help you track your progress through the onboarding process. Note that many of these tasks do not require direct action from you, but it is important to monitor their completion."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "NOTE: ESA-BAD and Contractor internal onboarding can happen simultaneously while the contractor's employer processes the CAC application and issuance processes followed by the request for a health.mil email account and GFE issuance."
              }
            ],
            "bulletLevel": 1
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Download the Onboarding Steps PDF below. This outlines all the necessary onboarding steps and will help you keep track of your progress and ensure that all required actions are completed."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "Onboarding Steps PDF",
            "url": 'https://amedeloitte.sharepoint.com/:b:/r/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20%26%20Training/BPASS%20Onboarding%20App%20-%20Testing/Onboarding%20App%20Resources/ESABADOnboardingSteps.pdf?csf=1&web=1&e=CwtQHn',
            "type": "link"
          },
          {
            "title": "ESA-BAD Internal Onboarding Process",
            "url": contractotInternalOnboardingProcessESABAD,
            "type": "image"
          }
        ]
      },
      {
        "id": "e3",
        "title": "Off-boarding process overview",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "New personnel are considered fully off-boarded once all the actions listed below are completed. This checklist is designed to help you track your progress through the off-boarding process. Note that many of these tasks do not require direct action from you, but it is important to monitor their completion. You do not need to complete these steps as a part of onboarding. Once you have reviewed the process below, you may mark the task as complete and refer back to it at a future date."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Download the PDF document (linked below) containing instructions for the offboarding process using the link provided below. Save this file to your records for future reference. Once you have saved the file, you can mark this task as complete."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "Offboarding Process PDF",
            "url": "https://amedeloitte.sharepoint.com/:b:/r/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20%26%20Training/BPASS%20Onboarding%20App%20-%20Testing/Onboarding%20App%20Resources/ESABADOffBoardingProcess.pdf?csf=1&web=1&e=y1Y7eu",
            "type": "link"
          },
          {
            "title": "ESA-BAD Off-boarding process overview",
            "url": ESABADOffboardingProcess,
            "type": "image"
          }
        ]
      }
    ]
  },
  {
    "id": "esa-bad-3",
    "title": "Logistics",
    "preTitle": "ESA-BAD",
    "dueDate": "2024-12-31",
    "page": "esa-bad",
    "subtasks": [
      {
        "id": "e1",
        "title": "Locations",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "DHHQ Client Site: ", bold: true
              },
              {
                "text": "7700 Arlington Blvd, Falls Church, VA 22042"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "OpsCenter Client Site: ", bold: true
              },
              {
                "text": "2750 Prosperity Ave, Fairfax, VA 22031"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Fairview Park Deloitte Office: ", bold: true
              },
              {
                "text": "2941 Fairview Park Dr, Falls Church, VA 22042"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Joint Base San Antonio Client Site: ", bold: true
              },
              {
                "text": "2720 Howitzer Road, Bldg. 2372 JBSA-FSH, TX 78234"
              }
            ],
            "bulletLevel": 1
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Mark the task as complete once you have reviewed the above information."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ]
      },
      {
        "id": "e3",
        "title": "Acronyms",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "This task is designed to help you get comfortable with the acronyms frequently used within our contract. Knowing these acronyms will make communication smoother and help you in your new role."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Take some time to go through the list of acronyms provided in the \"Additional Resources\" section."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Keep an ongoing list of ESA-BAD and B-PASS acronyms for quick reference in the future (see: additional resources)."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "ESA-BAD Acronyms",
            "url": "https://amedeloitte.sharepoint.com/:b:/r/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20%26%20Training/BPASS%20Onboarding%20App%20-%20Testing/Onboarding%20App%20Resources/acronymsESABAD.pdf?csf=1&web=1&e=f4nAkq",
            "type": "link"
          }
        ]
      }
    ]
  },
  {
    "id": "etid-1",
    "title": "Welcome to ETID (formerly MTIO)",
    "preTitle": "ETID",
    "dueDate": "2024-12-31",
    "page": "etid",
    "subtasks": [
      {
        "id": "e1",
        "title": "ETID Introduction",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "ETID: ", bold: true
              },
              {
                "text": "Enterprise Technology Integration Division"
              }
            ],
            "bulletLevel": 0
          },
          {
            "spans": [
              {
                "text": "Team Mission and Vision: ", bold: true
              },
              {
                "text": "The mission of ETID is to serve as the central trusted leader for all CIOs/IT leaders in the realm of Information Management / Information Technology (IM/IT) by championing unified communications and business services. Their vision is to seamlessly integrate CIOs/IT Directors into the DHA Enterprise ."
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Team Structure:", bold: true
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Executive Oversight: ", bold: true
              },
              {
                "text": "Prabhu Kapaleeswaran​"
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Program manager: ", bold: true
              },
              {
                "text": "Chrissy Weaver"
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "PM Lead: ", bold: true
              },
              {
                "text": "Cookie Telahun"
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Team Memebers: ", bold: true
              },
              {
                "text": "Kate Wallace and Clay Sammis"
              }
            ],
            "bulletLevel": 2
          },
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Read the team overview."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Review the list of POCs below. Be sure to complete the general onboarding tasks and reach out to your team POC for additional onboarding requirements."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Read "
                },
                {
                  "text": "more information about the team's work", href: "https://amedeloitte.sharepoint.com/:p:/r/sites/SEMOSSContractResourcesFinancials/Shared%20Documents/General/2.0%20Onboarding/Deloitte%20ETID%20%26%20ESA-BAD%20Onboarding_TEMPLATE%20JAN25.pptx?d=w42491d602c4c4ca7808134b8dcefd1a5&csf=1&web=1&e=9C87Ms&nav=eyJzSWQiOjEzODgsImNJZCI6MzY4NjY4MDM1OH0"
                }, 
                {
                  "text": " and the "
                },
                {
                  "text": "ETID organizational structure.", href: "https://amedeloitte.sharepoint.com/:p:/r/sites/SEMOSSContractResourcesFinancials/Shared%20Documents/General/2.0%20Onboarding/Deloitte%20ETID%20%26%20ESA-BAD%20Onboarding_TEMPLATE%20JAN25.pptx?d=w42491d602c4c4ca7808134b8dcefd1a5&csf=1&web=1&e=ocPGky&nav=eyJzSWQiOjE0MTUsImNJZCI6MjY1NTU2Mzg1Nn0"
                }
              ],
              "bulletLevel": 1
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "ETID POCs",
            "url": etidAndEsabadPOCs,
            "type": "image"
          }
        ]
      }
    ]
  },
  {
    "id": "tap-1",
    "title": "Welcome to TAP!",
    "preTitle": "TAP",
    "dueDate": "2024-12-31",
    "page": "tap",
    "subtasks": [
      {
        "id": "t1",
        "title": "Introduction",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Meet the Team!", bold: true
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Leadership: ", bold: true
              },
              {
                "text": "Anna Barnes"
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Team Members: ", bold: true
              },
              {
                "text": "Bryan Crutchfield, Caroline Hickey, Bernard Taylor, Sarah-Winston Nathan, Alex White, Melanie Ventura, Madeleine Jones, Ashley Barricks, and Sydney Carlson"
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "What we do:", bold: true
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Analytics & Automation"
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Leverage SEMOSS to provide data analytics across the J-6 divisions and automate workflows / back-office functions"
              }
            ],
            "bulletLevel": 3
          },
          {
            "spans": [
              {
                "text": "Portfolio Optimization & Rationalization"
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Collect functional, technical, and infrastructure data from the portfolio of legacy systems and provide future state recommendations"
              }
            ],
            "bulletLevel": 3
          },
          {
            "spans": [
              {
                "text": "Utilize SEMOSS to develop detailed modernization plans, eliminate redundancy and reduce complexity for systems across the MHS enterprise"
              }
            ],
            "bulletLevel": 3
          },
          {
            "spans": [
              {
                "text": "Serve as the liaison between DHMSM and MHS legacy IT system owners and manage the decommissioning of legacy IT systems that are being replaced by the new Electronic Health Record, MHS GENESIS"
              }
            ],
            "bulletLevel": 3
          },


          {
            "spans": [
              {
                "text": "Our mission", bold: true
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "TAP facilitates the transition to a more efficient enterprise by targeting legacy systems such that the same business and clinical capabilities are supported with fewer systems operating under a more technically advanced architecture. By eliminating redundancy and reducing complexity across the enterprise, the organization can realize savings and devote resources to high-value opportunities."
              }
            ],
            "bulletLevel": 2
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Mark this task as complete once you have reviewed the above information and taken note of the list of POCs below. We recommend saving this list for reference during your onboarding process."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Refer to the Additional Resources page for additional onboarding documentation."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "TAP POCs",
            "url": tapPOCs,
            "type": "image"
          }
        ]
      }
    ]
  },
  {
    "id": "tap-2",
    "title": "Logistics",
    "preTitle": "TAP",
    "dueDate": "2024-12-31",
    "page": "tap",
    "subtasks": [
      {
        "id": "t2",
        "title": "Time reporting guidance",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "To ensure proper project charging and utilization tracking, you need to obtain the Work Breakdown Structure (WBS) code from the TAP team lead. This code is essential for entering data into the Deloitte Time and Expense (DTE) system and STAFFIT. Follow the steps below to complete this task efficiently."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Contact the TAP team lead to:"
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Request the WBS code required for project charging."
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Clarify when you should start using the WBS code. It may take a couple days for you to get permission to charge to the code but stay on top of it to ensure you are not losing utilization."
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Get additional instructions for how to enter the project on STAFFIT."
                }
              ],
              "bulletLevel": 2
            }
          ]
        ]
      },
      {
        "id": "t3",
        "title": "Daily stand-up calls",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Participating in daily stand-up calls is essential for team coordination and staying updated on project activities. These calls provide an opportunity to share status updates, integrate into the team, and stay informed about project developments."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "TAP Daily Morning Touchpoint", bold: true
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Schedule: ", bold: true
                },
                {
                  "text": "Monday through Thursday at 8:30am."
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Action: ", bold: true
                },
                {
                  "text": "Contact the TAP team lead, Caroline Hickey, to be added to the calls."
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Purpose:", bold: true
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Each team member gives a status update on their daily tasks."
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "New team members provide their updates last, allowing time to prepare."
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Introduce yourself and get familiar with the team."
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "SEMOSS Daily Project Status Call", bold: true
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Schedule: ", bold: true
                },
                {
                  "text": "Monday through Thursday at 9am."
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Action: ", bold: true
                },
                {
                  "text": "Contact the TAP team lead, Caroline Hickey, to be added to the calls."
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Purpose:", bold: true
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Senior Managers or Team Leads report on their team's activities to the project PPMD, Prabhu Kapaleeswaran."
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Familiarize yourself with the roles and tasks of each SEMOSS team."
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Stay informed about project-related administrative updates."
                }
              ],
              "bulletLevel": 3
            }
          ]
        ]
      },
      {
        "id": "t4",
        "title": "Terminology and acronyms",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Acronyms commonly used by the TAP team:", bold: true
              }
            ]
          },
          {
            "spans": [
              {
                "text": "MESOC: ", bold: true
              },
              {
                "text": "The TAP Team’s production server containing the team’s production-level SEMOSS dashboards. Clients have access to the dashboards but can’t overwrite or save them. The TAP team creates their dashboards in their local SEMOSS instance first before saving it in MESOC. You won’t have access to MESOC until you obtain your CAC."
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "PRT (Paper Record Tracker): ", bold: true
              },
              {
                "text": "The medical record relabeling process in which new bar codes are put on top of old bar codes for every medical record at a site to track its physical location. PRT must be completed before shutting down legacy health IT systems such as CHCS (Composite Health Care System) as they transition to MHS GENESIS. The TAP team is tracking this process since maintaining legacy systems is very costly to the client."
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Wrapper: ", bold: true
              },
              {
                "text": "The TAP team’s custom HTML page for all client insights."
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "J6 360: ", bold: true
              },
              {
                "text": "Initiative to provide the J6 CIO and Division Chiefs’ the ability to see all J6 Division metrics and find opportunities for coordination across Divisions. The TAP team has internally developed multiple dashboards and a wrapper to house them to support this effort."
              }
            ],
            "bulletLevel": 1
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Take note of the above acronyms. This task is designed to help you get comfortable with the acronyms frequently used within our contract. Knowing these acronyms will make communication smoother and help you in your new role. We recommend keeping a running list of Contract and Team acronyms for your quick reference."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "tap-3",
    "title": "Access and team resources",
    "preTitle": "TAP",
    "dueDate": "2024-12-31",
    "page": "tap",
    "subtasks": [
      {
        "id": "t1",
        "title": "Communication channels",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Gain access to the TAP team's communication platforms to stay connected and informed."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "TAP Teams Channel: ", bold: true
                },
                {
                  "text": "Ask the TAP team lead to add you to the TAP Teams channel. This is where the team shares files and important updates."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "TAP Teams Chat: ", bold: true
                },
                {
                  "text": "Ask a TAP team member to add you to the TAP Teams chat, which is used for quick messaging with the team."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ]
      },
      {
        "id": "t2",
        "title": "GitLab access",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Set up GitLab to manage and collaborate on code repositories."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Download Git",  href: "https://git-scm.com/download/win"
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Setup GitLab Account: reach out to Kunal Patel to get your GitLab account set up: then you should be able to access GitLab"
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Access GitLab", href: "https://repo.semoss.org"
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Access TAP specific Git", href: "https://repo.semoss.org/tap-task-list"
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Clone “Dashboards” Repository:"
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Create a folder that you would like to clone the TAP repositories into."
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Clone command:"
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Select the blue \"Clone\" button in the “Dashboards” repository and copy the https link."
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Open the folder you created, navigate to the Command Window, and run git clone *paste the HTTPS*."
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Now, the repository on Git should be linked to your local folder."
                }
              ],
              "bulletLevel": 3
            }
          ]
        ]
      },
      {
        "id": "t3",
        "title": "VSCode setup",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Install and configure Visual Studio Code (VSCode) for code editing."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Download Visual Studio Code - Mac, Linux, Windows", href: "https://code.visualstudio.com/Download"
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Installation:"
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Move through the installer screens slowly."
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Check the two “Open with Code” boxes on the “Select Additional Tasks” screen. This makes it easier to access files in VSCode."
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Add extensions:"
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Extensions menu: The 4 blocks icon with one pulling away on the left-hand side."
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Recommended extensions:"
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "GitLens: Helps with Git connectivity."
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Pixel: Color codes SEMOSS recipes."
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Code Spell Checker: Spell check for VSCode."
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Open repository in VSCode:"
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Navigate to your local dashboards repo folder, right-click, and select “Open with Code”."
                }
              ],
              "bulletLevel": 2
            }
          ]
        ]
      },
      {
        "id": "t4",
        "title": "Onboarding resources",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Access and review key onboarding materials to understand the TAP team’s mission and projects"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Request materials:", bold: true
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Ask the TAP team lead for onboarding materials: Decom Resources Guide, and TAP Dashboards slides."
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Ask a team member for access to the Pixel Playbook word document."
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Review materials:", bold: true
                }
              ],
              "bulletLevel": 1
            },
            // {
            //   "spans": [
            //     {
            //       "text": "TAP Welcome Book: Background information on the TAP client and initial work."
            //     }
            //   ],
            //   "bulletLevel": 2
            // },
            {
              "spans": [
                {
                  "text": "Decom Resource Guide: Context on the decommissioning process and support materials."
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "TAP Dashboard Slides: Insights into the TAP team’s SEMOSS dashboards."
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Pixel Playbook: Additional guidance on coding in Pixel."
                }
              ],
              "bulletLevel": 2
            }
          ]
        ]
      },
      {
        "id": "t5",
        "title": "Clearance process",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Begin the clearance process to obtain a CAC for working with client-sensitive data. Note: see the general onboarding steps for obtaining a CAC."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Timeline: ", bold: true
                },
                {
                  "text": "Within a couple of months on the team, start the clearance process."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Action: ", bold: true
                },
                {
                  "text": "Keep this on your Senior Manager and Team Lead’s radar."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Check-In: ", bold: true
                },
                {
                  "text": "Regularly check in on the SKIP request to ensure the process starts promptly."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "tap-4",
    "title": "Off-boarding",
    "preTitle": "TAP",
    "dueDate": "2024-12-31",
    "page": "tap",
    "subtasks": [
      {
        "id": "t1",
        "title": "TAP off-boarding process flow",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "The TAP Off-boarding Process Flow ensures that all necessary steps are completed when a team member is leaving the project. This process includes completing the MHS CIMP OFF Boarding Checklist and ensuring all tasks are properly transitioned. This task does not need to be completed as part of onboarding. Once you have reviewed off-boarding process flow, you may mark this task as complete."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Request Access ", bold: true
                },
                {
                  "text": "to the MHS CIMP OFF Boarding Checklist"
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Complete MHS CIMP OFF Boarding Checklist", bold: true
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Timeline: ", bold: true
                },
                {
                  "text": "This should be completed within 1 month. The process typically takes about a day to finish."
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Location: ", bold: true
                },
                {
                  "text": "The checklist is embedded in onboarding PowerPoint"
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Identify and arrange replacement trainings for any that have been retired or expired."
                }
              ],
              "bulletLevel": 2
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "eids-1",
    "title": "Welcome to EIDS!",
    "preTitle": "EIDS",
    "dueDate": "2024-12-31",
    "page": "eids",
    "subtasks": [
      {
        "id": "e1",
        "title": "Meet the team",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Leadership: ", bold: true
              },
              {
                "text": "Anna Barnes"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Team Members: ", bold: true
              },
              {
                "text": "Olubusola Dasilva, Kelsey Hales, Diana de Loza, Will Maxwell"
              }
            ],
            "bulletLevel": 1
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Review the above information and take note of the POCs below for your records."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "EIDS POCs",
            "url": eidsPOCs,
            "type": "image"
          }
        ]
      },
      {
        "id": "e2",
        "title": "Mission and vision",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Enterprise Intelligence and Data Solutions Program Management Office (EIDS PMO):", bold: true
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "As one of the three program offices within the Program Executive Office, Defense Healthcare Management Systems (PEO DHMS), Enterprise Intelligence & Data Solutions mission is to deliver, connect, integrate and curate health data at the right time, right place, and right format to enable informed decisions, research, and innovation across the Military Health System (MHS), services, and federal space."
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "The MHS Information Platform (MIP) owned and operated by EIDS is the official secondary repository of health-related data across the MHS integrating over 120+ diverse data sources, hosting DoD complex patient registries, providing a data science infrastructure for researchers & scientists and delivering robust information services and data in a timely, relevant and actionable manner."
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "The program office works to support MHS Strategic Goals and provide seamless data services and decision support for clinicians, patients, beneficiaries, analysts, researchers and DoD Leadership to drive organizational insights and better patient outcomes."
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "EIDS manages a vast array of data-related assets, including data warehouses, data virtualization tools, and visualization solutions (CarePoint) that in combination makes up a system of systems MIP."
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Military Health System Information Platform – Federal Digital Health Hub:", bold: true
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "EIDS delivers the MIP, the largest secondary repository of health data in the DOD as well as seamless data services and decision support for clinicians, patients, analysts, researchers and leadership."
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "The MIP provides self-service access to high trust, governed data and enables traditional reporting and dashboarding capabilities. Users are able access and analyze data within a single, cohesive environment. Also, they can understand what data is available, what it means and how to find it."
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "MIP is an expandable, state-of-the-art platform that houses the largest collection of Department of Defense of Defense health data in DHA. MIP features a free market self-service business intelligence (SSBI) capability for analytics, supported by a data ecosystem that also feeds patient care applications, and in-depth data science (Artificial Intelligence / Machine Learning) enabled by a scalable platform of development tools and community engagement. MIP’s suite of enabling tools guarantee the ingestion of real-time data, consolidate multiple data sources, perform deep queries (20+ years) and display analytics via a common display platform (CarePoint). MIP has a wealth of data at the ready for strategic data use, optimization, and innovation. As MIP has grown, the team has assembled a sophisticated and authoritative data management process ensuring data quality standards are created, data is merged equitably, and the data is reliable and trusted."
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Mission: ", bold: true
              },
              {
                "text": "Delivering, connecting, and curating data to facilitate informed decision-making across a diverse data ecosystem in support of Military Health, Readiness, Federal Health Data Integration and Innovation."
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Strategic Objectives:", bold: true
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Delivers first-class data platforms for advanced analytics, business intelligence, registries and data discovery capabilities"
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Promotes interoperability between legacy systems and the DOD’s electronic health record, MHS GENESIS"
              }
            ],
            "bulletLevel": 2
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Review the information above."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Refer to the Resources Page for additional onboarding documents."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Move-on to complete the BPASS Onboarding steps to obtain a Common Access Card (CAC). This task is under ‘Access and Equipment’ on the General Onboarding Page."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ]
      },
      {
        "id": "e3",
        "title": "Logistics",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Contract Quick Facts", bold: true
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Contract PoP Dates: ", bold: true
              },
              {
                "text": "November 16, 2021 – November 15, 2025"
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Contract Number: ", bold: true
              },
              {
                "text": "47QTCK18D0029"
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "PTO & Vacation Tracker", bold: true
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Request time off from Project Manager"
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Send PTO Calendar Invite to Deloitte team members"
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "Notify government clients of PTO following the established process (i.e. government leave calendar, notify applicable leadership)"
              }
            ],
            "bulletLevel": 2
          },
          {
            "spans": [
              {
                "text": "EIDS Acronyms (linked below)", bold: true
              }
            ],
            "bulletLevel": 1
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Review the above information"
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Take some time to go through the list of acronyms provided in the \"Additional Resources\" section."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Keep an ongoing list of EIDS and B-PASS acronyms for quick reference in the future."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "EIDS Acronyms",
            "url": "https://amedeloitte.sharepoint.com/:b:/r/sites/SEMOSS/Shared%20Documents/General/SEMOSS%20Onboarding%20%26%20Training/BPASS%20Onboarding%20App%20-%20Testing/Onboarding%20App%20Resources/acronymsEIDS.pdf?csf=1&web=1&e=6SeQgO",
            "type": "link"
          }
        ]
      }
    ]
  },
  {
    "id": "eids-2",
    "title": "Onboarding Process Flow",
    "preTitle": "EIDS",
    "dueDate": "2024-12-31",
    "page": "eids",
    "subtasks": [
      {
        "id": "e1",
        "title": "MHS Information Platform (MIP) minute videos",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "We look forward to breaking down the Military Health System Information Platform (MIP) into bite-sized segments to have an inside view of what happens behind the data scenes. The MIP is the engine that keep MHS data running, and we invite you to follow along to more fully understand how our data systems directly impact relationships between providers and patients."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Once you get a Common Access Card (CAC), watch the "
                },
                {
                  "text": "MHS Information Platform (MIP) minute videos", href: "https://carepoint.health.mil/sites/MIP/mugteam/SitePages/MIP%20Minute%20Videos.aspx"
                }
              ],
              "bulletLevel": 1
            }
          ]
        ]
      },
      {
        "id": "e2",
        "title": "Request access to specified sites",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "This category includes tasks related to obtaining necessary access to various sites and familiarizing oneself with important communication platforms."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Once you have a Common Access Card (CAC), request access to the sites specified below."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "The MIP has a User Group called the MUG. The MUG has a CarePoint (SharePoint) site for external communications and some internal communications. Familiarize yourself using this "
                },
                {
                  "text": "link", href: "https://carepoint.health.mil/sites/MIP/MUGhome.aspx"
                },
                {
                  "text": "."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Request access to the internal MUG subsite for communications in EIDS/Naval Information Warfare Center (NIWC) is the EIDS Central Repository using this "
                },
                {
                  "text": "link", href: "https://carepoint.health.mil/sites/MIP/mugteam/INT_EIDS/_layouts/15/start.aspx#/SitePages/Home.aspx"
                },
                {
                  "text": "."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Request to be added to MUG user-facing meetings focused on different user communications using this  "
                },
                {
                  "text": "link", href: "https://carepoint.health.mil/sites/MIP/mugteam/Lists/Distro%20Email%20Lists/NewForm.aspx"
                },
                {
                  "text": "."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "If you have a .mil email address, register to receive GOV Delivery using this "
                },
                {
                  "text": "link", href: "https://public.govdelivery.com/accounts/USMHSDHSS/subscriber/new"
                },
                {
                  "text": ". We use GOV Delivery to communicate widespread outages or degradations of services. Unlike the Alert Calendar and Email Subscription service above, it is completely external to the MIP. Users can voluntarily subscribe to receive blaster emails from many systems to include the MIP."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "Template for Trouble and service tickets that are received via GSC ticket",
            "url": "https://carepoint.health.mil/sites/MIP/Pages/OneFrontDoor.aspx",
            "type": "link"
          }
        ]
      },
      {
        "id": "e3",
        "title": "EIDS Central Repository Access",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "The process for requesting access to the EIDS Central Repository involves several options, each with varying levels of ease and efficiency. The best option is to submit a request through the DHA Global Service Center (GSC) using a Quick Form, which automatically notifies the CR admin. Other options include using an Outlook email template or a manual email template, each with different levels of monitoring and response times. Additionally, users can explore internal and external sites for more information."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Use one of the following options to requesting access to the EIDS Central Repository"
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Best Option: ", bold: true
                },
                {
                  "text": "Submit Request via DHA Global Service Center (GSC)"
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Access the Quick Form using the provided "
                },
                {
                  "text": "here", href: "https://carepoint.health.mil/sites/MIP/mugteam/Lists/OFD%20General%20GSC%20Ticket/NewForm.aspx"
                },
                {
                  "text": "."
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Fill out the necessary information in the form."
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Submit the form."
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "A notice of the request will be automatically sent to the CR admin."
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Better Option: ", bold: true
                },
                {
                  "text": "Submit Request via Outlook Quick Step Email Template"
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Open the Outlook Quick Step email template using this "
                },
                {
                  "text": "here", href: "https://carepoint.health.mil/sites/MIP/Pages/Trouble%20Ticket%20Template.aspx"
                },
                {
                  "text": "."
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Fill in the required details."
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Send the email."
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "A notice of the request will be automatically sent to the CR admin."
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Good Option: ", bold: true
                },
                {
                  "text": "Submit Request via the Following Manual Email Template"
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "To: dha.ncr.peo-dhms.mbx.knowledge-management@health.mil"
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "POC for Request: [Your Point of Contact]"
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Phone Number: [Your Phone Number]"
                }
              ],
              "bulletLevel": 3
            }
          ]
        ]
      },
      {
        "id": "e4",
        "title": "Create an EIDS Email Signature",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "The Program Executive Office, Defense Healthcare Management Systems (PEO OHMS) has established an E-mail Signature Block Policy to standardize e-mail formats, thereby streamlining the dissemination of information and management of activities. This policy is mandatory for all PEO OHMS staff members, requiring the use of a signature block in all new, replied, and forwarded messages. Additionally, staff members using a group email address or whose email address is not listed in the Global Access List must include their email address in the signature block."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Create an EIDS email signature block using the guidelines below."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Include Required Information in the Signature Block", bold: true
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Name: ", bold: true
                },
                {
                  "text": "Example: Jane D. Doe"
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Functional Title: ", bold: true
                },
                {
                  "text": "Example: Clinical Components Product Manager"
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Program Office: ", bold: true
                },
                {
                  "text": "Example: JOMIS"
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Directorate: ", bold: true
                },
                {
                  "text": "Example: Deployment and Training"
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Office Phone: ", bold: true
                },
                {
                  "text": "Example: 703-588-1111 and/or BB: 571-510-1111"
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Email Address or Group Email Address: ", bold: true
                },
                {
                  "text": "Example: Jane.D.Doe.civ@mail.mil"
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Mandatory Quote for PEO OHMS: ", bold: true
                },
                {
                  "text": "\"Transforming Healthcare Through Acquisition Excellence\""
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Mandatory Quote for IPO Staff Only: ", bold: true
                },
                {
                  "text": "\"DoDN A IPO - Leading Through Collaboration\""
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Activate Out-of-Office Feature When Absent", bold: true
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Ensure the Out-of-Office feature is activated when you are unavailable to respond to incoming messages."
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "The Out-of-Office message must include:"
                }
              ],
              "bulletLevel": 2
            },
            {
              "spans": [
                {
                  "text": "Date of Return: ", bold: true
                },
                {
                  "text": "Specify the date when you plan to return to the office."
                }
              ],
              "bulletLevel": 3
            },
            {
              "spans": [
                {
                  "text": "Designated Point(s) of Contact: ", bold: true
                },
                {
                  "text": "Provide the names and contact information of the person(s) covering your duties during your absence."
                }
              ],
              "bulletLevel": 3
            }
          ]
        ]
      },
      {
        "id": "e5",
        "title": "Update MS Outlook Global Address List",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Microsoft Outlook includes a feature called the Global Address List (GAL), which is the list of every name and email address stored in Outlook, usually along with their job titles and other key information. To make sure you have the latest GAL in Microsoft Outlook, follow the steps below."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Visit this "
                },
                {
                  "text": "link", href: "https://idco.dmdc.osd.mil/idco/"
                },
                {
                  "text": "."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "At the right of the screen, and under My Profile, click Continue."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Important Information screen appears, scroll down and click the CAC tab"
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Click Log-in, and then click OK."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Click OK at your email certificate."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "If needed, Click Edit to update Primary Personal Email and Phone number."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Click Continue if information is correct."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Click Continue."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Click OK at Self-Service Consent to Monitor."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Click OK to select certificate."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Click each Tab; Personal, DAV, and CIV and update as needed."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Click Submit once completed."
                }
              ],
              "bulletLevel": 1
            },
            {
              "spans": [
                {
                  "text": "Please review and update your information as needed. First, check your current \"Duty Organization\" assignment and select the correct organization you support, such as \"Defense Health Agency\". If it isn't already reflected, add your building and room information. Additionally, update any outdated or missing contact information, including telephone numbers."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "amedd-1",
    "title": "Welcome to AMEDD",
    "preTitle": "AMEDD",
    "dueDate": "2024-12-31",
    "page": "amedd",
    "subtasks": [
      {
        "id": "a1",
        "title": "AMEDD Introduction",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Mission: ", bold: true
              },
              {
                "text": "Transition from current Army Medicine health system to the overall DHA health system"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "After you review the team mission and list of contract POCs, you may mark this task as complete. Be sure to complete the general onboarding tasks and reach out to your team POC for additional onboarding requirements."
                }
              ],
              "bulletLevel": 1
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "Army Medicine POCs",
            "url": ameddPOCs,
            "type": "image"
          }
        ]
      }
    ]
  }
];
