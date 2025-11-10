import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Scene3D from "@/components/Scene3D";
import PortfolioContent from "@/components/PortfolioContent";

const Portfolio = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-xl text-primary">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero Section with 3D Animation */}
      <section>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                SHAIK MOHAMMAD
              </span>
              <br />
              <span className="text-foreground">MUDDASSIR</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Computer Science Engineering Student
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span>📧 22102a040632@mbu.asia</span>
              <span>📱 +91 7396877186</span>
              <span>🎂 03 Aug, 2005</span>
            </div>
          </div>
          
          {/* 3D Scene */}
          <div className="h-[400px] rounded-2xl overflow-hidden glass-card glow-cyan">
            <Scene3D />
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <section>
        <PortfolioContent />
      </section>
    </div>
  );
};

export default Portfolio;
