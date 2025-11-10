import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const resumeData = {
  name: "SHAIK MOHAMMAD MUDDASSIR",
  email: "22102a040632@mbu.asia",
  phone: "+91 7396877186",
  dob: "03 Aug, 2005",
  skills: {
    languages: {
      intermediate: ["Python", "Java"],
      novice: ["C", "JavaScript", "Dart"]
    },
    tools: ["GIT", "Windows"],
    frameworks: ["Angular", "Django"],
    technologies: ["HTML", "CSS", "Flutter (Android Development)"],
    others: ["Photo Editing", "Public Speaking", "Exploring new technologies"]
  },
  projects: [
    {
      name: "Jarvis Assistant",
      tech: "Python",
      description: "Speech Recognition, Pyaudio, Natural Language Processing, Web Scraping, Database Management"
    },
    {
      name: "Social Media Monitoring",
      tech: "AI & ML, NLP",
      description: "Biometric Authentication, Cloud based Infrastructure"
    }
  ],
  education: [
    {
      degree: "B.Tech, CSE",
      institution: "MohanBabu University",
      duration: "2022-26",
      location: "Tirupati",
      score: "CGPA: 9.1"
    },
    {
      degree: "Intermediate, MPC",
      institution: "Narayana Junior College",
      duration: "2020-22",
      location: "Yemmiganur",
      score: "Percentage: 74%"
    },
    {
      degree: "SSC",
      institution: "Narayana E.M High School",
      duration: "2017-18",
      location: "Yemmiganur",
      score: "Percentage: 98%"
    }
  ],
  achievements: [
    {
      title: "Alumni Connect Application",
      description: "Platform designed to facilitate connections between college students and alumni, utilizing Dart, Spring Boot, and MySQL"
    }
  ],
  certifications: [
    { name: "ServiceNow Certified System Administrator (CSA)", featured: true },
    { name: "ServiceNow Certified Application Developer (CAD)", featured: true },
    { name: "Python Essentials: By CISCO", featured: false },
    { name: "CyberSecurity: By CISCO", featured: false },
    { name: "GUVI: Sawit ai Learnathon", featured: false },
    { name: "DSA JAVA: By APNA College", featured: false }
  ]
};

const PortfolioContent = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Skills Section */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary">Programming Languages</h3>
            <div className="space-y-2">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Intermediate</p>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.languages.intermediate.map((skill) => (
                    <Badge key={skill} variant="default">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Novice</p>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.languages.novice.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.tools.map((tool) => (
                <Badge key={tool} variant="outline">{tool}</Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary">Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.frameworks.map((framework) => (
                <Badge key={framework} variant="default">{framework}</Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary">Others</h3>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.others.map((other) => (
                <Badge key={other} variant="outline">{other}</Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Projects Section */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Projects
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {resumeData.projects.map((project, index) => (
            <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border">
              <h3 className="text-lg font-semibold mb-2 text-foreground">{project.name}</h3>
              <p className="text-sm text-primary mb-2">{project.tech}</p>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Education Section */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Education
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {resumeData.education.map((edu, index) => (
            <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border">
              <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
              <p className="text-sm text-primary">{edu.institution}</p>
              <p className="text-sm text-muted-foreground">{edu.duration} | {edu.location}</p>
              <p className="text-sm font-semibold text-secondary mt-2">{edu.score}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Achievements Section */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {resumeData.achievements.map((achievement, index) => (
            <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border">
              <h3 className="text-lg font-semibold mb-2 text-foreground">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Certifications Section */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Certifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {resumeData.certifications.map((cert, index) => (
              <div
                key={index}
                className={`flex items-start p-3 rounded-lg transition-all ${
                  cert.featured
                    ? "bg-primary/10 border-2 border-primary/30 glow-cyan"
                    : "bg-muted/30"
                }`}
              >
                <span className={cert.featured ? "text-primary mr-2 text-lg" : "text-muted-foreground mr-2"}>
                  {cert.featured ? "★" : "•"}
                </span>
                <div className="flex-1">
                  <span className={`text-sm ${cert.featured ? "text-foreground font-semibold" : "text-foreground"}`}>
                    {cert.name}
                  </span>
                  {cert.featured && (
                    <Badge className="ml-2 bg-primary text-primary-foreground text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PortfolioContent;
