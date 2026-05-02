import type { Route } from "./+types/home";
import { Hero } from "../components/Hero";
import { DestinationCard } from "../components/DestinationCard";
import { motion } from "framer-motion";
import { TrendingUp, Award, Clock, Compass } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Wanderlust Premium | Luxury Travel Dashboard" },
    { name: "description", content: "Discover your next adventure with premium travel deals." },
  ];
}

const featuredDestinations = [
  {
    title: "Santorini, Greece",
    location: "Cyclades Islands",
    rating: 4.9,
    price: "$1,200",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Bali, Indonesia",
    location: "Ubud & Seminyak",
    rating: 4.8,
    price: "$850",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Kyoto, Japan",
    location: "Honshu Island",
    rating: 4.9,
    price: "$1,500",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Maldives",
    location: "Male Atoll",
    rating: 5.0,
    price: "$2,100",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Home() {
  return (
    <div className="home-page animate-fade">
      <header className="page-header">
        <div>
          <h1>Welcome back, Explorer!</h1>
          <p>Where would you like to go today?</p>
        </div>
        <div className="header-stats">
          <div className="stat-item glass">
            <TrendingUp size={18} color="#10b981" />
            <span>12 Trips</span>
          </div>
          <div className="stat-item glass">
            <Award size={18} color="#f59e0b" />
            <span>Pro Level</span>
          </div>
        </div>
      </header>

      <Hero />

      <section className="dashboard-section">
        <div className="section-header">
          <h2>Top Destinations</h2>
          <button className="text-btn">View All</button>
        </div>
        
        <div className="destinations-grid">
          {featuredDestinations.map((dest, index) => (
            <DestinationCard key={index} {...dest} />
          ))}
        </div>
      </section>

      <section className="dashboard-section">
        <div className="section-header">
          <h2>Recent Activity</h2>
        </div>
        <div className="activity-list glass">
          <div className="activity-item">
            <div className="icon-box glass">
              <Clock size={18} />
            </div>
            <div className="activity-text">
              <h4>Booked a trip to Maldives</h4>
              <p>2 hours ago</p>
            </div>
            <span className="status-badge success">Confirmed</span>
          </div>
          <div className="activity-item">
            <div className="icon-box glass">
              <Compass size={18} />
            </div>
            <div className="activity-text">
              <h4>Saved "Swiss Alps" to Favorites</h4>
              <p>Yesterday</p>
            </div>
            <span className="status-badge">Saved</span>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .home-page {
          padding-bottom: 4rem;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2.5rem;
        }

        .page-header h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .page-header p {
          color: var(--text-muted);
        }

        .header-stats {
          display: flex;
          gap: 1rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 1.2rem;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .dashboard-section {
          margin-top: 4rem;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .section-header h2 {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .text-btn {
          color: var(--primary);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .destinations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .activity-list {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .activity-item {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1rem;
          border-radius: 12px;
          transition: var(--transition);
        }

        .activity-item:hover {
          background: rgba(255, 255, 255, 0.03);
        }

        .icon-box {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
        }

        .activity-text {
          flex: 1;
        }

        .activity-text h4 {
          font-size: 1rem;
          margin-bottom: 0.2rem;
        }

        .activity-text p {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .status-badge {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.3rem 0.8rem;
          border-radius: 100px;
          background: var(--glass-border);
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .status-badge.success {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
        }
      `}} />
    </div>
  );
}