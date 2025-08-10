"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Search, Download, Eye, Calendar, Mail, Phone, ExternalLink, Code, FileText } from "lucide-react"

interface Submission {
  id: number
  name: string
  roll_number: string
  email: string
  phone: string
  domain: string
  task_option?: string
  project_title: string
  project_description?: string
  project_link?: string
  github_link?: string
  additional_links?: string
  technologies_used?: string
  challenges_faced?: string
  learning_outcomes?: string
  additional_comments?: string
  submission_status: string
  created_at: string
}

export default function AdminPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [filteredSubmissions, setFilteredSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [domainFilter, setDomainFilter] = useState("all")
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    checkAuthentication()
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      fetchSubmissions()
    }
  }, [isAuthenticated])

  useEffect(() => {
    filterSubmissions()
  }, [submissions, searchTerm, domainFilter])

  const checkAuthentication = () => {
    const isAuth = localStorage.getItem("acm-admin-auth")
    const timestamp = localStorage.getItem("acm-admin-timestamp")
    
    if (isAuth === "true" && timestamp) {
      // Check if session is still valid (24 hours)
      const sessionAge = Date.now() - parseInt(timestamp)
      const maxAge = 24 * 60 * 60 * 1000 // 24 hours
      
      if (sessionAge < maxAge) {
        setIsAuthenticated(true)
      } else {
        // Session expired
        localStorage.removeItem("acm-admin-auth")
        localStorage.removeItem("acm-admin-timestamp")
        router.push("/admin/login")
      }
    } else {
      router.push("/admin/login")
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("acm-admin-auth")
    localStorage.removeItem("acm-admin-timestamp")
    router.push("/admin/login")
  }

  const fetchSubmissions = async () => {
    try {
      const response = await fetch("/api/admin/submissions")
      const data = await response.json()
      if (data.success) {
        setSubmissions(data.data)
      }
    } catch (error) {
      console.error("Failed to fetch submissions:", error)
    } finally {
      setLoading(false)
    }
  }

  const filterSubmissions = () => {
    let filtered = submissions

    if (searchTerm) {
      filtered = filtered.filter(
        (sub) =>
          sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          sub.roll_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
          sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          sub.project_title.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (domainFilter !== "all") {
      filtered = filtered.filter((sub) => sub.domain === domainFilter)
    }

    setFilteredSubmissions(filtered)
  }

  const exportToCSV = () => {
    const headers = [
      "Name",
      "Roll Number",
      "Email",
      "Phone",
      "Domain",
      "Task Option",
      "Project Title",
      "Project Link",
      "GitHub Link",
      "Technologies Used",
      "Submission Date",
    ]

    const csvData = filteredSubmissions.map((sub) => [
      sub.name,
      sub.roll_number,
      sub.email,
      sub.phone,
      sub.domain,
      sub.task_option || "",
      sub.project_title,
      sub.project_link || "",
      sub.github_link || "",
      sub.technologies_used || "",
      new Date(sub.created_at).toLocaleDateString(),
    ])

    const csvContent = [headers, ...csvData].map((row) => row.map((field) => `"${field}"`).join(",")).join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `acm-submissions-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const getDomainColor = (domain: string) => {
    const colors = {
      "web-development": "bg-[#219EBC]/20 text-[#023047]",
      "ai-ml": "bg-[#FFB703]/20 text-[#023047]",
      "generative-ai": "bg-[#023047]/20 text-[#023047]",
      "creative-domain": "bg-[#FB8500]/20 text-[#023047]",
      "competitive-programming": "bg-[#8ECAE6]/30 text-[#023047]",
    }
    return colors[domain as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  if (!isAuthenticated || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#8ECAE6]/10 to-[#219EBC]/10 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#219EBC] mx-auto mb-4"></div>
          <p className="text-[#023047]/80">{!isAuthenticated ? "Checking authentication..." : "Loading submissions..."}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8ECAE6]/10 to-[#219EBC]/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#023047] mb-2">ACM Recruitment Admin</h1>
            <p className="text-sm sm:text-base text-[#023047]/80">Manage and review student submissions for Y24 batch recruitment.</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Button 
              onClick={handleLogout}
              variant="outline" 
              size="sm"
              className="border-[#219EBC] text-[#219EBC] hover:bg-[#219EBC] hover:text-white"
            >
              Logout
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-2 lg:grid-cols-5 mb-6 sm:mb-8">
          <Card className="col-span-2 lg:col-span-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Total Submissions</CardTitle>
              <Users className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">{submissions.length}</div>
            </CardContent>
          </Card>

          {["web-development", "ai-ml", "generative-ai", "creative-domain", "competitive-programming"].map((domain) => (
            <Card key={domain}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium capitalize leading-tight">{domain.replace("-", " ")}</CardTitle>
                <Code className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold">{submissions.filter((sub) => sub.domain === domain).length}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters and Search */}
        <Card className="mb-4 sm:mb-6">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-base sm:text-lg">Filter Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 sm:top-3 h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400" />
                  <Input
                    placeholder="Search by name, roll number, email, or project title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9 sm:pl-10 text-sm sm:text-base h-9 sm:h-10"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Select value={domainFilter} onValueChange={setDomainFilter}>
                  <SelectTrigger className="w-full sm:w-48 text-sm sm:text-base h-9 sm:h-10">
                    <SelectValue placeholder="Filter by domain" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all" className="text-sm">All Domains</SelectItem>
                    <SelectItem value="web-development" className="text-sm">Web Development</SelectItem>
                    <SelectItem value="ai-ml" className="text-sm">AI/ML</SelectItem>
                    <SelectItem value="generative-ai" className="text-sm">Generative AI</SelectItem>
                    <SelectItem value="creative-domain" className="text-sm">Creative Domain</SelectItem>
                    <SelectItem value="competitive-programming" className="text-sm">Competitive Programming</SelectItem>
                  </SelectContent>
                </Select>
                <Button onClick={exportToCSV} variant="outline" size="sm" className="w-full sm:w-auto text-sm h-9 sm:h-10">
                  <Download className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Export CSV
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submissions List */}
        <div className="grid gap-4 sm:gap-6">
          {filteredSubmissions.map((submission) => (
            <Card key={submission.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3 sm:pb-6">
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base sm:text-lg truncate">{submission.name}</CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-1 text-xs sm:text-sm">
                        <span className="flex items-center gap-1 truncate">
                          <Mail className="h-3 w-3 flex-shrink-0" />
                          <span className="truncate">{submission.email}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Phone className="h-3 w-3 flex-shrink-0" />
                          {submission.phone}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 flex-shrink-0" />
                          {new Date(submission.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <Badge className={`${getDomainColor(submission.domain)} text-xs px-2 py-1`}>
                        <span className="hidden sm:inline">{submission.domain.replace("-", " ")}</span>
                        <span className="sm:hidden">{submission.domain.split("-")[0]}</span>
                      </Badge>
                      <Button size="sm" variant="outline" onClick={() => setSelectedSubmission(submission)} className="text-xs h-8">
                        <Eye className="mr-1 h-3 w-3" />
                        <span className="hidden sm:inline">View Details</span>
                        <span className="sm:hidden">View</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-1.5 sm:space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Roll Number:</span> {submission.roll_number}
                  </div>
                  <div>
                    <span className="font-medium">Project:</span>
                    <span className="block sm:inline sm:ml-1 break-words">{submission.project_title}</span>
                  </div>
                  {submission.task_option && (
                    <div>
                      <span className="font-medium">Task:</span>
                      <span className="block sm:inline sm:ml-1 text-xs sm:text-sm">{submission.task_option}</span>
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row gap-2 mt-3">
                    {submission.project_link && (
                      <Button size="sm" variant="outline" className="text-xs h-8 w-full sm:w-auto" asChild>
                        <a href={submission.project_link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1 h-3 w-3" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {submission.github_link && (
                      <Button size="sm" variant="outline" className="text-xs h-8 w-full sm:w-auto" asChild>
                        <a href={submission.github_link} target="_blank" rel="noopener noreferrer">
                          <Code className="mr-1 h-3 w-3" />
                          GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSubmissions.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No submissions found</h3>
              <p className="text-gray-600">
                {searchTerm || domainFilter !== "all"
                  ? "Try adjusting your search or filter criteria."
                  : "No submissions have been received yet."}
              </p>
            </CardContent>
          </Card>
        )}

        {/* Detailed View Modal */}
        {selectedSubmission && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
            <Card className="max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
              <CardHeader className="pb-3 sm:pb-6">
                <div className="flex justify-between items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg sm:text-xl truncate">{selectedSubmission.name}</CardTitle>
                    <CardDescription className="text-sm">{selectedSubmission.roll_number}</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setSelectedSubmission(null)} className="flex-shrink-0">
                    Close
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 text-sm">
                <div className="grid gap-4 lg:grid-cols-2">
                  <div>
                    <h4 className="font-medium mb-2 text-sm sm:text-base">Contact Information</h4>
                    <div className="space-y-1 text-xs sm:text-sm">
                      <p className="break-all">
                        <strong>Email:</strong> {selectedSubmission.email}
                      </p>
                      <p>
                        <strong>Phone:</strong> {selectedSubmission.phone}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-sm sm:text-base">Domain & Task</h4>
                    <div className="space-y-1 text-xs sm:text-sm">
                      <p>
                        <strong>Domain:</strong> {selectedSubmission.domain.replace("-", " ")}
                      </p>
                      {selectedSubmission.task_option && (
                        <p className="break-words">
                          <strong>Task:</strong> {selectedSubmission.task_option}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Project Details</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Title:</strong> {selectedSubmission.project_title}
                    </p>
                    {selectedSubmission.project_description && (
                      <div>
                        <strong>Description:</strong>
                        <p className="mt-1 text-gray-700">{selectedSubmission.project_description}</p>
                      </div>
                    )}
                  </div>
                </div>

                {(selectedSubmission.project_link ||
                  selectedSubmission.github_link ||
                  selectedSubmission.additional_links) && (
                    <div>
                      <h4 className="font-medium mb-2">Links</h4>
                      <div className="space-y-1 text-sm">
                        {selectedSubmission.project_link && (
                          <p>
                            <strong>Project Link:</strong>{" "}
                            <a
                              href={selectedSubmission.project_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              {selectedSubmission.project_link}
                            </a>
                          </p>
                        )}
                        {selectedSubmission.github_link && (
                          <p>
                            <strong>GitHub:</strong>{" "}
                            <a
                              href={selectedSubmission.github_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              {selectedSubmission.github_link}
                            </a>
                          </p>
                        )}
                        {selectedSubmission.additional_links && (
                          <div>
                            <strong>Additional Links:</strong>
                            <pre className="mt-1 text-gray-700 whitespace-pre-wrap">
                              {selectedSubmission.additional_links}
                            </pre>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                {selectedSubmission.technologies_used && (
                  <div>
                    <h4 className="font-medium mb-2">Technologies Used</h4>
                    <p className="text-sm text-gray-700">{selectedSubmission.technologies_used}</p>
                  </div>
                )}

                {selectedSubmission.challenges_faced && (
                  <div>
                    <h4 className="font-medium mb-2">Challenges Faced</h4>
                    <p className="text-sm text-gray-700">{selectedSubmission.challenges_faced}</p>
                  </div>
                )}

                {selectedSubmission.learning_outcomes && (
                  <div>
                    <h4 className="font-medium mb-2">Learning Outcomes</h4>
                    <p className="text-sm text-gray-700">{selectedSubmission.learning_outcomes}</p>
                  </div>
                )}

                {selectedSubmission.additional_comments && (
                  <div>
                    <h4 className="font-medium mb-2">Additional Comments</h4>
                    <p className="text-sm text-gray-700">{selectedSubmission.additional_comments}</p>
                  </div>
                )}

                <div className="pt-4 border-t">
                  <p className="text-xs text-gray-500">
                    Submitted on: {new Date(selectedSubmission.created_at).toLocaleString()}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
