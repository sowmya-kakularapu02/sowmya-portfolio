export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">


        <div className="border p-4 rounded shadow hover:shadow-md">
          <h3 className="text-xl font-semibold">Motion Detection</h3>
          <p>Motion Detection System (Python, OpenCV) — real-time detector using frame differencing with temporal persistence and contour filtering; works with webcam or video input and renders live annotated output.</p>
        </div>

        <div className="border p-4 rounded shadow hover:shadow-md">
          <h3 className="text-xl font-semibold">HubcartPro</h3>
          <p>Created a dynamic shopping checkout system using AWS S3, Spring, Angular that optimized delivery routes and stock management through strategically placed hubs, driving faster order fulfillment and elevated customer satisfaction.</p>
        </div>

        <div className="border p-4 rounded shadow hover:shadow-md">
          <h3 className="text-xl font-semibold">Distributed System for Real-Time Alert 	</h3>
          <p>Designed and deployed a distributed alert system handling 50K+ users with sub-200ms latency. Integrated AWS Lambda and SNS for real-time alerting with a 98% delivery success rate. Containerized microservices using Docker and orchestrated with Kubernetes to ensure 3x scalability.</p>
        </div>

        <div className="border p-4 rounded shadow hover:shadow-md">
          <h3 className="text-xl font-semibold">Big Mart Sales Predictor</h3>
          <p>Forecasted sales using ML models like Random Forest and XGBoost in Python, improving accuracy through feature engineering.</p>
        </div>

      </div>
    </section>
  );
}
