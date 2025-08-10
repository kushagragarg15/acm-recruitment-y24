"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Brain,
  Sparkles,
  Palette,
  Trophy,
  Calendar,
  Users,
  ExternalLink,
  CheckCircle,
  Clock,
  MessageCircle,
  ArrowRight,
  Star,
  Target,
  Award,
  BookOpen,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon"
import { LinkedInIcon } from "@/components/icons/LinkedInIcon"

export default function ACMRecruitmentPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8ECAE6]/20 to-[#219EBC]/20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[#219EBC]/20 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img
              src="/images/acm-logo.png"
              alt="ACM LNMIIT Logo"
              className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-[#023047]">ACM LNMIIT</span>
              <span className="font-medium text-[10px] sm:text-xs md:text-sm text-[#023047]/70">Y24 Recruitment</span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-sm font-medium">
            <a href="#about" className="transition-colors hover:text-[#219EBC] text-[#023047]">
              About
            </a>
            <a href="#domains" className="transition-colors hover:text-[#219EBC] text-[#023047]">
              Domains
            </a>
            <a href="#submission" className="transition-colors hover:text-[#219EBC] text-[#023047]">
              Submission
            </a>
            <a href="#evaluation" className="transition-colors hover:text-[#219EBC] text-[#023047]">
              Evaluation
            </a>
            <a href="#contact" className="transition-colors hover:text-[#219EBC] text-[#023047]">
              Contact
            </a>
            <a href="/admin/login" className="transition-colors hover:text-[#219EBC] text-[#023047] border border-[#219EBC]/30 px-3 py-1 rounded-md hover:bg-[#219EBC]/10">
              Admin
            </a>
          </nav>
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden border-t border-[#219EBC]/20 bg-white/95 backdrop-blur transition-all duration-300 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#about"
                className="text-sm font-medium transition-colors hover:text-[#219EBC] text-[#023047] py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#domains"
                className="text-sm font-medium transition-colors hover:text-[#219EBC] text-[#023047] py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Domains
              </a>
              <a
                href="#submission"
                className="text-sm font-medium transition-colors hover:text-[#219EBC] text-[#023047] py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Submission
              </a>
              <a
                href="#evaluation"
                className="text-sm font-medium transition-colors hover:text-[#219EBC] text-[#023047] py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Evaluation
              </a>
              <a
                href="#contact"
                className="text-sm font-medium transition-colors hover:text-[#219EBC] text-[#023047] py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="/admin/login"
                className="text-sm font-medium transition-colors hover:text-[#219EBC] text-[#023047] py-2 border border-[#219EBC]/30 px-3 rounded-md hover:bg-[#219EBC]/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Admin
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-3 sm:space-y-4 text-center">
            <Badge variant="secondary" className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium">
              <Calendar className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Recruitment Open - Y24 Batch
            </Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter bg-gradient-to-r from-[#219EBC] to-[#023047] bg-clip-text text-transparent leading-tight">
              Join ACM Student Chapter
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#023047] px-2">
              LNMIIT - Association for Computing Machinery
            </h2>
            <p className="mx-auto max-w-[90%] sm:max-w-[700px] text-sm sm:text-base md:text-lg lg:text-xl text-[#023047]/80 leading-relaxed px-2">
              Be part of the world's largest educational and scientific computing society. Showcase your skills, learn
              from peers, and contribute to cutting-edge technology projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto px-4 sm:px-0">
              <Button size="lg" className="bg-[#219EBC] hover:bg-[#023047] w-full sm:w-auto" asChild>
                <a href="#domains">
                  View Domains <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-[#219EBC] text-[#219EBC] hover:bg-[#219EBC] hover:text-white" asChild>
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About & Selection Process */}
      <section id="about" className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-3 sm:space-y-4 text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter px-2">Selection Process</h2>
            <p className="mx-auto max-w-[90%] sm:max-w-[700px] text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed px-2">
              Our recruitment process is designed to identify passionate individuals with strong technical skills and
              creative thinking.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
            <Card className="relative overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-sm">
                    1
                  </div>
                  <CardTitle className="text-xl">Round 1: Domain Tasks</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Choose from 5 specialized domains and complete a practical task that demonstrates your skills and
                  creativity.
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Choose your preferred domain</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Complete the assigned task</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Submit before deadline</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600 font-bold text-sm">
                    2
                  </div>
                  <CardTitle className="text-xl">Round 2: Personal Interview</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Selected candidates will be invited for a personal interview to discuss their submission and technical
                  knowledge.
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="h-4 w-4 text-blue-500" />
                    <span>One-on-one discussion</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <BookOpen className="h-4 w-4 text-blue-500" />
                    <span>Technical knowledge assessment</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Target className="h-4 w-4 text-blue-500" />
                    <span>Project presentation & Q&A</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Domain Tasks */}
      <section id="domains" className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-3 sm:space-y-4 text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter px-2">Choose Your Domain</h2>
            <p className="mx-auto max-w-[90%] sm:max-w-[700px] text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed px-2">
              Select ONE domain that best matches your interests and skills. Each domain has specific tasks designed to
              showcase your abilities.
            </p>
          </div>

          <div className="space-y-8">
            {/* Web Development */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-[#219EBC]/30 border-[#219EBC]/20">
              <CardHeader className="pb-4 sm:pb-6">
                <div className="flex items-center space-x-2">
                  <Code className="h-5 w-5 sm:h-6 sm:w-6 text-[#219EBC] flex-shrink-0" />
                  <CardTitle className="text-lg sm:text-xl md:text-2xl text-[#023047]">Web Development</CardTitle>
                </div>
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  Choose ONE of the following web development tasks to demonstrate your frontend and full-stack skills.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
                  {/* Option 1: MNTN Landing Page */}
                  <div className="p-4 sm:p-6 bg-[#8ECAE6]/20 rounded-lg border border-[#219EBC]/30">
                    <h4 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-[#023047]">Option 1: MNTN Landing Page</h4>
                    <p className="text-xs sm:text-sm text-[#023047]/80 mb-3 sm:mb-4 leading-relaxed">
                      Create a fully responsive and pixel-perfect frontend implementation of the provided Figma design.
                    </p>

                    <div className="space-y-2 sm:space-y-3">
                      <h5 className="font-semibold text-xs sm:text-sm text-[#023047]">Requirements:</h5>
                      <ul className="text-[10px] sm:text-xs space-y-1 text-gray-600">
                        <li className="flex items-start space-x-1.5 sm:space-x-2">
                          <CheckCircle className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#FFB703] mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed text-[#023047]/70">
                            Accurately replicate all visual elements, typography, color schemes, layouts, and spacing
                          </span>
                        </li>
                        <li className="flex items-start space-x-1.5 sm:space-x-2">
                          <CheckCircle className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">Ensure responsiveness across all devices (desktop, tablet, mobile)</span>
                        </li>
                        <li className="flex items-start space-x-1.5 sm:space-x-2">
                          <CheckCircle className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">Implement interactive elements (buttons, navigation, hover effects) as designed</span>
                        </li>
                        <li className="flex items-start space-x-1.5 sm:space-x-2">
                          <CheckCircle className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">Use modern HTML, CSS, and JavaScript best practices</span>
                        </li>
                        <li className="flex items-start space-x-1.5 sm:space-x-2">
                          <CheckCircle className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">Optimize for performance with clean, maintainable code</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-3 sm:mt-4 p-2.5 sm:p-3 bg-white rounded border">
                      <p className="text-[10px] sm:text-xs font-medium text-blue-700 mb-1">Resource:</p>
                      <Button size="sm" variant="outline" className="text-[10px] sm:text-xs bg-transparent h-7 sm:h-8" asChild>
                        <Link href="https://www.figma.com/design/FIA8kdMEFIiSDggOd2ZwI6/MNTN---Landing-Page--Community-?node-id=1-2&t=9DTxVrdSEMWgiXmB-1" target="_blank" rel="noopener noreferrer">
                          Figma Design File <ExternalLink className="ml-1 h-2.5 w-2.5 sm:h-3 sm:w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Option 2: College Achievement Portal */}
                  <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-bold text-lg mb-3 text-blue-800">Option 2: College Achievement Portal</h4>
                    <p className="text-sm text-gray-700 mb-4">
                      Design and implement a two-role login system with email OTP authentication.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-sm text-blue-700 mb-2">Student Role Features:</h5>
                        <ul className="text-xs space-y-1 text-gray-600">
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Email OTP verification login</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Submit academic/extracurricular achievements</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Track approval status</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold text-sm text-blue-700 mb-2">Admin Role Features:</h5>
                        <ul className="text-xs space-y-1 text-gray-600">
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Dashboard access with email OTP</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Review and approve/reject student submissions</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Manage student records</span>
                          </li>
                        </ul>
                      </div>

                      <div className="p-3 bg-white rounded border">
                        <p className="text-xs font-medium text-blue-700 mb-2">Admin Test Emails:</p>
                        <div className="text-xs text-gray-600 space-y-1">
                          <p>23ucc569@lnmiit.ac.in</p>
                          <p>23ucc564@lnmiit.ac.in</p>
                          <p>23ucc600@lnmiit.ac.in</p>
                          <p>23ucs752@lnmiit.ac.in</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Authentication</Badge>
                  <Badge variant="secondary">OTP</Badge>
                  <Badge variant="secondary">Responsive Design</Badge>
                </div>
              </CardContent>
            </Card>

            {/* AI/ML */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-[#FFB703]/30 border-[#FFB703]/20">
              <CardHeader className="pb-4 sm:pb-6">
                <div className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-[#FFB703] flex-shrink-0" />
                  <CardTitle className="text-lg sm:text-xl md:text-2xl text-[#023047]">AI/ML</CardTitle>
                </div>
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  Choose ONE of the following machine learning tasks to demonstrate your data science and modeling
                  skills.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
                  {/* Task 1: Video Game Sales Prediction */}
                  <div className="p-4 sm:p-6 bg-[#FFB703]/20 rounded-lg border border-[#FFB703]/30">
                    <h4 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-[#023047]">Task 1: Video Game Sales Prediction</h4>
                    <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                      Develop a regression model to predict global video game sales.
                    </p>

                    <div className="space-y-3 sm:space-y-4">
                      <div className="p-2.5 sm:p-3 bg-white rounded border">
                        <p className="text-[10px] sm:text-xs font-medium text-green-700 mb-1">Dataset:</p>
                        <Button size="sm" variant="outline" className="text-[10px] sm:text-xs bg-transparent h-7 sm:h-8 w-full sm:w-auto" asChild>
                          <Link
                            href="https://www.kaggle.com/datasets/rush4ratio/video-game-sales-with-ratings"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Video Game Sales - Kaggle <ExternalLink className="ml-1 h-2.5 w-2.5 sm:h-3 sm:w-3" />
                          </Link>
                        </Button>
                      </div>

                      <div>
                        <h5 className="font-semibold text-xs sm:text-sm text-green-700 mb-2">Key Features:</h5>
                        <ul className="text-[10px] sm:text-xs space-y-1 text-gray-600">
                          <li>• Game Title, Platform, Year of Release</li>
                          <li>• Genre, Publisher, ESRB Rating</li>
                          <li>• Critic Score (0-100), User Score (0-10)</li>
                          <li>
                            • <strong>Target:</strong> Global Sales (millions of units)
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold text-xs sm:text-sm text-green-700 mb-2">Required Tasks:</h5>
                        <div className="space-y-1.5 sm:space-y-2">
                          <div className="text-[10px] sm:text-xs">
                            <p className="font-medium">1. Exploratory Data Analysis (EDA)</p>
                            <ul className="text-gray-600 ml-2 sm:ml-3 space-y-0.5 sm:space-y-1 mt-1">
                              <li>• Analyze data distribution, outliers</li>
                              <li>• Examine sales trends by year, platform</li>
                              <li>• Visualize missing/skewed data</li>
                            </ul>
                          </div>
                          <div className="text-[10px] sm:text-xs">
                            <p className="font-medium">2. Data Preprocessing</p>
                            <ul className="text-gray-600 ml-2 sm:ml-3 space-y-0.5 sm:space-y-1 mt-1">
                              <li>• Handle missing values for scores</li>
                              <li>• Encode categorical variables</li>
                              <li>• Scale numerical features</li>
                            </ul>
                          </div>
                          <div className="text-[10px] sm:text-xs">
                            <p className="font-medium">3. Modeling</p>
                            <ul className="text-gray-600 ml-2 sm:ml-3 space-y-0.5 sm:space-y-1 mt-1">
                              <li>• Train and evaluate regression models</li>
                              <li>• Use RMSE, MAE, R² metrics</li>
                              <li>• Perform hyperparameter tuning</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Task 2: Spotify Song Popularity Prediction */}
                  <div className="p-4 sm:p-6 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-green-800">
                      Task 2: Spotify Song Popularity Prediction
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                      Build a regression model to predict song popularity based on audio features.
                    </p>

                    <div className="space-y-3 sm:space-y-4">
                      <div className="p-2.5 sm:p-3 bg-white rounded border">
                        <p className="text-[10px] sm:text-xs font-medium text-green-700 mb-1">Dataset:</p>
                        <Button size="sm" variant="outline" className="text-[10px] sm:text-xs bg-transparent h-7 sm:h-8 w-full sm:w-auto" asChild>
                          <Link
                            href="https://www.kaggle.com/datasets/yamaerenay/spotify-dataset-19212020-600k-tracks"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Spotify Tracks - Kaggle <ExternalLink className="ml-1 h-2.5 w-2.5 sm:h-3 sm:w-3" />
                          </Link>
                        </Button>
                      </div>

                      <div>
                        <h5 className="font-semibold text-xs sm:text-sm text-green-700 mb-2">Key Features:</h5>
                        <ul className="text-[10px] sm:text-xs space-y-1 text-gray-600">
                          <li>• Track Name, Artists, Duration</li>
                          <li>• Audio features: Danceability, Energy, Loudness</li>
                          <li>• Speechiness, Acousticness, Instrumentalness</li>
                          <li>• Liveness, Valence, Tempo</li>
                          <li>
                            • <strong>Target:</strong> Popularity (0-100)
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold text-xs sm:text-sm text-green-700 mb-2">Required Tasks:</h5>
                        <div className="space-y-1 text-[10px] sm:text-xs text-gray-600">
                          <p>
                            <strong>1. EDA:</strong> Analyze popularity distribution and feature correlations
                          </p>
                          <p>
                            <strong>2. Preprocessing:</strong> Handle categorical encoding, scaling, and duplicates
                          </p>
                          <p>
                            <strong>3. Modeling:</strong> Train models with optimization and evaluation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <Badge variant="secondary" className="text-xs px-2 py-1">Python</Badge>
                  <Badge variant="secondary" className="text-xs px-2 py-1">Pandas</Badge>
                  <Badge variant="secondary" className="text-xs px-2 py-1">Scikit-learn</Badge>
                  <Badge variant="secondary" className="text-xs px-2 py-1">Matplotlib</Badge>
                  <Badge variant="secondary" className="text-xs px-2 py-1">Seaborn</Badge>
                  <Badge variant="secondary" className="text-xs px-2 py-1">Regression</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Generative AI */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-[#023047]/30 border-[#023047]/20">
              <CardHeader className="pb-4 sm:pb-6">
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-[#023047] flex-shrink-0" />
                  <CardTitle className="text-lg sm:text-xl md:text-2xl text-[#023047]">Generative AI</CardTitle>
                </div>
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  Build a Generative AI-powered assistant using open-source tools and models.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="p-4 sm:p-6 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-purple-800">AI Content Creation Assistant</h4>
                  <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                    Build a Generative AI-powered assistant using open-source tools.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-sm text-purple-700 mb-2">Core Requirements:</h5>
                      <div className="space-y-3">
                        <div className="text-xs">
                          <p className="font-medium">1. Input & Prompt Handling</p>
                          <ul className="text-gray-600 ml-3 space-y-1">
                            <li>• Accept text prompts with optional style parameters</li>
                            <li>• Support tone, style, and format customization</li>
                          </ul>
                        </div>
                        <div className="text-xs">
                          <p className="font-medium">2. Model Integration</p>
                          <ul className="text-gray-600 ml-3 space-y-1">
                            <li>• Use open-source text models (LLaMA 3, Mistral, OpenLLaMA)</li>
                            <li>• Optional: Integrate image generation (Stable Diffusion, Kandinsky)</li>
                          </ul>
                        </div>
                        <div className="text-xs">
                          <p className="font-medium">3. Content Generation Pipeline</p>
                          <ul className="text-gray-600 ml-3 space-y-1">
                            <li>• Preprocess prompts with style instructions</li>
                            <li>• Generate high-quality text/image output</li>
                            <li>• Support multi-turn conversations and variations</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded border">
                      <h5 className="font-semibold text-sm text-purple-700 mb-2">Bonus Features:</h5>
                      <ul className="text-xs space-y-1 text-gray-600">
                        <li>• Prompt templates for specific use cases</li>
                        <li>• Multi-modal generation capabilities</li>
                        <li>• Session memory for context maintenance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Transformers</Badge>
                  <Badge variant="secondary">LLaMA</Badge>
                  <Badge variant="secondary">Stable Diffusion</Badge>
                  <Badge variant="secondary">Gradio</Badge>
                  <Badge variant="secondary">Streamlit</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Creative Domain */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-[#FB8500]/30 border-[#FB8500]/20">
              <CardHeader className="pb-4 sm:pb-6">
                <div className="flex items-center space-x-2">
                  <Palette className="h-5 w-5 sm:h-6 sm:w-6 text-[#FB8500] flex-shrink-0" />
                  <CardTitle className="text-lg sm:text-xl md:text-2xl text-[#023047]">Creative Domain</CardTitle>
                </div>
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  Choose ONE of the following creative design tasks to showcase your artistic and design skills.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
                  {/* Option 1: ACM Newsletter Design */}
                  <div className="p-6 bg-orange-50 rounded-lg border border-orange-200">
                    <h4 className="font-bold text-lg mb-3 text-orange-800">Option 1: ACM Newsletter Design</h4>
                    <p className="text-sm text-gray-700 mb-4">
                      Design a professional monthly newsletter for ACM Student Chapter.
                    </p>

                    <div className="space-y-3">
                      <h5 className="font-semibold text-sm text-orange-700">Requirements:</h5>
                      <ul className="text-xs space-y-1 text-gray-600">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>
                            Include sections: upcoming events, technical articles, member spotlights, resources
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Reflect ACM branding (colors, logo, typography)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Provide both print and digital-ready versions</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-4 p-3 bg-white rounded border">
                      <p className="text-xs font-medium text-orange-700 mb-1">Submission:</p>
                      <p className="text-xs text-gray-600">PDF designs + source files (PSD, AI, Figma)</p>
                    </div>
                  </div>

                  {/* Option 2: ACM T-shirt Design */}
                  <div className="p-6 bg-orange-50 rounded-lg border border-orange-200">
                    <h4 className="font-bold text-lg mb-3 text-orange-800">Option 2: ACM T-shirt Design</h4>
                    <p className="text-sm text-gray-700 mb-4">Create an original t-shirt design for ACM members.</p>

                    <div className="space-y-3">
                      <h5 className="font-semibold text-sm text-orange-700">Requirements:</h5>
                      <ul className="text-xs space-y-1 text-gray-600">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Professional design that members would proudly wear</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Incorporate ACM branding and LNMIIT identity</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Design both front and back</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Suitable for screen printing</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-4 p-3 bg-white rounded border">
                      <p className="text-xs font-medium text-orange-700 mb-1">Submission:</p>
                      <p className="text-xs text-gray-600">High-resolution images + source files</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Adobe Creative Suite</Badge>
                  <Badge variant="secondary">Figma</Badge>
                  <Badge variant="secondary">Illustrator</Badge>
                  <Badge variant="secondary">Photoshop</Badge>
                  <Badge variant="secondary">InDesign</Badge>
                  <Badge variant="secondary">Branding</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Competitive Programming */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-red-200">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Trophy className="h-6 w-6 text-red-600" />
                  <CardTitle className="text-2xl">Competitive Programming</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Demonstrate your algorithmic thinking and problem-solving skills through a competitive programming
                  contest.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-6 bg-red-50 rounded-lg border border-red-200">
                  <h4 className="font-bold text-lg mb-3 text-red-800">Contest-Based Evaluation</h4>
                  <p className="text-sm text-gray-700 mb-4">
                    The ACM Student Chapter will host a Competitive Programming contest for CP domain applicants.
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded border-2 border-red-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="h-4 w-4 text-red-600" />
                        <h5 className="font-semibold text-sm text-red-700">Contest Details:</h5>
                      </div>
                      <ul className="text-xs space-y-2 text-gray-600">
                        <li className="flex items-center space-x-2">
                          <Clock className="h-3 w-3 text-red-500" />
                          <span>
                            <strong>Contest venue and date:</strong> To be announced
                          </span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <MessageCircle className="h-3 w-3 text-red-500" />
                          <span>
                            Registration and format details will be shared via official WhatsApp channel and email
                          </span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Star className="h-3 w-3 text-red-500" />
                          <span>
                            <strong>Stay tuned for updates!</strong>
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
                      <p className="text-xs text-yellow-800 font-medium">
                        📢 Contest details will be announced soon. Make sure to join our WhatsApp group for real-time
                        updates!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">C++</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Java</Badge>
                  <Badge variant="secondary">Data Structures</Badge>
                  <Badge variant="secondary">Algorithms</Badge>
                  <Badge variant="secondary">Problem Solving</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action - Submit Your Project */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-[#219EBC] via-[#023047] to-[#219EBC]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                Ready to Begin?
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90 leading-relaxed">
                Choose your domain, complete the task, and submit your project through our official portal
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12">
              <Button
                size="lg"
                className="bg-[#FFB703] text-[#023047] hover:bg-[#FB8500] font-semibold text-lg px-8 py-4 h-auto w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="/submit">
                  Submit Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-[#FFB703] hover:text-[#023047] hover:border-[#FFB703] font-semibold text-lg px-8 py-4 h-auto w-full sm:w-auto transition-all duration-300"
                asChild
              >
                <a href="#domains">
                  View All Domains
                </a>
              </Button>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-3 text-center">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold mb-2">5</div>
                <div className="text-sm sm:text-base opacity-90">Domain Options</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold mb-2">Aug 20</div>
                <div className="text-sm sm:text-base opacity-90">Submission Deadline</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold mb-2">2</div>
                <div className="text-sm sm:text-base opacity-90">Selection Rounds</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section id="submission" className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-3 sm:space-y-4 text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter px-2">Submission Guidelines</h2>
            <p className="mx-auto max-w-[90%] sm:max-w-[700px] text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed px-2">
              Follow these guidelines carefully to ensure your submission is considered for evaluation.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
            <Card className="border-2 border-red-200 bg-red-50/50">
              <CardHeader className="pb-4 sm:pb-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-red-600 flex-shrink-0" />
                  <CardTitle className="text-lg sm:text-xl text-red-700">Important Deadline</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center p-4 sm:p-6 bg-white rounded-lg border-2 border-red-200">
                  <div className="text-2xl sm:text-3xl font-bold text-red-600 mb-2">August 20th</div>
                  <div className="text-base sm:text-lg font-semibold text-red-700 mb-1">11:59 PM IST</div>
                  <div className="text-xs sm:text-sm text-gray-600">Final submission deadline</div>
                </div>
                <p className="text-xs sm:text-sm text-red-700 mt-3 sm:mt-4 font-medium">
                  ⚠️ Late submissions will not be accepted under any circumstances.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Submission Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Original Work Only</p>
                      <p className="text-xs text-gray-600">
                        All submissions must be your own original work. Plagiarism will result in immediate
                        disqualification.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Complete Contact Information</p>
                      <p className="text-xs text-gray-600">
                        Include your full name, student ID, email, and phone number with your submission.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Documentation Required</p>
                      <p className="text-xs text-gray-600">
                        Provide clear documentation, setup instructions, and explanation of your approach.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Source Code & Assets</p>
                      <p className="text-xs text-gray-600">
                        Submit complete source code, assets, and any additional resources used in your project.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Use Official Submission Form</p>
                      <p className="text-xs text-gray-600">
                        Submit through the official submission form on ACM Student Chapter website
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Evaluation Criteria */}
      <section id="evaluation" className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-3 sm:space-y-4 text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter px-2">Evaluation Criteria</h2>
            <p className="mx-auto max-w-[90%] sm:max-w-[700px] text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed px-2">
              Your submission will be evaluated based on these key criteria. Excellence in multiple areas will increase
              your chances of selection.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="text-center text-base sm:text-lg md:text-xl">Assessment Framework</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-semibold text-sm sm:text-base">Criteria</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-semibold text-sm sm:text-base hidden sm:table-cell">Description</th>
                      <th className="text-center py-2 sm:py-3 px-2 sm:px-4 font-semibold text-sm sm:text-base">Weight</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 sm:py-4 px-2 sm:px-4">
                        <div className="flex items-center space-x-1.5 sm:space-x-2">
                          <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-600 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-sm sm:text-base">Technical Proficiency</span>
                            <p className="text-xs text-gray-600 sm:hidden mt-1">Technical skills and implementation quality</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 hidden sm:table-cell">
                        Demonstration of technical skills, proper use of technologies, and implementation quality.
                      </td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-center">
                        <Badge variant="secondary" className="text-xs">30%</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <Sparkles className="h-4 w-4 text-purple-600" />
                          <span className="font-medium">Creativity & Innovation</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">
                        Original thinking, creative problem-solving, and innovative approaches to the given task.
                      </td>
                      <td className="py-4 px-4 text-center">
                        <Badge variant="secondary">25%</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <Target className="h-4 w-4 text-green-600" />
                          <span className="font-medium">Requirement Adherence</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">
                        How well the submission meets the specified requirements and addresses the problem statement.
                      </td>
                      <td className="py-4 px-4 text-center">
                        <Badge variant="secondary">20%</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <Code className="h-4 w-4 text-orange-600" />
                          <span className="font-medium">Code Quality</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">
                        Clean, readable, well-structured code with proper documentation and best practices.
                      </td>
                      <td className="py-4 px-4 text-center">
                        <Badge variant="secondary">15%</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <Award className="h-4 w-4 text-red-600" />
                          <span className="font-medium">Presentation</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">
                        Quality of documentation, project presentation, and ability to explain the solution clearly.
                      </td>
                      <td className="py-4 px-4 text-center">
                        <Badge variant="secondary">10%</Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 max-w-2xl mx-auto">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-center text-blue-800">Next Steps</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-sm text-blue-700">
                  Selected candidates will be notified via email very soon after the submission deadline.
                </p>
                <p className="text-sm text-blue-700">
                  Round 2 interviews will be scheduled individually with shortlisted candidates to discuss their
                  submissions and assess their fit for the ACM Student Chapter.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section id="contact" className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-3 sm:space-y-4 text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter px-2">Need Help?</h2>
            <p className="mx-auto max-w-[90%] sm:max-w-[700px] text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed px-2">
              We're here to support you throughout the recruitment process. Don't hesitate to reach out with any
              questions.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 max-w-7xl mx-auto">
            <Card className="text-center">
              <CardHeader className="pb-4 sm:pb-6">
                <WhatsAppIcon className="h-10 w-10 sm:h-12 sm:w-12 text-green-600 mx-auto mb-3 sm:mb-4" />
                <CardTitle className="text-base sm:text-lg">WhatsApp Support Group</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Join our dedicated support group for real-time assistance and updates.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-sm h-9 sm:h-10" asChild>
                  <Link href="https://chat.whatsapp.com/JkfUZ92dY4m3PAa2BvRH9k" target="_blank" rel="noopener noreferrer">
                    Join WhatsApp Group <ExternalLink className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-4 sm:pb-6">
                <Users className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
                <CardTitle className="text-base sm:text-lg">Direct Contact</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Reach out to our recruitment team directly for personalized assistance.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3">
                <div className="text-xs sm:text-sm">
                  <p className="font-medium">Email:</p>
                  <p className="text-blue-600 break-all">lnmiit.acm@gmail.com</p>
                </div>
                <div className="text-xs sm:text-sm">
                  <p className="font-medium">Phone:</p>
                  <p className="text-blue-600">+91 92840 36598</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-4 sm:pb-6">
                <LinkedInIcon className="h-10 w-10 sm:h-12 sm:w-12 text-blue-700 mx-auto mb-3 sm:mb-4" />
                <CardTitle className="text-base sm:text-lg">Follow Us on LinkedIn</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Connect with us professionally and stay updated with career opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-700 hover:bg-blue-800 text-sm h-9 sm:h-10" asChild>
                  <Link href="https://www.linkedin.com/company/acmlnmiit/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                    Follow on LinkedIn <ExternalLink className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-4 sm:pb-6">
                <svg className="h-10 w-10 sm:h-12 sm:w-12 text-pink-600 mx-auto mb-3 sm:mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <CardTitle className="text-base sm:text-lg">Follow Us on Instagram</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Stay updated with our latest activities and announcements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-pink-600 hover:bg-pink-700 text-sm h-9 sm:h-10" asChild>
                  <Link href="https://www.instagram.com/acmlnmiit/" target="_blank" rel="noopener noreferrer">
                    Follow on Instagram <ExternalLink className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>


        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-4 sm:py-6 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img
                src="/images/acm-logo.png"
                alt="ACM LNMIIT Logo"
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 object-contain"
              />
              <span className="font-semibold text-xs sm:text-sm md:text-base text-center sm:text-left">ACM Student Chapter LNMIIT</span>
            </div>
            <div className="text-xs sm:text-sm text-gray-400 text-center">© 2025 ACM Student Chapter LNMIIT. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
