import { TaskGroup } from '../types/tasks';
/* import { TaskStatus } from '../types/status'; */

export const dummyTasks: TaskGroup[] = [
  // GENERAL ONBOARDING - Common tasks for all new members
  {
    "id": "general-1",
    "title": "Welcome & Getting Started",
    "preTitle": "General",
    "dueDate": "2025-05-15",
    "page": "general",
    "subtasks": [
      {
        "id": "g1",
        "title": "Complete Your Profile",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Personalize your employee profile to help colleagues understand your background, expertise, and how to contact you. A complete profile enhances collaboration and helps you integrate into the team more quickly."
              }
            ]
          },
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Log in to the employee portal"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Navigate to My Profile"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Click 'Edit Profile'"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Complete all required fields"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Save changes"
                }
              ],
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "Company Profile Guidelines",
            "url": "https://example.com/profile-guidelines",
            "type": "link",
            "alt": "Company Profile Guidelines"
          }
        ]
      },
      {
        "id": "g2",
        "title": "Review Company Policies",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Understand the guidelines that govern our workplace culture, operations, and legal compliance. Reviewing these documents is crucial for maintaining our company standards and ensuring you're familiar with your rights and responsibilities."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Employee handbook"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Code of conduct"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Security protocols and data protection policies"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Time tracking and leave policies"
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
                  "text": "Access the company intranet"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Go to HR & Policies section"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Review each document"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Complete the policy acknowledgment forms"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Submit signed acknowledgments"
                }
              ],
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "HR Portal",
            "url": "https://example.com/hr-portal",
            "type": "link",
            "alt": "HR Portal"
          }
        ]
      },
      {
        "id": "g3",
        "title": "Complete Required Training",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Build the essential knowledge and skills needed for your role and to meet company compliance requirements. These mandatory training modules cover important topics related to security, workplace conduct, and regulatory compliance."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "IT security training"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Compliance training"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Health and safety orientation"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Anti-harassment policy"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Data privacy training"
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
                  "text": "Access the Learning Management System"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Navigate to 'Required Training'"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Complete each module in order"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Pass all assessment quizzes with minimum 80% score"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Download your completion certificates"
                }
              ],
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "Training Support Contact",
            "url": "https://example.com/training-support",
            "type": "link",
            "alt": "Training Support Contact"
          }
        ]
      },
      {
        "id": "g4",
        "title": "Set Up Your Workstation",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Create an efficient and secure digital workspace with all the tools you'll need for your role. Proper setup ensures you can work productively while maintaining security standards and protecting company resources."
              }
            ]
          },
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Review IT setup documentation"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Install core applications from the software portal"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Set up your email signature according to company guidelines"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Connect to network drives and shared resources"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Configure your desk and chair for proper ergonomics"
                }
              ],
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "IT Support Portal",
            "url": "https://example.com/it-support",
            "type": "link",
            "alt": "IT Support Portal"
          }
        ]
      },
      {
        "id": "g5",
        "title": "Meet Your Team",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Build relationships with your colleagues and establish communication channels. Getting to know your team members and understanding the team structure will help you integrate more quickly and collaborate effectively on projects."
              }
            ]
          },
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Review org chart to understand team structure"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Attend scheduled team introduction meeting"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Prepare a brief self-introduction"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Schedule follow-up 1:1 meetings with team members"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Join relevant team channels in communication platforms"
                }
              ],
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "Team Directory",
            "url": "https://example.com/team-directory",
            "type": "link",
            "alt": "Team Directory"
          }
        ]
      }
    ]
  },
  {
    "id": "general-2",
    "title": "Orientation & Integration",
    "preTitle": "General",
    "dueDate": "2025-05-20",
    "page": "general",
    "subtasks": [
      {
        "id": "g6",
        "title": "Attend Company Orientation",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Attend the formal company orientation session to learn about the organization's history, mission, values, and structure. This session provides vital context about our company culture and how different departments work together to achieve our strategic goals."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Company history and milestones"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Mission, vision, and values"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Organizational structure"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Company products and services"
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
                  "text": "Check your calendar for the scheduled orientation"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Prepare questions you'd like answered"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Bring necessary identification or paperwork"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Attend the full orientation session"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Complete the orientation feedback survey"
                }
              ],
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "Orientation Schedule",
            "url": "https://example.com/orientation-schedule",
            "type": "link",
            "alt": "Orientation Schedule"
          }
        ]
      },
      {
        "id": "g7",
        "title": "Schedule 1:1 with Manager",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Establish a strong working relationship with your direct manager by scheduling regular 1:1 meetings. These sessions are crucial for understanding expectations, setting goals, and creating a communication framework for your ongoing success."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Request a 60-minute initial meeting with your manager"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Prepare an agenda with key topics to discuss"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Discuss role expectations and success metrics"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Establish regular 1:1 meeting cadence"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Document key takeaways and action items"
                }
              ],
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "1:1 Meeting Template",
            "url": "https://example.com/one-on-one-template",
            "type": "link",
            "alt": "1:1 Meeting Template"
          }
        ]
      },
      {
        "id": "g8",
        "title": "Set Up Benefits and Payroll",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Complete all necessary paperwork and selections for your compensation, benefits, and administrative needs. Properly setting up these systems ensures you receive your pay correctly and can access all the benefits available to you as an employee."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Health insurance enrollment"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Retirement plan setup"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Direct deposit configuration"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Tax withholding forms"
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
                  "text": "Meet with HR representative"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Review benefits package options"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Complete all enrollment forms"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Set up direct deposit through payroll system"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Verify all selections before submission deadlines"
                }
              ],
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "Benefits Portal",
            "url": "https://example.com/benefits-portal",
            "type": "link",
            "alt": "Benefits Portal"
          }
        ]
      },
      {
        "id": "g9",
        "title": "Join Company Communication Channels",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Connect to all relevant communication platforms and channels used by the company. Staying informed and accessible through these channels ensures you receive important updates and can collaborate effectively with colleagues across the organization."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Download and install company communication tools"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Join company-wide announcement channels"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Subscribe to relevant department and team channels"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Set up notification preferences"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Review communication etiquette guidelines"
                }
              ],
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "Communication Tools Guide",
            "url": "https://example.com/communication-guide",
            "type": "link",
            "alt": "Communication Tools Guide"
          }
        ]
      },
      {
        "id": "g10",
        "title": "Learn About Company Culture",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Familiarize yourself with the unwritten norms, traditions, and practices that make up our company culture. Understanding these aspects helps you integrate smoothly into the team and align your work approach with organizational values."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Work-life balance practices"
              }
            ],
          },
          {
            "spans": [
              {
                "text": "Team collaboration norms"
              }
            ],
          },
          {
            "spans": [
              {
                "text": "Feedback and recognition customs"
              }
            ],
          },
          {
            "spans": [
              {
                "text": "Social and community engagement"
              }
            ],
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Review company culture documents"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Participate in a culture orientation session"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Connect with a designated culture buddy"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Attend informal team social events"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Reflect on culture alignment in your weekly journal"
                }
              ],
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "Culture Handbook",
            "url": "https://example.com/culture-handbook",
            "type": "link",
            "alt": "Culture Handbook"
          }
        ]
      },
      {
        "id": "g11",
        "title": "Complete Department-Specific Onboarding",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Participate in specialized onboarding activities designed for your specific department or function. These sessions provide deeper insights into your team's workflows, tools, and processes that are essential for your day-to-day responsibilities."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Attend department orientation session"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Review department-specific documentation"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Meet with key stakeholders and partners"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Learn specialized tools and systems"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Complete department skills assessment"
                }
              ],
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "Department Playbook",
            "url": "https://example.com/department-playbook",
            "type": "link",
            "alt": "Department Playbook"
          }
        ]
      }
    ]
  },
  {
    "id": "general-3",
    "title": "Systems & Tools Access",
    "preTitle": "General",
    "dueDate": "2025-05-25",
    "page": "general",
    "subtasks": [
      {
        "id": "g12",
        "title": "Request Critical System Access",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Submit requests for access to essential company systems and software platforms required for your role. Timely access to these systems is crucial for your productivity and ability to contribute effectively to projects and team initiatives."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Project management tools"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Knowledge management systems"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Customer relationship management (CRM)"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Enterprise resource planning (ERP)"
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
                  "text": "Review role-specific system requirements"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Submit access request forms through IT portal"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Complete any necessary security training"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Set up multi-factor authentication"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Verify access and test login credentials"
                }
              ],
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "System Access Request Form",
            "url": "https://example.com/system-access-request",
            "type": "link",
            "alt": "System Access Request Form"
          }
        ]
      },
      {
        "id": "g13",
        "title": "Configure Cloud Storage & Collaboration Tools",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Set up your access to shared document repositories, cloud storage, and collaborative workspaces. These platforms are essential for document management, version control, and seamless collaboration with team members on shared projects."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Cloud storage platforms"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Document collaboration suites"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Version control systems"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Digital whiteboard and ideation tools"
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
                  "text": "Accept invitations to cloud storage platforms"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Install desktop sync applications"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Set up folder sharing permissions"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Configure sync settings and preferences"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Review document naming and organization conventions"
                }
              ],
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "Cloud Storage Guide",
            "url": "https://example.com/cloud-storage-guide",
            "type": "link",
            "alt": "Cloud Storage Guide"
          }
        ]
      },
      {
        "id": "g14",
        "title": "Set Up Mobile Device Access",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Configure your mobile devices to securely access company resources while on the go. Mobile access ensures you can remain productive and responsive when working remotely or traveling, while maintaining proper security protocols."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Email and calendar synchronization"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Company mobile applications"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "VPN and remote access tools"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Secure messaging platforms"
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
                  "text": "Register your device with IT department"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Install required mobile device management (MDM) solution"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Configure work profile and security settings"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Download and set up company mobile applications"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Test remote connectivity and functionality"
                }
              ],
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "Mobile Access Setup Guide",
            "url": "https://example.com/mobile-setup",
            "type": "link",
            "alt": "Mobile Access Setup Guide"
          }
        ]
      }
    ]
  },
  {
    "id": "general-6",
    "title": "30-60-90 Day Planning",
    "preTitle": "General",
    "dueDate": "2025-06-10",
    "page": "general",
    "subtasks": [
      {
        "id": "g21",
        "title": "Create 30-Day Growth Plan",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Develop a structured plan for your first 30 days that focuses on learning and acclimating to your new role. This foundational plan will help you prioritize initial onboarding activities, build key relationships, and begin to understand core responsibilities."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Learning objectives and resources"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Key stakeholder meetings"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Onboarding milestones"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Initial project involvement"
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
                  "text": "Schedule planning session with manager"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Review job description and responsibilities"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Identify key learning priorities"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Document specific goals and deliverables"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Get manager approval on final plan"
                }
              ],
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "30-Day Plan Template",
            "url": "https://example.com/30-day-template",
            "type": "link",
            "alt": "30-Day Plan Template"
          }
        ]
      },
      {
        "id": "g22",
        "title": "Develop 60-Day Implementation Plan",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Create a strategic plan for your second month that transitions from learning to active contribution. This plan should outline how you'll apply your knowledge, take ownership of specific responsibilities, and begin delivering meaningful results."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Implementation strategies"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Process improvement opportunities"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Project ownership transitions"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Performance metrics"
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
                  "text": "Assess progress from 30-day plan"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Identify areas for increased ownership"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Set specific contribution targets"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Create implementation timeline"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Review plan with manager and key stakeholders"
                }
              ],
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "60-Day Implementation Guide",
            "url": "https://example.com/60-day-guide",
            "type": "link",
            "alt": "60-Day Implementation Guide"
          }
        ]
      },
      {
        "id": "g23",
        "title": "Establish 90-Day Strategic Impact Plan",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Design a comprehensive plan for your third month that focuses on making a significant impact and driving innovation. By this point, you should be fully integrated and ready to leverage your fresh perspective to propose improvements and strategic initiatives."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Strategic initiatives"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Innovation opportunities"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Cross-functional collaboration"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Long-term goals alignment"
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
                  "text": "Conduct comprehensive role assessment"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Identify strategic improvement opportunities"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Develop action plans for key initiatives"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Create metrics for measuring success"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Present strategic plan to leadership team"
                }
              ],
            }
          ]
        ],
        "additionalResources": [
          {
            "title": "Strategic Planning Framework",
            "url": "https://example.com/strategic-framework",
            "type": "link",
            "alt": "Strategic Planning Framework"
          }
        ]
      }
    ]
  },

  // HR TEAM
  {
    "id": "hr-1",
    "title": "HR Policies & Procedures",
    "preTitle": "HR Team",
    "dueDate": "2025-05-25",
    "page": "hr",
    "subtasks": [
      {
        "id": "hr1-1",
        "title": "Review Employee Handbook",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Review the current employee handbook to understand company policies and identify areas that need updating."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Access the current handbook"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Read through all sections"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Note areas requiring updates"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Submit change recommendations"
                }
              ],
            }
          ]
        ]
      },
      {
        "id": "hr1-2",
        "title": "Learn Leave Management Process",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Understand how to process and approve various types of employee leave requests."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Review leave policy documentation"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Shadow HR colleague during leave processing"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Process test cases in training environment"
                }
              ],
            }
          ]
        ]
      },
      {
        "id": "hr1-3",
        "title": "Master Onboarding Procedures",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Learn the complete employee onboarding process from offer acceptance to first day."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Review onboarding checklist"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Learn to prepare welcome packages"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Practice setting up new employee accounts"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Observe a new hire orientation"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Conduct a mock onboarding session"
                }
              ],
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "hr-2",
    "title": "Training & Development",
    "preTitle": "HR Team",
    "dueDate": "2025-05-30",
    "page": "hr",
    "subtasks": [
      {
        "id": "hr2-1",
        "title": "Learn LMS Administration",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Master the company's Learning Management System to create and assign training modules."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Complete LMS admin training"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create a test training module"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Learn to generate completion reports"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Practice user management functions"
                }
              ],
            }
          ]
        ]
      },
      {
        "id": "hr2-2",
        "title": "Understand Career Development Programs",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Learn about the various career development programs and advancement paths available to employees."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Review career path documentation"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Discuss with development program managers"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Create summary of available programs"
                }
              ],
            }
          ]
        ]
      },
      {
        "id": "hr2-3",
        "title": "Explore Training Budget Process",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Understand how training budgets are allocated and how to process training reimbursement requests."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Review training budget documentation"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Learn approval workflow process"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Practice processing reimbursement requests"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Understand budget reporting requirements"
                }
              ],
            }
          ]
        ]
      },
      {
        "id": "hr2-4",
        "title": "Study Skills Assessment Methods",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Learn the different assessment methods used to identify training needs and measure skill development."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Review assessment tools documentation"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Practice administering skills assessments"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Learn to interpret assessment results"
                }
              ],
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "hr-3",
    "title": "HR Compliance & Legal",
    "preTitle": "HR Team",
    "dueDate": "2025-06-05",
    "page": "hr",
    "subtasks": [
      {
        "id": "hr3-1",
        "title": "Study Employment Laws",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Learn key employment laws and regulations that impact HR operations and policies."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Complete employment law training modules"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Review company compliance documentation"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Discuss application with legal team"
                }
              ],
            }
          ]
        ]
      },
      {
        "id": "hr3-2",
        "title": "Learn EEOC Requirements",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Understand Equal Employment Opportunity Commission requirements and reporting processes."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Review EEOC compliance documentation"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Learn reporting requirements and deadlines"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Practice completing required forms"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Understand complaint handling procedures"
                }
              ],
            }
          ]
        ]
      },
      {
        "id": "hr3-3",
        "title": "Master I-9 Verification Process",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Learn proper I-9 employment eligibility verification procedures and documentation requirements."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Review I-9 compliance requirements"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Practice verifying acceptable documents"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Learn electronic verification system"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Understand retention requirements"
                }
              ],
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "hr-4",
    "title": "HR Data & Analytics",
    "preTitle": "HR Team",
    "dueDate": "2025-06-10",
    "page": "hr",
    "subtasks": [
      {
        "id": "hr4-1",
        "title": "Master HRIS Reporting",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Learn to generate and analyze standard and custom reports from the HR Information System."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Complete HRIS reporting training"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Practice running standard reports"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Learn to create custom reports"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Understand data export options"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Practice data visualization techniques"
                }
              ],
            }
          ]
        ]
      },
      {
        "id": "hr4-2",
        "title": "Understand HR Metrics",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Learn key HR metrics and KPIs used to measure workforce performance and organizational health."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Review HR metrics documentation"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Learn calculation methodologies"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Understand benchmarking processes"
                }
              ],
            }
          ]
        ]
      },
      {
        "id": "hr4-3",
        "title": "Learn Employee Data Management",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Understand proper procedures for maintaining, updating, and securing employee data."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Review data privacy requirements"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Learn employee record management"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Practice data entry and validation"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Understand data retention policies"
                }
              ],
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "hr-5",
    "title": "Employee Engagement & Culture",
    "preTitle": "HR Team",
    "dueDate": "2025-06-15",
    "page": "hr",
    "subtasks": [
      {
        "id": "hr5-1",
        "title": "Learn Engagement Survey Process",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Understand how to administer employee engagement surveys and analyze results."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Review survey tool documentation"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Learn survey design principles"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Practice analyzing survey data"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Understand action planning process"
                }
              ],
            }
          ]
        ]
      },
      {
        "id": "hr5-2",
        "title": "Master Recognition Programs",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Learn about employee recognition programs and how to administer them effectively."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Review recognition program documentation"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Learn nomination and selection processes"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Understand reward distribution procedures"
                }
              ],
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "hr-6",
    "title": "Compensation & Benefits",
    "preTitle": "HR Team",
    "dueDate": "2025-06-20",
    "page": "hr",
    "subtasks": [
      {
        "id": "hr6-1",
        "title": "Understand Salary Structure",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Learn the company's salary bands, grades, and benchmarking processes."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Review compensation structure documentation"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Learn salary band calculation methods"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Understand market benchmarking process"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Practice salary calculation scenarios"
                }
              ],
            }
          ]
        ]
      },
      {
        "id": "hr6-2",
        "title": "Learn Benefits Administration",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Understand how to administer and explain employee benefits programs."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Review benefits program documentation"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Learn enrollment processes"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Practice explaining benefits to employees"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Understand vendor management procedures"
                }
              ],
            }
          ]
        ]
      },
      {
        "id": "hr6-3",
        "title": "Master Payroll Coordination",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Learn how HR coordinates with payroll to ensure accurate and timely compensation processing."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Review payroll coordination procedures"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Learn data submission timelines"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Understand verification processes"
                }
              ],
            }
          ]
        ]
      },
      {
        "id": "hr6-4",
        "title": "Study Compensation Analysis",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Learn how to analyze compensation data for equity, competitiveness, and budget planning."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Review compensation analysis tools"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Learn to identify equity issues"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Practice budget forecasting"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Understand adjustment recommendation process"
                }
              ],
            }
          ]
        ]
      },
      {
        "id": "hr6-5",
        "title": "Learn Bonus Program Administration",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Understand how performance-based and incentive bonus programs are administered."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Review bonus program documentation"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Learn eligibility requirements"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Understand calculation methodologies"
                }
              ],
            },
            {
              "spans": [
                {
                  "text": "Practice bonus distribution scenarios"
                }
              ],
            }
          ]
        ]
      }
    ]
  },
  // IT TEAM
  {
    "id": "it-1",
    "title": "Information Technology Infrastructure & Support",
    "preTitle": "IT Team",
    "dueDate": "2025-05-25",
    "page": "it",
    "subtasks": [
      {
        "id": "it1",
        "title": "Set Up Help Desk System",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Configure and deploy the help desk ticketing system for managing user support requests efficiently."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Ticket categories and routing rules"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "SLA configurations"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Knowledge base integration"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Install help desk software"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Configure user roles and permissions"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Set up automated routing rules"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Test ticket creation and workflow"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "it2",
        "title": "Network Infrastructure Assessment",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Evaluate current network infrastructure to identify performance issues and improvement opportunities."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Map network topology"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Run performance diagnostics"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Document findings and recommendations"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "it3",
        "title": "Device Management System Implementation",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Deploy mobile device management solution for secure oversight of company devices."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Select MDM platform"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create device enrollment profiles"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Set security policies"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Test deployment on pilot devices"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Schedule company-wide rollout"
                }
              ]
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "it-2",
    "title": "Cybersecurity & Compliance",
    "preTitle": "Information Technology Team",
    "dueDate": "2025-05-30",
    "page": "it",
    "subtasks": [
      {
        "id": "it4",
        "title": "Vulnerability Assessment",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Conduct comprehensive vulnerability scanning of network systems and applications."
              }
            ]
          },
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Configure scanning tools"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Run comprehensive scans"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Analyze results and prioritize findings"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create remediation plan"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "it5",
        "title": "Multi-Factor Authentication Deployment",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Implement MFA across all critical company systems to enhance security posture."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Select MFA solution"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Configure authentication policies"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create user enrollment process"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Deploy to pilot group"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "it6",
        "title": "Security Awareness Program",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Develop and launch employee security awareness training program."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Develop training materials"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create phishing simulation exercises"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Schedule training sessions"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "it7",
        "title": "Compliance Documentation Update",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Review and update security documentation to ensure regulatory compliance."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Review current policies"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Identify compliance gaps"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Update documentation"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Obtain management approval"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Distribute updated policies"
                }
              ]
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "it-3",
    "title": "Cloud & Infrastructure Services",
    "preTitle": "Information Technology Team",
    "dueDate": "2025-06-05",
    "page": "it",
    "subtasks": [
      {
        "id": "it8",
        "title": "Cloud Resource Optimization",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Analyze and optimize cloud resource utilization to improve performance and reduce costs."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Compute resource assessment"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Storage utilization review"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Run resource utilization reports"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Identify underutilized resources"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Implement right-sizing recommendations"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Set up automated scaling policies"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "it9",
        "title": "Backup Infrastructure Update",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Modernize data backup infrastructure to improve reliability and recovery capabilities."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Evaluate current backup systems"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Define backup requirements"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Implement new backup solution"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "it10",
        "title": "Hybrid Cloud Strategy",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Develop comprehensive hybrid cloud strategy for optimal workload placement."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Assess application portfolio"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Define workload placement criteria"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create migration roadmap"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Present recommendations to leadership"
                }
              ]
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "it-4",
    "title": "Application & Database Management",
    "preTitle": "Information Technology Team",
    "dueDate": "2025-06-10",
    "page": "it",
    "subtasks": [
      {
        "id": "it11",
        "title": "Database Performance Tuning",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Optimize database performance to improve application responsiveness and efficiency."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Identify performance bottlenecks"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Analyze query execution plans"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Implement indexing improvements"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Test performance enhancements"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "it12",
        "title": "Application Lifecycle Management",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Establish structured processes for application deployment and management."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "CI/CD pipeline implementation"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Version control standards"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Document application inventory"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Define deployment workflows"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Implement code review process"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Set up automated testing"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Deploy CI/CD pipeline"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "it13",
        "title": "Data Integration Strategy",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Develop strategy for integrating data across enterprise applications."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Map data flows between systems"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Identify integration requirements"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Evaluate integration platforms"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create implementation roadmap"
                }
              ]
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "it-6",
    "title": "Enterprise Architecture",
    "preTitle": "Information Technology Team",
    "dueDate": "2025-06-20",
    "page": "it",
    "subtasks": [
      {
        "id": "it14",
        "title": "Technology Stack Assessment",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Evaluate current technology stack against industry standards and future needs."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Document current technologies"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Research industry best practices"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Identify modernization opportunities"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "it15",
        "title": "Enterprise Architecture Framework",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Develop comprehensive enterprise architecture framework to guide technology decisions."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Business architecture alignment"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Technology standards"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Select architecture methodology"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Define architecture principles"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create reference architectures"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Establish governance process"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "it16",
        "title": "Technology Roadmap Creation",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Create strategic technology roadmap aligned with business objectives."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Gather business requirements"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Identify technology capabilities needed"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Prioritize initiatives"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create timeline and milestones"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Present to executive leadership"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "it17",
        "title": "Technical Debt Assessment",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Evaluate and catalog technical debt across systems to inform remediation planning."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Identify legacy systems"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Assess maintenance costs"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Prioritize debt items"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create remediation strategy"
                }
              ]
            }
          ]
        ]
      }
    ]
  },

  // FINANCE TEAM
  {
    "id": "finance-1",
    "title": "Financial Systems & Processes",
    "preTitle": "Finance Team",
    "dueDate": "2025-05-25",
    "page": "finance",
    "subtasks": [
      {
        "id": "fin1",
        "title": "ERP System Configuration",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Configure and optimize the ERP system for efficient financial operations."
              }
            ]
          },
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Review current configuration"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Define system requirements"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Implement configuration changes"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Test financial workflows"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "fin2",
        "title": "Accounts Payable Automation",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Implement automated AP processes to improve efficiency and reduce errors."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Document current AP workflow"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Select automation tools"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Configure invoice processing rules"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Set up approval routing"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Test end-to-end process"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "fin3",
        "title": "Financial Controls Assessment",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Review and strengthen internal financial controls to ensure data integrity."
              }
            ]
          },
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Map current control environment"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Identify control gaps"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Design enhanced controls"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Document updated procedures"
                }
              ]
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "finance-2",
    "title": "Budgeting & Financial Planning",
    "preTitle": "finance Team",
    "dueDate": "2025-05-30",
    "page": "Finance",
    "subtasks": [
      {
        "id": "fin4",
        "title": "Annual Budget Process Development",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Design and implement the annual budgeting process with clear timelines and responsibilities."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Define budget methodology"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create budget templates"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Establish submission timeline"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Document review and approval process"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "fin5",
        "title": "Financial Forecasting Model",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Develop robust financial forecasting model to improve planning accuracy."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Revenue forecasting methods"
              }
            ],
            "bulletLevel": 1
          },
          {
            "spans": [
              {
                "text": "Expense modeling"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Define forecasting requirements"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Build financial model structure"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Incorporate historical data"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Test forecast scenarios"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Document model assumptions"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "fin6",
        "title": "Capital Expenditure Process",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Establish structured process for capital expenditure requests, evaluation, and approval."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Create CapEx request form"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Define evaluation criteria"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Establish approval thresholds"
                }
              ]
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "finance-3",
    "title": "Financial Reporting & Analysis",
    "preTitle": "Finance Team",
    "dueDate": "2025-06-05",
    "page": "finance",
    "subtasks": [
      {
        "id": "fin7",
        "title": "Management Reporting Dashboard",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Develop executive dashboard with key financial metrics and performance indicators."
              }
            ]
          },
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Define key metrics"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Design dashboard layout"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Build data connections"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Implement automated updates"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "fin8",
        "title": "Financial Statement Automation",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Streamline the financial statement generation process for faster month-end closing."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Document current reporting process"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Identify automation opportunities"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Implement report templates"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Test automated generation"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create validation procedures"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "fin9",
        "title": "Variance Analysis Framework",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Develop structured approach to analyzing budget-to-actual variances and identifying root causes."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Define variance thresholds"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create analysis templates"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Implement tracking system"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Document root cause categories"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "fin10",
        "title": "KPI Monitoring System",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Establish system for tracking and reporting key financial performance indicators."
              }
            ]
          },
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Define critical KPIs"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Set performance targets"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Build automated tracking"
                }
              ]
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "finance-5",
    "title": "Tax & Compliance",
    "preTitle": "Finance Team",
    "dueDate": "2025-06-15",
    "page": "finance",
    "subtasks": [
      {
        "id": "fin11",
        "title": "Tax Compliance Calendar",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Create comprehensive tax filing calendar with deadlines and responsibilities."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Identify all applicable tax requirements"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Document filing deadlines"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Assign responsibilities"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Set up automated reminders"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "fin12",
        "title": "Sales Tax Automation",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Implement automated sales tax calculation and reporting system."
              }
            ]
          },
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Select tax automation platform"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Configure tax rules"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Integrate with billing system"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Test calculation accuracy"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Implement reporting workflow"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "fin13",
        "title": "Regulatory Reporting Process",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Establish efficient process for regulatory financial reporting requirements."
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Document reporting requirements"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create compliance checklist"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Develop preparation workflow"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Implement review procedures"
                }
              ]
            }
          ]
        ]
      }
    ]
  },

  // MARKETING TEAM
  {
    "id": "marketing-1",
    "title": "Marketing Strategy & Planning",
    "preTitle": "Marketing Team",
    "dueDate": "2025-05-25",
    "page": "marketing",
    "subtasks": [
      {
        "id": "mkt1",
        "title": "Annual Marketing Plan Development",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Create comprehensive annual marketing plan aligned with business objectives and growth targets."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Channel strategy and budget allocation"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Campaign calendar and key initiatives"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Review business goals and market research"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Define marketing objectives and KPIs"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Develop channel strategy and budget"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create campaign calendar"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Present plan to leadership team"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "mkt2",
        "title": "Target Audience Analysis",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Conduct in-depth research to identify and segment target audiences for precise marketing efforts."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Demographic and psychographic profiling"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Customer journey mapping"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Analyze existing customer data"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Conduct market research"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create buyer personas"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Map customer journeys by segment"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "mkt3",
        "title": "Competitive Analysis Framework",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Develop structured approach to monitoring and analyzing competitor strategies and positioning."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Market positioning assessment"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Competitive advantage identification"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Identify key competitors"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Develop analysis criteria"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create monitoring system"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Establish regular reporting cadence"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "mkt4",
        "title": "Marketing Budget Management",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Establish processes for effective marketing budget planning, allocation, and tracking."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "ROI measurement methodology"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Budget reallocation framework"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Create detailed budget spreadsheet"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Develop tracking mechanisms"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Implement ROI calculation method"
                }
              ]
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "marketing-2",
    "title": "Marketing Operations",
    "preTitle": "Marketing Team",
    "dueDate": "2025-06-15",
    "page": "marketing",
    "subtasks": [
      {
        "id": "mkt5",
        "title": "Marketing Automation Implementation",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Deploy marketing automation platform to streamline campaign execution and improve lead nurturing."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Email workflow development"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Lead scoring implementation"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Select automation platform"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Configure system settings"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Build email templates"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create automation workflows"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Test and optimize campaigns"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "mkt6",
        "title": "Content Production Workflow",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Establish efficient process for planning, creating, and publishing marketing content across channels."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Editorial calendar management"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Approval workflow streamlining"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Document content types and specifications"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create editorial calendar template"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Define approval process"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Implement content management system"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "mkt7",
        "title": "Analytics Dashboard Setup",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Develop comprehensive marketing analytics dashboard for monitoring campaign performance and ROI."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Cross-channel performance metrics"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Conversion tracking implementation"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Define key performance metrics"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Set up data connections"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Design dashboard layout"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create automated reporting"
                }
              ]
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "marketing-3",
    "title": "Brand Management",
    "preTitle": "Marketing Team",
    "dueDate": "2025-06-20",
    "page": "marketing",
    "subtasks": [
      {
        "id": "mkt8",
        "title": "Brand Guidelines Documentation",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Create comprehensive brand guidelines to ensure consistent representation across all touchpoints."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Visual identity standards"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Voice and tone documentation"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Document brand mission and values"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Define visual identity elements"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Establish voice and tone guidelines"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create digital asset management system"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Distribute brand guidelines"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "mkt9",
        "title": "Brand Health Monitoring",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Implement system for tracking brand perception, awareness, and sentiment metrics."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Social media sentiment analysis"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Brand perception research"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Define brand health metrics"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Set up monitoring tools"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create reporting dashboard"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Establish response protocols"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "mkt10",
        "title": "Website Brand Alignment",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Review and update website to ensure complete alignment with brand standards and messaging."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Design consistency evaluation"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Content messaging review"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Conduct website brand audit"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create update implementation plan"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Update visual elements"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Revise content for voice consistency"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "mkt11",
        "title": "Brand Training Program",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Develop training curriculum to help employees understand and correctly represent the brand."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Brand ambassador program"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Customer experience alignment"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Create training materials"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Develop presentation deck"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Schedule department training sessions"
                }
              ]
            }
          ]
        ]
      }
    ]
  },

  // OPERATIONS TEAM
  {
    "id": "ops-1",
    "title": "Process Management",
    "preTitle": "Operations Team",
    "dueDate": "2025-05-25",
    "page": "operations",
    "subtasks": [
      {
        "id": "ops1",
        "title": "Process Documentation System",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Implement standardized system for documenting operational processes across departments."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Process mapping standards"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Documentation templates"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Establish documentation framework"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create standardized templates"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Train process owners"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Implement document management system"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "ops2",
        "title": "Process Optimization Framework",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Develop structured methodology for identifying and implementing process improvements."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Waste elimination techniques"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Efficiency measurement methods"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Research optimization methodologies"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Define evaluation criteria"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create process analysis templates"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Develop implementation guidelines"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Pilot on selected processes"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "ops3",
        "title": "Process Automation Assessment",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Evaluate current manual processes for automation opportunities to improve efficiency."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "RPA tool evaluation"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "ROI calculation methodology"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Identify manual process inventory"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Assess automation potential"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Prioritize opportunities"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create automation roadmap"
                }
              ]
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "ops-2",
    "title": "Project Management",
    "preTitle": "Operations Team",
    "dueDate": "2025-05-30",
    "page": "operations",
    "subtasks": [
      {
        "id": "ops4",
        "title": "Project Management Methodology",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Establish standardized project management methodology for consistent execution."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Planning and execution framework"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Status reporting templates"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Select methodology approach"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Document standard processes"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create templates and tools"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Train project managers"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "ops5",
        "title": "Project Portfolio Management",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Implement system for managing and prioritizing projects across the organization."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Project selection criteria"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Resource allocation framework"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Define portfolio management objectives"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create project assessment criteria"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Develop prioritization framework"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Implement portfolio tracking system"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Establish governance process"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "ops6",
        "title": "Resource Management System",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Develop approach for effective allocation and management of resources across projects."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Capacity planning methods"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Utilization tracking process"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Create resource inventory"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Develop capacity planning model"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Implement tracking mechanism"
                }
              ]
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "ops-3",
    "title": "Quality Management",
    "preTitle": "Operations Team",
    "dueDate": "2025-06-05",
    "page": "operations",
    "subtasks": [
      {
        "id": "ops7",
        "title": "Quality Management System",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Implement comprehensive quality management system to ensure consistent delivery standards."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Quality policy development"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Process control mechanisms"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Define quality standards and metrics"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Document quality processes"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Develop audit procedures"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create corrective action system"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Train team members"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "ops8",
        "title": "Quality Monitoring Dashboard",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Develop real-time dashboard for tracking key quality metrics and indicators."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "KPI visualization methods"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Alert threshold configuration"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Define critical quality metrics"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Design dashboard layout"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Configure data connections"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Set up automated alerts"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "ops9",
        "title": "Continuous Improvement Program",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Establish structured program for ongoing quality improvements and innovation."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Improvement methodology selection"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Employee suggestion system"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Select improvement methodology"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create program structure"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Develop training materials"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Implement suggestion system"
                }
              ]
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "ops-4",
    "title": "Vendor & Contract Management",
    "preTitle": "Operations Team",
    "dueDate": "2025-06-10",
    "page": "operations",
    "subtasks": [
      {
        "id": "ops10",
        "title": "Vendor Management Framework",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Develop comprehensive approach for vendor selection, onboarding, and management."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Vendor evaluation criteria"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Performance monitoring methods"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Create vendor selection process"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Develop evaluation scorecard"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Establish onboarding procedure"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Implement performance review system"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "ops11",
        "title": "Contract Management System",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Implement system for tracking contract terms, obligations, and renewal dates."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Document repository organization"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Milestone notification setup"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Select contract management platform"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Catalog existing contracts"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Configure key date reminders"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Develop contract review workflow"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Train administrators"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "ops12",
        "title": "Vendor Risk Assessment",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Create framework for evaluating and managing risks associated with vendor relationships."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Risk categorization model"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Mitigation strategy development"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Define risk categories"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create assessment questionnaire"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Develop scoring methodology"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Implement monitoring process"
                }
              ]
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "ops-5",
    "title": "Facilities & Workplace Management",
    "preTitle": "Operations Team",
    "dueDate": "2025-06-15",
    "page": "operations",
    "subtasks": [
      {
        "id": "ops13",
        "title": "Facilities Management System",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Implement comprehensive system for managing physical workspace and resources."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Maintenance scheduling process"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Space utilization tracking"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Select facilities management software"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Document facility inventory"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create maintenance schedule"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Implement work order system"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "ops14",
        "title": "Workplace Optimization Plan",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Develop strategy for optimizing workspace to support productivity and collaboration."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Space planning methodology"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Collaboration zone design"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Assess current workspace utilization"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Gather employee input"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Research workplace trends"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Develop optimization recommendations"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create implementation timeline"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "ops15",
        "title": "Sustainability Initiatives",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Develop and implement workplace sustainability program to reduce environmental impact."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Energy conservation measures"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Waste reduction strategies"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Conduct environmental impact assessment"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Identify improvement opportunities"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Develop sustainability initiatives"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create implementation plan"
                }
              ]
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "ops-6",
    "title": "Business Continuity Planning",
    "preTitle": "Operations Team",
    "dueDate": "2025-06-20",
    "page": "operations",
    "subtasks": [
      {
        "id": "ops16",
        "title": "Business Impact Analysis",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Conduct comprehensive analysis to identify critical functions and recovery priorities."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Critical process identification"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Recovery time objective determination"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Define analysis methodology"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create assessment questionnaire"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Conduct department interviews"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Analyze findings and priorities"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Document critical processes"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "ops17",
        "title": "Disaster Recovery Planning",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Develop detailed plans for recovering systems and operations following disruptions."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Recovery procedure documentation"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Technology failover planning"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Identify recovery requirements"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Document recovery procedures"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Assign recovery responsibilities"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Define communication protocols"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "ops18",
        "title": "Business Continuity Testing",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Establish program for regularly testing and validating business continuity plans."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Tabletop exercise development"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Plan effectiveness evaluation"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Create testing schedule"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Develop test scenarios"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Conduct tabletop exercises"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Document findings and gaps"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Update plans based on results"
                }
              ]
            }
          ]
        ]
      },
      {
        "id": "ops19",
        "title": "Crisis Management Framework",
        "status": "not-started",
        "description": [
          {
            "spans": [
              {
                "text": "Develop framework for managing crisis situations effectively and minimizing impact."
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Crisis response team formation"
              }
            ]
          },
          {
            "spans": [
              {
                "text": "Communication strategy development"
              }
            ]
          }
        ],
        "steps": [
          [
            {
              "spans": [
                {
                  "text": "Define crisis management structure"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Assign team roles and responsibilities"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Create decision-making protocols"
                }
              ]
            },
            {
              "spans": [
                {
                  "text": "Develop communication templates"
                }
              ]
            }
          ]
        ]
      }
    ]
  }
];