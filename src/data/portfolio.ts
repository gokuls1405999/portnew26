export type Project = {
  id: string;
  category: string;
  title: string;
  metrics: string[];
  stack: string[];
  description?: string;
};

export const PROJECTS: Project[] = [
  { id: "p1", category: "Generative AI", title: "Instruction Fine-Tuned Multi-Task AI Assistant", metrics: ["88% accuracy", "6+ NLP tasks", "+35% accuracy improvement", "60% model reduction", "<2s latency"], stack: ["Hugging Face Transformers", "Instruction Fine-Tuning", "PyTorch", "Gradio", "Prompt Engineering"] },
  { id: "p2", category: "Computer Vision", title: "Real-Time Retail Edge AI System", metrics: ["85–90% detection accuracy", "200–400ms/frame latency", "60–70% API usage reduction"], stack: ["YOLOv8", "OpenCV", "Groq API (LLaMA3)", "Gradio", "Edge AI", "COCO"] },
  { id: "p3", category: "RAG", title: "Enterprise KAG Wikipedia AI Assistant", metrics: ["+35–45% answer relevance", "20,000+ knowledge records", "<2s latency", "40% hallucination reduction"], stack: ["LangChain", "LLMs", "Gradio", "Vector Search", "Python"] },
  { id: "p4", category: "Generative AI", title: "Supervised Fine-Tuned Customer Support LLM", metrics: ["+40% response relevance", "60% manual workload reduction", "1,000+ Q&A pairs", "<2s inference"], stack: ["Hugging Face Transformers", "PyTorch", "SFT", "Gradio"] },
  { id: "p5", category: "RAG", title: "Legal AI Research Assistant — Indian Supreme Court", metrics: ["1,000+ judgments indexed", "5,000–10,000+ embeddings", "70–80% search-time reduction", "60–70% faster inference"], stack: ["LangChain", "FAISS", "LLaMA (Groq)", "Streamlit", "Semantic Search"] },
  { id: "p6", category: "Agentic AI", title: "Medical Diagnosis Assistant", metrics: ["88–90% response relevance", "+40–45% diagnostic coherence", "<1.5s/query", "50–60% hallucination reduction"], stack: ["Agentic AI", "RAG", "LangChain", "FAISS", "LLaMA/Groq", "Gradio"] },
  { id: "p7", category: "Agentic AI", title: "Digital Marketing Automation (CrewAI)", metrics: ["60–65% manual effort reduction", "5+ specialized agents", "+40–50% relevance", "10–20 content variations/run"], stack: ["CrewAI", "RAG", "LLMs", "Vector DBs", "Prompt Engineering"] },
  { id: "p8", category: "Generative AI", title: "Enterprise CAG AI Assistant", metrics: ["45–60% latency improvement", "30–40% LLM cost reduction", "500+ documents", "0.8–1.2s retrieval"], stack: ["LangChain", "LLMs", "Embeddings", "Vector DB", "CAG"] },
  { id: "p9", category: "NLP", title: "Real-Time News Retrieval Engine — BERT + FAISS", metrics: ["120,000+ documents", "+42% Top-5 precision", "<45ms query (40× speedup)", ">92% Top-3 alignment"], stack: ["Python", "PyTorch", "BERT", "FAISS", "Gradio"] },
  { id: "p10", category: "NLP", title: "DistilBERT News Classification & Semantic Search", metrics: ["97.2% accuracy", "96.5% F1", "50% latency reduction", "60% model size reduction"], stack: ["DistilBERT", "Hugging Face", "PyTorch", "FAISS", "Gradio"] },
  { id: "p11", category: "ML", title: "Telecom Customer Churn — Bernoulli Naïve Bayes", metrics: ["80% accuracy", "0.83 ROC-AUC", "+20% churn recall", "15–20% revenue-loss prevention"], stack: ["Scikit-learn", "BernoulliNB", "Joblib", "Python"] },
  { id: "p12", category: "Clustering", title: "Wholesale Customer Segmentation — K-Means", metrics: ["K=3 optimal (Elbow + Silhouette)", "PCA 2D viz", "Actionable segment profiling"], stack: ["Scikit-learn", "K-Means", "PCA", "Matplotlib"] },
  { id: "p13", category: "Deep Learning", title: "EEG Eye State Classification — Bi-RNN", metrics: ["95% accuracy", "14-channel EEG", "+6–10% over unidirectional RNN", "30% training-loss reduction"], stack: ["TensorFlow/Keras", "Bi-RNN", "Scikit-learn"] },
  { id: "p14", category: "Clustering", title: "Customer Behavior — HAC (Hierarchical)", metrics: ["12,000+ sessions", "+25% segment separability", "10–18% conversion uplift potential"], stack: ["Scikit-learn", "HAC", "Ward Linkage", "Silhouette", "PCA"] },
  { id: "p15", category: "Clustering", title: "Customer Segmentation — DIANA-Style Divisive", metrics: ["500K+ transactions", "4,000+ RFM profiles", "+30–40% inter-cluster separation", "50% interpretation complexity reduction"], stack: ["K-Means binary splitting", "RFM", "PCA", "Silhouette"] },
  { id: "p16", category: "Clustering", title: "Clinical Stratification — DBSCAN", metrics: ["615 patients", "3 strata + anomaly group", "5–8% high-risk anomaly detection", "+35% separability"], stack: ["DBSCAN", "PCA", "Scikit-learn"] },
  { id: "p17", category: "ML", title: "Probabilistic News Topic Discovery — GMM", metrics: ["2,000+ articles", "4 semantic topic groups", "UMAP 2D viz"], stack: ["GMM", "PCA", "UMAP", "Sentence-Transformers"] },
  { id: "p18", category: "ML", title: "Probabilistic Clinical Clustering — GMM", metrics: ["500+ patients", "30+ diagnostic features", "BIC model selection", "EM optimization"], stack: ["GMM", "EM", "PCA", "BIC", "Scikit-learn"] },
  { id: "p19", category: "Deep Learning", title: "Graph Attention Network — Retail Intelligence", metrics: ["500K+ transactions", "+30–40% representation learning", "Top 10–15% high-influence products", "25% training time reduction"], stack: ["PyTorch", "GAT", "GNN", "NetworkX"] },
  { id: "p20", category: "ML", title: "Quantum-Enhanced Productivity Prediction", metrics: ["1,100+ records", "75% dimensionality reduction", "Hybrid VQR", "<1s inference"], stack: ["Qiskit", "Quantum ML", "VQR", "Scikit-learn"] },
  { id: "p21", category: "Time-Series", title: "LSTM Energy Forecasting — Smart Environments", metrics: ["19,735+ IoT records", "MAE −18–25%", "RMSE −20%", "R² > 0.85", "22% overfitting reduction"], stack: ["TensorFlow", "Keras", "LSTM", "Time-Series"] },
  { id: "p22", category: "Deep Learning", title: "ANN Real Estate Price Prediction", metrics: ["85–92% R²", "40% manual estimation reduction", "+25–30% convergence"], stack: ["ANN/FNN", "Scikit-learn", "Pandas", "NumPy"] },
  { id: "p23", category: "ML", title: "Cardiovascular Risk — Linear SVM", metrics: ["88% precision (healthy)", "920+ records", "+45% screening speed", "GridSearchCV optimized"], stack: ["SVM Linear", "Scikit-learn", "GridSearchCV"] },
  { id: "p24", category: "ML", title: "Heart Disease — Non-Linear SVM + PCA", metrics: ["94.76% accuracy", "94.33% F1", "50,000+ records", "+30% convergence speed"], stack: ["SVM RBF", "PCA", "GridSearchCV", "Scikit-learn"] },
  { id: "p25", category: "ML", title: "Medical Insurance Cost — Decision Tree Regression", metrics: ["85.4% R²", "MAE: $2,813", "1,338+ records", "Top drivers: Smoker, BMI"], stack: ["Decision Tree Regressor", "GridSearchCV", "Scikit-learn"] },
  { id: "p26", category: "ML", title: "Breast Cancer Diagnosis — Random Forest", metrics: ["97.14% test accuracy", "96.4% CV", "98% recall (malignant)", "99% precision (benign)"], stack: ["Random Forest", "Decision Tree", "Scikit-learn"] },
  { id: "p27", category: "ML", title: "Vehicle Price Prediction — Random Forest Regression", metrics: ["R² 85–90%", "40% manual valuation reduction", "+10–15% via GridSearchCV"], stack: ["Random Forest", "Scikit-learn", "Feature Engineering"] },
  { id: "p28", category: "ML", title: "Credit Risk & Loan Eligibility — Logistic Regression", metrics: ["97.02% accuracy", "0.97 F1", "99.68% precision", "−15% default risk", "3,100+ applicants"], stack: ["Logistic Regression", "Scikit-learn", "StandardScaler"] },
  { id: "p29", category: "Generative AI", title: "AI-Powered Data Extraction Platform", metrics: ["1,000+ docs/hour", "−40% cost", "−85% manual entry", "99% accuracy"], stack: ["Google Gemini API", "OneDrive API", "Python", "Automation"] },
  { id: "p30", category: "Agentic AI", title: "AI Invoice Automation & Service Chatbot", metrics: ["99% invoice accuracy", "−50% workload", "−40% cost", "10K+ monthly queries"], stack: ["Google Gemini", "Sheets API", "Gmail API", "NLU"] },
  { id: "p31", category: "Agentic AI", title: "Supply Chain Customer AI Agent", metrics: ["−30–50% inquiries", "Hours → Seconds response", "RAG + Sheets DB"], stack: ["RAG", "Google Gemini", "Gmail API", "Drive", "Python"] },
  { id: "p32", category: "Agentic AI", title: "Smart Home Reactive AI Agent", metrics: ["−20% manual adjustments", "−15% energy waste", "LLM control + sensors"], stack: ["Google Gemini", "Gmail API", "Reactive Agent", "Python"] },
  { id: "p33", category: "ML", title: "IoT Predictive Maintenance — Pneumatic Systems", metrics: ["Digital twin", "Anomaly + fault prediction", "Condition-based maintenance"], stack: ["IoT", "Cloud", "ML", "Digital Twin"] },
  { id: "p34", category: "Generative AI", title: "Connect Pay — Digital Payment App (BA)", metrics: ["Miro wireframe", "SWOT vs GPay/PhonePe/Paytm", "Agile sprints", "Stakeholder commended"], stack: ["Miro", "Business Analysis", "Personas", "Agile", "UX"] },
];

export const FILTERS = ["All", "Generative AI", "RAG", "Agentic AI", "Computer Vision", "ML", "NLP", "Time-Series", "Clustering", "Deep Learning"];

export const SKILLS = {
  "AI & Generative AI": ["LLM Fine-Tuning", "Retrieval-Augmented Generation (RAG)", "Agentic AI Systems", "Prompt Engineering", "Instruction Tuning", "NLP", "Hugging Face Transformers", "LangChain", "CrewAI", "PyTorch", "FAISS", "YOLOv8", "Computer Vision", "Edge AI", "Knowledge-Augmented Generation (KAG)"],
  "ML & Data Science": ["Supervised Learning", "Unsupervised Learning", "Deep Learning", "BERT/DistilBERT", "LSTM", "Bi-RNN", "GNN/GAT", "SVM", "Decision Trees", "Random Forest", "K-Means", "DBSCAN", "GMM", "Scikit-learn", "TensorFlow", "Keras", "Pandas", "NumPy", "Qiskit (Quantum ML)"],
  "Data Engineering & MDM": ["Master Data Management (MDM)", "ISO 8000 MDQM", "ISO 25500 SCDM", "UNSPSC", "ECCMA Cataloguing", "SAP MM", "Bill of Materials (BOM)", "Data Deduplication & Enrichment", "Inventory Optimization", "Power BI", "Tableau", "SQL", "Excel VBA", "MS Access"],
  "Tools & Dev": ["Python", "Gradio", "Streamlit", "Miro", "SAP", "VMware", "Creo View", "AutoCAD", "CATIA", "SOLIDWORKS", "NX CAD", "ANSYS", "MS Project", "Agile Scrum"],
};

export const METRICS = [
  { value: 50000, suffix: "+", label: "Asset Records Standardized" },
  { value: 88, suffix: "%", label: "NLP Task Accuracy Achieved" },
  { value: 60, suffix: "%", label: "Reduction in Single-Task Models" },
  { value: 2, suffix: "s", prefix: "<", label: "Real-Time Inference Latency" },
  { value: 40, suffix: "%", label: "Cost Optimization Delivered" },
  { value: 35, suffix: "%", label: "Instruction-Following Accuracy ↑" },
];

export const LT_PROJECTS = [
  { name: "Wind Energy Transmission, Europe", date: "Aug 2021 – May 2022", metrics: ["17,380 materials catalogued", "+25% data accuracy", "+20% cataloguing efficiency"] },
  { name: "MHI Enrichment, Europe", date: "Jun – Aug 2021", metrics: ["5,965 materials classified", "+22% accuracy", "+18% efficiency"] },
  { name: "TETRA PAK Sweden", date: "Apr – Jun 2021", metrics: ["6,285 materials", "+18% accuracy", "+12% efficiency"] },
  { name: "Winnebago, USA", date: "Feb – Apr 2021", metrics: ["6,960 materials", "55K → 14K data reduction", "+25% accuracy", "+20% efficiency"] },
  { name: "TETRA PAK Sweden II", date: "Oct 2020 – Feb 2021", metrics: ["9,450 materials", "+20% accuracy", "+15% efficiency"] },
  { name: "SC Johnson Chemical, USA", date: "Aug – Oct 2020", metrics: ["6,185 materials", "1,500 photo records", "+15% accuracy", "+10% efficiency"] },
  { name: "Oil Search, Australia", date: "Jan – Aug 2020", metrics: ["12,720 materials", "+20% accuracy", "+15% efficiency"] },
];
