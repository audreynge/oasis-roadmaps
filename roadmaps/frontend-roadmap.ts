import { BaseRoadmap, type RoadmapMetadata } from "../types/roadmap"

export class FrontendRoadmap extends BaseRoadmap {
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
    this.addStep({
      id: "html-css-basics",
      title: "HTML & CSS Fundamentals",
      description: "Learn the building blocks of web development",
      estimatedWeeks: 3,
      skills: ["HTML5", "CSS3", "Responsive Design", "Flexbox", "Grid"],
      resources: [
        this.createResource(
          "MDN HTML Basics",
          "Comprehensive HTML guide from Mozilla",
          "https://developer.mozilla.org/en-US/docs/Learn/HTML",
          "Documentation",
          "Beginner",
          "2-3 hours",
        ),
        this.createResource(
          "CSS Grid Complete Guide",
          "Master CSS Grid layout system",
          "https://css-tricks.com/snippets/css/complete-guide-grid/",
          "Article",
          "Intermediate",
          "1 hour",
        ),
        this.createResource(
          "Flexbox Froggy",
          "Interactive game to learn Flexbox",
          "https://flexboxfroggy.com/",
          "Tool",
          "Beginner",
          "30 minutes",
        ),
      ],
    })

    this.addStep({
      id: "javascript-fundamentals",
      title: "JavaScript Fundamentals",
      description: "Master JavaScript ES6+ features and DOM manipulation",
      estimatedWeeks: 4,
      prerequisites: ["html-css-basics"],
      skills: ["JavaScript ES6+", "DOM Manipulation", "Async/Await", "Promises", "Event Handling"],
      resources: [
        this.createResource(
          "JavaScript.info",
          "Modern JavaScript tutorial with interactive examples",
          "https://javascript.info/",
          "Course",
          "Beginner",
          "20-30 hours",
        ),
        this.createResource(
          "You Don't Know JS",
          "Deep dive into JavaScript concepts",
          "https://github.com/getify/You-Dont-Know-JS",
          "Book",
          "Intermediate",
          "40+ hours",
        ),
      ],
    })

    this.addStep({
      id: "react-basics",
      title: "React Fundamentals",
      description: "Learn React components, hooks, and state management",
      estimatedWeeks: 5,
      prerequisites: ["javascript-fundamentals"],
      skills: ["React Components", "JSX", "Hooks", "State Management", "Props", "Event Handling"],
      resources: [
        this.createResource(
          "React Official Tutorial",
          "Official React documentation and tutorial",
          "https://react.dev/learn",
          "Documentation",
          "Beginner",
          "5-10 hours",
        ),
        this.createResource(
          "React Hooks in Action",
          "Comprehensive guide to React Hooks",
          "https://www.manning.com/books/react-hooks-in-action",
          "Book",
          "Intermediate",
          "20+ hours",
        ),
      ],
    })

    this.addStep({
      id: "typescript-integration",
      title: "TypeScript & Advanced React",
      description: "Add type safety and learn advanced React patterns",
      estimatedWeeks: 4,
      prerequisites: ["react-basics"],
      skills: ["TypeScript", "Type Safety", "Advanced React Patterns", "Custom Hooks", "Context API"],
      resources: [
        this.createResource(
          "TypeScript Handbook",
          "Official TypeScript documentation",
          "https://www.typescriptlang.org/docs/",
          "Documentation",
          "Intermediate",
          "10-15 hours",
        ),
        this.createResource(
          "React TypeScript Cheatsheet",
          "Best practices for React with TypeScript",
          "https://react-typescript-cheatsheet.netlify.app/",
          "Article",
          "Intermediate",
          "2 hours",
        ),
      ],
    })

    this.addStep({
      id: "modern-tooling",
      title: "Modern Development Tools",
      description: "Master build tools, testing, and deployment",
      estimatedWeeks: 3,
      prerequisites: ["typescript-integration"],
      skills: ["Vite/Webpack", "Testing (Jest, RTL)", "Git/GitHub", "CI/CD", "Package Management"],
      resources: [
        this.createResource(
          "Vite Guide",
          "Fast build tool for modern web development",
          "https://vitejs.dev/guide/",
          "Documentation",
          "Intermediate",
          "3-5 hours",
        ),
        this.createResource(
          "Testing Library Docs",
          "Simple and complete testing utilities",
          "https://testing-library.com/docs/",
          "Documentation",
          "Intermediate",
          "5-8 hours",
        ),
      ],
    })
  }
}
