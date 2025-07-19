import { VisualRoadmap } from "../types/roadmap-node"
import type { RoadmapMetadata } from "../types/roadmap"

export class VisualIOSRoadmap extends VisualRoadmap {
  constructor() {
    const metadata: RoadmapMetadata = {
      id: "ios",
      title: "iOS Development",
      description: "Build native iOS apps with Swift, UIKit, and SwiftUI",
      icon: "📱",
      color: "bg-gradient-to-r from-blue-500 to-purple-600",
      difficulty: "Intermediate",
      estimatedMonths: 8,
      prerequisites: ["Basic programming knowledge", "Object-oriented programming"],
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
    this.addNode(
      this.createNode("start", "START", "Begin your iOS development journey", "start", { x: 600, y: 50 }, [], 0),
    )

    // Row 1: Development Environment
    this.addNode(
      this.createNode(
        "xcode",
        "Xcode & Setup",
        "iOS development environment",
        "tool",
        { x: 600, y: 140 },
        [
          this.createResource(
            "Xcode Guide",
            "Getting started with Xcode IDE",
            "https://developer.apple.com/xcode/",
            "Documentation",
            "Beginner",
            "4 hours",
          ),
        ],
        8,
      ),
    )

    // Row 2: Programming Language
    this.addNode(
      this.createNode(
        "swift-basics",
        "Swift Fundamentals",
        "iOS programming language",
        "skill",
        { x: 600, y: 230 },
        [
          this.createResource(
            "Swift Programming Guide",
            "Learn Swift programming language",
            "https://docs.swift.org/swift-book/",
            "Documentation",
            "Beginner",
            "30 hours",
          ),
        ],
        40,
      ),
    )

    // Row 3: Advanced Swift
    this.addNode(
      this.createNode(
        "swift-advanced",
        "Advanced Swift",
        "Protocols, generics, memory management",
        "skill",
        { x: 600, y: 320 },
        [
          this.createResource(
            "Advanced Swift",
            "Deep dive into Swift concepts",
            "https://www.objc.io/books/advanced-swift/",
            "Book",
            "Advanced",
            "25 hours",
          ),
        ],
        35,
      ),
    )

    // Row 4: iOS Fundamentals
    this.addNode(
      this.createNode(
        "ios-fundamentals",
        "iOS Fundamentals",
        "App lifecycle, MVC pattern",
        "skill",
        { x: 600, y: 410 },
        [
          this.createResource(
            "iOS App Development",
            "Learn iOS app fundamentals",
            "https://developer.apple.com/ios/",
            "Documentation",
            "Intermediate",
            "20 hours",
          ),
        ],
        30,
      ),
    )

    // Row 5: UI Framework Choice
    this.addNode(
      this.createNode(
        "uikit",
        "UIKit",
        "Traditional iOS UI framework",
        "skill",
        { x: 450, y: 500 },
        [
          this.createResource(
            "UIKit Tutorial",
            "Learn UIKit framework",
            "https://developer.apple.com/documentation/uikit",
            "Documentation",
            "Intermediate",
            "35 hours",
          ),
        ],
        45,
      ),
    )

    this.addNode(
      this.createNode(
        "swiftui",
        "SwiftUI",
        "Modern declarative UI framework",
        "skill",
        { x: 750, y: 500 },
        [
          this.createResource(
            "SwiftUI Tutorial",
            "Learn SwiftUI framework",
            "https://developer.apple.com/tutorials/swiftui",
            "Documentation",
            "Intermediate",
            "30 hours",
          ),
        ],
        40,
      ),
    )

    // Row 6: Navigation & Layout
    this.addNode(
      this.createNode(
        "navigation",
        "Navigation",
        "View controllers, navigation patterns",
        "skill",
        { x: 600, y: 590 },
        [
          this.createResource(
            "iOS Navigation",
            "Learn iOS navigation patterns",
            "https://developer.apple.com/design/human-interface-guidelines/navigation",
            "Documentation",
            "Intermediate",
            "15 hours",
          ),
        ],
        20,
      ),
    )

    // Row 7: Data Management
    this.addNode(
      this.createNode(
        "data-persistence",
        "Data Persistence",
        "Core Data, UserDefaults, File System",
        "skill",
        { x: 600, y: 680 },
        [
          this.createResource(
            "Core Data Tutorial",
            "Learn iOS data persistence",
            "https://developer.apple.com/documentation/coredata",
            "Documentation",
            "Advanced",
            "25 hours",
          ),
        ],
        35,
      ),
    )

    // Row 8: Networking
    this.addNode(
      this.createNode(
        "networking",
        "Networking",
        "URLSession, REST APIs, JSON",
        "skill",
        { x: 600, y: 770 },
        [
          this.createResource(
            "iOS Networking",
            "Learn networking in iOS",
            "https://developer.apple.com/documentation/foundation/url_loading_system",
            "Documentation",
            "Intermediate",
            "18 hours",
          ),
        ],
        25,
      ),
    )

    // Row 9: Device Features
    this.addNode(
      this.createNode(
        "device-features",
        "Device Features",
        "Camera, location, notifications",
        "skill",
        { x: 600, y: 860 },
        [
          this.createResource(
            "iOS Device Features",
            "Learn to use device capabilities",
            "https://developer.apple.com/documentation/avfoundation",
            "Documentation",
            "Intermediate",
            "20 hours",
          ),
        ],
        28,
      ),
    )

    // Row 10: Testing
    this.addNode(
      this.createNode(
        "testing",
        "Testing",
        "XCTest, UI testing, unit testing",
        "skill",
        { x: 600, y: 950 },
        [
          this.createResource(
            "iOS Testing",
            "Learn iOS app testing",
            "https://developer.apple.com/documentation/xctest",
            "Documentation",
            "Intermediate",
            "15 hours",
          ),
        ],
        22,
      ),
    )

    // Row 11: App Store
    this.addNode(
      this.createNode(
        "app-store",
        "App Store Deployment",
        "Publishing, certificates, provisioning",
        "skill",
        { x: 600, y: 1040 },
        [
          this.createResource(
            "App Store Connect",
            "Learn app store deployment",
            "https://developer.apple.com/app-store-connect/",
            "Documentation",
            "Intermediate",
            "12 hours",
          ),
        ],
        18,
      ),
    )

    // Row 12: Advanced Topics (Optional)
    this.addNode(
      this.createNode(
        "performance",
        "Performance",
        "Optimization, profiling, memory",
        "optional",
        { x: 350, y: 1130 },
        [
          this.createResource(
            "iOS Performance",
            "Learn performance optimization",
            "https://developer.apple.com/videos/play/wwdc2021/10180/",
            "Video",
            "Advanced",
            "15 hours",
          ),
        ],
        25,
      ),
    )

    this.addNode(
      this.createNode(
        "animations",
        "Animations",
        "Core Animation, transitions",
        "optional",
        { x: 600, y: 1130 },
        [
          this.createResource(
            "iOS Animations",
            "Learn iOS animations",
            "https://developer.apple.com/documentation/quartzcore",
            "Documentation",
            "Advanced",
            "18 hours",
          ),
        ],
        28,
      ),
    )

    this.addNode(
      this.createNode(
        "advanced-features",
        "Advanced Features",
        "ARKit, Machine Learning, WidgetKit",
        "optional",
        { x: 850, y: 1130 },
        [
          this.createResource(
            "ARKit Tutorial",
            "Learn augmented reality development",
            "https://developer.apple.com/documentation/arkit",
            "Documentation",
            "Advanced",
            "25 hours",
          ),
        ],
        35,
      ),
    )

    // End
    this.addNode(
      this.createNode("end", "iOS DEVELOPER", "You're now an iOS developer!", "end", { x: 600, y: 1220 }, [], 0),
    )

    // Clean linear connections
    this.addConnection({ from: "start", to: "xcode", type: "required" })
    this.addConnection({ from: "xcode", to: "swift-basics", type: "required" })
    this.addConnection({ from: "swift-basics", to: "swift-advanced", type: "required" })
    this.addConnection({ from: "swift-advanced", to: "ios-fundamentals", type: "required" })
    this.addConnection({ from: "ios-fundamentals", to: "uikit", type: "alternative" })
    this.addConnection({ from: "ios-fundamentals", to: "swiftui", type: "alternative" })
    this.addConnection({ from: "uikit", to: "navigation", type: "required" })
    this.addConnection({ from: "swiftui", to: "navigation", type: "required" })
    this.addConnection({ from: "navigation", to: "data-persistence", type: "required" })
    this.addConnection({ from: "data-persistence", to: "networking", type: "required" })
    this.addConnection({ from: "networking", to: "device-features", type: "required" })
    this.addConnection({ from: "device-features", to: "testing", type: "required" })
    this.addConnection({ from: "testing", to: "app-store", type: "required" })
    this.addConnection({ from: "app-store", to: "performance", type: "optional" })
    this.addConnection({ from: "app-store", to: "animations", type: "optional" })
    this.addConnection({ from: "app-store", to: "advanced-features", type: "optional" })
    this.addConnection({ from: "performance", to: "end", type: "optional" })
    this.addConnection({ from: "animations", to: "end", type: "optional" })
    this.addConnection({ from: "advanced-features", to: "end", type: "optional" })
    this.addConnection({ from: "app-store", to: "end", type: "required" })
  }
}
