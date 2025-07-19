import { VisualRoadmap } from "../types/roadmap-node"
import type { RoadmapMetadata } from "../types/roadmap"

export class VisualDataScienceRoadmap extends VisualRoadmap {
  constructor() {
    const metadata: RoadmapMetadata = {
      id: "data-science",
      title: "Data Science",
      description: "Learn data analysis, machine learning, and statistical modeling",
      icon: "📊",
      color: "oasis-yellow",
      difficulty: "Intermediate",
      estimatedMonths: 12,
      prerequisites: ["Basic mathematics", "Programming fundamentals"],
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
      this.createNode("start", "START", "Begin your data science journey", "start", { x: 600, y: 50 }, [], 0),
    )

    // Row 1: Foundations
    this.addNode(
      this.createNode(
        "math-stats",
        "Math & Statistics",
        "Mathematical foundations",
        "skill",
        { x: 450, y: 140 },
        [
          this.createResource(
            "Statistics Course",
            "Essential statistics for data science",
            "https://www.khanacademy.org/math/statistics-probability",
            "Course",
            "Beginner",
            "40 hours",
          ),
        ],
        60,
      ),
    )

    this.addNode(
      this.createNode(
        "python",
        "Python",
        "Programming language",
        "skill",
        { x: 750, y: 140 },
        [
          this.createResource(
            "Python for Data Science",
            "Learn Python programming",
            "https://www.python.org/about/gettingstarted/",
            "Documentation",
            "Beginner",
            "30 hours",
          ),
        ],
        45,
      ),
    )

    // Row 2: NumPy Foundation
    this.addNode(
      this.createNode(
        "numpy",
        "NumPy",
        "Numerical computing",
        "skill",
        { x: 600, y: 230 },
        [
          this.createResource(
            "NumPy Tutorial",
            "Learn numerical computing",
            "https://numpy.org/doc/stable/user/quickstart.html",
            "Documentation",
            "Intermediate",
            "12 hours",
          ),
        ],
        18,
      ),
    )

    // Row 3: Data Manipulation
    this.addNode(
      this.createNode(
        "pandas",
        "Pandas",
        "Data manipulation",
        "skill",
        { x: 600, y: 320 },
        [
          this.createResource(
            "Pandas Documentation",
            "Learn data manipulation",
            "https://pandas.pydata.org/docs/user_guide/",
            "Documentation",
            "Intermediate",
            "25 hours",
          ),
        ],
        35,
      ),
    )

    // Row 4: Data Visualization
    this.addNode(
      this.createNode(
        "matplotlib",
        "Matplotlib",
        "Basic plotting",
        "skill",
        { x: 600, y: 410 },
        [
          this.createResource(
            "Matplotlib Tutorial",
            "Learn data visualization basics",
            "https://matplotlib.org/stable/tutorials/index.html",
            "Documentation",
            "Intermediate",
            "15 hours",
          ),
        ],
        20,
      ),
    )

    // Row 5: Advanced Visualization
    this.addNode(
      this.createNode(
        "seaborn",
        "Seaborn",
        "Statistical visualization",
        "skill",
        { x: 600, y: 500 },
        [
          this.createResource(
            "Seaborn Tutorial",
            "Learn statistical visualization",
            "https://seaborn.pydata.org/tutorial.html",
            "Documentation",
            "Intermediate",
            "12 hours",
          ),
        ],
        18,
      ),
    )

    // Row 6: Data Collection
    this.addNode(
      this.createNode(
        "data-collection",
        "Data Collection",
        "APIs, web scraping, SQL",
        "skill",
        { x: 600, y: 590 },
        [
          this.createResource(
            "Data Collection Guide",
            "Learn data collection techniques",
            "https://realpython.com/beautiful-soup-web-scraper-python/",
            "Article",
            "Intermediate",
            "15 hours",
          ),
        ],
        25,
      ),
    )

    // Row 7: Personal Access Tokens (NEW)
    this.addNode(
      this.createNode(
        "personal-access-tokens",
        "Personal Access Tokens",
        "API authentication for data access",
        "skill",
        { x: 600, y: 680 },
        [
          this.createResource(
            "GitHub API with Python",
            "Access GitHub data with PATs",
            "https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api",
            "Documentation",
            "Intermediate",
            "4 hours",
          ),
          this.createResource(
            "Twitter API Authentication",
            "Using tokens for social media data",
            "https://developer.twitter.com/en/docs/authentication/oauth-2-0",
            "Documentation",
            "Intermediate",
            "3 hours",
          ),
          this.createResource(
            "API Rate Limiting",
            "Managing API quotas and limits",
            "https://realpython.com/python-requests/",
            "Article",
            "Intermediate",
            "2 hours",
          ),
        ],
        10,
      ),
    )

    // Row 8: Exploratory Data Analysis
    this.addNode(
      this.createNode(
        "eda",
        "Exploratory Data Analysis",
        "Data exploration & insights",
        "skill",
        { x: 600, y: 770 },
        [
          this.createResource(
            "EDA Guide",
            "Learn exploratory data analysis",
            "https://www.kaggle.com/learn/data-visualization",
            "Course",
            "Intermediate",
            "20 hours",
          ),
        ],
        30,
      ),
    )

    // Row 9: Machine Learning Foundation
    this.addNode(
      this.createNode(
        "ml-fundamentals",
        "ML Fundamentals",
        "Machine learning concepts",
        "skill",
        { x: 600, y: 860 },
        [
          this.createResource(
            "ML Course",
            "Learn machine learning fundamentals",
            "https://www.coursera.org/learn/machine-learning",
            "Course",
            "Intermediate",
            "60 hours",
          ),
        ],
        80,
      ),
    )

    // Row 10: ML Library
    this.addNode(
      this.createNode(
        "scikit-learn",
        "Scikit-learn",
        "Machine learning library",
        "skill",
        { x: 600, y: 950 },
        [
          this.createResource(
            "Scikit-learn Guide",
            "Learn ML with Scikit-learn",
            "https://scikit-learn.org/stable/user_guide.html",
            "Documentation",
            "Intermediate",
            "40 hours",
          ),
        ],
        55,
      ),
    )

    // Row 11: ML Algorithms
    this.addNode(
      this.createNode(
        "supervised-learning",
        "Supervised Learning",
        "Classification & regression",
        "skill",
        { x: 600, y: 1040 },
        [
          this.createResource(
            "Supervised Learning Guide",
            "Learn supervised learning algorithms",
            "https://scikit-learn.org/stable/supervised_learning.html",
            "Documentation",
            "Advanced",
            "30 hours",
          ),
        ],
        40,
      ),
    )

    // Row 12: Model Evaluation
    this.addNode(
      this.createNode(
        "model-evaluation",
        "Model Evaluation",
        "Metrics, validation, tuning",
        "skill",
        { x: 600, y: 1130 },
        [
          this.createResource(
            "Model Evaluation Guide",
            "Learn model evaluation techniques",
            "https://scikit-learn.org/stable/model_selection.html",
            "Documentation",
            "Advanced",
            "20 hours",
          ),
        ],
        30,
      ),
    )

    // Row 13: Deep Learning
    this.addNode(
      this.createNode(
        "deep-learning",
        "Deep Learning",
        "Neural networks",
        "skill",
        { x: 600, y: 1220 },
        [
          this.createResource(
            "Deep Learning Course",
            "Learn neural networks",
            "https://www.deeplearning.ai/",
            "Course",
            "Advanced",
            "80 hours",
          ),
        ],
        100,
      ),
    )

    // Row 14: Specializations (Optional)
    this.addNode(
      this.createNode(
        "nlp",
        "NLP",
        "Natural language processing",
        "optional",
        { x: 400, y: 1310 },
        [
          this.createResource(
            "NLP Course",
            "Learn natural language processing",
            "https://www.nltk.org/book/",
            "Book",
            "Advanced",
            "40 hours",
          ),
        ],
        60,
      ),
    )

    this.addNode(
      this.createNode(
        "computer-vision",
        "Computer Vision",
        "Image processing & analysis",
        "optional",
        { x: 600, y: 1310 },
        [
          this.createResource(
            "Computer Vision Course",
            "Learn computer vision",
            "https://opencv.org/courses/",
            "Course",
            "Advanced",
            "45 hours",
          ),
        ],
        65,
      ),
    )

    this.addNode(
      this.createNode(
        "mlops",
        "MLOps",
        "ML operations & deployment",
        "optional",
        { x: 800, y: 1310 },
        [
          this.createResource(
            "MLOps Guide",
            "Learn ML operations",
            "https://mlops.org/",
            "Article",
            "Advanced",
            "30 hours",
          ),
        ],
        45,
      ),
    )

    // End
    this.addNode(
      this.createNode("end", "DATA SCIENTIST", "You're now a data scientist!", "end", { x: 600, y: 1400 }, [], 0),
    )

    // Clean linear connections
    this.addConnection({ from: "start", to: "math-stats", type: "required" })
    this.addConnection({ from: "start", to: "python", type: "required" })
    this.addConnection({ from: "math-stats", to: "numpy", type: "required" })
    this.addConnection({ from: "python", to: "numpy", type: "required" })
    this.addConnection({ from: "numpy", to: "pandas", type: "required" })
    this.addConnection({ from: "pandas", to: "matplotlib", type: "required" })
    this.addConnection({ from: "matplotlib", to: "seaborn", type: "required" })
    this.addConnection({ from: "seaborn", to: "data-collection", type: "required" })
    this.addConnection({ from: "data-collection", to: "personal-access-tokens", type: "required" })
    this.addConnection({ from: "personal-access-tokens", to: "eda", type: "required" })
    this.addConnection({ from: "eda", to: "ml-fundamentals", type: "required" })
    this.addConnection({ from: "ml-fundamentals", to: "scikit-learn", type: "required" })
    this.addConnection({ from: "scikit-learn", to: "supervised-learning", type: "required" })
    this.addConnection({ from: "supervised-learning", to: "model-evaluation", type: "required" })
    this.addConnection({ from: "model-evaluation", to: "deep-learning", type: "required" })
    this.addConnection({ from: "deep-learning", to: "nlp", type: "optional" })
    this.addConnection({ from: "deep-learning", to: "computer-vision", type: "optional" })
    this.addConnection({ from: "deep-learning", to: "mlops", type: "optional" })
    this.addConnection({ from: "nlp", to: "end", type: "optional" })
    this.addConnection({ from: "computer-vision", to: "end", type: "optional" })
    this.addConnection({ from: "mlops", to: "end", type: "optional" })
    this.addConnection({ from: "deep-learning", to: "end", type: "required" })
  }
}
