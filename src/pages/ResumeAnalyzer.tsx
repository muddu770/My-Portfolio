import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Upload, Sparkles, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ResumeAnalyzer = () => {
  const [resumeText, setResumeText] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const analyzeResume = async () => {
    if (!resumeText.trim()) {
      toast({
        title: "Error",
        description: "Please enter resume text to analyze.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setAnalysis("");

    try {
      const { data, error } = await supabase.functions.invoke("analyze-resume", {
        body: { resumeText },
      });

      if (error) throw error;

      setAnalysis(data.analysis);
      toast({
        title: "Analysis Complete",
        description: "Your resume has been analyzed successfully.",
      });
    } catch (error: any) {
      console.error("Error analyzing resume:", error);
      const description = error.message ? `Details: ${error.message}` : "Please check the function logs for more details.";
      toast({
        title: "Failed to analyze resume",
        description,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="h-8 w-8 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI Resume Analyzer
            </span>
          </h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Get AI-powered insights and suggestions to improve your resume
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Resume Input
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="resume">Paste your resume text here</Label>
              <Textarea
                id="resume"
                placeholder="Paste your resume content here..."
                className="min-h-[400px] font-mono text-sm"
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
              />
            </div>
            <Button
              onClick={analyzeResume}
              disabled={loading}
              size="lg"
              className="w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Analyze Resume
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Analysis Results */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              AI Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center space-y-4">
                  <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
                  <p className="text-muted-foreground">Analyzing your resume...</p>
                </div>
              </div>
            ) : analysis ? (
              <div className="prose prose-invert max-w-none">
                <div className="p-4 rounded-lg bg-muted/50 border border-border min-h-[400px] whitespace-pre-wrap">
                  {analysis}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center space-y-4">
                  <Sparkles className="h-12 w-12 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground">
                    Analysis results will appear here
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="glass-card">
          <CardContent className="pt-6 space-y-2">
            <h3 className="font-semibold">Content Analysis</h3>
            <p className="text-sm text-muted-foreground">
              Get feedback on your resume structure, clarity, and impact.
            </p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="pt-6 space-y-2">
            <h3 className="font-semibold">Keyword Optimization</h3>
            <p className="text-sm text-muted-foreground">
              Discover important keywords to improve ATS compatibility.
            </p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="pt-6 space-y-2">
            <h3 className="font-semibold">Actionable Suggestions</h3>
            <p className="text-sm text-muted-foreground">
              Receive specific recommendations to enhance your resume.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResumeAnalyzer;
