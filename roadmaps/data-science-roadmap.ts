import { BaseRoadmap, type RoadmapMetadata } from "../types/roadmap"

export class DataScienceRoadmap extends BaseRoadmap {
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
    this.addStep({
      id: "python-fundamentals",
      title: "Python for Data Science",
      description: "Master Python programming and data science libraries",
      estimatedWeeks: 6,
      skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Jupyter Notebooks"],
      resources: [
        this.createResource(
          "Python for Data Analysis",
          "Wes McKinney's comprehensive guide to pandas",
          "https://wesmckinney.com/book/",
          "Book",
          "Beginner",
          "40+ hours",
        ),
        this.createResource(
          "Kaggle Learn Python",
          "Free micro-courses on Python for data science",
          "https://www.kaggle.com/learn/python",
          "Course",
          "Beginner",
          "7 hours",
        ),
      ],
    })

    this.addStep({
      id: "statistics-math",
      title: "Statistics & Mathematics",
      description: "Essential statistical concepts and mathematical foundations",
      estimatedWeeks: 8,
      prerequisites: ["python-fundamentals"],
      skills: ["Descriptive Statistics", "Probability", "Hypothesis Testing", "Linear Algebra", "Calculus"],
      resources: [
        this.createResource(
          "Khan Academy Statistics",
          "Comprehensive statistics course",
          "https://www.khanacademy.org/math/statistics-probability",
          "Course",
          "Beginner",
          "50+ hours",
        ),
        this.createResource(
          "Think Stats",
          "Probability and statistics for programmers",
          "https://greenteapress.com/thinkstats2/",
          "Book",
          "Intermediate",
          "20+ hours",
        ),
      ],
    })

    this.addStep({
      id: "data-analysis",
      title: "Data Analysis & Visualization",
      description: "Explore, clean, and visualize data effectively",
      estimatedWeeks: 6,
      prerequisites: ["statistics-math"],
      skills: ["Data Cleaning", "EDA", "Data Visualization", "Seaborn", "Plotly", "Statistical Analysis"],
      resources: [
        this.createResource(
          "Seaborn Tutorial",
          "Statistical data visualization library",
          "https://seaborn.pydata.org/tutorial.html",
          "Documentation",
          "Intermediate",
          "8-12 hours",
        ),
        this.createResource(
          "Plotly Documentation",
          "Interactive visualization library",
          "https://plotly.com/python/",
          "Documentation",
          "Intermediate",
          "10-15 hours",
        ),
      ],
    })

    this.addStep({
      id: "machine-learning",
      title: "Machine Learning Fundamentals",
      description: "Learn supervised and unsupervised learning algorithms",
      estimatedWeeks: 10,
      prerequisites: ["data-analysis"],
      skills: [
        "Scikit-learn",
        "Supervised Learning",
        "Unsupervised Learning",
        "Model Evaluation",
        "Feature Engineering",
      ],
      resources: [
        this.createResource(
          "Scikit-learn User Guide",
          "Comprehensive machine learning library documentation",
          "https://scikit-learn.org/stable/user_guide.html",
          "Documentation",
          "Intermediate",
          "30+ hours",
        ),
        this.createResource(
          "Hands-On Machine Learning",
          "Practical machine learning with Python",
          "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/",
          "Book",
          "Intermediate",
          "60+ hours",
        ),
      ],
    })

    this.addStep({
      id: "deep-learning",
      title: "Deep Learning & Neural Networks",
      description: "Advanced machine learning with neural networks",
      estimatedWeeks: 8,
      prerequisites: ["machine-learning"],
      skills: ["TensorFlow", "Keras", "Neural Networks", "CNN", "RNN", "Transfer Learning"],
      resources: [
        this.createResource(
          "TensorFlow Tutorials",
          "Official TensorFlow learning resources",
          "https://www.tensorflow.org/tutorials",
          "Course",
          "Advanced",
          "40+ hours",
        ),
        this.createResource(
          "Deep Learning Specialization",
          "Andrew Ng's deep learning course",
          "https://www.coursera.org/specializations/deep-learning",
          "Course",
          "Advanced",
          "100+ hours",
        ),
      ],
    })

    this.addStep({
      id: "mlops-deployment",
      title: "MLOps & Model Deployment",
      description: "Deploy and maintain machine learning models in production",
      estimatedWeeks: 6,
      prerequisites: ["deep-learning"],
      skills: ["Model Deployment", "MLflow", "Docker", "API Development", "Model Monitoring", "Version Control"],
      resources: [
        this.createResource(
          "MLflow Documentation",
          "Open source platform for ML lifecycle",
          "https://mlflow.org/docs/latest/index.html",
          "Documentation",
          "Advanced",
          "15-20 hours",
        ),
        this.createResource(
          "FastAPI for ML",
          "Build APIs for machine learning models",
          "https://fastapi.tiangolo.com/",
          "Documentation",
          "Intermediate",
          "8-12 hours",
        ),
      ],
    })
  }
}
