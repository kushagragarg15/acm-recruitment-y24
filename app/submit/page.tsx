"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  CheckCircle,
  AlertCircle,
  Loader2,
  ArrowLeft,
  Upload,
  ExternalLink,
  User,
  Mail,
  Phone,
  Hash,
  Code,
  LinkIcon,
  FileText,
  MessageSquare,
} from "lucide-react"
import Link from "next/link"

const domains = [
  { value: "web-development", label: "Web Development" },
  { value: "ai-ml", label: "AI/ML" },
  { value: "generative-ai", label: "Generative AI" },
  { value: "creative-domain", label: "Creative Domain" },
  { value: "competitive-programming", label: "Competitive Programming" },
]

const taskOptions = {
  "web-development": ["Option 1: MNTN Landing Page", "Option 2: College Achievement Portal"],
  "ai-ml": ["Task 1: Video Game Sales Prediction", "Task 2: Spotify Song Popularity Prediction"],
  "generative-ai": ["AI Content Creation Assistant"],
  "creative-domain": ["Option 1: ACM Newsletter Design", "Option 2: ACM T-shirt Design"],
  "competitive-programming": ["Contest-Based Evaluation"],
}

export default function SubmissionPage() {
  const [formData, setFormData] = useState({
    name: "",
    roll_number: "",
    email: "",
    phone: "",
    domain: "",
    task_option: "",
    project_title: "",
    project_description: "",
    project_link: "",
    github_link: "",
    additional_links: "",
    technologies_used: "",
    challenges_faced: "",
    learning_outcomes: "",
    additional_comments: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear task option when domain changes
    if (field === "domain") {
      setFormData((prev) => ({ ...prev, task_option: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message:
            "Your submission has been received successfully! You will be notified about the next steps via email.",
        })
        // Reset form
        setFormData({
          name: "",
          roll_number: "",
          email: "",
          phone: "",
          domain: "",
          task_option: "",
          project_title: "",
          project_description: "",
          project_link: "",
          github_link: "",
          additional_links: "",
          technologies_used: "",
          challenges_faced: "",
          learning_outcomes: "",
          additional_comments: "",
        })
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Submission failed. Please try again.",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid =
    formData.name &&
    formData.roll_number &&
    formData.email &&
    formData.phone &&
    formData.domain &&
    formData.project_title

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8ECAE6]/20 to-[#219EBC]/20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[#219EBC]/20 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-14 sm:h-16 items-center justify-between px-3 sm:px-4 md:px-6">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img
              src="/images/acm-logo.png"
              alt="ACM LNMIIT Logo"
              className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-[#023047]">ACM LNMIIT</span>
              <span className="font-medium text-[10px] sm:text-xs md:text-sm text-[#023047]/70">Submission Portal</span>
            </div>
          </div>
          <Button variant="outline" size="sm" className="text-xs sm:text-sm" asChild>
            <Link href="/">
              <ArrowLeft className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Back</span>
            </Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter bg-gradient-to-r from-[#219EBC] to-[#023047] bg-clip-text text-transparent mb-3 sm:mb-4 px-2">
              Submit Your Project
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#023047]/80 max-w-2xl mx-auto leading-relaxed px-2">
              Complete the form below to submit your domain task. Make sure all information is accurate as this will be
              used for evaluation and communication.
            </p>
            <div className="mt-3 sm:mt-4 p-2.5 sm:p-3 bg-[#FFB703]/20 border border-[#FFB703]/50 rounded-lg inline-block mx-2">
              <p className="text-xs sm:text-sm text-[#023047] font-medium">⏰ Deadline: August 20th, 11:59 PM IST</p>
            </div>
          </div>

          {/* Success/Error Messages */}
          {submitStatus.type && (
            <Alert
              className={`mb-6 ${submitStatus.type === "success" ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}
            >
              {submitStatus.type === "success" ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <AlertCircle className="h-4 w-4 text-red-600" />
              )}
              <AlertDescription className={submitStatus.type === "success" ? "text-green-700" : "text-red-700"}>
                {submitStatus.message}
              </AlertDescription>
            </Alert>
          )}

          {/* Submission Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="h-5 w-5" />
                <span>Project Submission Form</span>
              </CardTitle>
              <CardDescription>
                Fill out all required fields marked with an asterisk (*). Optional fields can help us better understand
                your project.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Personal Information</h3>

                  <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="name" className="flex items-center space-x-1 text-sm">
                        <User className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        <span>Full Name *</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="text-sm sm:text-base"
                      />
                    </div>

                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="roll_number" className="flex items-center space-x-1 text-sm">
                        <Hash className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        <span>Roll Number *</span>
                      </Label>
                      <Input
                        id="roll_number"
                        type="text"
                        placeholder="e.g., 23ucs123"
                        value={formData.roll_number}
                        onChange={(e) => handleInputChange("roll_number", e.target.value)}
                        required
                        className="text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="email" className="flex items-center space-x-1 text-sm">
                        <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        <span>Email Address *</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@lnmiit.ac.in"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="text-sm sm:text-base"
                      />
                    </div>

                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="phone" className="flex items-center space-x-1 text-sm">
                        <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        <span>Phone Number *</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                        className="text-sm sm:text-base"
                      />
                    </div>
                  </div>
                </div>

                {/* Domain Selection */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 border-b pb-2">Domain & Task Selection</h3>

                  <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="domain" className="flex items-center space-x-1 text-sm">
                        <Code className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        <span>Domain *</span>
                      </Label>
                      <Select value={formData.domain} onValueChange={(value) => handleInputChange("domain", value)}>
                        <SelectTrigger className="text-sm sm:text-base">
                          <SelectValue placeholder="Select your domain" />
                        </SelectTrigger>
                        <SelectContent>
                          {domains.map((domain) => (
                            <SelectItem key={domain.value} value={domain.value} className="text-sm">
                              {domain.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {formData.domain && (
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="task_option" className="text-sm">Task Option</Label>
                        <Select
                          value={formData.task_option}
                          onValueChange={(value) => handleInputChange("task_option", value)}
                        >
                          <SelectTrigger className="text-sm sm:text-base">
                            <SelectValue placeholder="Select task option" />
                          </SelectTrigger>
                          <SelectContent>
                            {taskOptions[formData.domain as keyof typeof taskOptions]?.map((option) => (
                              <SelectItem key={option} value={option} className="text-sm">
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Project Information</h3>

                  <div className="space-y-2">
                    <Label htmlFor="project_title" className="flex items-center space-x-1">
                      <FileText className="h-4 w-4" />
                      <span>Project Title *</span>
                    </Label>
                    <Input
                      id="project_title"
                      type="text"
                      placeholder="Enter your project title"
                      value={formData.project_title}
                      onChange={(e) => handleInputChange("project_title", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project_description">Project Description</Label>
                    <Textarea
                      id="project_description"
                      placeholder="Briefly describe your project, its features, and what makes it unique..."
                      value={formData.project_description}
                      onChange={(e) => handleInputChange("project_description", e.target.value)}
                      rows={4}
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="project_link" className="flex items-center space-x-1">
                        <LinkIcon className="h-4 w-4" />
                        <span>Project/Demo Link</span>
                      </Label>
                      <Input
                        id="project_link"
                        type="url"
                        placeholder="https://your-project-demo.com"
                        value={formData.project_link}
                        onChange={(e) => handleInputChange("project_link", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="github_link" className="flex items-center space-x-1">
                        <ExternalLink className="h-4 w-4" />
                        <span>GitHub Repository</span>
                      </Label>
                      <Input
                        id="github_link"
                        type="url"
                        placeholder="https://github.com/username/repo"
                        value={formData.github_link}
                        onChange={(e) => handleInputChange("github_link", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additional_links">Additional Links</Label>
                    <Textarea
                      id="additional_links"
                      placeholder="Any additional links (documentation, video demo, design files, etc.) - one per line"
                      value={formData.additional_links}
                      onChange={(e) => handleInputChange("additional_links", e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>

                {/* Technical Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Technical Details</h3>

                  <div className="space-y-2">
                    <Label htmlFor="technologies_used">Technologies Used</Label>
                    <Textarea
                      id="technologies_used"
                      placeholder="List the technologies, frameworks, libraries, and tools you used..."
                      value={formData.technologies_used}
                      onChange={(e) => handleInputChange("technologies_used", e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="challenges_faced">Challenges Faced</Label>
                    <Textarea
                      id="challenges_faced"
                      placeholder="Describe any challenges you encountered and how you overcame them..."
                      value={formData.challenges_faced}
                      onChange={(e) => handleInputChange("challenges_faced", e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="learning_outcomes">Learning Outcomes</Label>
                    <Textarea
                      id="learning_outcomes"
                      placeholder="What did you learn from this project? What skills did you develop?"
                      value={formData.learning_outcomes}
                      onChange={(e) => handleInputChange("learning_outcomes", e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>

                {/* Additional Comments */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Additional Information</h3>

                  <div className="space-y-2">
                    <Label htmlFor="additional_comments" className="flex items-center space-x-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>Additional Comments</span>
                    </Label>
                    <Textarea
                      id="additional_comments"
                      placeholder="Any additional information you'd like to share about your project or yourself..."
                      value={formData.additional_comments}
                      onChange={(e) => handleInputChange("additional_comments", e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t">
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <p>* Required fields</p>
                      <p>Make sure all information is accurate before submitting.</p>
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={!isFormValid || isSubmitting}
                      className="w-full sm:w-auto bg-[#219EBC] hover:bg-[#023047]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Upload className="mr-2 h-4 w-4" />
                          Submit Project
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Important Notes */}
          <Card className="mt-8 bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="text-yellow-800">Important Notes</CardTitle>
            </CardHeader>
            <CardContent className="text-yellow-700 space-y-2">
              <p>• Each student can submit only once. Make sure all information is correct.</p>
              <p>• Your submission will be reviewed by ACM members after the deadline.</p>
              <p>• Selected candidates will be notified via email for Round 2 interviews.</p>
              <p>• For any queries, join our WhatsApp support group or contact us directly.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
