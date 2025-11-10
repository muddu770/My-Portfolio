import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Sparkles, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Scene3D from "@/components/Scene3D";
import portfolioImage from "/Muddassir_portfolio.jpg";

const Home = () => {
  return (
    <div className="space-y-16 animate-fade-in">
      {/* Hero Section */}
      <section className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
              Welcome to my portfolio
            </span>
          </div>
          <div className="flex items-center gap-6">
            <img
              src={portfolioImage}
              alt="Muddassir"
              className="w-24 h-24 rounded-full border-4 border-primary/50 object-cover"
            />
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                SHAIK MOHAMMAD
              </span>
              <br />
              <span className="text-foreground">MUDDASSIR</span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Computer Science Engineering Student passionate about building innovative solutions 
            and exploring cutting-edge technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="group">
              <Link to="/portfolio">
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>

        <div className="h-[500px] rounded-2xl overflow-hidden glass-card glow-cyan">
          <Scene3D />
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6">
        <Card className="glass-card group hover:glow-cyan transition-all duration-300">
          <CardContent className="pt-6 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Full Stack Development</h3>
            <p className="text-muted-foreground">
              Proficient in Python, Java, JavaScript with experience in Angular, Django, and Flutter.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card group hover:glow-purple transition-all duration-300">
          <CardContent className="pt-6 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold">AI & Machine Learning</h3>
            <p className="text-muted-foreground">
              Built projects using NLP, speech recognition, and social media monitoring with AI.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card group hover:glow-cyan transition-all duration-300">
          <CardContent className="pt-6 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">ServiceNow Certified</h3>
            <p className="text-muted-foreground">
              Certified System Administrator (CSA) and Certified Application Developer (CAD).
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center space-y-2">
          <div className="text-4xl font-bold text-primary">9.1</div>
          <div className="text-sm text-muted-foreground">CGPA</div>
        </div>
        <div className="text-center space-y-2">
          <div className="text-4xl font-bold text-secondary">10+</div>
          <div className="text-sm text-muted-foreground">Projects</div>
        </div>
        <div className="text-center space-y-2">
          <div className="text-4xl font-bold text-primary">6+</div>
          <div className="text-sm text-muted-foreground">Certifications</div>
        </div>
        <div className="text-center space-y-2">
          <div className="text-4xl font-bold text-secondary">2</div>
          <div className="text-sm text-muted-foreground">ServiceNow Certs</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
