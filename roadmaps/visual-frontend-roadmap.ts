import type { RoadmapMetadata } from "../types/roadmap"
import { VisualRoadmap } from "../types/roadmap-node"

export class VisualFrontendRoadmap extends VisualRoadmap {
  constructor() {
    const metadata: RoadmapMetadata = {
      id: "frontend",
      title: "Frontend Development",
      description: "Master modern frontend development with React, TypeScript, and modern tooling",
      icon: "🎨",
      color: "oasis-teal",
      difficulty: "Beginner",
      estimatedMonths: 6,
      prerequisites: ["Basic programming knowledge"],
    }
    super(metadata)
  }

  initializeSteps(): void {
    // Traditional steps for compatibility
  }

  initializeVisualRoadmap(): void {
    this.visualData.width = 1200
    this.visualData.height = 1500

    // Start
    this.addNode(this.createNode("start", "START", "Begin your frontend journey", "start", { x: 600, y: 50 }, [], 0))

    // Row 1: Development Environment
    this.addNode(
      this.createNode(
        "vscode-setup",
        "VS Code Setup",
        "Install and configure your code editor",
        "tool",
        { x: 600, y: 140 },
        [
          this.createResource(
            "VS Code Installation",
            "Download and setup Visual Studio Code",
            "https://code.visualstudio.com/docs/setup/setup-overview",
            "Documentation",
            "Beginner",
            "1 hour",
          ),
          this.createResource(
            "Essential VS Code Extensions",
            "Must-have extensions for web development",
            "https://code.visualstudio.com/docs/editor/extension-marketplace",
            "Article",
            "Beginner",
            "30 minutes",
          ),
        ],
        2,
      ),
    )

    // Row 2: Web Fundamentals
    this.addNode(
      this.createNode(
        "web-fundamentals",
        "Web Fundamentals",
        "How the internet and web work",
        "topic",
        { x: 600, y: 230 },
        [
          this.createResource(
            "How the Web Works",
            "Understanding web fundamentals",
            "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works",
            "Article",
            "Beginner",
            "3 hours",
          ),
        ],
        6,
      ),
    )

    // Row 3: HTML
    this.addNode(
      this.createNode(
        "html",
        "HTML",
        "Structure and semantics",
        "skill",
        { x: 600, y: 320 },
        [
          this.createResource(
            "HTML Basics",
            "Learn HTML fundamentals",
            "https://developer.mozilla.org/en-US/docs/Learn/HTML",
            "Documentation",
            "Beginner",
            "15 hours",
          ),
          this.createResource(
            "HTML Semantic Elements",
            "Learn semantic HTML structure",
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element",
            "Documentation",
            "Beginner",
            "5 hours",
          ),
        ],
        25,
      ),
    )

    // Row 4: CSS
    this.addNode(
      this.createNode(
        "css",
        "CSS",
        "Styling and basic layout",
        "skill",
        { x: 600, y: 410 },
        [
          this.createResource(
            "CSS Basics",
            "Learn CSS fundamentals",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS",
            "Documentation",
            "Beginner",
            "20 hours",
          ),
          this.createResource(
            "CSS Selectors",
            "Master CSS selectors",
            "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",
            "Documentation",
            "Beginner",
            "5 hours",
          ),
        ],
        30,
      ),
    )

    // Row 5: Advanced CSS Layout (Branching makes sense here)
    this.addNode(
      this.createNode(
        "css-flexbox",
        "Flexbox",
        "Flexible layouts",
        "topic",
        { x: 450, y: 500 },
        [
          this.createResource(
            "Flexbox Guide",
            "Complete guide to Flexbox",
            "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
            "Article",
            "Intermediate",
            "4 hours",
          ),
          this.createResource(
            "Flexbox Froggy",
            "Interactive Flexbox game",
            "https://flexboxfroggy.com/",
            "Tool",
            "Beginner",
            "2 hours",
          ),
        ],
        8,
      ),
    )

    this.addNode(
      this.createNode(
        "css-grid",
        "CSS Grid",
        "Grid layout system",
        "topic",
        { x: 750, y: 500 },
        [
          this.createResource(
            "CSS Grid Guide",
            "Complete guide to CSS Grid",
            "https://css-tricks.com/snippets/css/complete-guide-grid/",
            "Article",
            "Intermediate",
            "5 hours",
          ),
          this.createResource(
            "Grid Garden",
            "Interactive CSS Grid game",
            "https://cssgridgarden.com/",
            "Tool",
            "Beginner",
            "2 hours",
          ),
        ],
        10,
      ),
    )

    // Row 6: Responsive Design (Both paths converge)
    this.addNode(
      this.createNode(
        "responsive-design",
        "Responsive Design",
        "Mobile-first approach",
        "skill",
        { x: 600, y: 590 },
        [
          this.createResource(
            "Responsive Design",
            "Learn responsive web design",
            "https://web.dev/responsive-web-design-basics/",
            "Article",
            "Intermediate",
            "8 hours",
          ),
          this.createResource(
            "Media Queries Guide",
            "Master CSS media queries",
            "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries",
            "Documentation",
            "Intermediate",
            "4 hours",
          ),
        ],
        15,
      ),
    )

    // Row 7: First Project Milestone
    this.addNode(
      this.createNode(
        "first-site",
        "Build Your First Site",
        "Create a responsive HTML/CSS website",
        "milestone",
        { x: 600, y: 680 },
        [
          this.createResource(
            "Build a Personal Portfolio",
            "Step-by-step guide to your first website",
            "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web",
            "Course",
            "Beginner",
            "8 hours",
          ),
          this.createResource(
            "HTML/CSS Project Ideas",
            "Simple projects to practice your skills",
            "https://www.frontendmentor.io/challenges",
            "Tool",
            "Beginner",
            "10 hours",
          ),
        ],
        15,
      ),
    )

    // Row 8: Version Control
    this.addNode(
      this.createNode(
        "version-control",
        "Version Control",
        "Git & GitHub basics",
        "tool",
        { x: 600, y: 770 },
        [
          this.createResource(
            "Git Handbook",
            "Learn Git version control",
            "https://guides.github.com/introduction/git-handbook/",
            "Documentation",
            "Beginner",
            "8 hours",
          ),
          this.createResource(
            "GitHub Desktop",
            "Visual Git interface for beginners",
            "https://desktop.github.com/",
            "Tool",
            "Beginner",
            "2 hours",
          ),
        ],
        12,
      ),
    )

    // Row 9: JavaScript Foundation
    this.addNode(
      this.createNode(
        "javascript",
        "JavaScript",
        "Programming language of the web",
        "skill",
        { x: 600, y: 860 },
        [
          this.createResource(
            "JavaScript Fundamentals",
            "Learn JavaScript from scratch",
            "https://javascript.info/",
            "Course",
            "Beginner",
            "40 hours",
          ),
          this.createResource(
            "JavaScript DOM Manipulation",
            "Learn to interact with HTML elements",
            "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
            "Documentation",
            "Intermediate",
            "10 hours",
          ),
        ],
        60,
      ),
    )

    // Row 10: REST APIs
    this.addNode(
      this.createNode(
        "rest-apis",
        "REST APIs",
        "Fetch data from servers",
        "skill",
        { x: 600, y: 950 },
        [
          this.createResource(
            "Fetch API Guide",
            "Learn to make HTTP requests",
            "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
            "Documentation",
            "Intermediate",
            "8 hours",
          ),
          this.createResource(
            "REST API Basics",
            "Understanding REST principles",
            "https://restfulapi.net/",
            "Article",
            "Intermediate",
            "4 hours",
          ),
          this.createResource(
            "JSONPlaceholder",
            "Free fake API for testing",
            "https://jsonplaceholder.typicode.com/",
            "Tool",
            "Beginner",
            "2 hours",
          ),
        ],
        15,
      ),
    )

    // Row 11: React Foundation
    this.addNode(
      this.createNode(
        "react-basics",
        "React Basics",
        "JavaScript library for UIs",
        "skill",
        { x: 600, y: 1040 },
        [
          this.createResource(
            "React Documentation",
            "Official React tutorial",
            "https://react.dev/learn",
            "Documentation",
            "Intermediate",
            "30 hours",
          ),
          this.createResource(
            "React Components Guide",
            "Learn React components and JSX",
            "https://react.dev/learn/your-first-component",
            "Documentation",
            "Intermediate",
            "10 hours",
          ),
        ],
        50,
      ),
    )

    // Row 12: TypeScript
    this.addNode(
      this.createNode(
        "typescript",
        "TypeScript",
        "Typed JavaScript",
        "skill",
        { x: 600, y: 1130 },
        [
          this.createResource(
            "TypeScript Handbook",
            "Learn TypeScript",
            "https://www.typescriptlang.org/docs/",
            "Documentation",
            "Intermediate",
            "20 hours",
          ),
          this.createResource(
            "React with TypeScript",
            "Using TypeScript in React projects",
            "https://react-typescript-cheatsheet.netlify.app/",
            "Article",
            "Intermediate",
            "8 hours",
          ),
        ],
        30,
      ),
    )

    // Row 13: Testing
    this.addNode(
      this.createNode(
        "testing",
        "Testing",
        "Jest, React Testing Library",
        "skill",
        { x: 600, y: 1220 },
        [
          this.createResource(
            "Testing Library",
            "Learn React testing",
            "https://testing-library.com/docs/",
            "Documentation",
            "Intermediate",
            "12 hours",
          ),
          this.createResource(
            "Jest Testing Framework",
            "JavaScript testing framework",
            "https://jestjs.io/docs/getting-started",
            "Documentation",
            "Intermediate",
            "8 hours",
          ),
        ],
        20,
      ),
    )

    // Row 14: Build Tools (Optional but recommended)
    this.addNode(
      this.createNode(
        "build-tools",
        "Build Tools",
        "Vite, NPM, bundling",
        "optional",
        { x: 600, y: 1310 },
        [
          this.createResource(
            "Vite Guide",
            "Modern build tool",
            "https://vitejs.dev/guide/",
            "Documentation",
            "Intermediate",
            "6 hours",
          ),
          this.createResource(
            "NPM Guide",
            "Package management",
            "https://docs.npmjs.com/getting-started",
            "Documentation",
            "Beginner",
            "4 hours",
          ),
        ],
        12,
      ),
    )

    // End
    this.addNode(
      this.createNode(
        "end",
        "FRONTEND DEVELOPER",
        "You're now a frontend developer!",
        "end",
        { x: 600, y: 1400 },
        [],
        0,
      ),
    )

    // Logical connections - Fixed branching
    this.addConnection({ from: "start", to: "vscode-setup", type: "required" })
    this.addConnection({ from: "vscode-setup", to: "web-fundamentals", type: "required" })
    this.addConnection({ from: "web-fundamentals", to: "html", type: "required" })
    this.addConnection({ from: "html", to: "css", type: "required" })
    // CSS branches to both layout systems (makes sense here)
    this.addConnection({ from: "css", to: "css-flexbox", type: "required" })
    this.addConnection({ from: "css", to: "css-grid", type: "required" })
    // Both converge to responsive design
    this.addConnection({ from: "css-flexbox", to: "responsive-design", type: "required" })
    this.addConnection({ from: "css-grid", to: "responsive-design", type: "required" })
    this.addConnection({ from: "responsive-design", to: "first-site", type: "required" })
    this.addConnection({ from: "first-site", to: "version-control", type: "required" })
    this.addConnection({ from: "version-control", to: "javascript", type: "required" })
    this.addConnection({ from: "javascript", to: "rest-apis", type: "required" })
    this.addConnection({ from: "rest-apis", to: "react-basics", type: "required" })
    this.addConnection({ from: "react-basics", to: "typescript", type: "required" })
    this.addConnection({ from: "typescript", to: "testing", type: "required" })
    this.addConnection({ from: "testing", to: "build-tools", type: "optional" })
    this.addConnection({ from: "build-tools", to: "end", type: "optional" })
    this.addConnection({ from: "testing", to: "end", type: "required" })
  }
}
