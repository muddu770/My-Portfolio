import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Code, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Introduction */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a passionate Computer Science Engineering student at MohanBabu University with a strong 
            academic record (CGPA: 9.1). I thrive on exploring new technologies and building innovative 
            solutions that solve real-world problems.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My journey in technology has led me to develop expertise in full-stack development, 
            artificial intelligence, and machine learning. I'm particularly interested in creating 
            intelligent systems that can make a meaningful impact.
          </p>
        </CardContent>
      </Card>

      {/* ServiceNow Certifications Highlight */}
      <Card className="glass-card glow-cyan border-2 border-primary/30">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl text-primary">
              ServiceNow Certifications
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-foreground">
                Certified System Administrator (CSA)
              </h3>
              <Badge className="bg-primary text-primary-foreground">Featured</Badge>
            </div>
            <p className="text-muted-foreground">
              Proficient in administering and configuring ServiceNow platform, managing user access, 
              and implementing business logic.
            </p>
          </div>
          
          <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-foreground">
                Certified Application Developer (CAD)
              </h3>
              <Badge className="bg-primary text-primary-foreground">Featured</Badge>
            </div>
            <p className="text-muted-foreground">
              Expert in designing and building custom applications on ServiceNow platform, 
              including scripting, workflow automation, and API integrations.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* What I Do */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="glass-card">
          <CardContent className="pt-6 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Development</h3>
            <p className="text-muted-foreground">
              Full-stack development with expertise in Python, Java, JavaScript, and modern frameworks 
              like Angular and Django.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="pt-6 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Lightbulb className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold">Innovation</h3>
            <p className="text-muted-foreground">
              Creating intelligent solutions using AI, ML, and NLP for projects like Jarvis Assistant 
              and Social Media Monitoring.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="pt-6 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Continuous Learning</h3>
            <p className="text-muted-foreground">
              Constantly exploring new technologies and earning certifications in cybersecurity, 
              cloud platforms, and enterprise systems.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Personal Interests */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Beyond Coding
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            When I'm not coding, I enjoy public speaking and sharing knowledge with others. 
            I'm also passionate about photo editing and creative design, which helps me develop 
            a better eye for user interface design in my development work.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge variant="secondary">Public Speaking</Badge>
            <Badge variant="secondary">Photo Editing</Badge>
            <Badge variant="secondary">Tech Exploration</Badge>
            <Badge variant="secondary">Problem Solving</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
